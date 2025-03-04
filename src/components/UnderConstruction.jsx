import React, { useState, useEffect } from 'react';
import { CogIcon } from '@heroicons/react/24/outline';

function UnderConstruction() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Under Construction...';

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8">
        <CogIcon 
          className="w-24 h-24 sm:w-32 sm:h-32 text-white animate-spin-slower mx-auto" 
        />
        <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl text-white">
          {text}
          <span className="inline-block w-[3px] h-[1em] ml-1 bg-white animate-cursor"></span>
        </h1>
      </div>
    </div>
  );
}

export default UnderConstruction; 