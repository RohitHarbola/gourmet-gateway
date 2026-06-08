import Link from "next/link";

const investorDocs = [
  {
    title: "Annual Reports",
    description:
      "Access historical annual reports, performance highlights and corporate updates.",
    icon: "📊",
    link: "/investors/annual-reports",
  },
  {
    title: "Financial Statements",
    description:
      "Review audited financial statements and quarterly performance documents.",
    icon: "📈",
    link: "/investors/financials",
  },
  {
    title: "Policies",
    description:
      "Corporate governance policies, compliance frameworks and disclosures.",
    icon: "📑",
    link: "/investors/policies",
  },
  {
    title: "Corporate Governance",
    description:
      "Board committees, governance practices and regulatory information.",
    icon: "🏛️",
    link: "/investors/governance",
  },
];

export default function InvestorPreview() {
  return (
    <section className="bg-[#111009] section-padding reveal">
      <div className="container-custom">

        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-16 mb-20">

          <div>
            <span className="eyebrow">
              INVESTOR RELATIONS
            </span>

            <h2 className="display-lg mt-6 text-white">
              Transparency.
              <br />
              Governance.
              <br />
              Long-Term Value.
            </h2>
          </div>

          <div className="lg:pt-16">
            <p className="text-lg leading-8 text-white/70">
              We are committed to maintaining the highest standards
              of corporate governance, transparency and shareholder
              communication.
            </p>

            <Link
              href="/investors"
              className="
                inline-flex
                mt-8
                border
                border-[#B8965A]
                px-8
                py-4
                uppercase
                tracking-[0.2em]
                text-sm
                text-white
                transition-all
                duration-300
                hover:bg-[#B8965A]
              "
            >
              View Investor Centre
            </Link>
          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {investorDocs.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="investor-card group"
            >
              <div
                className="
                  h-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-500
                  group-hover:border-[#B8965A]
                "
              >
                <div className="text-5xl mb-8">
                  {item.icon}
                </div>

                <h3 className="text-2xl text-white font-serif mb-4">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-7">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[#B8965A] text-sm uppercase tracking-[0.2em]">
                    View
                  </span>

                  <span className="text-[#B8965A] text-xl">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}