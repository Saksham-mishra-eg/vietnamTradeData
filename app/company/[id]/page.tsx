import React from 'react';
import { Metadata } from 'next';
import CompanyOverviewClient from 'components/CompanyProfile/CompanyOverviewClient';
import SEO from 'components/SEO';

export const metadata: Metadata = {
  title: 'Company Overview - Trade Data Analysis | VietnamTradeData',
  description: 'Detailed company trade profile with shipment records, import/export statistics, and business intelligence.',
};

export default function CompanyOverviewPage({ params }: { params: { id: string } }) {
  return (
    <>
      <SEO 
        title="Company Trade Profile | Detailed Import Export Analysis" 
        description="Access comprehensive company trade data including shipment history, trading partners, commodity analysis, and market intelligence."
        canonical={`/company/${params.id}`}
        keywords="company profile, trade data, import export analysis, shipment history"
      />
      <CompanyOverviewClient companyId={params.id} />
    </>
  );
}
