import React from 'react';
import { ContactHero, ContactOptions, OfficeLocations } from 'components/ContactPage';
import { contactFaqs } from 'components/Shared/faqs';
import { CTASection } from 'components/Home';
import SEO from 'components/SEO';

export const metadata = {
  title: 'Contact Us | Get in Touch with VietnamTradeData',
  description: 'Contact VietnamTradeData for demos, support, partnerships, and media inquiries. Fast response and dedicated assistance.',
};

export default function ContactPage(){
  return (
    <main>
      <SEO title="Contact Us | Get in Touch with VietnamTradeData Support Team" description="Contact VietnamTradeData for demos, support, or inquiries. Multiple offices worldwide, 24/7 support, 2-hour response time. Schedule a call or chat now." canonical="/contact-us" keywords="contact Vietnam trade data, customer support, schedule demo" />
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
