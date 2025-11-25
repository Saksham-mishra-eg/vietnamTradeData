import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Vietnam Trade Data',
  description: 'Terms of Service for using Vietnam Trade Data\'s trade intelligence platform. Read our terms and conditions, acceptable use policy, and user agreements.',
  keywords: 'terms of service, terms and conditions, user agreement, acceptable use policy, legal terms',
  openGraph: {
    title: 'Terms of Service | VietnamTradeData',
    description: 'Legal terms and conditions for using VietnamTradeData platform. Understand your rights and responsibilities.',
    url: 'https://www.vietnamtradedata.com/terms-of-service',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/terms-of-service',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
