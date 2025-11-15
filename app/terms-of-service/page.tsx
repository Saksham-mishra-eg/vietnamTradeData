import React from 'react';
import CTASection from 'components/Home/CTASection';

export const metadata = {
  title: 'Terms of Service - Vietnam Trade Data',
  description: 'Terms of Service for Vietnam Trade Data platform.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <main className="prose mx-auto p-6">
      <h1>Terms of Service</h1>
      <p>Last updated: November 11, 2025</p>

      <h2>Agreement</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of Vietnam Trade Data (&quot;we&quot;, &quot;us&quot;). By accessing
        or using our services you agree to these Terms.
      </p>

      <h2>Acceptable Use</h2>
      <p>Users must not misuse the service, attempt to break security, or harvest data in violation of these Terms.</p>

      <h2>Account and Billing</h2>
      <p>Where applicable, paid features are billed according to the selected plan. You must provide accurate billing information.</p>

      <h2>Liability Limitations</h2>
      <p>
        To the maximum extent permitted by law, Vietnam Trade Data disclaims all warranties and limits liability for
        damages arising from use of the service. Our total liability will not exceed amounts paid in the prior 12 months.
      </p>

      <h2>Refund Policy</h2>
      <p>
        Refunds, if any, are provided at our discretion and depend on the product and purchase terms. Contact support for requests.
      </p>

      <h2>Termination</h2>
      <p>We may suspend or terminate accounts for breach of these Terms or misuse.</p>

      <h2>Dispute Resolution</h2>
      <p>
        Disputes will be governed by the laws of the country where our company is established. Parties will
        first attempt to resolve disputes amicably; otherwise arbitration or courts may be used as described below.
      </p>

      <h2>Contact</h2>
      <p>For questions about these Terms, contact <a href="mailto:legal@VietnamTradeData.com">legal@VietnamTradeData.com</a>.</p>
    </main>
    <CTASection />
    </>
  );
}
