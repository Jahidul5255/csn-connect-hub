import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Eyebrow } from "@/components/site/Primitives";
import { Phone, MessageCircle, Facebook, Mail, MapPin, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CSN Bangladesh" },
      { name: "description", content: "Call, WhatsApp, email or visit a branch. We answer in Bangla, English and Italian." },
      { property: "og:title", content: "Contact CSN" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: <Phone className="h-5 w-5" />, t: "Call us", v: "+39 000 000 0000", href: "tel:+390000000000", color: "var(--color-primary)" },
  { icon: <MessageCircle className="h-5 w-5" />, t: "WhatsApp", v: "+39 000 000 0000", href: "https://wa.me/390000000000", color: "var(--brand-green)" },
  { icon: <Facebook className="h-5 w-5" />, t: "Facebook", v: "@csnbangladesh", href: "#", color: "var(--brand-sky)" },
  { icon: <Mail className="h-5 w-5" />, t: "Email", v: "info@csnbangladesh.com", href: "mailto:info@csnbangladesh.com", color: "var(--brand-red)" },
];

const faqs = [
  { q: "Do I need an appointment to visit a branch?", a: "Walk-ins are welcome at every CSN branch. For complex CAF or legal cases, an appointment shortens your wait." },
  { q: "What languages do you speak?", a: "Bangla, English and Italian — every branch and channel." },
  { q: "How quickly do you respond?", a: "Calls and WhatsApp during business hours: within minutes. Email and forms: within one working day." },
  { q: "Are services available outside Italy?", a: "We support clients across Italy and partner with our Dhaka office for documentation in Bangladesh." },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Get in <span className="text-primary">touch.</span></>}
        description="Choose the channel that works for you. A real person, in your language, will answer."
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a key={c.t} href={c.href} className="card-elev card-elev-hover block p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: c.color }}>{c.icon}</div>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
              <div className="mt-1 font-display text-base font-semibold">{c.v}</div>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--color-surface)]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card-elev space-y-4 p-8">
            <Eyebrow>Send a message</Eyebrow>
            <h2 className="font-display text-2xl font-bold md:text-3xl">We'd love to hear from you.</h2>
            {submitted ? (
              <div className="rounded-2xl border border-[color:var(--brand-green)]/30 bg-[color:var(--brand-green)]/10 p-6 text-sm">
                Thanks — your message is received. We'll reply within one business day.
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" required />
                  <Field label="Phone" type="tel" required />
                  <Field label="Email" type="email" required />
                  <SelectField label="Service interest" options={["CAF / Legal", "Travel", "Education", "Language", "Business"]} />
                </div>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium">Message</span>
                  <textarea rows={5} className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
                </label>
                <button className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  Send message
                </button>
              </>
            )}
          </form>

          <div className="space-y-4">
            <div className="card-elev p-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary"><MapPin className="h-3.5 w-3.5" /> Italy office</div>
              <h3 className="mt-2 font-display text-lg font-semibold">CSN Italy HQ</h3>
              <p className="mt-1 text-sm text-muted-foreground">Via Roma 123, 00100 Rome, Italy</p>
              <p className="mt-1 text-sm text-muted-foreground">+39 000 000 0000 · italy@csnbangladesh.com</p>
            </div>
            <div className="card-elev p-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-red)]"><MapPin className="h-3.5 w-3.5" /> Bangladesh office</div>
              <h3 className="mt-2 font-display text-lg font-semibold">CSN Bangladesh HQ</h3>
              <p className="mt-1 text-sm text-muted-foreground">House 12, Road 5, Banani, Dhaka 1213</p>
              <p className="mt-1 text-sm text-muted-foreground">+880 1700 000000 · dhaka@csnbangladesh.com</p>
            </div>
            <div className="card-elev overflow-hidden">
              <div className="aspect-[5/4] w-full bg-gradient-to-br from-primary/20 via-[color:var(--brand-sky)]/15 to-[color:var(--brand-olive)]/20">
                <div className="grid h-full place-items-center text-sm text-foreground/60">
                  Interactive map · Italy & Bangladesh offices
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions." align="center" />
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
function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      <select className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
