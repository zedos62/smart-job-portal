/**
 * Real-time messaging service for candidate-recruiter communication
 * Handles conversation threads, message delivery, unread counts, and attachment validations.
 */

const { pool } = require('../db/db');
const { logActivity } = require('../utils/activityLogger');

class MessagingService {
  /**
   * Retrieves or creates a conversation thread between candidate and recruiter for a specific job
   */
  async getOrCreateConversation(jobId, seekerId, recruiterId) {
    if (!jobId || !seekerId || !recruiterId) {
      throw new Error('jobId, seekerId, and recruiterId are required to start a conversation');
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const existingQuery = `
        SELECT id, job_id, seeker_id, recruiter_id, created_at, updated_at
        FROM conversations
        WHERE job_id = $1 AND seeker_id = $2 AND recruiter_id = $3
      `;
      const existing = await client.query(existingQuery, [jobId, seekerId, recruiterId]);

      if (existing.rows.length > 0) {
        await client.query('COMMIT');
        return existing.rows[0];
      }

      const insertQuery = `
        INSERT INTO conversations (job_id, seeker_id, recruiter_id, created_at, updated_at)
        VALUES ($1, $2, $3, NOW(), NOW())
        RETURNING id, job_id, seeker_id, recruiter_id, created_at, updated_at
      `;
      const newConv = await client.query(insertQuery, [jobId, seekerId, recruiterId]);
      await client.query('COMMIT');

      return newConv.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error in getOrCreateConversation:', error);
      throw error;
    } finally {
      client.release();
    }
  }

  /**
   * Fetches message history for a conversation thread with pagination
   */
  async getMessages(conversationId, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    const query = `
      SELECT 
        m.id,
        m.conversation_id,
        m.sender_id,
        m.content,
        m.attachment_url,
        m.is_read,
        m.created_at,
        u.name AS sender_name,
        u.role AS sender_role
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.conversation_id = $1
      ORDER BY m.created_at ASC
      LIMIT $2 OFFSET $3
    `;

    try {
      const result = await pool.query(query, [conversationId, limit, offset]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  }

  /**
   * Sends a message within a conversation thread
   */
  async sendMessage(conversationId, senderId, content, attachmentUrl = null) {
    if (!content || !content.trim()) {
      throw new Error('Message content cannot be empty');
    }

    const sanitizedContent = content.trim();
    if (sanitizedContent.length > 4000) {
      throw new Error('Message content exceeds maximum allowed length of 4000 characters');
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const messageInsert = `
        INSERT INTO messages (conversation_id, sender_id, content, attachment_url, is_read, created_at)
        VALUES ($1, $2, $3, $4, FALSE, NOW())
        RETURNING id, conversation_id, sender_id, content, attachment_url, is_read, created_at
      `;
      const messageRes = await client.query(messageInsert, [
        conversationId,
        senderId,
        sanitizedContent,
        attachmentUrl
      ]);

      const updateConv = `
        UPDATE conversations
        SET updated_at = NOW(), last_message = $1
        WHERE id = $2
      `;
      await client.query(updateConv, [sanitizedContent, conversationId]);

      await client.query('COMMIT');
      return messageRes.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error sending message:', error);
      throw error;
    } finally {
      client.release();
    }
  }

  /**
   * Marks unread messages in a thread as read by the recipient
   */
  async markAsRead(conversationId, readerId) {
    const query = `
      UPDATE messages
      SET is_read = TRUE, read_at = NOW()
      WHERE conversation_id = $1 AND sender_id != $2 AND is_read = FALSE
      RETURNING id
    `;
    try {
      const res = await pool.query(query, [conversationId, readerId]);
      return { readCount: res.rowCount };
    } catch (error) {
      console.error('Error marking messages as read:', error);
      throw error;
    }
  }

  /**
   * Returns conversation list for a user with unread counters
   */
  async getUserConversations(userId, role) {
    let filterCondition = 'c.seeker_id = $1';
    if (role === 'recruiter') {
      filterCondition = 'c.recruiter_id = $1';
    }

    const query = `
      SELECT 
        c.id,
        c.job_id,
        j.title AS job_title,
        c.seeker_id,
        u_seeker.name AS seeker_name,
        c.recruiter_id,
        u_recruiter.name AS recruiter_name,
        c.updated_at,
        c.last_message,
        (
          SELECT COUNT(*)
          FROM messages m
          WHERE m.conversation_id = c.id AND m.sender_id != $1 AND m.is_read = FALSE
        ) AS unread_count
      FROM conversations c
      JOIN jobs j ON c.job_id = j.id
      JOIN users u_seeker ON c.seeker_id = u_seeker.id
      JOIN users u_recruiter ON c.recruiter_id = u_recruiter.id
      WHERE ${filterCondition}
      ORDER BY c.updated_at DESC
    `;

    try {
      const res = await pool.query(query, [userId]);
      return res.rows;
    } catch (error) {
      console.error('Error fetching user conversations:', error);
      throw error;
    }
  }

  /**
   * Computes total unread count across all conversation threads for notification badge
   */
  async getTotalUnreadCount(userId) {
    const query = `
      SELECT COUNT(*) AS total_unread
      FROM messages m
      JOIN conversations c ON m.conversation_id = c.id
      WHERE (c.seeker_id = $1 OR c.recruiter_id = $1)
        AND m.sender_id != $1
        AND m.is_read = FALSE
    `;
    try {
      const res = await pool.query(query, [userId]);
      return parseInt(res.rows[0].total_unread, 10) || 0;
    } catch (error) {
      console.error('Error fetching total unread message count:', error);
      return 0;
    }
  }
}

module.exports = new MessagingService();
