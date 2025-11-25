import React from 'react';
import type { Metadata } from 'next';
import CompanyOverviewClient from 'components/CompanyProfile/CompanyOverviewClient';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  // You can fetch company data here to generate dynamic metadata
  const companyId = params.id;
  
  return {
    title: `Company Profile ${companyId} | Trade Data Analysis | VietnamTradeData`,
    description: `Detailed company trade profile with shipment records, import/export statistics, trading partners, and business intelligence for company ${companyId}.`,
    keywords: 'company profile, trade data, import export analysis, shipment history, trading partners, business intelligence',
    openGraph: {
      title: `Company Trade Profile | Vietnam Trade Data Analysis`,
      description: 'Access comprehensive company trade data including shipment history, trading partners, commodity analysis, and market intelligence.',
      url: `https://www.vietnamtradedata.com/company/${companyId}`,
      siteName: 'VietnamTradeData',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.vietnamtradedata.com/company/${companyId}`,
    },
  };
}

export default function CompanyOverviewPage({ params }: { params: { id: string } }) {
  return (
    <CompanyOverviewClient companyId={params.id} />
  );
}
