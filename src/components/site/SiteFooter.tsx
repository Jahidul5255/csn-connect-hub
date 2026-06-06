import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const groups = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/career", label: "Career" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/travel", label: "Travel" },
      { to: "/legal", label: "Legal / CAF" },
      { to: "/education", label: "Education" },
      { to: "/language", label: "Language Courses" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { to: "/platforms", label: "CAF CSN" },
      { to: "/platforms", label: "CSN Travel" },
      { to: "/platforms", label: "Cepron" },
    ],
  },
  {
    title: "Opportunities",
    links: [
      { to: "/business", label: "Open a CAF branch" },
      { to: "/business", label: "Travel Reseller" },
      { to: "/business", label: "Travel Wholesaler" },
      { to: "/business", label: "Teach on Cepron" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--color-ink)] text-white/85">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A trusted digital gateway connecting Bangladeshi communities in Italy with
              professional services, opportunities, education, and business growth.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/75">
              <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Dhaka, Bangladesh · Rome, Italy</p>
              <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +880 1700 000000 · +39 000 000 0000</p>
              <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> info@csnbangladesh.com</p>
            </div>
            <div className="mt-6 flex gap-2">
              {[Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="font-display text-sm font-semibold tracking-wide text-white">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/65 transition hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CSN Bangladesh. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
