import HeroSection from 'components/Home/HeroSection';
import DataSampleSection from 'components/Home/DataSampleSection';
import VietnamTradeStats from 'components/Home/VietnamTradeStats';
import HomeFAQ from 'components/Home/HomeFAQ';
import CTASection from 'components/Home/CTASection';
import CookieBanner from 'components/Home/CookieBanner';
import SEO from 'components/SEO';
import DashboardShowcase from 'components/DataPages/DashboardShowcase';

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
