import Link from "next/link";
import { notFound } from "next/navigation";

import {
  investorCategories,
  getInvestorCategory,
} from "../../../data/investors";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return investorCategories.map((item) => ({
    category: item.slug,
  }));
}

export default async function InvestorCategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  const data = getInvestorCategory(category);

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* HERO */}

      <section className="relative min-h-[70vh] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.heroImage})`,
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 container-custom">

          <span className="eyebrow text-[var(--c-gold)]">
            {data.subtitle}
          </span>

          <h1 className="display-xl text-white mt-6">
            {data.title}
          </h1>

          <p className="text-white/80 text-xl max-w-3xl mt-10 leading-9">
            {data.description}
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="section-padding bg-[var(--c-warm-white)]">

        <div className="container-custom">

          <span className="eyebrow">
            DOCUMENT LIBRARY
          </span>

          <h2 className="display-lg mt-6">
            Available Documents
          </h2>

          <div className="mt-16 space-y-6">

            {data.documents.map((doc) => (
              <div
                key={doc.title}
                className="
                  bg-white
                  border
                  border-[var(--c-border)]
                  p-8
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-6
                "
              >
                <div>

                  {doc.year && (
                    <span className="eyebrow">
                      {doc.year}
                    </span>
                  )}

                  <h3 className="text-2xl font-serif mt-2">
                    {doc.title}
                  </h3>

                </div>

                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-[var(--c-gold)]
                    text-white
                    px-8
                    py-4
                    uppercase
                    tracking-[0.2em]
                    text-xs
                  "
                >
                  Download
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="section-padding bg-[var(--c-cream)]">

        <div className="container-custom text-center">

          <span className="eyebrow">
            INVESTOR RELATIONS
          </span>

          <h2 className="display-lg mt-6">
            Need Additional
            Information?
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-[var(--c-muted)]">
            For shareholder enquiries, investor communications
            and corporate disclosures, please contact our
            Investor Relations team.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-12
              px-10
              py-5
              bg-[var(--c-gold)]
              text-white
              uppercase
              tracking-[0.2em]
              text-sm
            "
          >
            Contact Us →
          </Link>

        </div>

      </section>
    </>
  );
}