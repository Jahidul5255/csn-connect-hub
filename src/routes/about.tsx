import { createFileRoute } from "@tanstack/react-router";
import { Section, PageHero, SectionHeading, StatCard, FeatureCard, CTAButton, Eyebrow } from "@/components/site/Primitives";
import { ShieldCheck, Heart, Compass, Users, Target, Eye, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CSN Bangladesh" },
      { name: "description", content: "14 years of building a trusted ecosystem for Bangladeshi families in Italy — across legal, travel, and education." },
      { property: "og:title", content: "About CSN Bangladesh" },
      { property: "og:description", content: "Our story, mission and why thousands of families trust CSN every day." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CSN Bangladesh"
        title={<>Building trust, <span className="text-[color:var(--brand-red)]">one family at a time.</span></>}
        description="For over 14 years, CSN has stood beside Bangladeshi families in Italy — helping with legal paperwork, education, travel and entrepreneurship under one trusted name."
      >
        <CTAButton to="/contact">Visit a branch</CTAButton>
        <CTAButton to="/services" variant="secondary">Our services</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <img src={heroImg} alt="CSN community" className="rounded-3xl border border-border object-cover" width={1400} height={1600} loading="lazy" />
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              A community-rooted ecosystem, professionally run.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              CSN started in 2011 as a single CAF office helping Bangladeshi
              families in Rome with documents and paperwork. Today we operate
              200+ branches across 7+ Italian provinces and run 10+ brands —
              still owned and shaped by the community we serve.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard value="2011" label="Founded" accent="primary" />
              <StatCard value="200+" label="Branches" accent="sky" />
              <StatCard value="7+" label="Provinces" accent="green" />
              <StatCard value="10K+" label="Families served" accent="olive" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-elev card-elev-hover p-10">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><Target className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To make life in Italy simpler, fairer and more productive for the
              Bangladeshi community — by providing trusted services and real
              economic opportunities under one roof.
            </p>
          </div>
          <div className="card-elev card-elev-hover p-10">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--brand-red)] text-white"><Eye className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              To become the most trusted ecosystem for migrant communities in
              Europe — built on service, integrity and shared growth.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our presence" title="Across Italy — close to home." />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Rome", "Milan", "Bologna", "Naples", "Florence", "Venice", "Turin", "Palermo"].map((city) => (
            <div key={city} className="card-elev card-elev-hover flex items-center gap-3 p-5">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">{city}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <SectionHeading eyebrow="Why people trust CSN" title="Five reasons families choose us." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <ShieldCheck className="h-5 w-5" />, title: "14 years of consistency", description: "We've stood by the community through every policy change." },
            { icon: <Heart className="h-5 w-5" />, title: "Community ownership", description: "Built by the community, for the community." },
            { icon: <Users className="h-5 w-5" />, title: "Bangla-first service", description: "Everyone on staff understands your language and your context." },
            { icon: <Compass className="h-5 w-5" />, title: "One ecosystem", description: "Travel, legal, education and business — all connected." },
            { icon: <MapPin className="h-5 w-5" />, title: "Real offices", description: "200+ physical branches you can walk into." },
            { icon: <Target className="h-5 w-5" />, title: "Outcome-driven", description: "We measure ourselves by what gets solved, not what gets sold." },
          ].map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our team"
          title={<>The people behind <span className="text-[color:var(--brand-red)]">CSN.</span></>}
          description="A close-knit leadership team that has grown alongside the community we serve."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { photo: team1, name: "Mohammad Rahman", role: "Founder & CEO" },
            { photo: team2, name: "Nasrin Akter", role: "Head of Operations" },
            { photo: team3, name: "Tanvir Hasan", role: "Director, Travel" },
            { photo: team4, name: "Shabnam Chowdhury", role: "Director, Education" },
          ].map((m) => (
            <div key={m.name} className="card-elev card-elev-hover overflow-hidden">
              <img
                src={m.photo}
                alt={m.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>


      <Section>
        <div className="card-elev p-10 text-center md:p-16">
          <Eyebrow>Let's talk</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold md:text-5xl">Have a question? We'd love to hear from you.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/contact">Contact us</CTAButton>
            <CTAButton to="/services" variant="secondary">Browse services</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
