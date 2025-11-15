"use client";

import React from 'react';

export default function FloatingCTA(){
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = ()=> setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <a href="#" aria-label="Start free trial" className={`fixed right-6 bottom-6 z-50 ${visible? 'block':'hidden'}`}>
      <button className="tt-cta-gradient text-white px-4 py-3 rounded-full shadow-lg">Start Free Trial</button>
    </a>
  );
}
