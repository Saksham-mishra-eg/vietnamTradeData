"use client";

import React from 'react';

export default function CookieBanner(){
  const [seen, setSeen] = React.useState(()=> typeof window !== 'undefined' && !!localStorage.getItem('cookie-accepted'));
  if(seen) return null;

  return (
    <div className="fixed left-0 right-0 bottom-0 bg-white shadow-lg p-4 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-sm">We use cookies to improve your experience. By using our site you agree to our cookie policy.</div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 border rounded" onClick={()=>{ localStorage.setItem('cookie-accepted','1'); setSeen(true); }}>Accept</button>
          <a className="text-sm text-ttblue-600" href="/privacy">Privacy</a>
        </div>
      </div>
    </div>
  );
}
