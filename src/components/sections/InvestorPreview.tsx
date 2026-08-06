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
    title: "Financial Statement Consolidation",
    description:
      "Review audited financial consolidated statement.",
    icon: "📈",
    link: "/investors/financials-consolidated",
  },
  {
    title: "Financial Statements Standalone",
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
    link: "/investors/board-of-directors-composition",
  },
];

export default function InvestorPreview() {
  return (
    <section className="bg-[#111009] py-16 reveal">
      <div className="container-custom max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <span className="eyebrow text-[#B8965A] text-xs uppercase tracking-[0.2em]">
              INVESTOR RELATIONS
            </span>
            <h2 className="display-lg mt-4 text-white text-4xl md:text-5xl font-serif">
              Transparency.
              <br />
              Governance.
              <br />
              Long-Term Value.
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-7 text-white/70">
              We are committed to maintaining the highest standards
              of corporate governance, transparency and shareholder
              communication.
            </p>

            <Link
              href="/investors"
              className="
                inline-flex
                mt-6
                border
                border-[#B8965A]
                px-6
                py-3
                uppercase
                tracking-[0.2em]
                text-xs
                text-white
                transition-all
                duration-300
                hover:bg-[#B8965A]
                hover:text-black
              "
            >
              View Investor Centre
            </Link>
          </div>
        </div>

        {/* Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {investorDocs.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="group h-full"
            >
              <div
                className="
                  h-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  transition-all
                  duration-500
                  group-hover:border-[#B8965A]
                  flex
                  flex-col
                  hover:bg-white/[0.06]
                  min-h-[280px]
                "
              >
                <div className="text-3xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-lg text-white font-serif mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-6 flex-1">
                  {item.description}
                </p>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[#B8965A] text-[10px] uppercase tracking-[0.2em] font-medium">
                    View
                  </span>
                  <span className="text-[#B8965A] text-lg transition-transform duration-300 group-hover:translate-x-1">
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