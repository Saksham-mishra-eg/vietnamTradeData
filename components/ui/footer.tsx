"use client";

import { Database, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white mt-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Database className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">VietnamTradeData</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your Gateway to Vietnam Trade Intelligence
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Twitter className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Facebook className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Data Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Data Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/vietnam-import-data"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Vietnam Import Data
                </Link>
              </li>
              <li>
                <Link
                  href="/vietnam-export-data"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Vietnam Export Data
                </Link>
              </li>
              <li>
                <Link
                  href="/company/a-c-soluciones-sa"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  API Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@vietnamtradedata.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  info@vietnamtradedata.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">+91-11-47048012</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2024 VietnamTradeData. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
