"use client";

import React from 'react';

// Keep props untyped to avoid ESLint false-positives during build; can be typed later
type Props = {
  monthly: boolean;
  onToggle: (value: boolean) => void;
};

export default function PricingToggle({ monthly, onToggle }: Props) {
  return (
    <div className="inline-flex items-center bg-white/10 rounded p-1">
      <button aria-pressed={monthly} onClick={()=>onToggle(true)} className={`px-4 py-2 rounded ${monthly ? 'bg-white text-ttblue-700 font-semibold' : 'text-white/90'}`}>Monthly</button>
      <button aria-pressed={!monthly} onClick={()=>onToggle(false)} className={`px-4 py-2 rounded ${!monthly ? 'bg-white text-ttblue-700 font-semibold' : 'text-white/90'}`}>Annual</button>
    </div>
  );
}
