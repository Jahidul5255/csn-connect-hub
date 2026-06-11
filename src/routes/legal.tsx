import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FeatureCard, CTAButton, Eyebrow } from "@/components/site/Primitives";
import { Scale, FileText, Receipt, Users, Briefcase, ShieldCheck, AlertCircle, Building2 } from "lucide-react";
import legalImg from "@/assets/legal.jpg";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Support / CAF CSN" },
      { name: "description", content: "Immigration, tax, labor, patronato and business support — by CAF CSN, Italy's trusted Bangladeshi-led CAF network." },
      { property: "og:title", content: "CAF CSN — Legal Support" },
      { property: "og:image", content: legalImg },
    ],
  }),
  component: LegalPage,
});

const services = [
  { icon: <Scale className="h-5 w-5" />, title: "Legal consulting", description: "First-line legal advice on residency, contracts and disputes." },
  { icon: <FileText className="h-5 w-5" />, title: "Immigration support", description: "Permits, renewals, family reunification, citizenship paths." },
  { icon: <Receipt className="h-5 w-5" />, title: "Tax services", description: "730, ISEE, tax refunds, dichiarazione dei redditi." },
  { icon: <Users className="h-5 w-5" />, title: "Patronato services", description: "INPS, pensions, social benefits, disability claims." },
  { icon: <Briefcase className="h-5 w-5" />, title: "Labor consulting", description: "Contracts, payslips, employer/employee mediation." },
  { icon: <Building2 className="h-5 w-5" />, title: "Business assistance", description: "Open a partita IVA, SRL setup, VAT, accounting." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Document review", description: "Translation, certification and notarisation support." },
  { icon: <AlertCircle className="h-5 w-5" />, title: "Emergency support", description: "Urgent help with legal notices and deadlines." },
];

function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="CAF CSN — Legal Support"
        title={<>Documents handled. <span className="text-[color:var(--brand-red)]">Worries lifted.</span></>}
        description="Certified CAF and Patronato services across 200+ branches in Italy. Bangla-speaking consultants, real offices, transparent fees."
      >
        <CTAButton to="/contact">Book a consultation</CTAButton>
        <CTAButton to="/business" variant="danger">Open a CAF branch</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <img src={legalImg} alt="" className="aspect-[4/3] w-full rounded-3xl border border-border object-cover" loading="lazy" width={1400} height={1000} />
          <div>
            <Eyebrow>Trusted partner</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Italy's largest Bangladeshi-led CAF network.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              CAF CSN is a certified Centro di Assistenza Fiscale and Patronato
              partner. Our consultants help with everything from your first
              permit to opening a company — explained in your own language.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">Find a branch</CTAButton>
              <CTAButton to="/services" variant="secondary">All services</CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <SectionHeading eyebrow="What we do" title="From paperwork to peace of mind." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <FeatureCard key={s.title} {...s} />)}
        </div>
      </Section>

      <Section>
        <div className="card-elev relative overflow-hidden p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[color:var(--brand-red)]/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Franchise opportunity</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Open a CAF CSN branch in your city.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Bring trusted CAF and Patronato services to your community. We
                provide training, software, branding and customer flow.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton to="/business" variant="danger">Apply now</CTAButton>
                <CTAButton to="/contact" variant="secondary">Ask a question</CTAButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "200+", v: "Active branches" },
                { k: "7+", v: "Provinces" },
                { k: "14yr", v: "Track record" },
                { k: "10K+", v: "Cases / year" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-3xl font-bold text-primary">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
