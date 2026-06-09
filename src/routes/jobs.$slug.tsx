import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, CTAButton, Eyebrow } from "@/components/site/Primitives";
import { MapPin, Briefcase, Clock, DollarSign, CheckCircle2, ArrowLeft, Users } from "lucide-react";

type Job = {
  slug: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
};

const JOBS: Record<string, Job> = {
  "senior-caf-consultant": {
    slug: "senior-caf-consultant",
    title: "Senior CAF Consultant",
    dept: "Legal",
    location: "Rome, Italy",
    type: "Full-time",
    salary: "€38,000 – €48,000 / year",
    posted: "Posted 3 days ago",
    summary:
      "Lead CAF advisory for the Bangladeshi community in Rome — tax filings, residency, family reunification and document services — with full backing from our central operations team.",
    responsibilities: [
      "Manage end-to-end CAF cases: 730, Unico, ISEE, contracts and family reunification.",
      "Advise clients in Bengali, Italian and English with empathy and clarity.",
      "Review junior consultants' files and lead weekly knowledge sharing.",
      "Maintain compliance with Agenzia delle Entrate and INPS standards.",
      "Help shape new service offerings together with the product team.",
    ],
    requirements: [
      "3+ years of CAF / patronato or tax consulting experience in Italy.",
      "Strong working knowledge of Italian tax and immigration regulations.",
      "Fluent in Bengali and Italian; English is a plus.",
      "Comfortable using digital case management tools.",
    ],
    niceToHave: [
      "Existing client base in Rome metro area.",
      "Experience training or mentoring junior consultants.",
    ],
    benefits: [
      "Annual training budget and certifications.",
      "Performance bonus tied to client satisfaction.",
      "Hybrid schedule after probation.",
      "Health insurance contribution.",
    ],
  },
  "travel-operations-lead": {
    slug: "travel-operations-lead",
    title: "Travel Operations Lead",
    dept: "Travel",
    location: "Milan, Italy",
    type: "Full-time",
    salary: "€42,000 – €55,000 / year",
    posted: "Posted 1 week ago",
    summary:
      "Run day-to-day operations for CSN Travel — supplier relationships, ticketing quality, and reseller support — and help us scale from thousands to tens of thousands of trips per year.",
    responsibilities: [
      "Own SLAs for ticketing, hotel and visa operations across the reseller network.",
      "Negotiate and manage GDS, airline and DMC contracts.",
      "Build dashboards that surface bottlenecks before they become escalations.",
      "Coach a team of 6+ operations specialists.",
    ],
    requirements: [
      "5+ years in travel operations (OTA, TMC or wholesaler).",
      "Deep familiarity with Amadeus / Sabre and BSP processes.",
      "Proven team leadership track record.",
      "Fluent in English and Italian.",
    ],
    niceToHave: [
      "Experience launching B2B travel platforms.",
      "Bengali language skills.",
    ],
    benefits: [
      "Travel allowance every year.",
      "Stock-equivalent performance bonus.",
      "Hybrid Milan office.",
    ],
  },
  "italian-language-instructor": {
    slug: "italian-language-instructor",
    title: "Italian Language Instructor",
    dept: "Education",
    location: "Bologna, Italy",
    type: "Part-time",
    salary: "€22 – €30 / hour",
    posted: "Posted 5 days ago",
    summary:
      "Teach A1–B2 Italian to motivated Bangladeshi learners, both in-class and on the Cepron platform, with structured curriculum support and small class sizes.",
    responsibilities: [
      "Deliver 8–16 hours of group classes per week.",
      "Run weekly speaking labs and CILS exam preparation sessions.",
      "Track learner progress and provide written feedback.",
    ],
    requirements: [
      "DITALS, CEDILS or equivalent teaching certification.",
      "2+ years teaching Italian as a second language.",
      "Comfortable teaching adults from diverse backgrounds.",
    ],
    niceToHave: [
      "Experience with online teaching platforms.",
      "Bengali language familiarity.",
    ],
    benefits: [
      "Paid lesson prep time.",
      "Free access to all Cepron courses.",
      "Flexible scheduling.",
    ],
  },
  "frontend-engineer": {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    dept: "Technology",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 120,000 – 180,000 / month",
    posted: "Posted 2 days ago",
    summary:
      "Build the user-facing surfaces of CSN's platforms — CAF CSN, CSN Travel and Cepron — with a small, senior product team that ships every week.",
    responsibilities: [
      "Build production React + TypeScript features end to end.",
      "Collaborate with designers on accessible, multilingual UIs.",
      "Own performance, testing and observability for your areas.",
    ],
    requirements: [
      "3+ years of React / TypeScript in production.",
      "Solid CSS fundamentals and design-system thinking.",
      "Comfortable with REST + modern data fetching patterns.",
    ],
    niceToHave: [
      "TanStack Router / Query experience.",
      "Open-source contributions.",
    ],
    benefits: [
      "Remote-friendly with a Dhaka hub.",
      "Annual learning budget.",
      "Health coverage for you and family.",
    ],
  },
  "branch-manager": {
    slug: "branch-manager",
    title: "Branch Manager",
    dept: "Operations",
    location: "Naples, Italy",
    type: "Full-time",
    salary: "€36,000 – €46,000 / year + bonus",
    posted: "Posted 4 days ago",
    summary:
      "Lead the Naples branch — staff, P&L, community partnerships — and grow it into our largest southern Italy hub.",
    responsibilities: [
      "Own branch revenue, costs and client satisfaction.",
      "Recruit, coach and retain a team of 4–8.",
      "Build local partnerships with community organisations.",
    ],
    requirements: [
      "3+ years managing a service-business branch or store.",
      "Strong people leadership and operations skills.",
      "Fluent in Italian and Bengali.",
    ],
    niceToHave: ["Network within the Naples Bangladeshi community."],
    benefits: ["Quarterly performance bonus.", "Relocation support if needed."],
  },
  "community-support-agent": {
    slug: "community-support-agent",
    title: "Community Support Agent",
    dept: "Support",
    location: "Remote · Italy",
    type: "Full-time",
    salary: "€24,000 – €30,000 / year",
    posted: "Posted 1 day ago",
    summary:
      "Be the first friendly voice our community hears — by phone, WhatsApp and email — and make sure no question goes unanswered.",
    responsibilities: [
      "Handle 40–60 contacts per day across channels.",
      "Route complex cases to the right specialist team.",
      "Spot patterns and feed them back to product and ops.",
    ],
    requirements: [
      "1+ year in customer support or front-desk role.",
      "Fluent in Bengali and Italian.",
      "Calm, empathetic, well-organised.",
    ],
    niceToHave: ["English proficiency.", "Experience with Zendesk / HubSpot."],
    benefits: ["Fully remote.", "Equipment stipend.", "Clear progression path."],
  },
};

export const Route = createFileRoute("/jobs/$slug")({
  loader: ({ params }) => {
    const job = JOBS[params.slug];
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.job.title ?? "Job"} — CSN Careers` },
      {
        name: "description",
        content: loaderData?.job.summary ?? "Open role at CSN Bangladesh.",
      },
      { property: "og:title", content: `${loaderData?.job.title ?? "Job"} — CSN Careers` },
    ],
  }),
  notFoundComponent: () => (
    <Section>
      <h1 className="font-display text-3xl font-bold">Job not found</h1>
      <p className="mt-3 text-muted-foreground">
        This role may have been filled or removed.
      </p>
      <div className="mt-6">
        <CTAButton to="/career">Back to all roles</CTAButton>
      </div>
    </Section>
  ),
  component: JobPage,
});

function JobPage() {
  const { job } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`Careers · ${job.dept}`}
        title={<>{job.title.split(" ").slice(0, -1).join(" ")} <span className="text-[color:var(--brand-red)]">{job.title.split(" ").slice(-1)}</span></>}
        description={job.summary}
      >
        <CTAButton to="/career" variant="secondary">All open roles</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <Block title="About the role">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {job.summary}
              </p>
            </Block>

            <Block title="What you'll do">
              <List items={job.responsibilities} />
            </Block>

            <Block title="What we're looking for">
              <List items={job.requirements} />
            </Block>

            {job.niceToHave.length > 0 && (
              <Block title="Nice to have">
                <List items={job.niceToHave} />
              </Block>
            )}

            <Block title="Benefits">
              <List items={job.benefits} />
            </Block>

            <div className="pt-2">
              <Link
                to="/career"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all open roles
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card-elev space-y-5 p-6">
              <Eyebrow>Role details</Eyebrow>
              <Meta icon={<Briefcase className="h-4 w-4" />} label="Department" value={job.dept} />
              <Meta icon={<MapPin className="h-4 w-4" />} label="Location" value={job.location} />
              <Meta icon={<Clock className="h-4 w-4" />} label="Type" value={job.type} />
              <Meta icon={<DollarSign className="h-4 w-4" />} label="Compensation" value={job.salary} />
              <Meta icon={<Users className="h-4 w-4" />} label="Status" value={job.posted} />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-base text-muted-foreground">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[color:var(--brand-red)]" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-primary-soft text-primary">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}

