import { HeroSection, DataSampleSection, VietnamTradeStats, HomeFAQ, CTASection, CookieBanner } from 'components/Home';
import { DashboardShowcase } from 'components/DataPages';
import SEO from 'components/SEO';

export default function Home(){
  return (
    <>
      <SEO
        title="Vietnam Trade Data | Import Export Statistics & Customs Records"
        description="Access comprehensive Vietnam import-export data with 10M+ shipment records. Real-time customs data, supplier discovery, market intelligence. Start free trial today."
        canonical="/"
        keywords="vietnam trade data, import export statistics, customs data, shipment records, supplier finder"
      />
      <HeroSection />
      <VietnamTradeStats />
      <DataSampleSection />
      <DashboardShowcase />
      <HomeFAQ />
      <CTASection />
      <CookieBanner />
    </>
  );
}
