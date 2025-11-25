"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Mail, ArrowRight, AlertCircle, Compass, FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),rgba(239,246,255,0.6))]" />
        
        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl"
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
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Error Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-100 to-orange-100 border border-red-300 text-red-700 font-medium text-xs uppercase tracking-widest mb-6"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              Error 404
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Page </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Not Found
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Oops! The page you&apos;re looking for seems to have gone on a trade expedition. 
              Don&apos;t worry, we&apos;ll help you get back on track.
            </p>

            {/* Quick Links */}
            <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 mb-8 shadow-lg">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Popular Pages</h2>
              <div className="space-y-3">
                <Link 
                  href="/"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                >
                  <Home className="w-5 h-5 text-blue-500" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
                </Link>
                <Link 
                  href="/explore-data"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                >
                  <Compass className="w-5 h-5 text-purple-500" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Explore Data</span>
                </Link>
                <Link 
                  href="/search-live-data"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                >
                  <Search className="w-5 h-5 text-cyan-500" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Search Live Data</span>
                </Link>
                <Link 
                  href="/contact-us"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 text-pink-500" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40"
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-md"
              >
                <Mail className="w-5 h-5" />
                Get Help
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Animated 404 Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Large 404 Text */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <h2 className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 bg-clip-text select-none">
                  404
                </h2>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 shadow-2xl">
                  <Search className="w-full h-full text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 30, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-20 right-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-2xl">
                  <FileQuestion className="w-full h-full text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-20 left-20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-4 shadow-2xl">
                  <Compass className="w-full h-full text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 25, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-10 right-20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-4 shadow-2xl">
                  <AlertCircle className="w-full h-full text-white" />
                </div>
              </motion.div>

              {/* Center Question Mark */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-lg border-4 border-blue-500 flex items-center justify-center shadow-2xl">
                  <span className="text-5xl font-bold text-blue-600">?</span>
                </div>
              </motion.div>

              {/* Animated Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-sm mb-4">
            Can&apos;t find what you&apos;re looking for? Try searching our database
          </p>
          <Link
            href="/search-live-data"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
          >
            <Search className="w-4 h-4" />
            Search Trade Data
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
