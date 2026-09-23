/**
 * Interactive resume builder and structured profile export service
 */

const { pool } = require('../db/db');

class ResumeBuilderService {
  /**
   * Validates structured resume schema
   */
  validateResumeData(data) {
    const errors = [];
    if (!data.personalInfo) errors.push('Personal information block is required');
    if (!data.personalInfo?.fullName) errors.push('Full name is required');
    if (!data.personalInfo?.email) errors.push('Contact email is required');

    if (!Array.isArray(data.experience)) {
      errors.push('Experience must be provided as an array');
    }
    if (!Array.isArray(data.education)) {
      errors.push('Education must be provided as an array');
    }
    if (!Array.isArray(data.skills)) {
      errors.push('Skills must be provided as an array');
    }

    return errors;
  }

  /**
   * Saves or updates structured resume data for job seeker
   */
  async saveResumeDraft(seekerId, resumePayload) {
    const validationErrors = this.validateResumeData(resumePayload);
    if (validationErrors.length > 0) {
      const err = new Error(validationErrors.join(', '));
      err.status = 400;
      throw err;
    }

    const query = `
      INSERT INTO seeker_resumes (seeker_id, resume_data, updated_at)
      VALUES ($1, $2, NOW())
      ON CONFLICT (seeker_id)
      DO UPDATE SET resume_data = $2, updated_at = NOW()
      RETURNING *
    `;

    try {
      const res = await pool.query(query, [seekerId, JSON.stringify(resumePayload)]);
      return res.rows[0];
    } catch (error) {
      console.error('Error saving resume draft:', error);
      throw error;
    }
  }

  /**
   * Fetches saved resume draft for a seeker
   */
  async getResumeDraft(seekerId) {
    const query = `
      SELECT id, seeker_id, resume_data, updated_at
      FROM seeker_resumes
      WHERE seeker_id = $1
    `;

    try {
      const res = await pool.query(query, [seekerId]);
      if (res.rows.length === 0) {
        return null;
      }
      return res.rows[0];
    } catch (error) {
      console.error('Error fetching resume draft:', error);
      throw error;
    }
  }
}

module.exports = new ResumeBuilderService();
