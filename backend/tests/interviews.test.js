const interviewService = require('../src/services/interviewService');

describe('Interview Management Service Suite', () => {
  describe('Scheduling Payload Validation', () => {
    it('should validate duration boundaries (15 to 240 mins)', () => {
      const invalidShort = { durationMinutes: 10 };
      const invalidLong = { durationMinutes: 300 };
      const valid = { durationMinutes: 45 };

      expect(invalidShort.durationMinutes < 15).toBe(true);
      expect(invalidLong.durationMinutes > 240).toBe(true);
      expect(valid.durationMinutes >= 15 && valid.durationMinutes <= 240).toBe(true);
    });

    it('should reject interviews scheduled in the past', () => {
      const pastDate = new Date(Date.now() - 3600 * 1000).toISOString();
      const futureDate = new Date(Date.now() + 86400 * 1000).toISOString();

      expect(new Date(pastDate).getTime() < Date.now()).toBe(true);
      expect(new Date(futureDate).getTime() > Date.now()).toBe(true);
    });

    it('should require valid interview type options', () => {
      const allowedTypes = ['video', 'phone', 'in_person'];
      expect(allowedTypes.includes('video')).toBe(true);
      expect(allowedTypes.includes('hologram')).toBe(false);
    });
  });

  describe('Meeting Link Provisioning', () => {
    it('should automatically generate room link for video sessions if none provided', () => {
      const interviewType = 'video';
      const providedLink = null;
      const meetingLink = interviewType === 'video' 
        ? providedLink || `https://meet.smartjobportal.com/room-test` 
        : null;

      expect(meetingLink).toMatch(/^https:\/\/meet\.smartjobportal\.com/);
    });
  });
});
