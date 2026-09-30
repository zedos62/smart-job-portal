import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Modal from '../common/Modal';

export default function InterviewScheduler({ candidateName, jobTitle, onSchedule, isOpen, onClose }) {
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('10:00');
  const [duration, setDuration] = useState('45');
  const [interviewType, setInterviewType] = useState('video');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      scheduledDateTime: `${scheduledDate}T${scheduledTime}:00`,
      durationMinutes: parseInt(duration, 10),
      interviewType,
      notes
    };

    setTimeout(() => {
      setLoading(false);
      if (onSchedule) onSchedule(payload);
      if (onClose) onClose();
    }, 400);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Schedule Interview: ${candidateName}`}>
      <form onSubmit={handleSubmit} className="space-y-4 pt-2">
        <div className="bg-blue-50/70 border border-blue-100 rounded-lg p-3 text-xs text-blue-800">
          Candidate applied for: <span className="font-semibold">{jobTitle}</span>. An automated calendar invite and meeting link will be dispatched to both participants upon confirmation.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Date</label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Time</label>
            <input
              type="time"
              required
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Type</label>
            <select
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="video">Virtual Video Call (SmartMeet)</option>
              <option value="phone">Phone Screening</option>
              <option value="in_person">On-Site / In-Person</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Preparation Notes / Agenda</label>
          <textarea
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Technical topics, portfolio walkthrough, panel introductions..."
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-end space-x-2 pt-3 border-t border-gray-100">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" disabled={loading || !scheduledDate}>
            {loading ? 'Confirming...' : 'Dispatch Invitation'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
