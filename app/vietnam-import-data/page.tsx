import { DataPageHero, DataOverview, DataSample, DataFAQs, TradeStatistics, TopCommodities, TradingPartners } from 'components/DataPages';
import { importDataFaqs } from 'components/Shared/faqs';
import { CTASection } from 'components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vietnam Import Data | Detailed Customs Import Records & Statistics',
  description: 'Complete Vietnam import data with importer details, product info, origin countries, and shipment values. 5M+ records updated daily. Get sample data free.',
  keywords: 'Vietnam import data, Vietnamese importers, import statistics, customs import records, import shipment data',
  openGraph: {
    title: 'Vietnam Import Data | Access Comprehensive Import Records',
    description: 'Detailed Vietnamese import customs data with company-level fields and shipment information. Updated daily with verified records.',
    url: 'https://www.vietnamtradedata.com/vietnam-import-data',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/vietnam-import-data',
  },
};

export default function ImportPage(){
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vietnam Import Data Access",
    "description": "Comprehensive Vietnam import customs data with detailed shipment records",
    "brand": { "@type": "Brand", "name": "VietnamTradeData" },
    "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "lowPrice": "99", "highPrice": "999", "offerCount": "3", "availability": "https://schema.org/InStock" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {/* FAQ JSON-LD for Data page (generated from shared faqs) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": importDataFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      }) }} />
      {/* BreadcrumbList JSON-LD (3-level) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/` },
          { "@type": "ListItem", "position": 2, "name": "Data Services", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/import` },
          { "@type": "ListItem", "position": 3, "name": "Vietnam Import Data", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/Vietnam-import-data` }
        ]
      }) }} />
      <DataPageHero pageType="import" />
      <DataOverview pageType="import" />
      <DataSample type="import" />
      <TradeStatistics type="import" />
      <TopCommodities type="import" />
      <TradingPartners type="import" />
      <DataFAQs type="import" />
      <CTASection />
    </>
  );
}
