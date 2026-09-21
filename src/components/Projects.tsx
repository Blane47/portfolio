import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./ui/BrandIcons";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Pill from "./ui/Pill";
import { projects } from "@/content/profile";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected work"
      lead="Things I designed and built end to end — the problem, the stack, and what shipped."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <article className="group flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-raise transition-shadow duration-200 hover:shadow-lift">
              <div className="relative aspect-16/10 overflow-hidden bg-accent-soft">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="grid h-full place-items-center font-mono text-xs text-muted">
                    Screenshot coming
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                  <div className="-mr-2 -mt-2 flex shrink-0 items-center">
                    {p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${p.title} source code`}
                        className="grid size-11 place-items-center rounded-pill text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
                      >
                        <GitHubIcon size={15} />
                      </a>
                    ) : null}
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Visit ${p.title}`}
                        className="grid size-11 place-items-center rounded-pill text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="mt-1.5 text-sm text-accent">{p.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <li key={t}>
                      <Pill>{t}</Pill>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
