"use client";

import React from 'react';
import Link from 'next/link';
import { AnimatedContainer, BgGradient, Hero, TextStagger } from 'components/ui/hero-animated';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';

export default function HeroSection(){
  return (
    <Hero className="min-h-[80vh] px-4 py-12 md:px-6 lg:px-8" aria-label="Hero">
      <BgGradient
        gradientColors="blue"
        gradientSize="lg"
        gradientPosition="top"
      />
      
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 text-white space-y-6">
          <TextStagger
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            text="Unlock Vietnam Trade Intelligence"
            as="h1"
          />
          
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0.05, duration: 0.3 }}
          >
            <p className="text-lg text-slate-200 max-w-2xl">
              Access import & export data, real-time insights, and analytics to make faster, data-driven trade decisions. Trusted by traders, analysts, and logistics teams worldwide.
            </p>
          </AnimatedContainer>

          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0.08, duration: 0.3 }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span>70M+ Shipment Records</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span>Real-Time Data Updates</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span>100+ Countries Coverage</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span>Advanced Analytics Dashboard</span>
              </li>
            </ul>
          </AnimatedContainer>

          <AnimatedContainer 
            className="flex flex-wrap gap-4 items-center"
            transformDirection="bottom"
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-slate-100 font-semibold rounded-full"
              asChild
            >
              <Link href="/contact-us">Start Free Trial</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full"
              asChild
            >
              <Link href="/pricing">Watch Demo</Link>
            </Button>
          </AnimatedContainer>

         
        </div>

        {/* Right Content - Form */}
        <div className="lg:col-span-5">
          <AnimatedContainer 
            transformDirection="right"
            transition={{ delay: 0.08, duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="text-gray-900 text-xl font-semibold mb-4">Get a free sample</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input 
                    aria-label="First Name" 
                    placeholder="First name" 
                  />
                  <Input 
                    aria-label="Last Name" 
                    placeholder="Last name" 
                  />
                </div>
                <Input 
                  aria-label="Contact Number" 
                  type="tel"
                  placeholder="Contact Number" 
                />
                <Input 
                  aria-label="Company Name" 
                  placeholder="Company Name" 
                />
                <Input 
                  aria-label="Work Email ID" 
                  type="email"
                  placeholder="Work Email ID" 
                />
                <Textarea 
                  aria-label="Message" 
                  placeholder="Message"
                  className="min-h-[80px]"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg"
                >
                  Request For Demo
                </Button>
              </form>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </Hero>
  );
}
