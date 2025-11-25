"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Search, LineChart, Users, ShieldCheck, TrendingUp, ArrowRight, Sparkles, Zap } from 'lucide-react';

const processItems = [
  {
    icon: Database,
    title: 'Data Collection',
    description: 'Comprehensive import-export data from Vietnamese customs',
    color: 'from-blue-500 to-cyan-500',
    stats: '70M+ Records',
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-400'
  },
  {
    icon: Search,
    title: 'Supplier Discovery',
    description: 'Find verified suppliers and buyers worldwide',
    color: 'from-purple-500 to-pink-500',
    stats: '190+ Countries',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-400'
  },
  {
    icon: LineChart,
    title: 'Market Analysis',
    description: 'Real-time trade statistics and market trends',
    color: 'from-orange-500 to-red-500',
    stats: 'Real-time',
    bgColor: 'bg-orange-500/20',
    textColor: 'text-orange-400'
  },
  {
    icon: Users,
    title: 'Competitor Intelligence',
    description: 'Track competitor activities and strategies',
    color: 'from-green-500 to-emerald-500',
    stats: '2.2M+ Buyers',
    bgColor: 'bg-green-500/20',
    textColor: 'text-green-400'
  },
  {
    icon: ShieldCheck,
    title: 'Risk Assessment',
    description: 'Evaluate business risks with verified data',
    color: 'from-indigo-500 to-purple-500',
    stats: 'Secure',
    bgColor: 'bg-indigo-500/20',
    textColor: 'text-indigo-400'
  },
  {
    icon: TrendingUp,
    title: 'Opportunity Discovery',
    description: 'Identify new market opportunities globally',
    color: 'from-pink-500 to-rose-500',
    stats: '$5.72T+',
    bgColor: 'bg-pink-500/20',
    textColor: 'text-pink-400'
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background with Floating Text */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),rgba(239,246,255,0.6))]" />
        
        {/* Animated Floating Keywords Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {processItems.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute text-4xl md:text-6xl lg:text-8xl font-bold ${item.textColor} blur-[3px] select-none pointer-events-none`}
              initial={{
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 - 50 + '%',
                opacity: 0.1,
              }}
              animate={{
                x: [
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                ],
                y: [
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                ],
                opacity: activeIndex === index ? 0.15 : 0.08,
                scale: activeIndex === index ? 1.2 : 1,
              }}
              transition={{
                duration: 20 + index * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                transform: `rotate(${-15 + index * 5}deg)`,
              }}
            >
              {item.title.split(' ')[0]}
            </motion.div>
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated SVG Particles */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              r="2"
              fill={processItems[i % processItems.length].textColor.replace('text-', '')}
              filter="url(#glow)"
              initial={{
                cx: Math.random() * 100 + '%',
                cy: Math.random() * 100 + '%',
                opacity: 0.15,
              }}
              animate={{
                cx: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                ],
                cy: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                ],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Connecting Lines */}
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity="0.1"
              initial={{
                x1: Math.random() * 100 + '%',
                y1: Math.random() * 100 + '%',
                x2: Math.random() * 100 + '%',
                y2: Math.random() * 100 + '%',
              }}
              animate={{
                x1: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                y1: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                x2: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                y2: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              }}
              transition={{
                duration: 15 + i,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header with Active Item Display */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 text-blue-700 font-medium text-xs uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <Zap className="w-3.5 h-3.5" />
            What We Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900">Empowering </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Global Trade
            </span>
            <br />
            <span className="text-gray-900">With Intelligence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business decisions with comprehensive trade data, market intelligence, and real-time insights from Vietnam&apos;s dynamic trade ecosystem.
          </motion.p>

          {/* Active Service Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${processItems[activeIndex].color} p-3 shadow-lg`}>
                    {React.createElement(processItems[activeIndex].icon, { className: "w-full h-full text-white" })}
                  </div>
                  <div className="text-left">
                    <div className={`text-sm font-bold ${processItems[activeIndex].textColor}`}>
                      {processItems[activeIndex].title}
                    </div>
                    <div className="text-xs text-gray-600">{processItems[activeIndex].stats}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Indicators */}
              <div className="flex gap-2 justify-center mt-4">
                {processItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {processItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
              onHoverStart={() => setActiveIndex(index)}
              className="group relative cursor-pointer"
            >
              {/* Animated Border Gradient - More visible when active */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r rounded-2xl opacity-0 blur-sm transition-all duration-500 ${
                activeIndex === index ? 'opacity-75 group-hover:opacity-100' : 'group-hover:opacity-100'
              }`} />
              
              <div className={`relative bg-transparent  rounded-2xl p-8 transition-all duration-500 h-full overflow-hidden shadow-lg ${
                activeIndex === index ? 'border-blue-300 scale-105 shadow-xl shadow-blue-200/50' : 'border-gray-200 group-hover:border-blue-200'
              }`}>
                {/* Shimmer Effect */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -skew-x-12 animate-[shimmer_2s_ease-in-out_infinite]" />
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.bgColor} rounded-bl-[100px] transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />

                {/* Animated Connection Line */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <motion.path
                        d="M 0,0 L 100%,100%"
                        stroke="url(#cardGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <defs>
                        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                )}

                {/* Icon with Gradient Ring */}
                <div className="relative mb-6">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <item.icon className={`w-12 h-12 transition-all duration-500 ${
                      activeIndex === index ? 'text-blue-600 scale-110' : 'text-gray-700 group-hover:text-blue-600'
                    }`} />
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.3, duration: 0.4 }}
                    animate={{
                      scale: activeIndex === index ? 1.1 : 1,
                    }}
                    className="absolute -top-2 -right-2"
                  >
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold shadow-lg`}>
                      {item.stats}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative space-y-3">
                  <h3 className={`text-xl font-bold transition-all duration-500 ${
                    activeIndex === index ? 'text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text' : 'text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    activeIndex === index ? 'text-gray-700' : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className={`absolute bottom-6 right-6 transform transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="/explore-data"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 overflow-hidden"
            >
              <span className="relative z-10">Explore Trade Intelligence</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-md"
            >
              <Sparkles className="w-5 h-5" />
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}
