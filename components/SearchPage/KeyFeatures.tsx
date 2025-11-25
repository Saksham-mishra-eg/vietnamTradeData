"use client";

import React from 'react';
import { 
  Clock, Users, FileText, BarChart3, TrendingUp, Globe,
  Shield, Zap
} from 'lucide-react';
import { FeatureGrid } from 'components/ui/feature-section';

export default function KeyFeatures() {
  const featureCategories = [
    {
      icon: <Clock size={24} />,
      title: 'Real-Time Tracking',
      items: [
        { text: 'Monitor shipments as they happen' },
        { text: 'Live updates from customs databases' },
        { text: 'Instant shipment notifications' },
      ],
    },
    {
      icon: <Users size={24} />,
      title: 'Buyer-Seller Intelligence',
      items: [
        { text: 'Access detailed company profiles' },
        { text: 'Contact information database' },
        { text: 'Complete trade histories' },
      ],
    },
    {
      icon: <FileText size={24} />,
      title: 'HS Code Classification',
      items: [
        { text: 'Comprehensive HS code database' },
        { text: 'Detailed product descriptions' },
        { text: 'Tariff and duty information' },
      ],
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Custom Reports',
      items: [
        { text: 'Generate detailed analytics' },
        { text: 'Export data in multiple formats' },
        { text: 'Customizable report templates' },
      ],
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Price Analysis',
      items: [
        { text: 'Track pricing trends over time' },
        { text: 'Market dynamics across regions' },
        { text: 'Competitive pricing insights' },
      ],
    },
    {
      icon: <Globe size={24} />,
      title: 'Market Intelligence',
      items: [
        { text: 'Discover new opportunities' },
        { text: 'Global competitive insights' },
        { text: 'Market trend analysis' },
      ],
    },
    {
      icon: <Shield size={24} />,
      title: 'Verified Data',
      items: [
        { text: 'Official customs authorities' },
        { text: 'Real-time data verification' },
        { text: 'Accuracy guarantee' },
      ],
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Access',
      items: [
        { text: 'Search results in seconds' },
        { text: 'No waiting periods' },
        { text: '24/7 platform availability' },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FeatureGrid
          title={
            <>
              Powerful Features{' '}
              <span className="relative inline-block">
                at Your Fingertips
                <svg
                  viewBox="0 0 120 6"
                  className="absolute left-0 bottom-0 -mb-1 w-full"
                  aria-hidden="true"
                >
                  <path
                    d="M1 4.5C25.46 1.63 78.43 1.39 119 4.5"
                    stroke="#f472b6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </>
          }
          subtitle="Everything you need to make informed trade decisions with comprehensive data and powerful analytics tools."
          illustrationSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop"
          illustrationAlt="Trade data analytics illustration"
          categories={featureCategories}
          buttonText="Explore All Features"
          buttonHref="/contact-us"
        />
      </div>
    </section>
  );
}
