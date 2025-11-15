"use client";

import React from 'react';
import { Timeline as ModernTimeline, TimelineItem } from 'components/ui/modern-timeline';

const vietnamJourney: TimelineItem[] = [
  {
    title: "Company Founded",
    description: "VietnamTradeData was established with a vision to revolutionize access to Vietnam trade intelligence. Started with comprehensive Vietnam trade data coverage and a commitment to accuracy.",
    date: "2015",
    category: "Foundation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop",
    status: "completed"
  },
  {
    title: "Reached 1,000 Clients",
    description: "Achieved our first major milestone by serving over 1,000 clients worldwide. Expanded our services to support importers, exporters, and trade analysts with real-time Vietnam trade data.",
    date: "2017",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150&h=150&fit=crop",
    status: "completed"
  },
  {
    title: "API Launch",
    description: "Introduced developer-friendly API access, enabling seamless integration of Vietnam trade data into business applications. Empowered developers with comprehensive documentation and support.",
    date: "2018",
    category: "Product",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=150&fit=crop",
    status: "completed"
  },
  {
    title: "Regional Expansion",
    description: "Expanded our data coverage to include 50+ countries, providing comprehensive regional trade intelligence. Enhanced our database with cross-border trade insights and market trends.",
    date: "2019",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=150&h=150&fit=crop",
    status: "completed"
  },
  {
    title: "AI Integration",
    description: "Launched cutting-edge predictive analytics features powered by artificial intelligence. Introduced smart insights, trend forecasting, and automated market intelligence for strategic decision-making.",
    date: "2021",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&h=150&fit=crop",
    status: "completed"
  },
  {
    title: "Mobile App Release",
    description: "Released iOS and Android mobile applications, bringing Vietnam trade data on-the-go. Enabled real-time notifications, mobile dashboards, and instant access to shipment records anywhere.",
    date: "2022",
    category: "Product",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=150&fit=crop",
    status: "completed"
  },
  {
    title: "Enterprise Solutions",
    description: "Introduced white-label and custom enterprise solutions for large organizations. Delivered tailored dashboards, dedicated support, and customized data integration for Fortune 500 companies.",
    date: "2023",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=150&h=150&fit=crop",
    status: "completed"
  },
  {
    title: "5,000+ Active Users",
    description: "Reached 5,000+ active users milestone, becoming the most trusted platform for global trade intelligence. Serving businesses across 100+ countries with 99.9% data accuracy and 24/7 support.",
    date: "2024",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop",
    status: "current"
  },
  {
    title: "Global Market Intelligence Platform",
    description: "Developing next-generation global trade intelligence platform with enhanced AI capabilities, real-time market insights, and advanced supply chain analytics for the future of international trade.",
    date: "2025",
    category: "Future",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150&h=150&fit=crop",
    status: "upcoming"
  }
];

export default function Timeline(){
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From a simple idea to becoming the leading Vietnam trade data platform. 
            Follow our story of innovation, growth, and dedication to serving global trade.
          </p>
        </div>
        <ModernTimeline items={vietnamJourney} />
      </div>
    </section>
  );
}
