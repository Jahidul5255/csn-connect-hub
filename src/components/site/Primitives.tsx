import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.05] text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function CTAButton({
  to,
  variant = "primary",
  children,
  href,
}: {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-[0_10px_24px_-10px_color-mix(in_oklab,var(--color-primary)_70%,transparent)]",
    secondary: "border border-border bg-card text-foreground hover:border-foreground/30",
    ghost: "text-foreground hover:bg-secondary",
    danger: "bg-[color:var(--brand-red)] text-white hover:opacity-90 hover:shadow-[0_10px_24px_-10px_color-mix(in_oklab,var(--brand-red)_70%,transparent)]",
  }[variant];


  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={`${base} ${styles}`}>
      {content}
    </Link>
  );
}

export function StatCard({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: "primary" | "red" | "olive" | "green" | "sky";
}) {
  const color =
    accent === "red"
      ? "text-[color:var(--brand-red)]"
      : accent === "olive"
        ? "text-[color:var(--brand-olive)]"
        : accent === "green"
          ? "text-[color:var(--brand-green)]"
          : accent === "sky"
            ? "text-[color:var(--brand-sky)]"
            : "text-primary";
  return (
    <div className="card-elev card-elev-hover p-6">
      <div className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${color}`}>
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  to,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  to?: string;
}) {
  const inner = (
    <div className="card-elev card-elev-hover flex h-full flex-col gap-4 p-6">
      <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {to && (
        <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Learn more <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </div>
  );
  if (to) return <Link to={to}>{inner}</Link>;
  return inner;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[color:var(--color-surface-2)]">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[color:var(--brand-olive)]/15 blur-3xl" />
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
