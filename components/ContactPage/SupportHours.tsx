"use client";
import React from 'react';

export default function SupportHours(){
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-6">
  <h4 className="font-semibold mb-2">When We are Available</h4>
      <table className="text-sm w-full">
        <thead className="text-left text-ttgray-600"><tr><th>Day</th><th>Live Chat</th><th>Phone</th><th>Email</th></tr></thead>
        <tbody>
          {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((d,i)=> (
            <tr key={i} className="border-t"><td className="py-2">{d}</td><td>24/7</td><td>{i<5 ? '9am-6pm' : 'Closed'}</td><td>{i<5? 'Within 2 hours' : 'Within 24 hours'}</td></tr>
          ))}
        </tbody>
      </table>
  <div className="mt-3 text-sm text-ttgray-600">Your current timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
    </div>
  );
}
