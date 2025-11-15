"use client";
import React from 'react';

const items = [
  {icon:'💬', title:'WhatsApp Business', text:'+84 5XX XXX XXXX', cta:'Chat on WhatsApp', href:'#'},
  {icon:'🔗', title:'LinkedIn', text:'@VietnamTradeData', cta:'Follow Us', href:'#'},
  {icon:'📹', title:'Skype', text:'VietnamTradeData.official', cta:'Add on Skype', href:'#'},
  {icon:'✈️', title:'Telegram', text:'@VietnamTradeData', cta:'Join Channel', href:'#'},
  {icon:'🧑‍🤝‍🧑', title:'Slack Community', text:'Join our user community', cta:'Join Slack', href:'#'},
  {icon:'❓', title:'Support Portal', text:'Browse help articles', cta:'Visit Help Center', href:'#'}
];

export default function AlternativeContact(){
  return (
    <section className="py-12 container mx-auto px-4">
      <h3 className="text-2xl font-semibold mb-4">More Ways to Connect</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it,i)=> (
          <div key={i} className="bg-white p-4 rounded shadow flex items-start gap-3">
            <div className="text-2xl text-ttblue-600">{it.icon}</div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-ttgray-600">{it.text}</div>
              <a className="mt-2 inline-block text-ttblue-700" href={it.href}>{it.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
