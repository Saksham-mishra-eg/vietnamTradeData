"use client";

import React, { useState } from 'react';
import { AnimatedContainer, TextStagger } from 'components/ui/hero-animated';
import { Search, BarChart3, Users, Eye } from 'lucide-react';
import NextImage from 'next/image';

const reports = [
  {
    id: 1,
    image: 'https://www.vietnamtrades.com/images/portfolio/recent/1.png',
    fullImage: 'https://www.vietnamtrades.com/images/portfolio/full/1.png',
    title: 'Export Genius - Market Research Company',
    description: 'Comprehensive trade data analytics and market intelligence platform'
  },
  {
    id: 2,
    image: 'https://www.vietnamtrades.com/images/portfolio/recent/2.png',
    fullImage: 'https://www.vietnamtrades.com/images/portfolio/full/2.png',
    title: 'Summary of Vietnam Exports - Volume',
    description: 'Detailed export volume analysis with trends and insights'
  },
  {
    id: 3,
    image: 'https://www.vietnamtrades.com/images/portfolio/recent/3.png',
    fullImage: 'https://www.vietnamtrades.com/images/portfolio/full/3.png',
    title: 'Summary of Vietnam Exports - Exporter Companies',
    description: 'Complete database of active exporter companies and their shipment records'
  }
];

const features = [
  {
    icon: Search,
    title: 'Track Shipment Information',
    description: 'Track information of shipments which depart from or enter into Vietnam with real-time updates',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Search Trade Data Online',
    description: 'Search trade data online and information about Vietnam imports and exports with advanced filters',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Competitor Intelligence',
    description: 'Access actual market intelligence information of your competitors and analyze their strategies',
    color: 'from-orange-500 to-red-500'
  }
];

export default function DashboardShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ duration: 0.3 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm uppercase tracking-wider mb-4">
              Dashboard & Reports
            </span>
          </AnimatedContainer>
          
          <TextStagger
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            text="Powerful Analytics Dashboard"
            as="h2"
          />
          
          <AnimatedContainer 
            transformDirection="bottom"
            transition={{ delay: 0.05, duration: 0.3 }}
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Interactive filters, real-time data, export capabilities and customizable views for comprehensive market intelligence
            </p>
          </AnimatedContainer>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <AnimatedContainer 
              key={index}
              transformDirection="bottom"
              transition={{ delay: 0.1 + index * 0.03, duration: 0.3 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Screenshots Section */}
        <AnimatedContainer 
          transformDirection="bottom"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Screenshots of Reports</h3>
            <p className="text-gray-400">Check out some screenshots of our reports. Click on image to see in full screen.</p>
          </div>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <AnimatedContainer 
              key={report.id}
              transformDirection="bottom"
              transition={{ delay: 0.25 + index * 0.03, duration: 0.3 }}
            >
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(report.fullImage)}
                >
                  <div className="aspect-video bg-gray-800/50 relative">
                    <NextImage
                      src={report.image}
                      alt={report.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{report.title}</h4>
                  <p className="text-sm text-gray-400">{report.description}</p>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-light"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <NextImage
                src={selectedImage}
                alt="Report Preview"
                className="rounded-lg shadow-2xl object-contain"
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
