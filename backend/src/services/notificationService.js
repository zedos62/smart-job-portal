/**
 * Multi-channel notification engine (in-app, email, and websocket dispatcher)
 */

const { pool } = require('../db/db');

class NotificationService {
  /**
   * Dispatches a notification to a specific user
   */
  async sendNotification(userId, title, message, type = 'info', link = null) {
    if (!userId || !title || !message) {
      throw new Error('userId, title, and message are required for notification dispatch');
    }

    const query = `
      INSERT INTO notifications (user_id, title, message, type, link, is_read, created_at)
      VALUES ($1, $2, $3, $4, $5, FALSE, NOW())
      RETURNING *
    `;

    try {
      const res = await pool.query(query, [userId, title, message, type, link]);
      return res.rows[0];
    } catch (error) {
      console.error('Error sending notification:', error);
      throw error;
    }
  }

  /**
   * Fetches latest notifications for a user with unread prioritizing
   */
  async getUserNotifications(userId, limit = 20) {
    const query = `
      SELECT id, title, message, type, link, is_read, created_at
      FROM notifications
      WHERE user_id = $1
      ORDER BY created_at DESC
      LIMIT $2
    `;

    try {
      const res = await pool.query(query, [userId, limit]);
      return res.rows;
    } catch (error) {
      console.error('Error getting user notifications:', error);
      return [];
    }
  }

  /**
   * Marks notification as read
   */
  async markNotificationRead(notificationId, userId) {
    const query = `
      UPDATE notifications
      SET is_read = TRUE, read_at = NOW()
      WHERE id = $1 AND user_id = $2
      RETURNING *
    `;

    try {
      const res = await pool.query(query, [notificationId, userId]);
      return res.rows[0] || null;
    } catch (error) {
      console.error('Error marking notification read:', error);
      throw error;
    }
  }

  /**
   * Marks all notifications as read for a given user
   */
  async markAllNotificationsRead(userId) {
    const query = `
      UPDATE notifications
      SET is_read = TRUE, read_at = NOW()
      WHERE user_id = $1 AND is_read = FALSE
    `;

    try {
      const res = await pool.query(query, [userId]);
      return { updatedCount: res.rowCount };
    } catch (error) {
      console.error('Error marking all notifications read:', error);
      throw error;
    }
  }
}

module.exports = new NotificationService();
