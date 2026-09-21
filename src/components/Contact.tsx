import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./ui/Reveal";
import Socials from "./Socials";
import { contact, profile } from "@/content/profile";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-surface px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 h-72 opacity-70"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 50%, var(--color-accent-soft) 0%, transparent 72%)",
              }}
            />

            <div className="relative">
              {profile.available ? (
                <p className="inline-flex items-center gap-2 rounded-pill border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  <span className="size-1.5 rounded-pill bg-accent" />
                  Open to opportunities
                </p>
              ) : null}

              <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
                {contact.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
                {contact.lead}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3.5 text-sm font-medium text-on-accent transition-colors duration-150 hover:bg-accent-strong"
                >
                  <Mail size={16} />
                  {profile.email}
                </a>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-1.5 rounded-pill border border-line px-6 py-3.5 text-sm font-medium transition-colors duration-150 hover:border-accent hover:text-accent"
                >
                  Download résumé
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="mt-8 flex justify-center">
                <Socials />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
