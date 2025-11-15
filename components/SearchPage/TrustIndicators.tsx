"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle } from 'lucide-react';

export default function TrustIndicators() {
  const badges = [
    {
      icon: Shield,
      title: 'SSL Secured',
      description: '256-bit encryption'
    },
    {
      icon: Award,
      title: '99.9% Accuracy',
      description: 'Verified data sources'
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      description: 'Data privacy protected'
    },
    {
      icon: CheckCircle,
      title: 'ISO Certified',
      description: 'Quality assured'
    }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{badge.title}</div>
                  <div className="text-sm text-slate-600">{badge.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
