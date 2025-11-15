"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, TrendingUp, Shield, Users } from 'lucide-react';

export default function AboutHero(){
  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "5,000+", label: "Happy Clients" },
    { icon: TrendingUp, value: "150+", label: "Countries" },
    { icon: Shield, value: "99.9%", label: "Data Accuracy" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-ttblue-700 via-ttblue-600 to-ttblue-500 text-white py-24 overflow-hidden">
      {/* Animated background patterns */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-1/4 w-32 h-32 border-2 border-white/20 rounded-lg rotate-12"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-white/20 rounded-full"
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        {/* Breadcrumb with animation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center text-sm mb-8"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
          >
            Home
          </motion.span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-70" />
          <span className="font-semibold">About Us</span>
        </motion.nav>

        {/* Main heading with staggered animation */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="inline-block mb-4"
            >
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 text-sm font-medium">
                ✨ Trusted Since 2011
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Empowering Global Trade
              <br />
              <motion.span
                initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
                animate={{ 
                  opacity: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  opacity: { duration: 0.4, delay: 0.3 },
                  backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" }
                }}
                className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                with Data Intelligence
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed"
            >
              Your trusted partner in accessing comprehensive Vietnam trade data. 
              We combine deep domain expertise with modern data engineering to unlock actionable insights.
            </motion.p>
          </motion.div>

          {/* Stats grid with staggered animation */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all group"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.6 + index * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-2xl md:text-3xl font-bold mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-blue-100 opacity-90">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"
      />
    </section>
  );
}
