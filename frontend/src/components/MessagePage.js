import React from 'react';
import '../styles/MessagesPage.css';

const MessagesPage = () => {
  return (
    <div className="messages-container">
      <div className="sidebar">
        <h2>Messages</h2>
        <ul className="message-list">
          <li className="message-item">User 1</li>
          <li className="message-item">User 2</li>
          <li className="message-item">User 3</li>
          <li className="message-item">User 4</li>
        </ul>
      </div>
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat with User 1</h2>
        </div>
        <div className="chat-messages">
          <div className="message">Hello!</div>
          <div className="message">Hi, how are you?</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;