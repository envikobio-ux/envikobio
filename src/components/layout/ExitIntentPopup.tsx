'use client';

import { useState, useEffect } from 'react';
import { X, Gift, Download, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExitIntentPopupProps {
  title?: string;
  subtitle?: string;
  offerText?: string;
  ctaText?: string;
  dismissText?: string;
}

export default function ExitIntentPopup({
  title = 'Wait! Don\'t Miss This',
  subtitle = 'Get exclusive benefits before you leave',
  offerText = 'Free Product Catalog + Sample Voucher',
  ctaText = 'Yes, Send Me Catalog',
  dismissText = 'No Thanks',
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initial check for session storage - runs once on mount
  useEffect(() => {
    const dismissed = sessionStorage.getItem('exitPopupDismissed');
    if (!dismissed) {
      setShouldRender(true);
    }
  }, []);

  // Exit intent detection - only runs when shouldRender is true
  useEffect(() => {
    if (!shouldRender) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 50 && !isSubmitted) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [shouldRender, isSubmitted]);

  const handleDismiss = () => {
    setIsVisible(false);
    setShouldRender(false);
    sessionStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(handleDismiss, 3000);
  };

  // Don't render if not allowed or not visible
  if (!shouldRender || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleDismiss}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 animate-fade-in-up">
        {/* Close button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Download className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Catalog Sent!</h3>
            <p className="text-gray-600 mb-4">Check your inbox for the download link.</p>
            <p className="text-sm text-green-600">Sample voucher included</p>
          </div>
        ) : (
          <>
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 text-center mb-2">{title}</h3>
            <p className="text-gray-600 text-center mb-4">{subtitle}</p>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 mb-6 border border-orange-200">
              <p className="text-center font-medium text-orange-700 mb-2">{offerText}</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Beaker className="w-4 h-4 text-green-600" />
                  Free samples
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4 text-blue-600" />
                  564 products
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 py-3">
                {ctaText}
              </Button>
            </form>
            <button onClick={handleDismiss} className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700 text-center">
              {dismissText}
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">We respect your privacy. No spam, unsubscribe anytime.</p>
          </>
        )}
      </div>
    </div>
  );
}