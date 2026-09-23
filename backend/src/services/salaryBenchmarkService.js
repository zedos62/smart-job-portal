/**
 * Salary estimation, market compensation benchmarking, and equity indexing
 */

class SalaryBenchmarkService {
  constructor() {
    this.benchmarks = {
      'Frontend Developer': { junior: 65000, mid: 95000, senior: 135000, lead: 165000 },
      'Backend Developer': { junior: 70000, mid: 105000, senior: 145000, lead: 175000 },
      'Full Stack Developer': { junior: 72000, mid: 108000, senior: 150000, lead: 180000 },
      'Machine Learning Engineer': { junior: 85000, mid: 125000, senior: 170000, lead: 210000 },
      'DevOps Engineer': { junior: 75000, mid: 110000, senior: 155000, lead: 185000 },
      'Product Manager': { junior: 70000, mid: 100000, senior: 140000, lead: 175000 },
      'Data Scientist': { junior: 80000, mid: 120000, senior: 165000, lead: 195000 }
    };
  }

  /**
   * Estimates market base compensation range given title, level, and location
   */
  calculateBenchmark(title, level = 'mid', location = 'Remote') {
    const normalizedTitle = Object.keys(this.benchmarks).find(k => 
      k.toLowerCase().includes(title.toLowerCase()) || title.toLowerCase().includes(k.toLowerCase())
    ) || 'Full Stack Developer';

    const normalizedLevel = ['junior', 'mid', 'senior', 'lead'].includes(level.toLowerCase()) 
      ? level.toLowerCase() 
      : 'mid';

    const base = this.benchmarks[normalizedTitle][normalizedLevel];

    // Location adjustment multiplier
    let multiplier = 1.0;
    const locLower = location.toLowerCase();
    if (locLower.includes('san francisco') || locLower.includes('new york') || locLower.includes('ny')) {
      multiplier = 1.25;
    } else if (locLower.includes('london') || locLower.includes('seattle') || locLower.includes('boston')) {
      multiplier = 1.15;
    } else if (locLower.includes('berlin') || locLower.includes('toronto')) {
      multiplier = 1.05;
    }

    const estimatedBase = Math.round(base * multiplier);
    const minSalary = Math.round(estimatedBase * 0.90);
    const maxSalary = Math.round(estimatedBase * 1.15);

    return {
      role: normalizedTitle,
      experienceLevel: normalizedLevel,
      location: location,
      currency: 'USD',
      estimatedMedian: estimatedBase,
      rangeMin: minSalary,
      rangeMax: maxSalary,
      sampleSize: 1420
    };
  }
}

module.exports = new SalaryBenchmarkService();
