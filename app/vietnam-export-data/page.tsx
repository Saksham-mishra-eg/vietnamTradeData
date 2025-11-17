import DataPageHero from 'components/DataPages/DataPageHero';
import DataOverview from 'components/DataPages/DataOverview';
import DataSample from 'components/DataPages/DataSample';
import DataFAQs from 'components/DataPages/DataFAQs';
import TradeStatistics from 'components/DataPages/TradeStatistics';
import TopCommodities from 'components/DataPages/TopCommodities';
import TradingPartners from 'components/DataPages/TradingPartners';
import { exportDataFaqs } from 'components/Shared/faqs';
import CTASection from 'components/Home/CTASection';
import SEO from 'components/SEO';

export const metadata = {
  title: 'Vietnam Export Data | VietnamTradeData',
  description: 'Access comprehensive Vietnamese export records with detailed shipment information and company-level fields.'
}

export default function ExportPage(){
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vietnam Export Data Access",
    "description": "Comprehensive Vietnam export customs data with detailed shipment records",
    "brand": { "@type": "Brand", "name": "VietnamTradeData" },
    "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "lowPrice": "99", "highPrice": "999", "offerCount": "3", "availability": "https://schema.org/InStock" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
  };

  return (
    <>
      <SEO title="Vietnam Export Data | Vietnamese Exporter Database & Shipment Details" description="Access Vietnam export data with exporter companies, destination countries, product details. 5M+ export records. Find buyers and analyze export trends." canonical="/Vietnam-export-data" keywords="Vietnam export data, Vietnamese exporters, export statistics, buyer database" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {/* FAQ JSON-LD for Data page (generated from shared faqs) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": exportDataFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      }) }} />
      {/* BreadcrumbList JSON-LD (3-level) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/` },
          { "@type": "ListItem", "position": 2, "name": "Data Services", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/export` },
          { "@type": "ListItem", "position": 3, "name": "Vietnam Export Data", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/Vietnam-export-data` }
        ]
      }) }} />
      <DataPageHero pageType="export" />
      <DataOverview pageType="export" />
      <DataSample type="export" />
      <TradeStatistics type="export" />
      <TopCommodities type="export" />
      <TradingPartners type="export" />
      <DataFAQs type="export" />
      <CTASection />
    </>
  );
}
