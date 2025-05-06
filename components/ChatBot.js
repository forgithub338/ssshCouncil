'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(prevOpen => !prevOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-200"
      >
        <FontAwesomeIcon icon={faRobot} className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://copilotstudio.microsoft.com/environments/Default-5d24c318-4329-4e63-bf0e-42ede7cdc80b/bots/cr23b_Sf2AJL1TWTBbLnhBrMQ2L/webchat?__version__=2"
            className="w-full h-full border-0"
            allow="microphone;"
          ></iframe>
        </div>
      )}
    </div>
  )
}