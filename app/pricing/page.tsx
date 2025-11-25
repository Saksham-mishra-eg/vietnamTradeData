import { ComparisonTable, PricingFAQs } from 'components/Pricing';
import { pricingFaqs } from 'components/Shared/faqs';
import { CTASection } from 'components/Home';
import dynamic from 'next/dynamic';
import { PricingProvider } from 'contexts/PricingContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans | Transparent Vietnam Trade Data Subscription Rates',
  description: 'Simple, flexible pricing for Vietnam trade data. Plans starting at $99/month. 7-day free trial, no credit card required. Compare features and choose your plan.',
  keywords: 'Vietnam trade data pricing, subscription plans, trade data cost, pricing comparison',
  openGraph: {
    title: 'VietnamTradeData Pricing | Flexible Plans for Every Business',
    description: 'Transparent pricing for Vietnam trade intelligence. Monthly and annual billing options. Choose the right plan for your needs.',
    url: 'https://www.vietnamtradedata.com/pricing',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/pricing',
  },
};

// Client-only shell that manages interactive state (loaded dynamically)
const PricingShell = dynamic(() => import('components/Pricing').then(mod => ({ default: mod.PricingShell })), { ssr: false });

export default function PricingPage() {
  return (
    <main>
      <PricingProvider>
        <PricingShell />
        <ComparisonTable />
      </PricingProvider>
      <PricingFAQs />
      <CTASection />
      {/* FAQ JSON-LD for Pricing (generated from shared faqs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pricingFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
          })
        }}
      />
      {/* BreadcrumbList JSON-LD (3-level) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/` },
            { "@type": "ListItem", "position": 2, "name": "Company", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/about-us` },
            { "@type": "ListItem", "position": 3, "name": "Pricing", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/pricing` }
          ]
        })
      }} />
    </main>
  );
}
