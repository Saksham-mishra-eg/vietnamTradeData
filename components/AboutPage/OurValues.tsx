"use client";

import React from 'react';
import { About } from 'components/ui/about';

export default function OurValues(){
  const vietnamTradeValues = [
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
      title: "Accuracy",
      desc: "We maintain 99.9% data accuracy through rigorous verification."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
      title: "Transparency",
      desc: "Clear data sources and honest pricing."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      title: "Innovation",
      desc: "AI-powered insights and continuous improvement."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png",
      title: "Customer Success",
      desc: "Dedicated support to help you maximize value."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png",
      title: "Security",
      desc: "Bank-level encryption and GDPR compliance."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png",
      title: "Accessibility",
      desc: "Making trade intelligence accessible to all businesses."
    }
  ];

  return (
    <About
      title="What Drives Us"
      description="Our core values guide everything we do at VietnamTradeData - from data accuracy to customer success."
      features={vietnamTradeValues}
    />
  );
}
