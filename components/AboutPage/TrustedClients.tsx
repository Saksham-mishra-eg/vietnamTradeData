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
  return (
    <section className="py-16 bg-white">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Global Trust
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5,000+ Clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Leading global companies rely on our trade intelligence to make informed business decisions
          </motion.p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: 0.2 + index * 0.02
              }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 relative overflow-hidden">
                {/* Hover gradient background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500"
                />
                
                {/* Logo */}
                <div className="relative w-full h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '5,000+', label: 'Active Clients' },
            { value: '150+', label: 'Countries' },
            { value: '99.9%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: 0.3 + index * 0.03,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
