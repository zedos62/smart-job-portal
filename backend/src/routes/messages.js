const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const messagingService = require('../services/messagingService');

// Get all conversations for current authenticated user
router.get('/conversations', verifyToken, async (req, res) => {
  try {
    const conversations = await messagingService.getUserConversations(req.user.id, req.user.role);
    res.json({ conversations });
  } catch (error) {
    console.error('Error in GET /conversations:', error);
    res.status(500).json({ error: 'Failed to retrieve conversation threads' });
  }
});

// Start or retrieve conversation thread for a job application
router.post('/conversations', verifyToken, async (req, res) => {
  const { jobId, seekerId, recruiterId } = req.body;
  if (!jobId) {
    return res.status(400).json({ error: 'jobId is required' });
  }

  const effectiveSeekerId = req.user.role === 'seeker' ? req.user.id : seekerId;
  const effectiveRecruiterId = req.user.role === 'recruiter' ? req.user.id : recruiterId;

  if (!effectiveSeekerId || !effectiveRecruiterId) {
    return res.status(400).json({ error: 'Both seekerId and recruiterId must be defined' });
  }

  try {
    const conversation = await messagingService.getOrCreateConversation(
      jobId, 
      effectiveSeekerId, 
      effectiveRecruiterId
    );
    res.status(201).json({ conversation });
  } catch (error) {
    console.error('Error starting conversation:', error);
    res.status(500).json({ error: 'Failed to initialize conversation' });
  }
});

// Fetch messages in thread
router.get('/conversations/:id/messages', verifyToken, async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 50;

  try {
    const messages = await messagingService.getMessages(req.params.id, page, limit);
    res.json({ messages, page, limit });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

// Post message to thread
router.post('/conversations/:id/messages', verifyToken, async (req, res) => {
  const { content, attachmentUrl } = req.body;
  if (!content || !content.trim()) {
    return res.status(400).json({ error: 'Message content is required' });
  }

  try {
    const message = await messagingService.sendMessage(
      req.params.id,
      req.user.id,
      content,
      attachmentUrl
    );
    res.status(201).json({ message });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: error.message || 'Failed to send message' });
  }
});

// Mark conversation as read
router.patch('/conversations/:id/read', verifyToken, async (req, res) => {
  try {
    const result = await messagingService.markAsRead(req.params.id, req.user.id);
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('Error marking read:', error);
    res.status(500).json({ error: 'Failed to mark messages as read' });
  }
});

// Get total unread count for badge
router.get('/unread-count', verifyToken, async (req, res) => {
  try {
    const count = await messagingService.getTotalUnreadCount(req.user.id);
    res.json({ unreadCount: count });
  } catch (error) {
    console.error('Error getting unread count:', error);
    res.status(500).json({ error: 'Failed to get unread count' });
  }
});

module.exports = router;
