const express = require('express');
const router = express.Router();
const { verifyToken, requireRole } = require('../middleware/auth');
const interviewService = require('../services/interviewService');

// Schedule an interview (Recruiter only)
router.post('/schedule', verifyToken, requireRole('recruiter'), async (req, res) => {
  try {
    const interview = await interviewService.scheduleInterview(req.user.id, req.body);
    res.status(201).json({ message: 'Interview scheduled successfully', interview });
  } catch (error) {
    console.error('Error in /schedule:', error);
    res.status(error.status || 500).json({ error: error.message || 'Failed to schedule interview' });
  }
});

// List interviews for current user
router.get('/', verifyToken, async (req, res) => {
  try {
    const status = req.query.status || null;
    const interviews = await interviewService.getInterviews(req.user.id, req.user.role, status);
    res.json({ interviews });
  } catch (error) {
    console.error('Error fetching interviews:', error);
    res.status(500).json({ error: 'Failed to load interviews' });
  }
});

// Update interview status (e.g. confirm, cancel, reschedule)
router.patch('/:id/status', verifyToken, async (req, res) => {
  const { status, notes } = req.body;
  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  try {
    const updated = await interviewService.updateInterviewStatus(
      req.params.id,
      req.user.id,
      status,
      notes
    );
    res.json({ message: 'Interview updated', interview: updated });
  } catch (error) {
    console.error('Error updating interview:', error);
    res.status(error.status || 500).json({ error: error.message || 'Failed to update interview' });
  }
});

module.exports = router;
