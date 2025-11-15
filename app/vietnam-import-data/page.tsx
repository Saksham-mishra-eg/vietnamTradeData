import DataPageHero from 'components/DataPages/DataPageHero';
import DataOverview from 'components/DataPages/DataOverview';
import DataSample from 'components/DataPages/DataSample';
import DataFAQs from 'components/DataPages/DataFAQs';
import TradeStatistics from 'components/DataPages/TradeStatistics';
import TopCommodities from 'components/DataPages/TopCommodities';
import TradingPartners from 'components/DataPages/TradingPartners';
import { importDataFaqs } from 'components/Shared/faqs';
import CTASection from 'components/Home/CTASection';
import SEO from 'components/SEO';

export const metadata = {
  title: 'Vietnam Import Data | VietnamTradeData',
  description: 'Access comprehensive Vietnamese import records with detailed shipment information and company-level fields.'
}

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
      <SEO title="Vietnam Import Data | Detailed Customs Import Records & Statistics" description="Complete Vietnam import data with importer details, product info, origin countries, and shipment values. 5M+ records updated daily. Get sample data free." canonical="/Vietnam-import-data" keywords="Vietnam import data, Vietnamese importers, import statistics, customs import records" />
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
      {/* <KeyBenefits /> */}
      <TradeStatistics type="import" />
      <TopCommodities type="import" />
      <TradingPartners type="import" />
      <DataFAQs type="import" />
      <CTASection />
    </>
  );
}
