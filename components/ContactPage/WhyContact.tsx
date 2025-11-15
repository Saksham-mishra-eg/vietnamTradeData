"use client";
import React from 'react';

function Benefit({icon, title, body}:{icon:string,title:string,body:string}){
  return (
    <div className="flex items-start gap-3 p-3">
      <div className="text-2xl text-ttblue-600">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-ttgray-600">{body}</div>
      </div>
    </div>
  );
}

export default function WhyContact(){
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-6">
      <h4 className="text-lg font-semibold mb-3">Why Reach Out?</h4>
      <Benefit icon="⚡" title="Quick Response" body="Average response time: 2 hours" />
      <Benefit icon="⭐" title="Expert Guidance" body="Speak with trade data specialists" />
      <Benefit icon="⚙️" title="Custom Solutions" body="Tailored plans for your needs" />
      <Benefit icon="👍" title="No Pressure" body="Helpful advice, no hard sell" />

      <div className="mt-4">
        <div className="font-semibold">4.9/5 Customer Satisfaction</div>
        <div className="text-sm text-ttgray-600">98% Response Rate • 5,000+ Happy Clients</div>
      </div>
    </div>
  );
}
