import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vietnam Trade Data',
  description: 'Privacy policy describing how Vietnam Trade Data collects and processes personal data. Learn about your rights and how we protect your information.',
  keywords: 'privacy policy, data protection, personal data, GDPR, privacy rights, data security',
  openGraph: {
    title: 'Privacy Policy | VietnamTradeData',
    description: 'Our commitment to protecting your privacy and personal data. Comprehensive privacy policy and data protection practices.',
    url: 'https://www.vietnamtradedata.com/privacy-policy',
    siteName: 'VietnamTradeData',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.vietnamtradedata.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
