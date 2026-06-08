import Link from "next/link";

const navigationLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Brands", href: "/brands" },
  { name: "Leadership", href: "/leadership" },
  { name: "Our Presence", href: "/presence" },
  { name: "Careers", href: "/careers" },
  { name: "Media & Press", href: "/media" },
];

const investorLinks = [
  { name: "Annual Reports", href: "/investors/annual-reports" },
  { name: "Financial Statements", href: "/investors/financial-statements" },
  { name: "Shareholder Info", href: "/investors/shareholder-info" },
  { name: "Board Composition", href: "/investors/board-composition" },
  { name: "Policies", href: "/investors/policies" },
  { name: "Secretarial Reports", href: "/investors/secretarial-reports" },
  { name: "Postal Ballot", href: "/investors/postal-ballot" },
];

const brandLinks = [
  { name: "Barista Coffee", href: "/brands/barista" },
  { name: "Kylin", href: "/brands/kylin" },
  { name: "Wanchai", href: "/brands/wanchai" },
  { name: "Drizzle & Dust", href: "/brands/drizzle-dust" },
];

const bottomLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="gourmet-footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Brand Column */}
            <div className="footer-brand-col">
              <h2 className="footer-brand-title">Gourmet Gateway</h2>
              <p className="footer-brand-description">
                Creating exceptional dining experiences across India, Sri Lanka and Maldives.
              </p>
              <div className="footer-bse-info">
                <span>BSE: 506134 - INTELLCAP</span>
              </div>
            </div>

            {/* Navigation / Company Column */}
            <div>
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investor Relations Column */}
            <div>
              <h3 className="footer-heading">Investor Relations</h3>
              <ul className="footer-links">
                {investorLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Brands + Address Column */}
            <div>
              <h3 className="footer-heading">Our Brands</h3>
              <ul className="footer-links footer-brands-list">
                {brandLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Registered Address */}
              <div className="footer-address">
                <h3 className="footer-heading footer-address-heading">Registered Address</h3>
                <address className="footer-address-text">
                  301–304, Vipul Agora Mall<br />
                  MG Road, Gurugram<br />
                  Haryana 122002
                </address>
              </div>
            </div>

          </div>

          {/* Optional Weather/Language/Time Bar - Matches screenshot */}
          <div className="footer-meta-bar">
            <span><i className="weather-icon">☁️</i> 28°C Mostly cloudy</span>
            <span>ENG ▼</span>
            <span>11:27</span>
            <span>07-06-2026</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 Gourmet Gateway India Limited. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              {bottomLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}