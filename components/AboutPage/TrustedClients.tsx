"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'Client 1', logo: '/images/clients/client.jpg' },
  { name: 'Client 2', logo: '/images/clients/client1.png' },
  { name: 'Client 3', logo: '/images/clients/client2.png' },
  { name: 'Client 4', logo: '/images/clients/client3.png' },
  { name: 'Client 5', logo: '/images/clients/client4.png' },
  { name: 'Client 6', logo: '/images/clients/client5.png' },
  { name: 'Client 7', logo: '/images/clients/client6.png' },
  { name: 'Client 8', logo: '/images/clients/client7.jpg' },
  { name: 'Client 9', logo: '/images/clients/client8.png' },
  { name: 'Client 10', logo: '/images/clients/client9.png' },
  { name: 'Client 11', logo: '/images/clients/client10.png' },
  { name: 'Client 12', logo: '/images/clients/client12.png' },
];

export default function TrustedClients() {
  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 backdrop-blur-sm">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Global Trust
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                20,000+ Clients
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Leading global companies rely on our trade intelligence to make informed business decisions
          </motion.p>
        </motion.div>

        {/* Infinite Scroll Logos - Row 1 */}
        <div className="relative mb-8 overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -100 * clients.length / 2],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-32 md:w-40 h-20 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex items-center justify-center p-4 overflow-hidden">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-sm" />
                  </div>
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo */}
                  <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* Infinite Scroll Logos - Row 2 (Reverse Direction) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [-100 * clients.length / 2, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-32 md:w-40 h-20 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex items-center justify-center p-4 overflow-hidden">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur-sm" />
                  </div>
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo */}
                  <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        
      </div>
    </section>
  );
}
