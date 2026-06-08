import Link from "next/link";

export default function CSRPreview() {
  return (
    <section className="relative section-padding overflow-hidden reveal">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      <div className="container-custom relative z-10">

        <div className="max-w-4xl">

          <span className="eyebrow">
            CSR & SUSTAINABILITY
          </span>

          <h2 className="display-lg mt-6 text-white">
            Creating Impact
            <br />
            Beyond Business
          </h2>

          <p className="mt-8 text-lg text-white/75 max-w-2xl leading-8">
            At Gourmet Gateway, we believe sustainable growth is
            achieved through community engagement, responsible
            business practices and investment in people. Our CSR
            initiatives focus on creating long-term value for
            society while fostering a culture of inclusion,
            innovation and environmental responsibility.
          </p>

          <Link
            href="/investors/csr"
            className="
              inline-flex
              mt-10
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
            Learn More
          </Link>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="csr-stat-card">
            <h3 className="font-serif text-6xl text-[#B8965A]">
              500+
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-white/70 text-sm">
              Community Programs
            </p>
          </div>

          <div className="csr-stat-card">
            <h3 className="font-serif text-6xl text-[#B8965A]">
              50K+
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-white/70 text-sm">
              Lives Impacted
            </p>
          </div>

          <div className="csr-stat-card">
            <h3 className="font-serif text-6xl text-[#B8965A]">
              100%
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-white/70 text-sm">
              Sustainability Commitment
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}