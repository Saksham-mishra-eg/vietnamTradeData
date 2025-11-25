import React from 'react';
import { AboutHero, CompanyStory, CompanyStats, OurValues, TrustedClients } from 'components/AboutPage';
import { CTASection } from 'components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Leading Vietnam Trade Data Provider Since 2015',
  description: 'Learn about VietnamTradeData - 10+ years providing accurate trade intelligence to 5,000+ global businesses. Mission, team, and company values.',
  keywords: 'about VietnamTradeData, trade data provider, company information, trade intelligence team',
  openGraph: {
    title: 'About VietnamTradeData | Leading Trade Intelligence Provider',
    description: 'Discover our mission to provide accurate Vietnam trade data and global customs intelligence to businesses worldwide.',
    url: 'https://www.vietnamtradedata.com/about-us',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/about-us',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <CompanyStats />
      <OurValues />
      {/* <TeamSection /> */}
      <TrustedClients />
      <CTASection />
    </main>
  );
}
