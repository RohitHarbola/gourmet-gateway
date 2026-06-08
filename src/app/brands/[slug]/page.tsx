import { notFound } from "next/navigation";
import Link from "next/link";
import { brands, getBrandBySlug } from "./../../../data/brands";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export default async function BrandPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <>
      {/* HERO */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${brand.heroImage})`,
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container-custom">

          <span className="eyebrow text-[var(--c-gold)]">
            {brand.category}
          </span>

          <h1 className="display-xl text-white mt-6 max-w-5xl">
            {brand.name}
          </h1>

          <p className="text-white/80 text-xl mt-8 max-w-3xl">
            {brand.tagline}
          </p>

          <p className="text-white/60 text-lg mt-6 max-w-3xl">
            {brand.description}
          </p>

        </div>

      </section>

      {/* STORY */}

      <section className="section-padding bg-[var(--c-warm-white)]">

        <div className="container-custom">

          <div className="max-w-4xl">

            <span className="eyebrow">
              BRAND STORY
            </span>

            <h2 className="display-lg mt-6">
              Crafted For
              Exceptional Experiences
            </h2>

            <p className="mt-10 text-lg leading-9 text-[var(--c-muted)]">
              {brand.story}
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="section-padding bg-[var(--c-cream)]">

        <div className="container-custom">

          <div className="grid lg:grid-cols-3 gap-8">

            <img
              src={brand.heroImage}
              alt={brand.name}
              className="w-full h-[500px] object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200"
              alt=""
              className="w-full h-[500px] object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200"
              alt=""
              className="w-full h-[500px] object-cover"
            />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="bg-[var(--c-obsidian)] text-white section-padding">

        <div className="container-custom">

          <div className="grid md:grid-cols-4">

            {brand.stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card border-r border-white/10 p-10 text-center"
              >
                <div className="display-md text-[var(--c-gold)]">
                  {stat.value}
                </div>

                <p className="uppercase tracking-[0.2em] text-sm mt-4">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="section-padding bg-[var(--c-cream)]">

        <div className="container-custom text-center">

          <span className="eyebrow">
            EXPLORE MORE
          </span>

          <h2 className="display-lg mt-6">
            Discover The
            Gourmet Gateway Portfolio
          </h2>

          <Link
            href="/brands"
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
              hover:-translate-y-1
              transition-all
            "
          >
            View All Brands →
          </Link>

        </div>

      </section>
    </>
  );
}