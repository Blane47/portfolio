import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { about } from "@/content/profile";

export default function About() {
  return (
    <Section id="about" title={about.heading}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <Reveal>
          <p className="font-display text-2xl leading-snug sm:text-3xl">{about.lead}</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        {about.note ? (
          <Reveal delay={80}>
            <aside className="rounded-card border-l-2 border-accent bg-accent-soft/50 py-5 pl-6 pr-5 lg:mt-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Currently
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{about.note}</p>
            </aside>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
