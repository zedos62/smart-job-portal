import React, { useState, useEffect, useRef } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Card from '../common/Card';
import Badge from '../common/Badge';

export default function ChatWindow({ conversationId, recipientName, recipientRole, onClose }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initial load and polling simulation for real-time conversation
    const fetchHistory = () => {
      setMessages([
        {
          id: 1,
          senderName: recipientName,
          senderRole: recipientRole,
          content: 'Hello! Thank you for applying for the role. We were very impressed by your background.',
          timestamp: '10:30 AM',
          isOwn: false
        },
        {
          id: 2,
          senderName: 'You',
          senderRole: 'seeker',
          content: 'Thank you! I am very excited about this opportunity and would love to learn more about the team.',
          timestamp: '10:32 AM',
          isOwn: true
        }
      ]);
    };
    fetchHistory();
  }, [conversationId, recipientName, recipientRole]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || loading) return;

    const messageObj = {
      id: Date.now(),
      senderName: 'You',
      senderRole: 'seeker',
      content: newMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };

    setMessages((prev) => [...prev, messageObj]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[520px] max-h-[85vh] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
            {recipientName ? recipientName[0].toUpperCase() : 'U'}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-white leading-tight">{recipientName}</h3>
              <Badge variant={recipientRole === 'recruiter' ? 'info' : 'success'} size="sm">
                {recipientRole}
              </Badge>
            </div>
            <p className="text-xs text-blue-100 flex items-center mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 inline-block"></span>
              Online & Ready
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
            aria-label="Close conversation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.isOwn ? 'items-end' : 'items-start'} max-w-[85%] ${
              msg.isOwn ? 'ml-auto' : 'mr-auto'
            }`}
          >
            <div
              className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.isOwn
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
            <span className="text-[11px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Tray */}
      <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        />
        <Button type="submit" variant="primary" disabled={!newMessage.trim()} className="rounded-full px-5">
          Send
        </Button>
      </form>
    </div>
  );
}
