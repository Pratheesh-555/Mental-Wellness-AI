import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (message.trim()) {
      setIsLoading(true);
      try {
        const response = await axios.post('/api/send-message', { message });
        setMessages([...messages, { text: message, isUser: true }, { text: response.data.result, isUser: false }]);
        setMessage('');
      } catch (err) {
        console.error('Error sending message:', err);
        setMessages([...messages, { text: message, isUser: true }, { text: 'Failed to send message.', isUser: false }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ height: '400px', border: '1px solid #ccc', borderRadius: '10px', overflowY: 'scroll', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: msg.isUser ? 'flex-end' : 'flex-start',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: msg.isUser ? '#007bff' : '#f1f1f1',
                color: msg.isUser ? '#fff' : '#000',
                padding: '10px',
                borderRadius: '10px',
                maxWidth: '70%',
              }}
            >
              {!msg.isUser && (
                <img
                  src="https://example.com/ai-avatar.png" // Replace with AI avatar
                  alt="AI"
                  style={{ borderRadius: '50%', marginRight: '10px' }}
                />
              )}
              <p style={{ margin: 0 }}>{msg.text}</p>
              {msg.isUser && (
                <img
                  src="https://example.com/user-avatar.png" // Replace with user avatar
                  alt="User"
                  style={{ borderRadius: '50%', marginLeft: '10px' }}
                />
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
            <div style={{ backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '10px' }}>
              <p style={{ margin: 0 }}>Loading...</p>
            </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={{ 
            flex: 1, 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            marginRight: '10px',
          }}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;