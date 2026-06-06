import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, FeatureCard, CTAButton } from "@/components/site/Primitives";
import { Plane, Hotel, Car, FileCheck, Compass, Globe2, Briefcase, ChevronDown } from "lucide-react";
import travelImg from "@/assets/travel.jpg";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel — CSN Travel" },
      { name: "description", content: "International tickets, hotels, transfers, visa support and Umrah packages — by CSN Travel." },
      { property: "og:title", content: "CSN Travel" },
      { property: "og:image", content: travelImg },
    ],
  }),
  component: TravelPage,
});

const services = [
  { icon: <Plane className="h-5 w-5" />, title: "International tickets", description: "Italy–Dhaka direct & partner fares." },
  { icon: <Plane className="h-5 w-5" />, title: "Domestic flights", description: "Internal Italy and EU routes." },
  { icon: <Hotel className="h-5 w-5" />, title: "Hotel booking", description: "From budget to premium, vetted properties." },
  { icon: <Car className="h-5 w-5" />, title: "Transportation", description: "Airport transfers, private cars, tours." },
  { icon: <FileCheck className="h-5 w-5" />, title: "Visa support", description: "Documentation, appointments, follow-ups." },
  { icon: <Compass className="h-5 w-5" />, title: "Umrah packages", description: "Group and family packages with full guidance." },
  { icon: <Globe2 className="h-5 w-5" />, title: "Custom itineraries", description: "Tell us where, we'll plan the rest." },
  { icon: <Briefcase className="h-5 w-5" />, title: "Travel business", description: "Become a reseller or wholesaler." },
];

const faqs = [
  { q: "Do you handle visa appointments?", a: "Yes — our team prepares documents and books appointments at the relevant consulate or VFS centre." },
  { q: "Can I book Umrah for a group?", a: "Absolutely. We organise group Umrah packages with flights, accommodation, transport and a guide." },
  { q: "Do you offer refunds?", a: "Refund policy depends on the airline or hotel terms. We'll always explain the conditions before you book." },
  { q: "Can I become a reseller?", a: "Yes. We onboard agencies and individual resellers with tools, training and access to our inventory." },
];

function TravelPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="CSN Travel"
        title={<>Travel that feels <span className="text-primary">looked after.</span></>}
        description="Tickets, hotels, visas and Umrah — handled by people who know your route and your community."
      >
        <CTAButton to="/contact">Plan your trip</CTAButton>
        <CTAButton to="/business" variant="secondary">Become a reseller</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={travelImg} alt="" className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-xl" loading="lazy" width={1400} height={1000} />
          <div>
            <p className="eyebrow">What we offer</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              A full-service travel desk for your family and your business.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From a single ticket to a 200-pax Umrah group, CSN Travel handles
              the details. Walk into any branch or book online.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <SectionHeading eyebrow="Services" title="What we book for you." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <FeatureCard key={s.title} {...s} />)}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Travel questions, answered." align="center" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => (
            <button key={f.q} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-start justify-between gap-6 p-6 text-left">
              <div>
                <h4 className="font-display text-base font-semibold text-foreground">{f.q}</h4>
                {open === i && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
              <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition ${open === i ? "rotate-180 text-primary" : ""}`} />
            </button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton to="/contact">Contact CSN Travel</CTAButton>
        </div>
      </Section>
    </>
  );
}
