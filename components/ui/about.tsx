"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutFeature {
  icon: string;
  title: string;
  desc: string;
}

interface AboutProps {
  title?: string;
  description?: string;
  features?: AboutFeature[];
}

export function About({
  title = "About our apps",
  description = "A visual collection of our most recent works - each piece crafted with intention, emotion and style.",
  features = [
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
      title: "Lightning-Fast Performance",
      desc: "Built with speed — minimal load times and optimized."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
      title: "Beautifully Designed Components",
      desc: "Modern, pixel-perfect UI components ready for any project."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      title: "Plug-and-Play Integration",
      desc: "Simple setup with support for React, Next.js and Tailwind css."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png",
      title: "Clear & Comprehensive",
      desc: "Get started fast with usage examples, live previews and code."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png",
      title: "Fully Customizable",
      desc: "Easily adapt styles, colors and layout to match your brand or product."
    },
    {
      icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png",
      title: "Accessibility First",
      desc: "Built with WCAG standards in mind to ensure inclusive user experiences."
    }
  ]
}: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      {/* soft glow background with animation */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute -top-64 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FBFFE1] blur-[300px] -z-10"
        aria-hidden="true"
      />

      {/* header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-2 text-sm md:text-base text-slate-500"
        >
          {description}
        </motion.p>
      </motion.header>

      {/* grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
      >
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
  index = 0,
}: {
  icon: string;
  title: string;
  desc: string;
  index?: number;
}) {
  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      variants={featureVariants}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 10 
        }
      }}
      className="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:shadow-md relative overflow-hidden"
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500"
      />

      <motion.div 
        initial={{ rotate: 0, scale: 1 }}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="size-10 shrink-0 rounded bg-indigo-50 border border-indigo-200 p-2 relative z-10"
      >
        <Image src={icon} alt="" className="h-full w-full object-contain" fill sizes="40px" />
      </motion.div>

      <div className="relative z-10">
        <motion.h3 
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
          className="text-base font-medium text-slate-700"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 + index * 0.05, duration: 0.3 }}
          className="mt-1 text-sm leading-relaxed text-slate-500"
        >
          {desc}
        </motion.p>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ 
          x: "100%",
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />
    </motion.div>
  );
}
