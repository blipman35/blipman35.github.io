import React, { useState, useEffect } from 'react';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

function UnderConstruction() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Under Construction...';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl text-white inline-flex items-center">
          {text}
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
            |
          </span>
          {isTypingComplete && (
            <Cog8ToothIcon 
              className="w-24 h-24 sm:w-32 sm:h-32 ml-4 text-white animate-spin-slower" 
            />
          )}
        </h1>
      </div>
    </div>
  );
}

export default UnderConstruction; 