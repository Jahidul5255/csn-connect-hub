import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FeatureCard, CTAButton, Eyebrow, StatCard } from "@/components/site/Primitives";
import { GraduationCap, BookOpen, Award, Users, Video, BarChart3, Sparkles, Globe2 } from "lucide-react";
import eduImg from "@/assets/education.jpg";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Cepron Learning" },
      { name: "description", content: "Cepron — the learning platform of CSN: courses, certifications and a full LMS for students and instructors." },
      { property: "og:title", content: "Cepron — Learn with CSN" },
      { property: "og:image", content: eduImg },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Cepron"
        title={<>Learn skills that <span className="text-[color:var(--brand-red)]">change your life.</span></>}
        description="Cepron is CSN's learning platform — practical courses, real certifications, designed for the Bangladeshi community in Italy."
      >
        <CTAButton to="/contact">Start learning</CTAButton>
        <CTAButton to="/business" variant="secondary">Teach on Cepron</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Categories</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Practical learning, taught in your language.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From restaurant management to IT, accounting and freelancing —
              every course is built with input from people already working in
              the field in Italy.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <StatCard value="120+" label="Courses" accent="primary" />
              <StatCard value="8K+" label="Learners" accent="green" />
            </div>
          </div>
          <img src={eduImg} alt="" className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-xl" loading="lazy" width={1400} height={1000} />
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <SectionHeading eyebrow="Platform features" title="A modern LMS, built for the community." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Video className="h-5 w-5" />, title: "Video lessons", description: "Crisp HD lessons on any device." },
            { icon: <BarChart3 className="h-5 w-5" />, title: "Progress dashboard", description: "Track lessons, quizzes and grades." },
            { icon: <Award className="h-5 w-5" />, title: "Certifications", description: "Recognised completion certificates." },
            { icon: <Users className="h-5 w-5" />, title: "Community forums", description: "Ask questions, get peer help." },
          ].map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-elev p-10">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><GraduationCap className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-bold">For students</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["Affordable pricing and instalments", "Bangla-first content", "Recognised certificates", "Career-aligned curriculum"].map(t => (
                <li key={t} className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-primary" /> {t}</li>
              ))}
            </ul>
            <div className="mt-7"><CTAButton to="/contact">Browse courses</CTAButton></div>
          </div>
          <div className="card-elev p-10">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--brand-green)] text-white"><BookOpen className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-bold">For instructors</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["Earn from your expertise", "Studio support for recording", "Built-in marketing reach", "Transparent revenue share"].map(t => (
                <li key={t} className="flex items-start gap-2"><Globe2 className="mt-0.5 h-4 w-4 text-[color:var(--brand-green)]" /> {t}</li>
              ))}
            </ul>
            <div className="mt-7"><CTAButton to="/business" variant="secondary">Apply to teach</CTAButton></div>
          </div>
        </div>
      </Section>
    </>
  );
}
