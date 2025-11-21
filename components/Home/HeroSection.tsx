"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Globe, BarChart3, Database, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute top-32 right-32 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-sm transform rotate-45"></div>
      <div className="hidden sm:block absolute top-40 right-16 w-1 h-6 sm:w-2 sm:h-8 bg-purple-600"></div>
      <div className="hidden sm:block absolute top-48 right-24 w-4 h-1 sm:w-6 sm:h-2 bg-blue-500"></div>

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">Trusted by 20,000+ Global Businesses</span>
              </div>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Unlock Global Trade
              <br className="hidden sm:block" />
              <span className="block sm:inline bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Intelligence Platform</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Access real-time import-export data from 190+ countries with 70M+ shipment records. 
              Make data-driven decisions with comprehensive supplier databases and advanced trade analytics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Link href="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gray-100 border-2 border-gray-300 rounded-full font-semibold text-gray-900 hover:bg-gray-200 transition-all"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Trade Data Dashboard Card */}
            <motion.div
              whileHover={{ rotate: -5, scale: 1.45 }}
              whileTap={{ rotate: 5, scale: 1.95 }}
              animate={{
                scale: [1, 1.02, 1],
                rotate: [3, 6, 3]
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl transition-transform duration-300 max-w-sm mx-auto lg:max-w-none border border-gray-200"
            >
              <div className="mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm text-blue-600 mb-1 sm:mb-2 font-semibold">Vietnam Trade Data</div>
                <div className="text-xs text-gray-600">Live Dashboard</div>
              </div>

              {/* Animated Data Visualization Grid */}
              <div className="grid grid-cols-8 sm:grid-cols-10 gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: 80 }, (_, i) => {
                  const randomValue = Math.random();
                  let bgColor = "bg-gray-200";
                  
                  if (randomValue > 0.7) {
                    if (randomValue > 0.9) bgColor = "bg-blue-500";
                    else if (randomValue > 0.85) bgColor = "bg-purple-500";
                    else if (randomValue > 0.8) bgColor = "bg-cyan-500";
                    else bgColor = "bg-pink-500";
                  }
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: i * 0.01,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: Math.random() * 3
                      }}
                      className={`w-2 h-2 sm:w-3 sm:h-3 ${bgColor} transition-colors`}
                    />
                  );
                })}
              </div>

              <div className="flex justify-between items-center text-gray-900 text-xs sm:text-sm">
                <div>
                  <div className="mb-1 font-semibold">Records: 70M+</div>
                  <div className="text-gray-600 text-xs flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Status: Live
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-1 font-semibold">Countries: 190+</div>
                  <div className="text-gray-600 text-xs">Updated: Real-time</div>
                </div>
              </div>

              {/* Mini Stats */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
                  <Database className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-blue-600 font-semibold">Shipments</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 text-center">
                  <Users className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-purple-600 font-semibold">Suppliers</div>
                </div>
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-2 text-center">
                  <TrendingUp className="w-4 h-4 text-pink-600 mx-auto mb-1" />
                  <div className="text-xs text-pink-600 font-semibold">Analytics</div>
                </div>
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg transform"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full"
            ></motion.div>
            <div className="hidden sm:block absolute top-1/2 -right-8 w-4 h-12 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Scattered pixels */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden sm:block absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden sm:block absolute bottom-12 left-8 w-3 h-3 bg-pink-400 rounded-full"
            ></motion.div>
            <div className="hidden sm:block absolute top-16 left-12 w-2 h-6 bg-cyan-500"></div>

            {/* Floating Icons */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-4 top-1/4 hidden lg:block"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 bottom-1/4 hidden lg:block"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
