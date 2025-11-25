import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Vietnam Trade Data',
  description: 'Thank you for signing up with Vietnam Trade Data. We\'ll be in touch soon with your trade intelligence access.',
  openGraph: {
    title: 'Thank You for Signing Up | VietnamTradeData',
    description: 'Your request has been received. Our team will contact you shortly to get you started with Vietnam trade intelligence.',
    url: 'https://www.vietnamtradedata.com/thankyou',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/thankyou',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
