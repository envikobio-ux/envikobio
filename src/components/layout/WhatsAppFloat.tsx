'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  showOnMobile?: boolean;
}

export default function WhatsAppFloat({
  phoneNumber = '8612345678900',
  message = 'Hi, I\'m interested in your products. Please send me more information.',
  position = 'bottom-right',
  showOnMobile = true,
}: WhatsAppFloatProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const positionClasses = position === 'bottom-right' 
    ? 'right-4 bottom-4' 
    : 'left-4 bottom-4';

  return (
    <div 
      className={`fixed ${positionClasses} z-50 ${showOnMobile ? '' : 'hidden md:block'}`}
    >
      {/* Expanded tooltip */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 animate-fade-in-up">
          <button 
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm font-medium text-gray-900 mb-2">Chat with us on WhatsApp</p>
          <p className="text-xs text-gray-600 mb-3">
            Typical reply time: 30 minutes during business hours (Mon-Fri 9:00-18:00 GMT+8)
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105 group"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-sm font-medium group-hover:inline">
          WhatsApp
        </span>
      </button>

      {/* Pulse animation for attention */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      )}
    </div>
  );
}