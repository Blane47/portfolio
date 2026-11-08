"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/content/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Highlight the section currently in view. */
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      () => {
        /* Re-read every tracked section, not just the ones that changed,
           so nothing stays highlighted once it leaves the band. */
        const inBand = ids
          .map((id) => document.getElementById(id))
          .filter((el): el is HTMLElement => Boolean(el))
          .filter((el) => {
            const r = el.getBoundingClientRect();
            const top = window.innerHeight * 0.4;
            const bottom = window.innerHeight * 0.5;
            return r.top < bottom && r.bottom > top;
          });
        setActive(inBand.length ? inBand[0].id : "");
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-pill border border-line bg-surface/85 pl-5 pr-3 shadow-raise backdrop-blur-md">
        <a
          href="#top"
          className="inline-flex h-11 items-center font-display text-xl tracking-tight transition-opacity duration-150 hover:opacity-70"
        >
          {profile.shortName}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`inline-flex h-11 items-center rounded-pill px-3 text-sm transition-colors duration-150 hover:text-ink ${
                  active === l.href.slice(1) ? "text-accent" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              className="hidden h-11 items-center rounded-pill bg-accent px-5 text-sm font-medium text-on-accent transition-colors duration-150 hover:bg-accent-strong sm:inline-flex"
            >
              Résumé
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-pill border border-line text-muted md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open ? (
        <div className="mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-card border border-line bg-surface/95 p-2 shadow-lift backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-[0.6rem] px-4 py-3 text-sm text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-[0.6rem] bg-accent px-4 py-3 text-center text-sm font-medium text-on-accent"
            >
              Résumé
            </a>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
