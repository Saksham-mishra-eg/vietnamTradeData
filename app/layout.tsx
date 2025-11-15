import React from 'react';
import 'styles/globals.css';
import Providers from './providers';
import { SimpleHeader } from 'components/ui/simple-header';
import { Footer } from 'components/ui/footer';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VietnamTradeData",
  "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vietnamtradedata.com',
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vietnamtradedata.com'}/images/logo.png`,
  "description": "Leading provider of Vietnam import-export trade data and customs intelligence",
  "foundingDate": "2015",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84-24-000-0000",
    "contactType": "Customer Service",
    "availableLanguage": ["English","Vietnamese"],
    "areaServed": "Worldwide"
  }
};

export const metadata = {
  title: 'VietnamTradeData',
  description: 'Your Gateway to Vietnam Trade Intelligence'
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>
        <Providers>
          <SimpleHeader />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
