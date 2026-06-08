import Link from "next/link";

const investorDocs = [
  {
    title: "Annual Reports",
    description:
      "Access historical annual reports, performance highlights and corporate updates.",
    icon: "📊",
    link: "/investors/financials",
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
    link: "/investors/board-of-directors-composition",
  },
];

export default function InvestorPreview() {
  return (
    <section className="bg-[#111009] py-16 reveal">
      <div className="container-custom">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <span className="eyebrow">INVESTOR RELATIONS</span>
            <h2 className="display-lg mt-4 text-white">
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
              "
            >
              View Investor Centre
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investorDocs.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="investor-card group h-full"
            >
              <div
                className="
                  h-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  transition-all
                  duration-500
                  group-hover:border-[#B8965A]
                  flex
                  flex-col
                "
              >
                <div className="text-4xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl text-white font-serif mb-3">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-6">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[#B8965A] text-[11px] uppercase tracking-[0.2em]">
                    View
                  </span>
                  <span className="text-[#B8965A] text-lg">
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