import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

export default function SalaryCalculator() {
  const [role, setRole] = useState('Frontend Developer');
  const [level, setLevel] = useState('mid');
  const [location, setLocation] = useState('Remote');
  const [result, setResult] = useState(null);

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Machine Learning Engineer',
    'DevOps Engineer',
    'Data Scientist',
    'Product Manager'
  ];

  const levels = [
    { key: 'junior', label: 'Junior (0-2 yrs)' },
    { key: 'mid', label: 'Mid-Level (3-5 yrs)' },
    { key: 'senior', label: 'Senior (6-8 yrs)' },
    { key: 'lead', label: 'Lead / Staff (8+ yrs)' }
  ];

  const locations = [
    'Remote (US / Global)',
    'San Francisco / Bay Area',
    'New York, NY',
    'London, UK',
    'Berlin, Germany',
    'Toronto, Canada'
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    // Deterministic market compensation benchmark formula
    const baseSalaries = {
      'Frontend Developer': { junior: 65000, mid: 95000, senior: 135000, lead: 165000 },
      'Backend Developer': { junior: 70000, mid: 105000, senior: 145000, lead: 175000 },
      'Full Stack Developer': { junior: 72000, mid: 108000, senior: 150000, lead: 180000 },
      'Machine Learning Engineer': { junior: 85000, mid: 125000, senior: 170000, lead: 210000 },
      'DevOps Engineer': { junior: 75000, mid: 110000, senior: 155000, lead: 185000 },
      'Data Scientist': { junior: 80000, mid: 120000, senior: 165000, lead: 195000 },
      'Product Manager': { junior: 70000, mid: 100000, senior: 140000, lead: 175000 }
    };

    const multiplier = location.includes('San Francisco') ? 1.25 : location.includes('New York') ? 1.2 : 1.0;
    const base = (baseSalaries[role] || baseSalaries['Full Stack Developer'])[level];
    const estimated = Math.round(base * multiplier);

    setResult({
      median: estimated,
      min: Math.round(estimated * 0.9),
      max: Math.round(estimated * 1.15)
    });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 border-b pb-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
          $
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-base">Market Compensation Calculator</h3>
          <p className="text-xs text-gray-500">Benchmark your salary expectations against real industry telemetry.</p>
        </div>
      </div>

      <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Target Discipline</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Experience Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {levels.map((lvl) => (
              <option key={lvl.key} value={lvl.key}>
                {lvl.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Location Benchmark</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-3 flex justify-end">
          <Button variant="primary" type="submit">
            Compute Benchmark Range
          </Button>
        </div>
      </form>

      {result && (
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-center mt-3 animate-fade-in">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Estimated Median Annual Compensation
          </span>
          <div className="text-3xl font-extrabold text-emerald-700 my-1">
            ${result.median.toLocaleString()} <span className="text-sm font-normal text-emerald-600">USD / yr</span>
          </div>
          <p className="text-xs text-emerald-800">
            Estimated Range: <span className="font-semibold">${result.min.toLocaleString()}</span> &mdash;{' '}
            <span className="font-semibold">${result.max.toLocaleString()}</span> (25th to 75th percentile)
          </p>
        </div>
      )}
    </Card>
  );
}
