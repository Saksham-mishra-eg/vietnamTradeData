"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CTASection(){
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="py-16 mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-br from-ttblue-700 via-ttblue-600 to-ttblue-500 rounded-2xl p-10 text-white relative"
        >
          {/* Animated background particles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"
          />

          {/* Badge with animation */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex flex-wrap items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur border border-white/30 text-sm relative z-10"
          >
            <motion.div 
              className="flex items-center"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image className="size-6 md:size-7 rounded-full border-3 border-white"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="Business user 1" width={50} height={50} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image className="size-6 md:size-7 rounded-full border-3 border-white -translate-x-2"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="Business user 2" width={50} height={50} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image className="size-6 md:size-7 rounded-full border-3 border-white -translate-x-4"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                  alt="Business user 3" width={50} height={50} />
              </motion.div>
            </motion.div>
            <motion.p 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="-translate-x-2 font-medium"
            >
              Join 5,000+ businesses making data-driven decisions
            </motion.p>
          </motion.div>

          {/* Animated heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-3xl mt-5 bg-gradient-to-r from-white via-blue-100 to-cyan-100 text-transparent bg-clip-text relative z-10"
          >
            Ready to Access Vietnam Trade Intelligence?
            <motion.span
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block ml-2"
            >
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 inline-block text-cyan-300" />
            </motion.span>
          </motion.h1>

          {/* Animated button */}
          <Link href="/contact-us">
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-ttblue-700 bg-white hover:bg-blue-50 transition-all rounded-full uppercase text-sm font-semibold mt-8 relative z-10 group shadow-lg"
            >
              <span className="relative z-10">Start Your Free Trial</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-100"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>

          {/* Animated footer text */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.3 }}
            className="mt-3 text-sm relative z-10"
          >
            No credit card required • 7-day free trial
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
