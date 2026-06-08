// app/investors/page.tsx
import Link from "next/link";
import { investorCategories } from "../../data/investors";

const annualReports = investorCategories.find(
  (item) => item.slug === "annual-reports"
);

export default function InvestorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2200')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 container-custom">
          <span className="eyebrow text-[var(--c-gold)]">
            INVESTOR RELATIONS
          </span>

          <h1 className="display-xl text-white mt-6 max-w-5xl">
            Building Value
            <br />
            Through Growth,
            <br />
            Governance &amp; Transparency
          </h1>

          <p className="text-white/80 text-xl max-w-3xl mt-10 leading-9">
            Explore investor resources, corporate disclosures,
            governance information and financial reports from
            Gourmet Gateway India Limited.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding bg-[var(--c-warm-white)]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">INVESTOR OVERVIEW</span>
            <h2 className="display-lg mt-6">
              Creating Sustainable
              Long-Term Value
            </h2>
            <p className="mt-8 text-lg leading-9 text-[var(--c-muted)]">
              Gourmet Gateway India Limited is committed to
              maintaining the highest standards of corporate
              governance, transparency and shareholder value.
            </p>
            <p className="mt-6 text-lg leading-9 text-[var(--c-muted)]">
              Our investor relations framework provides timely,
              accurate and comprehensive information to investors,
              analysts and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTOR RESOURCES */}
      <section className="section-padding bg-[var(--c-cream)]">
        <div className="container-custom">
          <div className="text-center">
            <span className="eyebrow">INVESTOR RESOURCES</span>
            <h2 className="display-lg mt-6">Information Centre</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {/* Financial Reports */}
            <Link
              href="/investors/financials"
              className="investor-card bg-white border border-[var(--c-border)] p-10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-xl">
                📊
              </div>
              <h3 className="text-3xl font-serif mt-8">Financial Reports</h3>
              <p className="mt-5 text-[var(--c-muted)] leading-8 flex-grow">
                Quarterly results, annual reports, and subsidiary financial statements.
              </p>
              <span className="mt-8 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Annual Reports */}
            <Link
              href="/investors/financials"
              className="investor-card bg-white border border-[var(--c-border)] p-10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-xl">
                📑
              </div>
              <h3 className="text-3xl font-serif mt-8">Annual Reports</h3>
              <p className="mt-5 text-[var(--c-muted)] leading-8 flex-grow">
                Download annual reports, financial summaries and corporate presentations.
              </p>
              <span className="mt-8 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Shareholder Information */}
            <Link
              href="/investors/shareholders-information"
              className="investor-card bg-white border border-[var(--c-border)] p-10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-xl">
                👥
              </div>
              <h3 className="text-3xl font-serif mt-8">Shareholder Information</h3>
              <p className="mt-5 text-[var(--c-muted)] leading-8 flex-grow">
                Shareholding patterns, corporate governance and committee compositions.
              </p>
              <span className="mt-8 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Policies */}
            <Link
              href="/investors/policies"
              className="investor-card bg-white border border-[var(--c-border)] p-10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-xl">
                📜
              </div>
              <h3 className="text-3xl font-serif mt-8">Policies</h3>
              <p className="mt-5 text-[var(--c-muted)] leading-8 flex-grow">
                Corporate policies including code of conduct, whistleblower and insider trading.
              </p>
              <span className="mt-8 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Corporate Social Responsibility */}
            <Link
              href="/investors/corporate-social-responsibility"
              className="investor-card bg-white border border-[var(--c-border)] p-10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-xl">
                🌱
              </div>
              <h3 className="text-3xl font-serif mt-8">CSR Initiatives</h3>
              <p className="mt-5 text-[var(--c-muted)] leading-8 flex-grow">
                Corporate Social Responsibility commitments and community impact.
              </p>
              <span className="mt-8 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>

            {/* Board of Directors */}
            <Link
              href="/investors/board-of-directors-composition"
              className="investor-card bg-white border border-[var(--c-border)] p-10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-[var(--c-gold)] flex items-center justify-center text-[var(--c-gold)] text-xl">
                👔
              </div>
              <h3 className="text-3xl font-serif mt-8">Board of Directors</h3>
              <p className="mt-5 text-[var(--c-muted)] leading-8 flex-grow">
                Leadership profiles, committee compositions and governance structure.
              </p>
              <span className="mt-8 text-[var(--c-gold)] uppercase tracking-[0.2em] text-xs">
                View Details →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="bg-[var(--c-obsidian)] text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">CORPORATE GOVERNANCE</span>
            <h2 className="display-lg mt-6">
              Integrity,
              Accountability &amp;
              Transparency
            </h2>
            <p className="mt-10 text-lg leading-9 text-white/70">
              Strong governance practices form the foundation
              of sustainable growth and long-term shareholder value.
            </p>
            <p className="mt-6 text-lg leading-9 text-white/70">
              We are committed to ethical business practices,
              transparent reporting and responsible decision-making
              across every aspect of our operations.
            </p>
            <div className="mt-10">
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
      <section className="bg-[var(--c-obsidian)] text-white pb-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-4">
            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">4+</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">Brands</p>
            </div>
            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">200+</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">Locations</p>
            </div>
            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">3</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">Countries</p>
            </div>
            <div className="stat-card p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">NSE/BSE</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">Listed Entity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-padding bg-[var(--c-cream)]">
        <div className="container-custom text-center">
          <span className="eyebrow">INVESTOR CONTACT</span>
          <h2 className="display-lg mt-6">
            Need Additional
            Investor Information?
          </h2>
          <p className="max-w-3xl mx-auto mt-8 text-lg leading-9 text-[var(--c-muted)]">
            For shareholder enquiries, investor communications
            and corporate disclosures, please contact our
            investor relations team.
          </p>
          <Link
            href="/investors-contact"
            className="inline-flex items-center gap-3 mt-12 bg-[var(--c-gold)] text-white px-10 py-5 uppercase tracking-[0.2em] text-sm hover:-translate-y-1 transition-all"
          >
            Contact Investor Relations →
          </Link>
        </div>
      </section>
    </>
  );
}