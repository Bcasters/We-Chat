import React, { useState } from 'react';
import './App.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = (event) => {
    if (messageInput.trim() !== '' && (event.key === 'Enter' || event.type === 'click')) {
      const message = {
        text: messageInput,
        timestamp: new Date().toISOString(),
        isSender: true, // Add a flag to indicate the message is from the sender
      };
      setMessages([...messages, message]);
      setMessageInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isSender ? 'chat-message sender' : 'chat-message receiver'}>
            <div className="chat-message-text">{message.text}</div>
            <div className="chat-message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
          className='chat-input'
          onKeyDown={sendMessage}
        />
        <button onClick={sendMessage}>
          <FontAwesomeIcon 
          icon={faPaperPlane}
          style={{
            color:'black',
            fontSize: '20px'
          }}
          />
        </button>
        
      </div>
    </div>
  );
}

export default Chat;