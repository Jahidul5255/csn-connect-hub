import { Link } from "@tanstack/react-router";

export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--color-primary)_60%,transparent)]">
        <span className="font-display text-base font-bold">C</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[color:var(--brand-red)]" />
      </span>
      <span className={`font-display text-[1.05rem] font-bold tracking-tight ${text}`}>
        CSN<span className="text-primary">.</span>Bangladesh
      </span>
    </Link>
  );
}
