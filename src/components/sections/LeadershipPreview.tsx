// components/LeadershipPreview.tsx
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

export default function LeadershipPreview() {
  return (
    <section className="section-padding bg-[var(--c-cream)] reveal">
      <div className="container-custom">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="eyebrow">LEADERSHIP</span>
            <h2 className="display-lg mt-6">
              Guiding Vision.
              <br />
              Driving Growth.
            </h2>
          </div>

          <div className="lg:pt-16">
            <p className="text-lg leading-8 text-[var(--c-muted)]">
              Our leadership team brings together decades of
              experience in hospitality, retail, finance and
              strategic business expansion, helping shape the
              future of Gourmet Gateway.
            </p>

            <Link
              href="/leadership"
              className="
                inline-flex
                mt-8
                border
                border-[var(--c-gold)]
                px-8
                py-4
                uppercase
                tracking-[0.2em]
                text-sm
                transition-all
                duration-300
                hover:bg-[var(--c-gold)]
                hover:text-white
              "
            >
              View Leadership
            </Link>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="
                leadership-card
                group
                overflow-hidden
                bg-white
              "
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    leader-img
                    w-full
                    h-[450px]
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B8965A]">
                  {member.designation}
                </p>
                <h3 className="mt-3 text-2xl font-serif">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm text-[var(--c-muted)] leading-6">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}