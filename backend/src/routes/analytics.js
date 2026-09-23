const express = require('express');
const router = express.Router();
const { verifyToken, requireRole } = require('../middleware/auth');
const analyticsService = require('../services/analyticsService');

// Recruiter analytics dashboard summary
router.get('/recruiter', verifyToken, requireRole('recruiter'), async (req, res) => {
  try {
    const metrics = await analyticsService.getRecruiterMetrics(req.user.id);
    const trends = await analyticsService.getApplicationTrends(req.user.id);
    res.json({ metrics, trends });
  } catch (error) {
    console.error('Error fetching recruiter analytics:', error);
    res.status(500).json({ error: 'Failed to fetch analytics metrics' });
  }
});

// Trending skills across job market
router.get('/trending-skills', async (req, res) => {
  try {
    const skills = await analyticsService.getTrendingSkills();
    res.json({ skills });
  } catch (error) {
    console.error('Error fetching trending skills:', error);
    res.status(500).json({ error: 'Failed to load market skill trends' });
  }
});

// Admin system health and telemetry
router.get('/admin/health', verifyToken, requireRole('admin'), async (req, res) => {
  try {
    const health = await analyticsService.getAdminPlatformHealth();
    res.json({ health });
  } catch (error) {
    console.error('Error getting platform health:', error);
    res.status(500).json({ error: 'Failed to retrieve telemetry' });
  }
});

module.exports = router;
