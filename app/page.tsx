import { HeroSection, DataSampleSection, VietnamTradeStats, WhatWeDo, CTASection, CookieBanner, TradeDataAPI, TradeIntelligenceSection } from 'components/Home';
import { DashboardShowcase } from 'components/DataPages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vietnam Trade Data Platform | Global Import–Export Intelligence',
  description: 'Access Vietnam import–export data, HS codes & global shipment insights. Analyze markets, find buyers & track competitors with our AI trade intelligence platform.',
  keywords: 'vietnam trade data, import export statistics, global shipment records, trade intelligence platform, HS codes, supplier finder, market analysis',
  openGraph: {
    title: 'Vietnam Trade Intelligence Platform – Real-Time Global Shipment Data',
    description: 'Access verified Vietnam trade data and global customs insights to analyze markets, discover buyers, and benchmark competitors with our AI-driven trade intelligence platform.',
    url: 'https://www.vietnamtradedata.com',
    siteName: 'VietnamTradeData',
    images: [
      {
        url: '/images/og-vietnam-trade-dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Vietnam trade data dashboard showing HS code analytics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vietnam Trade Intelligence Platform – Real-Time Global Shipment Data',
    description: 'Access verified Vietnam trade data and global customs insights to analyze markets, discover buyers, and benchmark competitors with our AI-driven trade intelligence platform.',
    images: ['/images/og-vietnam-trade-dashboard.jpg'],
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home(){
  return (
    <>
      <HeroSection />
      <TradeIntelligenceSection />
      <DashboardShowcase />
      <DataSampleSection />
      <VietnamTradeStats />
      <TradeDataAPI />
      <WhatWeDo />
      {/* <HomeFAQ /> */}
      <CTASection />
      <CookieBanner />
    </>
  );
}
