import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import Reveal from "./ui/Reveal";
import { certificates } from "@/content/profile";

/** Renders nothing until there is at least one certificate to show. */
export default function Certificates() {
  if (certificates.length === 0) return null;

  return (
    <div className="mt-16 lg:mt-20">
      <h3 className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Certifications
      </h3>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={`${c.name}-${i}`} delay={i * 50}>
            <li className="flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-raise">
              {c.image ? (
                <div className="relative aspect-4/3 border-b border-line bg-accent-soft">
                  <Image
                    src={c.image}
                    alt={`${c.name} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start gap-3">
                  <Award size={16} className="mt-0.5 shrink-0 text-accent" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug">{c.name}</p>
                    <p className="mt-1 text-sm text-accent">{c.issuer}</p>
                  </div>
                </div>

                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {c.date}
                  {c.credentialId ? ` · ${c.credentialId}` : ""}
                </p>

                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-auto inline-flex h-11 items-center gap-1.5 pt-2 text-sm font-medium text-accent transition-opacity duration-150 hover:opacity-75"
                  >
                    Verify
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
