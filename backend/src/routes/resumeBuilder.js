const express = require('express');
const router = express.Router();
const { verifyToken, requireRole } = require('../middleware/auth');
const resumeBuilderService = require('../services/resumeBuilderService');

// Get saved resume draft
router.get('/draft', verifyToken, requireRole('seeker'), async (req, res) => {
  try {
    const draft = await resumeBuilderService.getResumeDraft(req.user.id);
    res.json({ draft });
  } catch (error) {
    console.error('Error getting resume draft:', error);
    res.status(500).json({ error: 'Failed to retrieve resume draft' });
  }
});

// Save or update resume draft
router.post('/draft', verifyToken, requireRole('seeker'), async (req, res) => {
  try {
    const saved = await resumeBuilderService.saveResumeDraft(req.user.id, req.body);
    res.json({ message: 'Resume draft saved successfully', draft: saved });
  } catch (error) {
    console.error('Error saving resume draft:', error);
    res.status(error.status || 500).json({ error: error.message || 'Failed to save resume draft' });
  }
});

module.exports = router;
