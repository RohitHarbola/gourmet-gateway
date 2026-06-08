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
      {/* INTRODUCTION */}
      <section className="bg-[var(--c-warm-white)] py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">LEADERSHIP PHILOSOPHY</span>
            <h2 className="display-lg mt-4">Leadership Built On Experience</h2>
            <p className="mt-6 text-base leading-7 text-[var(--c-muted)]">
              Our leadership team combines decades of expertise
              across hospitality, retail, food services, finance
              and corporate governance.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--c-muted)]">
              Together they guide Gourmet Gateway's strategy,
              growth initiatives and commitment to delivering
              exceptional customer experiences across all brands.
            </p>
          </div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="bg-[var(--c-cream)] py-16">
        <div className="container-custom">
          <div className="text-center">
            <span className="eyebrow">BOARD OF DIRECTORS</span>
            <h2 className="display-lg mt-4">Strategic Leadership</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
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
                <div className="p-6">
                  <span className="eyebrow">{member.designation}</span>
                  <h3 className="text-2xl mt-3 font-serif">{member.name}</h3>
                  <p className="mt-3 text-sm text-[var(--c-muted)] leading-6">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="bg-[var(--c-obsidian)] text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="eyebrow">CORPORATE GOVERNANCE</span>
            <h2 className="display-lg mt-4">
              Transparency,
              Accountability &
              Sustainable Growth
            </h2>
            <p className="mt-6 text-base leading-7 text-white/70">
              Strong governance practices are fundamental to
              building sustainable long-term value.
            </p>
            <p className="mt-4 text-base leading-7 text-white/70">
              We remain committed to ethical leadership,
              transparency and responsible decision-making
              across all areas of our business.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP STATS */}
      <section className="bg-[var(--c-obsidian)] text-white pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 border border-white/10">
            <div className="border-r border-b md:border-b-0 border-white/10 p-6 text-center">
              <div className="font-serif text-4xl lg:text-5xl text-[var(--c-gold)] font-semibold">
                20+
              </div>
              <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
                Years Experience
              </p>
            </div>
            <div className="border-r border-b md:border-b-0 border-white/10 p-6 text-center">
              <div className="font-serif text-4xl lg:text-5xl text-[var(--c-gold)] font-semibold">
                4+
              </div>
              <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
                Brands Managed
              </p>
            </div>
            <div className="border-r border-b md:border-b-0 border-white/10 p-6 text-center">
              <div className="font-serif text-4xl lg:text-5xl text-[var(--c-gold)] font-semibold">
                3
              </div>
              <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
                Countries
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="font-serif text-4xl lg:text-5xl text-[var(--c-gold)] font-semibold">
                1000+
              </div>
              <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
                Team Members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--c-cream)] py-16">
        <div className="container-custom text-center">
          <span className="eyebrow">INVESTOR RELATIONS</span>
          <h2 className="display-lg mt-4">
            Explore Corporate
            Governance &
            Investor Information
          </h2>
          <p className="mt-6 text-base text-[var(--c-muted)] max-w-3xl mx-auto">
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
              mt-8
              bg-[var(--c-gold)]
              text-white
              px-8
              py-4
              uppercase
              tracking-[0.2em]
              text-xs
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