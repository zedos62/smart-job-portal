import React, { useState } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

export default function ResumeBuilderModal({ isOpen, onClose, onSave }) {
  const [personal, setPersonal] = useState({
    fullName: '',
    email: '',
    phone: '',
    title: '',
    summary: ''
  });

  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js', 'PostgreSQL']);
  const [newSkill, setNewSkill] = useState('');
  const [experiences, setExperiences] = useState([
    { company: '', role: '', period: '', highlights: '' }
  ]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: '', role: '', period: '', highlights: '' }]);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const handleSave = () => {
    const payload = {
      personalInfo: personal,
      skills,
      experiences,
      education: []
    };
    if (onSave) onSave(payload);
    if (onClose) onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Smart Resume Builder">
      <div className="space-y-5 max-h-[75vh] overflow-y-auto px-1">
        {/* Personal Details */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 border-b pb-1 mb-3">1. Personal Profile</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Full Name"
              value={personal.fullName}
              onChange={(e) => setPersonal({ ...personal, fullName: e.target.value })}
              className="px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Headline / Target Title (e.g. Senior Frontend Engineer)"
              value={personal.title}
              onChange={(e) => setPersonal({ ...personal, title: e.target.value })}
              className="px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={personal.email}
              onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
              className="px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={personal.phone}
              onChange={(e) => setPersonal({ ...personal, phone: e.target.value })}
              className="px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <textarea
            rows="2"
            placeholder="Professional Summary / Bio"
            value={personal.summary}
            onChange={(e) => setPersonal({ ...personal, summary: e.target.value })}
            className="w-full mt-2 px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 border-b pb-1 mb-3">2. Core Competencies & Skills</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {s}
                <button
                  type="button"
                  onClick={() => removeSkill(s)}
                  className="ml-1.5 text-blue-600 hover:text-blue-900"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Add skill (e.g. Docker, GraphQL, Kubernetes)"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="flex-1 px-3 py-1.5 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Button variant="outline" size="sm" onClick={handleAddSkill}>
              Add
            </Button>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <div className="flex items-center justify-between border-b pb-1 mb-3">
            <h4 className="text-sm font-semibold text-gray-800">3. Work Experience</h4>
            <Button variant="ghost" size="sm" onClick={handleAddExperience}>
              + Add Experience
            </Button>
          </div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="p-3 bg-gray-50 border rounded-lg mb-3 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(idx, 'company', e.target.value)}
                  className="px-2.5 py-1.5 text-sm bg-white border rounded"
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) => updateExperience(idx, 'role', e.target.value)}
                  className="px-2.5 py-1.5 text-sm bg-white border rounded"
                />
                <input
                  type="text"
                  placeholder="Years (e.g. 2021 - 2024)"
                  value={exp.period}
                  onChange={(e) => updateExperience(idx, 'period', e.target.value)}
                  className="px-2.5 py-1.5 text-sm bg-white border rounded"
                />
              </div>
              <textarea
                rows="2"
                placeholder="Key accomplishments and technical responsibilities"
                value={exp.highlights}
                onChange={(e) => updateExperience(idx, 'highlights', e.target.value)}
                className="w-full px-2.5 py-1.5 text-sm bg-white border rounded"
              ></textarea>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-2 pt-3 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save & Update Profile
          </Button>
        </div>
      </div>
    </Modal>
  );
}
