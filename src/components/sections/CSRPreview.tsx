import Link from "next/link";

export default function CSRPreview() {
  return (
    <section className="relative py-20 overflow-hidden reveal">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800')",
        }}
      />

      {/* Overlay - Changed to white */}
      <div className="absolute inset-0 bg-white/85" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <span className="eyebrow">CSR & SUSTAINABILITY</span>
          <h2 className="display-lg mt-4 text-[var(--c-dark)]">
            Creating Impact
            <br />
            Beyond Business
          </h2>
          <p className="mt-6 text-base text-[var(--c-muted)] max-w-2xl leading-7">
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
              mt-8
              border
              border-[#B8965A]
              px-6
              py-3
              uppercase
              tracking-[0.2em]
              text-xs
              text-[var(--c-dark)]
              transition-all
              duration-300
              hover:bg-[#B8965A]
              hover:text-white
            "
          >
            Learn More
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="csr-stat-card border border-[var(--c-border)] bg-white p-6 text-center transition-all duration-500 hover:border-[#B8965A] hover:shadow-lg">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              500+
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-[var(--c-muted)] font-medium">
              Community Programs
            </p>
          </div>

          <div className="csr-stat-card border border-[var(--c-border)] bg-white p-6 text-center transition-all duration-500 hover:border-[#B8965A] hover:shadow-lg">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              50K+
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-[var(--c-muted)] font-medium">
              Lives Impacted
            </p>
          </div>

          <div className="csr-stat-card border border-[var(--c-border)] bg-white p-6 text-center transition-all duration-500 hover:border-[#B8965A] hover:shadow-lg">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              100%
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-[var(--c-muted)] font-medium">
              Sustainability Commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}