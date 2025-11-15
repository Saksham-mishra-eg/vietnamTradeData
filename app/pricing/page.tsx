import PricingHero from 'components/Pricing/PricingHero';
import ComparisonTable from 'components/Pricing/ComparisonTable';
import PricingFAQs from 'components/Pricing/PricingFAQs';
import { pricingFaqs } from 'components/Shared/faqs';
import CTASection from 'components/Home/CTASection';
import dynamic from 'next/dynamic';
import SEO from 'components/SEO';
import { PricingProvider } from 'contexts/PricingContext';

export const metadata = {
  title: 'Pricing — VietnamTradeData',
  description: 'Flexible pricing for teams and enterprises. Monthly and annual billing options.'
};

// Client-only shell that manages interactive state (loaded dynamically)
const PricingShell = dynamic(() => import('components/Pricing/PricingShell'), { ssr: false });

export default function PricingPage() {
  return (
    <main>
      <SEO title="Pricing Plans | Transparent Vietnam Trade Data Subscription Rates" description="Simple, flexible pricing for Vietnam trade data. Plans starting at $99/month. 7-day free trial, no credit card required. Compare features and choose your plan." canonical="/pricing" keywords="Vietnam trade data pricing, subscription plans, trade data cost" />
      <PricingHero />
      <PricingProvider>
        <PricingShell />
        <ComparisonTable />
      </PricingProvider>
      {/* <ROICalculator /> */}
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
