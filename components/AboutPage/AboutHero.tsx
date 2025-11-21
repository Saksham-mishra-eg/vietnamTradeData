"use client";

import React, { useEffect } from 'react';
import ScrollExpandMedia from 'components/ui/scroll-expansion-hero';
import { Award, TrendingUp, Shield, Users } from 'lucide-react';

export default function AboutHero() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "20,000+", label: "Happy Clients" },
    { icon: TrendingUp, value: "190+", label: "Countries" },
    { icon: Shield, value: "100%", label: "Data Accuracy" }
  ];

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1280&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
      title="About Vietnam Trade Data"
      date="Trusted Since 2011"
      scrollToExpand="Scroll to Explore"
      textBlend
    >
      <div className="max-w-6xl mx-auto">
        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="text-gray-900 dark:text-gray">Empowering Global Trade with{' '}</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data Intelligence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-900 dark:text-gray-400 leading-relaxed mb-6 font-medium">
            Your trusted partner in accessing comprehensive Vietnam trade data. We combine deep domain expertise 
            with modern data engineering to unlock actionable insights for businesses worldwide.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Since 2011, we&apos;ve been helping importers, exporters, manufacturers, and market researchers make 
            informed decisions through real-time access to Vietnam&apos;s import-export data across 190+ countries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* What We Do Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            What We Provide
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Comprehensive Data Coverage
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>70M+ shipment records with real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Complete importer and exporter profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Detailed product descriptions and HS codes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Advanced Analytics
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Market trend analysis and forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Competitor intelligence and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Custom reports and API integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
