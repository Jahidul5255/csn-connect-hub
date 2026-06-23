import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FeatureCard, CTAButton, Eyebrow } from "@/components/site/Primitives";
import { TrendingUp, Globe2, Sparkles, Users, MapPin, Briefcase, ArrowRight, Upload, FileText, X } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Join CSN" },
      { name: "description", content: "Open roles at CSN Bangladesh — Italy and Dhaka. Help us serve the community better." },
      { property: "og:title", content: "Careers at CSN" },
    ],
  }),
  component: CareerPage,
});

const benefits = [
  { icon: <TrendingUp className="h-5 w-5" />, title: "Career growth", description: "Real responsibility, fast progression." },
  { icon: <Globe2 className="h-5 w-5" />, title: "International exposure", description: "Work across Italy and Bangladesh." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Professional development", description: "Training budget and certifications." },
  { icon: <Users className="h-5 w-5" />, title: "Great team culture", description: "People-first, community-driven." },
];

const jobs = [
  { slug: "senior-caf-consultant", title: "Senior CAF Consultant", location: "Rome, Italy", type: "Full-time", dept: "Legal" },
  { slug: "travel-operations-lead", title: "Travel Operations Lead", location: "Milan, Italy", type: "Full-time", dept: "Travel" },
  { slug: "italian-language-instructor", title: "Italian Language Instructor", location: "Bologna, Italy", type: "Part-time", dept: "Education" },
  { slug: "frontend-engineer", title: "Frontend Engineer", location: "Dhaka, Bangladesh", type: "Full-time", dept: "Technology" },
  { slug: "branch-manager", title: "Branch Manager", location: "Naples, Italy", type: "Full-time", dept: "Operations" },
  { slug: "community-support-agent", title: "Community Support Agent", location: "Remote · Italy", type: "Full-time", dept: "Support" },
];

const steps = ["Apply", "Screening", "Interview", "Offer", "Onboarding"];

function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);

  const handleResume = (file: File | null) => {
    setResumeError(null);
    if (!file) { setResume(null); return; }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type) && !/\.(pdf|docx?|rtf)$/i.test(file.name)) {
      setResumeError("Please upload a PDF, DOC, or DOCX file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File must be under 5MB.");
      return;
    }
    setResume(file);
  };
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Join our <span className="text-[color:var(--brand-red)]">team.</span></>}
        description="We're hiring across Italy and Bangladesh — for people who want to do meaningful work for a real community."
      >
        <CTAButton to="#openings">See open roles</CTAButton>
        <CTAButton to="#cv" variant="secondary">Submit your CV</CTAButton>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Why work with us" title="A career with real impact." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </Section>

      <Section id="openings" className="bg-[color:var(--color-surface)]">
        <SectionHeading eyebrow="Open positions" title="Find your role." />
        <div className="mt-10 space-y-3">
          {jobs.map((j) => (
            <div key={j.title} className="card-elev card-elev-hover flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Briefcase className="h-3.5 w-3.5" /> {j.dept}
                </div>
                <h3 className="mt-1.5 font-display text-lg font-semibold">{j.title}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                  <span>· {j.type}</span>
                </div>
              </div>
              <Link
                to="/jobs/$slug"
                params={{ slug: j.slug }}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                View & apply <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="From application to first day." />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s} className="card-elev card-elev-hover p-6">
              <div className="font-display text-3xl font-bold text-primary">0{i+1}</div>
              <h3 className="mt-3 font-display text-base font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cv" className="bg-[color:var(--color-surface-2)]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>General application</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">Don't see your role? Send us your CV.</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We're always meeting talented people. Tell us what you do best.
            </p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card-elev space-y-4 p-8">
            {submitted ? (
              <div className="rounded-2xl border border-[color:var(--brand-green)]/30 bg-[color:var(--brand-green)]/10 p-6 text-sm">
                Thanks — we'll review your application and reach out if there's a fit.
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" required />
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" />
                  <Field label="Role of interest" />
                </div>
                <Field label="LinkedIn / Portfolio URL" type="url" />
                <div className="block text-sm">
                  <span className="mb-1.5 block font-medium text-foreground">Resume / CV<span className="text-[color:var(--brand-red)]">*</span></span>
                  {resume ? (
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-input bg-background px-3.5 py-2.5">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <FileText className="h-4 w-4 shrink-0 text-primary" />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium">{resume.name}</div>
                          <div className="text-xs text-muted-foreground">{(resume.size / 1024).toFixed(1)} KB</div>
                        </div>
                      </div>
                      <button type="button" onClick={() => setResume(null)} aria-label="Remove file" className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <label
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => { e.preventDefault(); handleResume(e.dataTransfer.files?.[0] ?? null); }}
                      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-input bg-background px-4 py-6 text-center transition hover:border-primary hover:bg-primary/5"
                    >
                      <Upload className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">Click to upload or drag and drop</div>
                      <div className="text-xs text-muted-foreground">PDF, DOC, DOCX — max 5MB</div>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        required
                        className="sr-only"
                        onChange={(e) => handleResume(e.target.files?.[0] ?? null)}
                      />
                    </label>
                  )}
                  {resumeError && <p className="mt-1.5 text-xs text-[color:var(--brand-red)]">{resumeError}</p>}
                </div>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium">Cover note</span>
                  <textarea rows={4} className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
                </label>
                <button className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  Submit CV
                </button>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}{required && <span className="text-[color:var(--brand-red)]">*</span>}</span>
      <input type={type} required={required} className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
    </label>
  );
}
