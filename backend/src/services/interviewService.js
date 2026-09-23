/**
 * Interview scheduling and management service
 * Handles time-slot allocation, invitation dispatch, status updates, and calendar integrations.
 */

const { pool } = require('../db/db');
const { logActivity } = require('../utils/activityLogger');

class InterviewService {
  /**
   * Validates interview scheduling payload
   */
  validateSchedulePayload(data) {
    const errors = [];
    if (!data.applicationId) errors.push('Application ID is required');
    if (!data.scheduledTime) errors.push('Scheduled date and time is required');
    if (!data.durationMinutes || data.durationMinutes < 15 || data.durationMinutes > 240) {
      errors.push('Interview duration must be between 15 and 240 minutes');
    }
    if (!['video', 'phone', 'in_person'].includes(data.interviewType)) {
      errors.push('Interview type must be video, phone, or in_person');
    }

    const scheduledDate = new Date(data.scheduledTime);
    if (isNaN(scheduledDate.getTime())) {
      errors.push('Invalid scheduled time format');
    } else if (scheduledDate.getTime() < Date.now()) {
      errors.push('Interview cannot be scheduled in the past');
    }

    return errors;
  }

  /**
   * Creates a new scheduled interview session
   */
  async scheduleInterview(recruiterId, data) {
    const validationErrors = this.validateSchedulePayload(data);
    if (validationErrors.length > 0) {
      const err = new Error(validationErrors.join(', '));
      err.status = 400;
      throw err;
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const appQuery = `
        SELECT a.id, a.job_id, a.seeker_id, j.recruiter_id, j.title AS job_title, u.email AS candidate_email, u.name AS candidate_name
        FROM applications a
        JOIN jobs j ON a.job_id = j.id
        JOIN users u ON a.seeker_id = u.id
        WHERE a.id = $1 AND j.recruiter_id = $2
      `;
      const appRes = await client.query(appQuery, [data.applicationId, recruiterId]);
      if (appRes.rows.length === 0) {
        const notFoundErr = new Error('Application not found or unauthorized');
        notFoundErr.status = 404;
        throw notFoundErr;
      }

      const app = appRes.rows[0];

      const meetingLink = data.interviewType === 'video' 
        ? data.meetingLink || `https://meet.smartjobportal.com/room-${Date.now()}` 
        : null;

      const insertInterview = `
        INSERT INTO interviews (
          application_id, 
          recruiter_id, 
          candidate_id, 
          scheduled_time, 
          duration_minutes, 
          interview_type, 
          meeting_link, 
          location, 
          notes, 
          status, 
          created_at, 
          updated_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'scheduled', NOW(), NOW())
        RETURNING *
      `;

      const values = [
        data.applicationId,
        recruiterId,
        app.seeker_id,
        data.scheduledTime,
        data.durationMinutes,
        data.interviewType,
        meetingLink,
        data.location || null,
        data.notes || null
      ];

      const interviewRes = await client.query(insertInterview, values);

      // Update application status to Interviewing
      await client.query(
        "UPDATE applications SET status = 'Interviewing', updated_at = NOW() WHERE id = $1",
        [data.applicationId]
      );

      await client.query('COMMIT');

      return interviewRes.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error scheduling interview:', error);
      throw error;
    } finally {
      client.release();
    }
  }

  /**
   * Retrieves interviews for candidate or recruiter with filters
   */
  async getInterviews(userId, role, statusFilter = null) {
    let condition = 'i.candidate_id = $1';
    if (role === 'recruiter') {
      condition = 'i.recruiter_id = $1';
    }

    let query = `
      SELECT 
        i.*,
        j.title AS job_title,
        j.company AS company_name,
        u_cand.name AS candidate_name,
        u_cand.email AS candidate_email,
        u_rec.name AS recruiter_name
      FROM interviews i
      JOIN applications a ON i.application_id = a.id
      JOIN jobs j ON a.job_id = j.id
      JOIN users u_cand ON i.candidate_id = u_cand.id
      JOIN users u_rec ON i.recruiter_id = u_rec.id
      WHERE ${condition}
    `;

    const params = [userId];
    if (statusFilter) {
      query += ' AND i.status = $2';
      params.push(statusFilter);
    }

    query += ' ORDER BY i.scheduled_time ASC';

    try {
      const res = await pool.query(query, params);
      return res.rows;
    } catch (error) {
      console.error('Error retrieving interviews:', error);
      throw error;
    }
  }

  /**
   * Updates interview status (confirmed, completed, cancelled, rescheduled)
   */
  async updateInterviewStatus(interviewId, userId, newStatus, feedbackNotes = null) {
    const validStatuses = ['confirmed', 'completed', 'cancelled', 'rescheduled'];
    if (!validStatuses.includes(newStatus)) {
      throw new Error(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
    }

    const query = `
      UPDATE interviews
      SET status = $1, feedback = COALESCE($2, feedback), updated_at = NOW()
      WHERE id = $3 AND (candidate_id = $4 OR recruiter_id = $4)
      RETURNING *
    `;

    try {
      const res = await pool.query(query, [newStatus, feedbackNotes, interviewId, userId]);
      if (res.rows.length === 0) {
        throw new Error('Interview not found or unauthorized');
      }
      return res.rows[0];
    } catch (error) {
      console.error('Error updating interview status:', error);
      throw error;
    }
  }
}

module.exports = new InterviewService();
