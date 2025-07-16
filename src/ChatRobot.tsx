import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import ChatBox from './ChatBox';
import './ChatRobot.css';

export default function ChatRobot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chat-robot ${isOpen ? 'chat-open' : 'chat-closed'}`}>
      {!isOpen ? (
        <main onClick={toggleChat} className="robot-container">
          <Spline
            scene="https://prod.spline.design/gX5k-vyLSv59ODJL/scene.splinecode" 
          />
          <div className="click-overlay">
            <span className="click-text">Click to chat</span>
          </div>
        </main>
      ) : (
        <ChatBox onClose={toggleChat} />
      )}
    </div>
  );
}