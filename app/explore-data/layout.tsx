import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Data | Interactive Vietnam Trade Data Explorer',
  description: 'Explore Vietnam import-export data with advanced filters. Search by company, product, HS code, country. Real-time data visualization and detailed shipment records.',
  keywords: 'explore trade data, Vietnam customs data, shipment explorer, trade data search, import export explorer',
  openGraph: {
    title: 'Explore Vietnam Trade Data | Interactive Data Explorer',
    description: 'Interactive platform to explore, filter, and analyze Vietnam import-export shipment records with real-time insights.',
    url: 'https://www.vietnamtradedata.com/explore-data',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/explore-data',
  },
};

export default function ExploreDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
