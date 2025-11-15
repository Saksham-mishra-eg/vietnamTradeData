import React from 'react';
import AboutHero from 'components/AboutPage/AboutHero';
import CompanyStory from 'components/AboutPage/CompanyStory';
import CompanyStats from 'components/AboutPage/CompanyStats';
import OurValues from 'components/AboutPage/OurValues';
import TeamSection from 'components/AboutPage/TeamSection';
import TrustedClients from 'components/AboutPage/TrustedClients';
import CTASection from 'components/Home/CTASection';
import SEO from 'components/SEO';

export const metadata = {
  title: 'About Us — VietnamTradeData',
  description: 'Learn about VietnamTradeData — our story, mission, team, values, and the customers we serve.',
};

export default function AboutPage() {
  return (
    <main>
      <SEO title="About Us | Leading Vietnam Trade Data Provider Since 2015" description="Learn about VietnamTradeData - 10+ years providing accurate trade intelligence to 5,000+ global businesses. Mission, team, and company values." canonical="/about-us" keywords="about VietnamTradeData, trade data provider, company information" />
      <AboutHero />
      <CompanyStory />
      <CompanyStats />
      <OurValues />
      <TeamSection />
      <TrustedClients />
      <CTASection />
    </main>
  );
}
