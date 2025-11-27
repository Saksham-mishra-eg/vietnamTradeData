"use client";

import React from 'react';
import { Calendar, FileText, LogIn, ArrowRight } from 'lucide-react';

export default function CTACards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Schedule Demo */}
      <CTACard
        icon={<Calendar className="w-8 h-8" />}
        title="Schedule a Demo"
        description="See how our platform can transform your trade intelligence operations"
        buttonText="Book Demo"
        buttonHref="/contact-us"
        gradient="from-blue-600 to-cyan-600"
        iconBg="from-blue-500 to-cyan-500"
      />

      {/* Try Free */}
      <CTACard
        icon={<FileText className="w-8 h-8" />}
        title="Try Free Sample"
        description="Download a free sample dataset and explore the depth of our trade data"
        buttonText="Get Sample"
        buttonHref="/explore-data"
        gradient="from-purple-600 to-pink-600"
        iconBg="from-purple-500 to-pink-500"
        featured
      />

      {/* Sign In */}
      <CTACard
        icon={<LogIn className="w-8 h-8" />}
        title="Already a Member?"
        description="Sign in to access your full trade data dashboard and analytics"
        buttonText="Sign In"
        buttonHref="/signin"
        gradient="from-green-600 to-emerald-600"
        iconBg="from-green-500 to-emerald-500"
      />
    </div>
  );
}

interface CTACardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  gradient: string;
  iconBg: string;
  featured?: boolean;
}

function CTACard({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  gradient,
  iconBg,
  featured = false,
}: CTACardProps) {
  return (
    <div
      className={`
        relative bg-white rounded-2xl shadow-lg border-2 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
        ${featured ? 'border-orange-400 ring-4 ring-orange-100' : 'border-gray-200'}
      `}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Button */}
      <a
        href={buttonHref}
        className={`
          flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r ${gradient} hover:shadow-xl transition-all duration-300 group
        `}
      >
        {buttonText}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
