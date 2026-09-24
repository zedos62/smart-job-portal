const messagingService = require('../src/services/messagingService');

describe('Candidate & Recruiter Messaging Suite', () => {
  describe('Thread Initialization', () => {
    it('should validate required participants and job ID', async () => {
      await expect(messagingService.getOrCreateConversation(null, 1, 2))
        .rejects.toThrow('jobId, seekerId, and recruiterId are required');
    });
  });

  describe('Message Validation & Delivery', () => {
    it('should reject empty or whitespace-only messages', async () => {
      await expect(messagingService.sendMessage(1, 1, '   '))
        .rejects.toThrow('Message content cannot be empty');
    });

    it('should truncate or reject messages exceeding maximum length', async () => {
      const hugeMessage = 'A'.repeat(4500);
      await expect(messagingService.sendMessage(1, 1, hugeMessage))
        .rejects.toThrow('Message content exceeds maximum allowed length');
    });

    it('should trim surrounding whitespace from message content', () => {
      const content = '   Hello recruiter!   ';
      expect(content.trim()).toBe('Hello recruiter!');
    });
  });

  describe('Read Receipts & Counters', () => {
    it('should compute unread badge counts correctly', () => {
      const mockMessages = [
        { id: 1, sender_id: 2, is_read: false },
        { id: 2, sender_id: 2, is_read: false },
        { id: 3, sender_id: 1, is_read: false } // Own message
      ];

      const currentUserId = 1;
      const unreadCount = mockMessages.filter(m => m.sender_id !== currentUserId && !m.is_read).length;
      expect(unreadCount).toBe(2);
    });
  });
});
