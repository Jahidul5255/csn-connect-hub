import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/csn-logo.png.asset.json";

export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="CSN Bangladesh">
      <img
        src={logoAsset.url}
        alt="CSN Bangladesh"
        width={140}
        height={44}
        className={
          variant === "light"
            ? "h-10 w-auto brightness-0 invert"
            : "h-10 w-auto"
        }
      />
    </Link>
  );
}
