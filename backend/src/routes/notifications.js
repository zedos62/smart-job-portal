const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const notificationService = require('../services/notificationService');

// Get notifications for current user
router.get('/', verifyToken, async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 20;
  try {
    const notifications = await notificationService.getUserNotifications(req.user.id, limit);
    res.json({ notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// Mark single notification as read
router.patch('/:id/read', verifyToken, async (req, res) => {
  try {
    const updated = await notificationService.markNotificationRead(req.params.id, req.user.id);
    res.json({ notification: updated });
  } catch (error) {
    console.error('Error marking notification read:', error);
    res.status(500).json({ error: 'Failed to update notification' });
  }
});

// Mark all as read
router.patch('/read-all', verifyToken, async (req, res) => {
  try {
    const result = await notificationService.markAllNotificationsRead(req.user.id);
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('Error marking all notifications read:', error);
    res.status(500).json({ error: 'Failed to mark all as read' });
  }
});

module.exports = router;
