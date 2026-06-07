import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane, Scale, GraduationCap, Languages, ShieldCheck, Building2,
  Users, Globe2, Sparkles, Star, Quote, Briefcase, BookOpen, MapPin, Headphones,
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
      <section className="relative overflow-hidden border-b border-border bg-[color:var(--color-surface-2)]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[color:var(--brand-olive)]/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" />
              Trusted since 2011 · 200+ branches
            </span>
            <h1 className="mt-5 text-balance font-display text-5xl font-bold leading-[1.02] text-foreground md:text-7xl">
              Your trusted gateway to <span className="text-primary">services</span> & opportunities in Italy.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Supporting Bangladeshi communities across Italy through travel, legal,
              educational and business services for over 14 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/services">Explore Services</CTAButton>
              <CTAButton to="/contact" variant="secondary">Contact Us</CTAButton>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-[color:var(--brand-sky)]/40" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-foreground">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--brand-olive)] text-[color:var(--brand-olive)]" />)}
                  <span className="ml-1 font-semibold">4.9</span>
                </div>
                <div>Trusted by 10,000+ families across Italy</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(35,118,151,0.35)]">
              <img src={heroImg} alt="CSN Bangladesh community in Italy" className="aspect-[5/6] w-full object-cover" width={1600} height={1920} />
            </div>
            <div className="absolute -left-6 bottom-8 hidden w-64 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Verified ecosystem</div>
                  <div className="text-sm font-semibold">10+ trusted brands</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur md:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">This year</div>
              <div className="mt-1 font-display text-2xl font-bold text-foreground">+38% <span className="text-sm font-medium text-[color:var(--brand-green)]">growth</span></div>
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
