// app/investors/page.tsx
import Link from "next/link";
import { investorCategories } from "../../data/investors";

const annualReports = investorCategories.find(
  (item) => item.slug === "annual-reports"
);

export default function InvestorsPage() {
  return (
    <>
      {/* INTRODUCTION */}
      <section className="bg-[var(--c-warm-white)] pt-25 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">INVESTOR OVERVIEW</span>
            <h2 className="display-lg mt-6">
              Creating Sustainable
              Long-Term Value
            </h2>
            <p className="mt-6 text-lg leading-9 text-[var(--c-muted)]">
              Gourmet Gateway India Limited is committed to
              maintaining the highest standards of corporate
              governance, transparency and shareholder value.
            </p>
            <p className="mt-4 text-lg leading-9 text-[var(--c-muted)]">
              Our investor relations framework provides timely,
              accurate and comprehensive information to investors,
              analysts and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTOR RESOURCES */}
      <section className="bg-[var(--c-cream)] py-20">
        <div className="container-custom">
          <div className="text-center">
            <span className="eyebrow">INVESTOR RESOURCES</span>
            <h2 className="display-lg mt-4">Information Centre</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Financial Reports */}
            <Link
              href="/investors/financials"
              className="investor-card bg-white border border-[var(--c-border)] p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-lg">
                📊
              </div>
              <h3 className="text-2xl font-serif mt-6">Financial Reports</h3>
              <p className="mt-4 text-[var(--c-muted)] leading-7 flex-grow text-sm">
                Quarterly results, annual reports, and subsidiary financial statements.
              </p>
              <span className="mt-6 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Annual Reports */}
            <Link
              href="/investors/financials"
              className="investor-card bg-white border border-[var(--c-border)] p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-lg">
                📑
              </div>
              <h3 className="text-2xl font-serif mt-6">Annual Reports</h3>
              <p className="mt-4 text-[var(--c-muted)] leading-7 flex-grow text-sm">
                Download annual reports, financial summaries and corporate presentations.
              </p>
              <span className="mt-6 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Shareholder Information */}
            <Link
              href="/investors/shareholders-information"
              className="investor-card bg-white border border-[var(--c-border)] p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-lg">
                👥
              </div>
              <h3 className="text-2xl font-serif mt-6">Shareholder Information</h3>
              <p className="mt-4 text-[var(--c-muted)] leading-7 flex-grow text-sm">
                Shareholding patterns, corporate governance and committee compositions.
              </p>
              <span className="mt-6 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Policies */}
            <Link
              href="/investors/policies"
              className="investor-card bg-white border border-[var(--c-border)] p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-lg">
                📜
              </div>
              <h3 className="text-2xl font-serif mt-6">Policies</h3>
              <p className="mt-4 text-[var(--c-muted)] leading-7 flex-grow text-sm">
                Corporate policies including code of conduct, whistleblower and insider trading.
              </p>
              <span className="mt-6 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Corporate Social Responsibility */}
            <Link
              href="/investors/corporate-social-responsibility"
              className="investor-card bg-white border border-[var(--c-border)] p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-lg">
                🌱
              </div>
              <h3 className="text-2xl font-serif mt-6">CSR Initiatives</h3>
              <p className="mt-4 text-[var(--c-muted)] leading-7 flex-grow text-sm">
                Corporate Social Responsibility commitments and community impact.
              </p>
              <span className="mt-6 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Board of Directors */}
            <Link
              href="/investors/board-of-directors-composition"
              className="investor-card bg-white border border-[var(--c-border)] p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-lg">
                👔
              </div>
              <h3 className="text-2xl font-serif mt-6">Board of Directors</h3>
              <p className="mt-4 text-[var(--c-muted)] leading-7 flex-grow text-sm">
                Leadership profiles, committee compositions and governance structure.
              </p>
              <span className="mt-6 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="bg-[var(--c-obsidian)] text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">CORPORATE GOVERNANCE</span>
            <h2 className="display-lg mt-5">
              Integrity,
              Accountability &amp;
              Transparency
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/70">
              Strong governance practices form the foundation
              of sustainable growth and long-term shareholder value.
            </p>
            <p className="mt-4 text-lg leading-9 text-white/70">
              We are committed to ethical business practices,
              transparent reporting and responsible decision-making
              across every aspect of our operations.
            </p>
            <div className="mt-8">
              <Link
                href="/investors/board-of-directors-composition"
                className="inline-block px-8 py-4 border border-[var(--c-gold)] text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs hover:bg-[var(--c-gold)] hover:text-white transition-all"
              >
                View Governance Framework →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR STATS */}
      <section className="bg-[var(--c-obsidian)] text-white pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-4">
            <div className="stat-card border-r border-white/10 p-8 text-center">
              <div className="display-md text-[var(--c-gold)]">4+</div>
              <p className="uppercase tracking-[0.2em] text-xs mt-2">Brands</p>
            </div>
            <div className="stat-card border-r border-white/10 p-8 text-center">
              <div className="display-md text-[var(--c-gold)]">200+</div>
              <p className="uppercase tracking-[0.2em] text-xs mt-2">Locations</p>
            </div>
            <div className="stat-card border-r border-white/10 p-8 text-center">
              <div className="display-md text-[var(--c-gold)]">3</div>
              <p className="uppercase tracking-[0.2em] text-xs mt-2">Countries</p>
            </div>
            <div className="stat-card p-8 text-center">
              <div className="display-md text-[var(--c-gold)]">NSE/BSE</div>
              <p className="uppercase tracking-[0.2em] text-xs mt-2">Listed Entity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[var(--c-cream)] py-20">
        <div className="container-custom text-center">
          <span className="eyebrow">INVESTOR CONTACT</span>
          <h2 className="display-lg mt-5">
            Need Additional
            Investor Information?
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg leading-9 text-[var(--c-muted)]">
            For shareholder enquiries, investor communications
            and corporate disclosures, please contact our
            investor relations team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-[var(--c-gold)] text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:-translate-y-1 transition-all"
          >
            Contact Investor Relations →
          </Link>
        </div>
      </section>
    </>
  );
}
