const express = require('express');
const router = express.Router();
const salaryBenchmarkService = require('../services/salaryBenchmarkService');

// Query salary benchmark
router.get('/estimate', (req, res) => {
  const { role, level, location } = req.query;
  if (!role) {
    return res.status(400).json({ error: 'Job title/role parameter is required' });
  }

  try {
    const benchmark = salaryBenchmarkService.calculateBenchmark(role, level, location);
    res.json({ benchmark });
  } catch (error) {
    console.error('Error computing salary benchmark:', error);
    res.status(500).json({ error: 'Failed to calculate salary compensation index' });
  }
});

module.exports = router;
