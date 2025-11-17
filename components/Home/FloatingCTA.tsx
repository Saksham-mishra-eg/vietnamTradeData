"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';

export default function FloatingCTA(){
  const [visible, setVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  React.useEffect(()=>{
    const onScroll = ()=> setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setShowPopup(true)}
        aria-label="Start free trial" 
        className={`fixed right-6 bottom-24 z-50 ${visible? 'block':'hidden'}`}
      >
        <div className="tt-cta-gradient text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          Start Free Trial
        </div>
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md w-full relative animate-slideUp">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Form Content */}
            <h3 className="text-gray-900 text-2xl font-semibold mb-2">Get a free sample</h3>
            <p className="text-gray-600 text-sm mb-6">Fill out the form and our team will get back to you shortly.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}>
              <div className="grid grid-cols-2 gap-3">
                <Input 
                  aria-label="First Name" 
                  placeholder="First name" 
                  required
                />
                <Input 
                  aria-label="Last Name" 
                  placeholder="Last name" 
                  required
                />
              </div>
              <Input 
                aria-label="Contact Number" 
                type="tel"
                placeholder="Contact Number" 
                required
              />
              <Input 
                aria-label="Company Name" 
                placeholder="Company Name" 
                required
              />
              <Input 
                aria-label="Work Email ID" 
                type="email"
                placeholder="Work Email ID" 
                required
              />
              <Textarea 
                aria-label="Message" 
                placeholder="Message"
                className="min-h-[80px]"
              />
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg"
              >
                Request For Demo
              </Button>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
