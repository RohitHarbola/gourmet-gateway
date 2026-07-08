import Link from "next/link";

const navigationLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Brands", href: "/#brands"  },
  // { name: "Leadership", href: "/#leadership" },
  { name: "Our Presence", href: "/presence" },
];

const investorLinks = [
  { name: "Annual Reports", href: "/investors/financials" },
  { name: "Financial Statements", href: "/investors/financials" },
  { name: "Shareholder Information", href: "/investors/shareholders-information" },
  { name: "Board Composition", href: "/investors/board-of-directors-composition" },
  { name: "Policies", href: "/investors/policies" },
  { name: "Secretarial Reports", href: "/investors/secretarial-compliance-report" },
  { name: "Postal Ballot", href: "/investors/postal-ballot-notice" },
];

const brandLinks = [
  { name: "Barista Coffee", href: "/brands/barista" },
  { name: "Kylin", href: "/brands/kylin" },
  { name: "Wanchai", href: "/brands/wanchai" },
  { name: "Drizzle & Dust", href: "/brands/drizzle-dust" },
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

            {/* Get Direction Column */}
            <div>
              <h3 className="footer-heading">Get Direction</h3>
              <div className="footer-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0014330047798!2d77.08320057522054!3d28.47950349101391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1924064684ff%3A0xa8f3c6de5a674aa2!2sVipul%20Agora%20Mall!5e0!3m2!1sen!2sin!4v1719381038986!5m2!1sen!2sin" 
                  width="100%" 
                  height="190" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vipul Agora Mall Location"
                />
              </div>
              
              {/* Corporate Address */}
              <div className="footer-address">
                <h3 className="footer-heading footer-address-heading">Corporate Address</h3>
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
              © 2017-2022 Gourmet Gateway India Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}