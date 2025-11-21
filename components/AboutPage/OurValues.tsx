"use client";

import React from 'react';
import { Shield, Lightbulb, Users, Lock, TrendingUp, Globe } from 'lucide-react';
import RadialOrbitalTimeline from 'components/ui/radial-orbital-timeline';

export default function OurValues(){
  const vietnamTradeValues = [
    {
      id: 1,
      title: "Accuracy",
      date: "Core Value",
      content: "We maintain 99.9% data accuracy through rigorous verification and quality control processes.",
      category: "Quality",
      icon: Shield,
      relatedIds: [2, 6],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Transparency",
      date: "Core Value",
      content: "Clear data sources and honest pricing. We believe in full transparency with our clients.",
      category: "Trust",
      icon: Globe,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "Innovation",
      date: "Core Value",
      content: "AI-powered insights and continuous improvement drive our technology forward.",
      category: "Technology",
      icon: Lightbulb,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 4,
      title: "Customer Success",
      date: "Core Value",
      content: "Dedicated support to help you maximize value from trade intelligence data.",
      category: "Service",
      icon: Users,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 5,
      title: "Security",
      date: "Core Value",
      content: "Bank-level encryption and GDPR compliance ensure your data is always protected.",
      category: "Protection",
      icon: Lock,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 6,
      title: "Accessibility",
      date: "Core Value",
      content: "Making trade intelligence accessible to all businesses, from startups to enterprises.",
      category: "Inclusion",
      icon: TrendingUp,
      relatedIds: [5, 1],
      status: "in-progress" as const,
      energy: 80,
    }
  ];

  return (
    
    <RadialOrbitalTimeline timelineData={vietnamTradeValues} />
    
  );
}
