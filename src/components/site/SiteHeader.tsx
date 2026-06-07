import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone, Plane, Scale, GraduationCap, Languages, Building2, BookOpen } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/travel", label: "Travel", desc: "Tickets, visas, Umrah", icon: <Plane className="h-4 w-4" /> },
  { to: "/legal", label: "Legal Support / CAF", desc: "Patronato, tax, immigration", icon: <Scale className="h-4 w-4" /> },
  { to: "/education", label: "Education", desc: "Cepron learning platform", icon: <GraduationCap className="h-4 w-4" /> },
  { to: "/language", label: "Language Courses", desc: "Italian A1 to C2", icon: <Languages className="h-4 w-4" /> },
];

const platforms = [
  { to: "/platforms", label: "CSN Travel", desc: "Travel marketplace", icon: <Plane className="h-4 w-4" /> },
  { to: "/platforms", label: "CAF CSN", desc: "Branch & franchise network", icon: <Building2 className="h-4 w-4" /> },
  { to: "/platforms", label: "Cepron", desc: "Learning ecosystem", icon: <BookOpen className="h-4 w-4" /> },
];


const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", mega: services },
  { to: "/platforms", label: "Platforms", mega: platforms },
  { to: "/business", label: "For Business" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
];

function AnnouncementBar() {
  return (
    <div className="hidden border-b border-border/60 bg-[color:var(--color-ink)] text-white md:block">
      <div className="container-x flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5 text-white/85">
          <a href="tel:+8801700000000" className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5" /> Bangladesh: +880 1700 000000
          </a>
          <a href="tel:+390000000000" className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5" /> Italy: +39 000 000 0000
          </a>
          <a href="mailto:info@csnbangladesh.com" className="hover:text-white">info@csnbangladesh.com</a>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">YouTube</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-background/60 backdrop-blur"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.mega && setOpenMega(item.label)}
                onMouseLeave={() => setOpenMega(null)}
              >
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="group inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition hover:text-foreground data-[status=active]:text-primary"
                >
                  {item.label}
                  {item.mega && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.mega && openMega === item.label && (
                  <div className="absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-2">
                    <div className="card-elev p-3 shadow-[0_20px_50px_-20px_rgba(15,35,60,0.18)]">
                      <div className="grid grid-cols-1 gap-1">
                        {item.mega.map((m) => (
                          <Link
                            key={m.label}
                            to={m.to}
                            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-secondary"
                          >
                            <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-primary-soft text-[color:var(--brand-red)] transition group-hover:bg-[color:var(--brand-red)] group-hover:text-white">
                              {m.icon}
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-foreground">{m.label}</span>
                              <span className="block text-xs text-muted-foreground">{m.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--color-primary)_60%,transparent)] transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-x flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
