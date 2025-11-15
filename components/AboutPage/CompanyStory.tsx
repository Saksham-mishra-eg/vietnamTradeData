"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedContainer, TextStagger } from 'components/ui/hero-animated';

export default function CompanyStory(){
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Our Mission */}
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0, duration: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-600 font-medium text-sm uppercase tracking-wider mb-4">
                  Our Mission
                </span>
                <TextStagger
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                  text="Democratizing Trade Intelligence"
                  as="h2"
                />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in making trade intelligence accessible to businesses of every size. Our platform provides transparent, accurate, and timely data that empowers smarter sourcing, pricing, and risk decisions.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Through continuous investments in data quality and privacy-preserving practices, we deliver trade insights that are both trustworthy and actionable for global businesses.
              </p>
            </div>
          </AnimatedContainer>

          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0, duration: 0.2 }}
          >
            <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden shadow-xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=400&auto=format&fit=crop" 
                alt="Team collaboration and data analysis" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedContainer>
        </div>
      </div>

      {/* Our Vision */}
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0, duration: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="h-80 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl overflow-hidden shadow-xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&h=400&auto=format&fit=crop" 
                alt="Global trade and shipping containers" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedContainer>

          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0, duration: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block py-1 px-4 rounded-full bg-purple-100 text-purple-600 font-medium text-sm uppercase tracking-wider mb-4">
                  Our Vision
                </span>
                <TextStagger
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                  text="Leading Global Trade Intelligence"
                  as="h2"
                />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world&apos;s most trusted source of trade intelligence by expanding coverage, leveraging AI for predictive insights, and making data simple to consume.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                We&apos;re building the future of trade data for product teams, procurement specialists, and strategy leaders worldwide.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
