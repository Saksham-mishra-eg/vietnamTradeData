import React from 'react';
import { ContactHero, ContactOptions, OfficeLocations } from 'components/ContactPage';
import { contactFaqs } from 'components/Shared/faqs';
import { CTASection } from 'components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with VietnamTradeData Support Team',
  description: 'Contact VietnamTradeData for demos, support, or inquiries. Multiple offices worldwide, 24/7 support, 2-hour response time. Schedule a call or chat now.',
  keywords: 'contact Vietnam trade data, customer support, schedule demo, trade data inquiries',
  openGraph: {
    title: 'Contact VietnamTradeData | Get Expert Trade Intelligence Support',
    description: 'Reach out for demos, support, partnerships, and media inquiries. Fast response and dedicated assistance worldwide.',
    url: 'https://www.vietnamtradedata.com/contact-us',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/contact-us',
  },
};

export default function ContactPage(){
  return (
    <main>
      {/* FAQ JSON-LD for Contact page (generated from shared faqs) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": contactFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      }) }} />
      {/* BreadcrumbList JSON-LD (3-level) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/` },
          { "@type": "ListItem", "position": 2, "name": "Company", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/about-us` },
          { "@type": "ListItem", "position": 3, "name": "Contact Us", "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com'}/contact-us` }
        ]
      }) }} />
      <ContactHero />
      <ContactOptions />
      <OfficeLocations />
      <CTASection />
    </main>
  );
}
