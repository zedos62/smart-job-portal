const salaryService = require('../src/services/salaryBenchmarkService');

describe('Analytics & Market Benchmarks Suite', () => {
  describe('Salary Benchmarking Calculations', () => {
    it('should estimate accurate compensation for Frontend Developer levels', () => {
      const mid = salaryService.calculateBenchmark('Frontend Developer', 'mid', 'Remote');
      expect(mid.estimatedMedian).toBe(95000);
      expect(mid.rangeMin).toBe(85500);
      expect(mid.rangeMax).toBe(109250);
    });

    it('should apply cost-of-living location multipliers for Tier 1 tech hubs', () => {
      const remote = salaryService.calculateBenchmark('Backend Developer', 'senior', 'Remote');
      const sf = salaryService.calculateBenchmark('Backend Developer', 'senior', 'San Francisco, CA');

      expect(sf.estimatedMedian).toBeGreaterThan(remote.estimatedMedian);
      expect(Math.round(remote.estimatedMedian * 1.25)).toBe(sf.estimatedMedian);
    });

    it('should gracefully fallback to Full Stack Developer for unknown roles', () => {
      const benchmark = salaryService.calculateBenchmark('Quantum VR Wizard', 'mid', 'Remote');
      expect(benchmark.role).toBe('Full Stack Developer');
    });
  });
});
