import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane, Scale, GraduationCap, Languages, ShieldCheck, Building2,
  Users, Globe2, Sparkles, Star, Quote, Briefcase, BookOpen, MapPin, Headphones, ArrowUpRight,
} from "lucide-react";
import { Section, SectionHeading, CTAButton, StatCard, FeatureCard, Eyebrow } from "@/components/site/Primitives";
import heroImg from "@/assets/hero-community.jpg";
import meshImg from "@/assets/abstract-mesh.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CSN Bangladesh — Your Trusted Gateway to Services in Italy" },
      { name: "description", content: "Travel, legal, education and business services trusted by Bangladeshi families across Italy. 14+ years, 200+ branches, 7+ provinces." },
      { property: "og:title", content: "CSN Bangladesh — Trusted Services for the Bangladeshi Community in Italy" },
      { property: "og:description", content: "A trusted ecosystem connecting Bangladeshi communities in Italy with travel, legal, education and business services." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: <Scale className="h-5 w-5" />, title: "CAF CSN — Legal & Patronato", description: "Immigration paperwork, tax filing, labor consulting and patronato services across Italy.", to: "/legal" },
  { icon: <Plane className="h-5 w-5" />, title: "CSN Travel", description: "International tickets, hotels, transfers, visa support and Umrah packages.", to: "/travel" },
  { icon: <GraduationCap className="h-5 w-5" />, title: "Cepron Education", description: "Online courses, certifications and a full LMS for the community.", to: "/education" },
  { icon: <Languages className="h-5 w-5" />, title: "Italian Language Courses", description: "A1 to C2, citizenship exam preparation, certified instructors.", to: "/language" },
];

const platforms = [
  {
    name: "CAF CSN",
    color: "var(--color-primary)",
    tag: "Branch network",
    desc: "The largest CAF / Patronato network serving the Bangladeshi community in Italy.",
    stats: [{ k: "200+", v: "Branches" }, { k: "7+", v: "Provinces" }],
  },
  {
    name: "CSN Travel",
    color: "var(--brand-sky)",
    tag: "Travel marketplace",
    desc: "B2B and B2C travel — tickets, hotels, transfers, Umrah, and reseller tools.",
    stats: [{ k: "10K+", v: "Bookings/yr" }, { k: "150+", v: "Partner agencies" }],
  },
  {
    name: "Cepron",
    color: "var(--brand-green)",
    tag: "Learning platform",
    desc: "An LMS for instructors and learners — courses, certifications, dashboards.",
    stats: [{ k: "120+", v: "Courses" }, { k: "8K+", v: "Learners" }],
  },
];

const brands = ["Cepron", "CSN Travel", "CAF CSN", "VPA", "Corner Jobs", "PEC Mail", "Help Desk", "INAPI", "CSN Lite", "CSN QuMaS"];

const testimonials = [
  { name: "Rashed Ahmed", role: "Restaurant Owner · Rome", quote: "CSN handled my residency renewal and tax filing in one visit. Felt like family helping family." },
  { name: "Salma Khatun", role: "Student · Milan", quote: "Their Italian B1 course got me through the citizenship exam on the first try. Honest and clear teachers." },
  { name: "Tanvir Hossain", role: "Travel Reseller · Bologna", quote: "I opened a CSN Travel reseller in two weeks. Real tools, real support, real customers." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* LEFT */}
          <div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground md:text-7xl">
              Your Gateway to<br />
              Trusted Services &amp;<br />
              <span className="text-[color:var(--brand-red)]">Opportunities</span><br />
              Across Italy
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Supporting Bangladeshi communities across Italy through travel solutions, legal
              assistance, education and business services for over 14 years.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-12px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] transition hover:opacity-90"
              >
                Explore Services
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-foreground/30"
              >
                Contact&nbsp; Us
              </Link>
            </div>
          </div>

          {/* RIGHT — colorful gradient panel with stat cards + badge */}
          <div className="relative">
            <div
              className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px]"
              style={{
                background:
                  "linear-gradient(90deg, #FFE066 0%, #F2E96A 14%, #B6E27A 28%, #7DD0B0 42%, #6FC9D8 56%, #8FD3F4 70%, #F4B3A0 84%, #E9262A 100%)",
              }}
            >
              {/* horizontal slatted lines for the bar effect */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent 0 78px, rgba(255,255,255,0.55) 78px 86px)",
                  mixBlendMode: "screen",
                  opacity: 0.55,
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent 0 130px, rgba(255,255,255,0.35) 130px 132px)",
                }}
              />

              {/* 14 years circular badge */}
              <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
                <div className="relative grid h-44 w-44 place-items-center rounded-full bg-white/90 shadow-xl backdrop-blur">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_30s_linear_infinite]">
                    <defs>
                      <path id="badgeCircle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                    </defs>
                    <text fill="currentColor" className="text-foreground" style={{ fontSize: "15px", letterSpacing: "6px", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                      <textPath href="#badgeCircle" startOffset="0">
                        14 YEARS OF EXPERIENCE · 14 YEARS OF EXPERIENCE ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="flex flex-col items-center">
                    <div className="font-display text-5xl font-bold text-primary">14</div>
                    <div className="mt-2 flex gap-1 text-[color:var(--brand-olive)]">
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat cards floating on the right */}
            <div className="absolute right-3 top-6 flex w-[58%] flex-col gap-4 md:right-6">
              {[
                { value: "200+", label: "Branches across Italy", color: "var(--color-primary)" },
                { value: "7+", label: "Provinces served", color: "var(--brand-green)" },
                { value: "10+", label: "Ecosystem brands", color: "var(--brand-olive)" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-card/95 p-5 shadow-[0_18px_40px_-18px_rgba(15,35,60,0.25)] backdrop-blur">
                  <div className="font-display text-4xl font-bold tracking-tight" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <Section className="!py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="14+" label="Years of experience" accent="primary" />
          <StatCard value="200+" label="Branches across Italy" accent="sky" />
          <StatCard value="7+" label="Provinces served" accent="green" />
          <StatCard value="10+" label="Ecosystem brands" accent="olive" />
        </div>
      </Section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-[color:var(--color-surface)]">
        <div className="container-x flex flex-wrap items-center justify-between gap-6 py-8 text-sm text-muted-foreground">
          {[
            { icon: <ShieldCheck className="h-4 w-4" />, t: "14 Years Experience" },
            { icon: <Building2 className="h-4 w-4" />, t: "200+ Branches" },
            { icon: <Scale className="h-4 w-4" />, t: "Legal Expertise" },
            { icon: <Users className="h-4 w-4" />, t: "Large Client Base" },
            { icon: <Sparkles className="h-4 w-4" />, t: "Community Reputation" },
          ].map((it) => (
            <div key={it.t} className="inline-flex items-center gap-2 font-medium text-foreground/80">
              <span className="text-primary">{it.icon}</span> {it.t}
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why CSN exists</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Living in Italy shouldn't feel like solving a puzzle.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Many Bangladeshi families in Italy struggle with confusing paperwork,
              unreliable agents and scattered information. We built one trusted
              ecosystem so you always know where to go — and who to trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/about">Our story</CTAButton>
              <CTAButton to="/platforms" variant="secondary">Explore platforms</CTAButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: <Scale className="h-5 w-5" />, t: "Confusing paperwork", d: "Permits, tax, patronato — handled by certified consultants." },
              { icon: <ShieldCheck className="h-5 w-5" />, t: "Trust concerns", d: "200+ branches, real offices and a 14-year reputation." },
              { icon: <Globe2 className="h-5 w-5" />, t: "Scattered services", d: "Travel, legal, education in one connected ecosystem." },
              { icon: <Headphones className="h-5 w-5" />, t: "No clear support", d: "Bangla-speaking help desk by phone, WhatsApp and in person." },
            ].map((c) => (
              <div key={c.t} className="card-elev card-elev-hover p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">{c.icon}</div>
                <h4 className="mt-4 font-display text-base font-semibold">{c.t}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-[color:var(--color-surface)]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={<>Services built around real <span className="text-primary">community needs.</span></>}
            description="Four core services trusted by thousands of Bangladeshi families across Italy."
          />
          <CTAButton to="/services" variant="ghost">All services</CTAButton>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <FeatureCard key={s.title} {...s} />)}
        </div>
      </Section>

      {/* PLATFORMS */}
      <Section>
        <SectionHeading
          eyebrow="The ecosystem"
          title={<>Three platforms. One trusted brand.</>}
          description="CAF CSN, CSN Travel and Cepron — each platform serves a specific need, all backed by the same commitment to trust."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.name} className="card-elev card-elev-hover relative overflow-hidden p-7">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-20 blur-2xl" style={{ background: p.color }} />
              <Eyebrow>{p.tag}</Eyebrow>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {p.stats.map((st) => (
                  <div key={st.v}>
                    <div className="font-display text-2xl font-bold" style={{ color: p.color }}>{st.k}</div>
                    <div className="text-xs text-muted-foreground">{st.v}</div>
                  </div>
                ))}
              </div>
              <Link to="/platforms" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Explore {p.name} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-[color:var(--color-surface-2)]">
        <SectionHeading
          eyebrow="Voices from the community"
          title={<>Why families trust CSN with what matters.</>}
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-elev card-elev-hover p-7">
              <Quote className="h-7 w-7 text-primary/30" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/50 to-[color:var(--brand-sky)]/50" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* BRANDS */}
      <Section>
        <SectionHeading eyebrow="The brands" title="One ecosystem, ten brands." align="center" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b) => (
            <div key={b} className="card-elev card-elev-hover grid h-24 place-items-center text-center">
              <span className="font-display text-base font-bold tracking-tight text-foreground/80">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* PARTNER */}
      <Section className="bg-[color:var(--color-surface)]">
        <SectionHeading
          eyebrow="Partner with us"
          title={<>Grow with the largest Bangladeshi business network in Italy.</>}
          description="Four ways to build your future on top of CSN's trusted infrastructure."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Building2 className="h-5 w-5" />, title: "Open a CAF Branch", description: "Bring CAF / Patronato services to your city." },
            { icon: <Plane className="h-5 w-5" />, title: "Travel Reseller", description: "Sell tickets and packages with CSN Travel tools." },
            { icon: <Globe2 className="h-5 w-5" />, title: "Travel Wholesaler", description: "Wholesale rates for established agencies." },
            { icon: <BookOpen className="h-5 w-5" />, title: "Teach on Cepron", description: "Earn by sharing your expertise with the community." },
          ].map((c) => <FeatureCard key={c.title} {...c} to="/business" />)}
        </div>
      </Section>

      {/* CONTACT */}
      <Section>
        <div className="card-elev relative overflow-hidden p-10 md:p-16">
          <img src={meshImg} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" width={1600} height={900} />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Talk to a real person at CSN.
              </h2>
              <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
                Call, WhatsApp or visit one of our 200+ branches. We answer in Bangla, English and Italian.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton to="/contact">Contact us</CTAButton>
                <CTAButton href="tel:+390000000000" variant="secondary">Call Italy office</CTAButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <MapPin className="h-5 w-5" />, t: "Italy HQ", d: "Via Roma 123, Rome" },
                { icon: <MapPin className="h-5 w-5" />, t: "Bangladesh HQ", d: "Banani, Dhaka" },
                { icon: <Briefcase className="h-5 w-5" />, t: "For business", d: "partners@csn..." },
                { icon: <Headphones className="h-5 w-5" />, t: "Help desk", d: "Mon–Sat · 9–7" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">{c.icon}</div>
                  <div className="mt-3 text-sm font-semibold">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
