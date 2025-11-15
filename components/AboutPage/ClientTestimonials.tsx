"use client";

import React from 'react';
import TestimonialSlider from 'components/ui/testimonial-slider';

const testimonials = [
  {
    id: 1,
    quote: 'VietnamTradeData transformed our sourcing strategy. The depth of trade intelligence and real-time insights helped us identify the best suppliers in Vietnam.',
    name: 'James Wilson',
    username: 'CEO, TechImports Inc.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400'
  },
  {
    id: 2,
    quote: 'We found 50+ suppliers within the first month. The platform is incredibly intuitive and the data quality is outstanding.',
    name: 'Lina Perez',
    username: 'Director, Global Sourcing',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400'
  },
  {
    id: 3,
    quote: 'Excellent data quality and support. The customer service team is always responsive and the insights have been invaluable for our import operations.',
    name: 'Ozan Kaya',
    username: 'Operations Manager, Logistics Pro',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400'
  },
  {
    id: 4,
    quote: 'The level of detail in Vietnam trade data has exceeded our expectations. We can now make informed decisions with confidence.',
    name: 'Sarah Chen',
    username: 'VP of Supply Chain, Global Trade Corp',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400'
  },
  {
    id: 5,
    quote: 'An innovative platform that truly solved our market research challenges. The export data analytics are game-changing.',
    name: 'Michael Torres',
    username: 'Business Analyst, Trade Insights Ltd',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'
  },
];

export default function ClientTestimonials() {
  return (
    <TestimonialSlider 
      testimonials={testimonials}
      title="Client Testimonials"
      subtitle="What Our Clients Say About Vietnam Trade Data"
    />
  );
}
