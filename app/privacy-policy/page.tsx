import React from 'react';
import CTASection from 'components/Home/CTASection';

export const metadata = {
  title: 'Privacy Policy - Vietnam Trade Data',
  description: 'Privacy policy describing how Vietnam Trade Data collects and processes personal data.',
};

export default function PrivacyPolicyPage() {
  const siteEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'privacy@VietnamTradeData.com';
  return (
    <>
      <main className="prose mx-auto p-6">
      <h1>Privacy Policy</h1>
      <p>Last updated: November 11, 2025</p>

      <h2>Introduction</h2>
      <p>
        Vietnam Trade Data (“we”, “our”, “us”) provides trade intelligence services and is committed to protecting
        the privacy of our users. This policy explains what data we collect, why we collect it, how we use it,
        and the rights available to you.
      </p>

      <h2>Data We Collect</h2>
      <ul>
        <li>Account information: name, email, organization, billing details (where applicable).</li>
        <li>Contact form submissions: message content, email, attached files (if provided).</li>
        <li>Usage data: pages visited, features used, timestamps, IP address, user agent.</li>
        <li>Cookies and tracking: cookies for authentication, preferences, analytics and advertising (where enabled).</li>
      </ul>

      <h2>How We Use Your Data</h2>
      <ul>
        <li>To provide and maintain our services, and respond to support requests.</li>
        <li>To analyze usage and improve product features.</li>
        <li>To send transactional messages (account notifications, billing receipts).</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>

      <h2>Legal Basis (for EU users)</h2>
      <p>
        Where applicable, we process personal data on the basis of consent, contract performance, legitimate
        interests (for fraud prevention, analytics), or legal obligations.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies and similar technologies for necessary site functionality, remembering preferences,
        and analytics. You can manage cookie preferences through the Cookie Preferences center on the site.
      </p>

      <h2>Third Parties</h2>
      <p>
        We may share data with service providers (e.g., email providers, analytics, payment processors).
        Where required, we ensure appropriate safeguards (Data Processing Addenda, Standard Contractual Clauses).
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal data for as long as necessary to provide services, comply with legal obligations
        and resolve disputes. Specific retention periods are documented in our internal data retention policy.
      </p>

      <h2>Your Rights</h2>
      <ul>
        <li>Access: Request a copy of your data.</li>
        <li>Correction: Ask us to correct inaccurate information.</li>
        <li>Deletion: Request deletion of your personal data (see <a href="/api/user/delete-data">data deletion</a>).</li>
        <li>Portability: Request a machine-readable copy of your data.</li>
        <li>Objection/Restriction: Object to processing in certain circumstances.</li>
      </ul>

      <h2>How to Contact Us</h2>
      <p>
        For privacy questions or to exercise your rights, contact us at <a href={`mailto:${siteEmail}`}>{siteEmail}</a>.
      </p>

      <h2>Changes to this Policy</h2>
      <p>We may update this policy periodically. We will publish the date of the last update above.</p>
    </main>
    <CTASection />
    </>
  );
}
