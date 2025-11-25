import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Vietnam Trade Data',
  description: 'Learn about how Vietnam Trade Data uses cookies and similar technologies on our website. Understand your choices and how to manage cookie settings.',
  keywords: 'cookie policy, cookies, privacy, data collection, cookie settings, tracking technologies',
  openGraph: {
    title: 'Cookie Policy | VietnamTradeData',
    description: 'Understand how we use cookies and similar technologies to improve your experience on our platform.',
    url: 'https://www.vietnamtradedata.com/cookie-policy',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/cookie-policy',
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
