import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FeatureCard, CTAButton } from "@/components/site/Primitives";
import { Scale, Plane, GraduationCap, Languages, Briefcase, Building2, FileText, Receipt, Users, BookOpen, Hotel, Car } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CSN Bangladesh" },
      { name: "description", content: "Legal, travel, education, language and business services — trusted across Italy." },
      { property: "og:title", content: "CSN Services" },
      { property: "og:description", content: "Everything Bangladeshi families in Italy need, under one trusted ecosystem." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "CAF CSN — Legal & Patronato",
    desc: "Certified support for residency, tax and labor matters.",
    color: "var(--color-primary)",
    to: "/legal",
    items: [
      { icon: <FileText className="h-5 w-5" />, t: "Immigration paperwork", d: "Permits, renewals, family reunification." },
      { icon: <Receipt className="h-5 w-5" />, t: "Tax & 730", d: "Annual filings, ISEE, refunds." },
      { icon: <Users className="h-5 w-5" />, t: "Patronato", d: "Pensions, benefits, INPS support." },
    ],
  },
  {
    title: "CSN Travel",
    desc: "End-to-end travel for families and businesses.",
    color: "var(--brand-sky)",
    to: "/travel",
    items: [
      { icon: <Plane className="h-5 w-5" />, t: "International tickets", d: "Direct routes Italy–Dhaka, partner fares." },
      { icon: <Hotel className="h-5 w-5" />, t: "Hotels & Umrah", d: "Curated stays and Umrah packages." },
      { icon: <Car className="h-5 w-5" />, t: "Transfers & visa", d: "Airport transfers, visa documentation." },
    ],
  },
  {
    title: "Cepron Education",
    desc: "Online courses and certifications for the community.",
    color: "var(--brand-green)",
    to: "/education",
    items: [
      { icon: <GraduationCap className="h-5 w-5" />, t: "Professional courses", d: "Hospitality, IT, retail, accounting." },
      { icon: <BookOpen className="h-5 w-5" />, t: "Certifications", d: "Recognised completion certificates." },
      { icon: <Users className="h-5 w-5" />, t: "For instructors", d: "Earn by teaching on Cepron." },
    ],
  },
  {
    title: "Italian Language Courses",
    desc: "From A1 basics to C2 mastery and citizenship prep.",
    color: "var(--brand-olive)",
    to: "/language",
    items: [
      { icon: <Languages className="h-5 w-5" />, t: "A1 → C2 levels", d: "Structured curriculum for every level." },
      { icon: <Scale className="h-5 w-5" />, t: "Citizenship exam", d: "Targeted preparation, real exam practice." },
      { icon: <BookOpen className="h-5 w-5" />, t: "Certified instructors", d: "Native-fluent, community-aware teachers." },
    ],
  },
  {
    title: "Business Opportunities",
    desc: "Build your own future on CSN's infrastructure.",
    color: "var(--brand-red)",
    to: "/business",
    items: [
      { icon: <Building2 className="h-5 w-5" />, t: "CAF franchise", d: "Open a branch in your city." },
      { icon: <Briefcase className="h-5 w-5" />, t: "Travel reseller", d: "Sell with our tools and partners." },
      { icon: <Users className="h-5 w-5" />, t: "Teach on Cepron", d: "Monetise your expertise." },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything you need to <span className="text-[color:var(--brand-red)]">thrive in Italy.</span></>}
        description="Five service families, one trusted brand. Walk into a branch, call our help desk or start online."
      >
        <CTAButton to="/contact">Talk to an advisor</CTAButton>
        <CTAButton to="/platforms" variant="secondary">See platforms</CTAButton>
      </PageHero>

      {groups.map((g, idx) => (
        <Section key={g.title} className={idx % 2 === 1 ? "bg-[color:var(--color-surface)]" : ""}>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: g.color }}>
                <span className="h-1.5 w-6 rounded-full" style={{ background: g.color }} /> {g.title}
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">{g.desc}</p>
            </div>
            <CTAButton to={g.to} variant="ghost">Explore</CTAButton>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {g.items.map((it) => (
              <FeatureCard key={it.t} icon={it.icon} title={it.t} description={it.d} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
