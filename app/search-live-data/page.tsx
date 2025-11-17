import React from 'react';
import { Metadata } from 'next';
import SearchHero from 'components/SearchPage/SearchHero';
import SearchInterface from 'components/SearchPage/SearchInterface';
import KeyFeatures from 'components/SearchPage/KeyFeatures';
import SampleResults from 'components/SearchPage/SampleResults';
import SearchBenefits from 'components/SearchPage/SearchBenefits';
import SearchCTA from 'components/SearchPage/SearchCTA';
import TrustIndicators from 'components/SearchPage/TrustIndicators';

export const metadata: Metadata = {
  title: 'Search Live Data - Real-Time Global Trade Data | VietnamTradeData',
  description: 'Access real-time import-export shipment records instantly. Search by HS Code, product, company name, or country. Millions of verified trade data records updated daily.',
  keywords: 'live trade data, search shipments, HS code lookup, import export data, customs data search, global trade intelligence',
};

export default function SearchLiveDataPage() {
  return (
    <main className="min-h-screen bg-white">
      <SearchHero />
      <SearchInterface />
      <KeyFeatures />
      <SampleResults />
      <SearchBenefits />
      <TrustIndicators />
      <SearchCTA />
    </main>
  );
}
