import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Badmouth Digital",
  description: "Badmouth Digital privacy policy.",
};

export default function PrivacyPage() {
  return (
    <SiteShell currentPage="privacy">
      <section className="section section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-4">
            <p className="t-eyebrow">Legal</p>
            <h1 className="t-display t-display--section">Privacy Policy</h1>
            <p className="t-body t-body--sm" style={{ color: "var(--color-text-muted)" }}>
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section section--padded surface-sunken">
        <div className="grid-page">
          <div className="col-content legal-content">
            <h2>1. Information We Collect</h2>
            <p>When you use our website or contact us, we may collect:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, and business name provided through our contact forms.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on site, referral source, browser type, and device information collected automatically through analytics tools.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar technologies to improve your browsing experience and analyze site traffic.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services.</li>
              <li>Improve our website and user experience.</li>
              <li>Send relevant communications about our services (only with your consent).</li>
              <li>Analyze website performance and usage patterns.</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist in operating our website and conducting business, provided they agree to keep this information confidential.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Request restrictions on how we process your data.</li>
            </ul>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <Link href="/contact">our contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
