import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CTAButton, Eyebrow } from "@/components/site/Primitives";
import { Building2, Plane, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Platforms — CSN Ecosystem" },
      { name: "description", content: "CAF CSN, CSN Travel and Cepron — three platforms powering the CSN ecosystem." },
      { property: "og:title", content: "CSN Platforms" },
    ],
  }),
  component: PlatformsPage,
});

const platforms = [
  {
    name: "CAF CSN",
    tagline: "Italy's largest Bangladeshi-led CAF network.",
    color: "var(--color-primary)",
    icon: <Building2 className="h-6 w-6" />,
    desc: "A certified Centro di Assistenza Fiscale and Patronato partner with 200+ branches across 7+ provinces.",
    features: ["Immigration & residency support", "Tax filings, ISEE, 730", "Patronato — INPS, pensions, benefits", "Business setup and accounting"],
    stats: [{ k: "200+", v: "Branches" }, { k: "10K+", v: "Cases / year" }, { k: "14yr", v: "Trusted" }],
    cta: { label: "Visit CAF CSN", to: "/legal" },
  },
  {
    name: "CSN Travel",
    tagline: "Travel that feels looked after.",
    color: "var(--brand-sky)",
    icon: <Plane className="h-6 w-6" />,
    desc: "Full-service travel marketplace — B2C bookings and B2B reseller infrastructure.",
    features: ["International & domestic tickets", "Hotel & Umrah packages", "Visa documentation", "Reseller & wholesaler tools"],
    stats: [{ k: "10K+", v: "Bookings/yr" }, { k: "150+", v: "Partners" }, { k: "24/7", v: "Support" }],
    cta: { label: "Visit CSN Travel", to: "/travel" },
  },
  {
    name: "Cepron",
    tagline: "Learn skills that change your life.",
    color: "var(--brand-green)",
    icon: <GraduationCap className="h-6 w-6" />,
    desc: "A full LMS — courses, dashboards, certifications and instructor tools, designed for the community.",
    features: ["120+ practical courses", "Recognised certifications", "Student dashboard", "Instructor revenue program"],
    stats: [{ k: "120+", v: "Courses" }, { k: "8K+", v: "Learners" }, { k: "60+", v: "Instructors" }],
    cta: { label: "Visit Cepron", to: "/education" },
  },
];

function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="The ecosystem"
        title={<>Three platforms. <span className="text-primary">One trusted brand.</span></>}
        description="Each platform serves a clear purpose — together they cover everything a Bangladeshi family or business in Italy needs."
      />

      {platforms.map((p, idx) => (
        <Section key={p.name} className={idx % 2 === 1 ? "bg-[color:var(--color-surface)]" : ""}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg" style={{ background: p.color }}>{p.icon}</span>
                <span className="font-display text-xl font-bold">{p.name}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">{p.tagline}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-7 space-y-3 text-sm">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8"><CTAButton to={p.cta.to}>{p.cta.label}</CTAButton></div>
            </div>
            <div className="card-elev relative overflow-hidden p-8">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: p.color }} />
              <Eyebrow>Platform stats</Eyebrow>
              <div className="mt-5 grid grid-cols-3 gap-6">
                {p.stats.map(s => (
                  <div key={s.v}>
                    <div className="font-display text-4xl font-bold" style={{ color: p.color }}>{s.k}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-border bg-[color:var(--color-surface)] p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Live</div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="font-display text-lg font-semibold">Trusted by the community</div>
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full" style={{ background: p.color }} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
