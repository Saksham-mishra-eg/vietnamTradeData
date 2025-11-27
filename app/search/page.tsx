import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import SearchResultsPage from '../../components/SearchResults/SearchResultsPage';

export const metadata: Metadata = {
  title: 'Trade Search Results | Vietnam Import Export Data | VietnamTradeData',
  description: 'Search and explore Vietnam trade data with advanced filters. Access detailed shipment records, importer/exporter information, and trade statistics.',
  keywords: 'trade search, shipment data, import export search, HS code search, trade intelligence, Vietnam customs data',
  openGraph: {
    title: 'Trade Search Results | VietnamTradeData',
    description: 'Advanced trade data search with comprehensive filters and real-time shipment information.',
    url: 'https://www.vietnamtradedata.com/search',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/search',
  },
};

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading search results...</p>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SearchResultsPage />
    </Suspense>
  );
}
