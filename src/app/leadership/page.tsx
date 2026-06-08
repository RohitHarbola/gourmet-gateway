// app/leadership/page.tsx
import Link from "next/link";

const boardMembers = [
  {
    name: "Board Member",
    designation: "Chairman & Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200",
    description:
      "Providing strategic leadership and guiding long-term business growth across the organization.",
  },
  {
    name: "Independent Director",
    designation: "Independent Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",
    description:
      "Bringing extensive experience in governance, compliance and business transformation.",
  },
  {
    name: "Executive Director",
    designation: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200",
    description:
      "Focused on operational excellence, innovation and sustainable expansion.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 container-custom">
          <span className="eyebrow text-[var(--c-gold)]">LEADERSHIP</span>
          <h1 className="display-xl text-white mt-6 max-w-5xl">
            Driving Growth
            <br />
            Through Vision
            <br />
            & Excellence
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mt-10 leading-9">
            Meet the leaders shaping the future of Gourmet Gateway,
            guiding strategic growth, innovation and operational excellence.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding bg-[var(--c-warm-white)]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">LEADERSHIP PHILOSOPHY</span>
            <h2 className="display-lg mt-6">Leadership Built On Experience</h2>
            <p className="mt-8 text-lg leading-9 text-[var(--c-muted)]">
              Our leadership team combines decades of expertise
              across hospitality, retail, food services, finance
              and corporate governance.
            </p>
            <p className="mt-6 text-lg leading-9 text-[var(--c-muted)]">
              Together they guide Gourmet Gateway's strategy,
              growth initiatives and commitment to delivering
              exceptional customer experiences across all brands.
            </p>
          </div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="section-padding bg-[var(--c-cream)]">
        <div className="container-custom">
          <div className="text-center">
            <span className="eyebrow">BOARD OF DIRECTORS</span>
            <h2 className="display-lg mt-6">Strategic Leadership</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="leadership-card bg-white border border-[var(--c-border)] overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="leader-img"
                />
                <div className="p-8">
                  <span className="eyebrow">{member.designation}</span>
                  <h3 className="text-3xl mt-4 font-serif">{member.name}</h3>
                  <p className="mt-5 text-[var(--c-muted)] leading-8">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="bg-[var(--c-obsidian)] text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">CORPORATE GOVERNANCE</span>
            <h2 className="display-lg mt-6">
              Transparency,
              Accountability &
              Sustainable Growth
            </h2>
            <p className="mt-10 text-white/70 text-lg leading-9">
              Strong governance practices are fundamental to
              building sustainable long-term value.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-9">
              We remain committed to ethical leadership,
              transparency and responsible decision-making
              across all areas of our business.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP STATS */}
      <section className="bg-[var(--c-obsidian)] text-white pb-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-4">
            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">20+</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">
                Years Experience
              </p>
            </div>
            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">4+</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">
                Brands Managed
              </p>
            </div>
            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">3</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">Countries</p>
            </div>
            <div className="stat-card p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">1000+</div>
              <p className="uppercase tracking-[0.2em] text-sm mt-3">
                Team Members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--c-cream)]">
        <div className="container-custom text-center">
          <span className="eyebrow">INVESTOR RELATIONS</span>
          <h2 className="display-lg mt-6">
            Explore Corporate
            Governance &
            Investor Information
          </h2>
          <p className="mt-8 text-lg text-[var(--c-muted)] max-w-3xl mx-auto">
            Learn more about Gourmet Gateway's governance
            framework, investor resources and corporate
            disclosures.
          </p>
          <Link
            href="/investors"
            className="
              inline-flex
              items-center
              gap-3
              mt-12
              bg-[var(--c-gold)]
              text-white
              px-10
              py-5
              uppercase
              tracking-[0.2em]
              text-sm
              hover:-translate-y-1
              transition-all
            "
          >
            Investor Centre →
          </Link>
        </div>
      </section>
    </>
  );
}