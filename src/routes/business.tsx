import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, FeatureCard, CTAButton, Eyebrow } from "@/components/site/Primitives";
import { Plane, Globe2, Building2, BookOpen, ShieldCheck, Rocket, Users, TrendingUp, Headphones } from "lucide-react";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "For Business — Partner with CSN" },
      { name: "description", content: "Open a CAF branch, become a travel reseller, wholesale travel, or teach on Cepron. Partner with CSN Bangladesh." },
      { property: "og:title", content: "Partner with CSN" },
    ],
  }),
  component: BusinessPage,
});

const opportunities = [
  { icon: <Plane className="h-5 w-5" />, title: "Travel reseller", description: "Sell tickets and packages with our infrastructure." },
  { icon: <Globe2 className="h-5 w-5" />, title: "Travel wholesaler", description: "Wholesale rates for established agencies." },
  { icon: <Building2 className="h-5 w-5" />, title: "CAF franchise", description: "Open a CAF / Patronato branch in your city." },
  { icon: <BookOpen className="h-5 w-5" />, title: "Teach on Cepron", description: "Monetise your expertise on our LMS." },
];

const reasons = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Established brand", description: "14 years and a recognised name in the community." },
  { icon: <Rocket className="h-5 w-5" />, title: "Proven model", description: "Replicable systems across 200+ branches." },
  { icon: <Headphones className="h-5 w-5" />, title: "Training & support", description: "Hands-on onboarding, ongoing operations help." },
  { icon: <Users className="h-5 w-5" />, title: "Network access", description: "Plug into the largest community network." },
  { icon: <TrendingUp className="h-5 w-5" />, title: "Growth potential", description: "Underserved markets across Italy and Europe." },
];

const steps = [
  { n: "01", t: "Apply", d: "Send the form below — we'll reach out within 48 hours." },
  { n: "02", t: "Review", d: "We assess your fit and the opportunity in your area." },
  { n: "03", t: "Training", d: "Onboarding, systems training and brand kit." },
  { n: "04", t: "Launch", d: "Go live with ongoing operational support." },
];

function BusinessPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="For Business"
        title={<>Build your future <span className="text-primary">with CSN.</span></>}
        description="Join the largest Bangladeshi business network in Italy. Four ways to grow — backed by our brand, tools and community."
      >
        <CTAButton to="#apply">Apply now</CTAButton>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Opportunities" title="Four paths. One ecosystem." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {opportunities.map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <SectionHeading eyebrow="Why partner with us" title="The infrastructure of trust." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="How it works." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="card-elev card-elev-hover p-6">
              <div className="font-display text-4xl font-bold text-primary">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="apply" className="bg-[color:var(--color-surface-2)]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>Apply</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">Tell us about your opportunity.</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Share a few details and our partnerships team will get back to you within 48 hours.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="card-elev space-y-4 p-8"
          >
            {submitted ? (
              <div className="rounded-2xl border border-[color:var(--brand-green)]/30 bg-[color:var(--brand-green)]/10 p-6 text-sm">
                Thanks — your application is received. We'll be in touch within 48 hours.
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="City / Province" name="city" required />
                </div>
                <SelectField
                  label="Opportunity"
                  name="opp"
                  options={["Travel reseller", "Travel wholesaler", "Open a CAF branch", "Teach on Cepron"]}
                />
                <TextareaField label="Tell us about you" name="msg" />
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  Submit application
                </button>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}{required && <span className="text-[color:var(--brand-red)]">*</span>}</span>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
    </label>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      <select name={name} className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
function TextareaField({ label, name }: { label: string; name: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      <textarea name={name} rows={4} className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
    </label>
  );
}
