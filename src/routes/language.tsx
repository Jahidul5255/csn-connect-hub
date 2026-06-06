import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FeatureCard, CTAButton, Eyebrow } from "@/components/site/Primitives";
import { Languages, Award, Users, BookOpen, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/language")({
  head: () => ({
    meta: [
      { title: "Italian Language Courses — CSN" },
      { name: "description", content: "Italian language courses from A1 to C2 plus citizenship exam preparation. Certified instructors, flexible schedules." },
      { property: "og:title", content: "Italian Language Courses" },
    ],
  }),
  component: LanguagePage,
});

const levels = [
  { lvl: "A1 — A2", title: "Beginner", desc: "Build confidence with daily Italian — greetings, work, family, errands.", color: "var(--color-primary)" },
  { lvl: "B1 — B2", title: "Intermediate", desc: "Hold real conversations, write emails, handle interviews and offices.", color: "var(--brand-sky)" },
  { lvl: "C1 — C2", title: "Advanced", desc: "Master fluent Italian for business, academia and leadership roles.", color: "var(--brand-green)" },
];

function LanguagePage() {
  return (
    <>
      <PageHero
        eyebrow="Italian Language Courses"
        title={<>Speak Italian like <span className="text-primary">you mean it.</span></>}
        description="Structured courses from A1 to C2, plus targeted citizenship exam preparation. Taught by certified, community-aware instructors."
      >
        <CTAButton to="/contact">Enrol now</CTAButton>
        <CTAButton to="/services" variant="secondary">All services</CTAButton>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Levels" title="A path for every learner." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {levels.map((l) => (
            <div key={l.lvl} className="card-elev card-elev-hover relative overflow-hidden p-7">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-20 blur-2xl" style={{ background: l.color }} />
              <div className="font-display text-sm font-semibold uppercase tracking-wider" style={{ color: l.color }}>{l.lvl}</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{l.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
              <div className="mt-5">
                <CTAButton to="/contact" variant="ghost">Enrol</CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Citizenship</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Citizenship exam preparation — built around the real test.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Pass with confidence. We use real exam structures, simulated tests
              and one-on-one coaching to make sure you walk in ready.
            </p>
            <div className="mt-7"><CTAButton to="/contact">Book a free assessment</CTAButton></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: <Award className="h-5 w-5" />, title: "Recognised certificates", description: "CILS, CELI and PLIDA preparation." },
              { icon: <Users className="h-5 w-5" />, title: "Small class sizes", description: "Up to 12 students per group." },
              { icon: <BookOpen className="h-5 w-5" />, title: "Hybrid format", description: "In-person or online — your choice." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "Refund guarantee", description: "Switch level free in the first week." },
            ].map((c) => <FeatureCard key={c.title} {...c} />)}
          </div>
        </div>
      </Section>
    </>
  );
}
