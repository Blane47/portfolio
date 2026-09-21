import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { skillGroups } from "@/content/profile";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="What I work with"
      lead="The tools I have actually built things with, grouped by where they sit in a system."
    >
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={i * 60}>
            <div className="border-l-2 border-line pl-6 transition-colors duration-200 hover:border-accent">
              <h3 className="text-base font-semibold">{group.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{group.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-pill bg-surface px-3.5 py-2 text-sm shadow-raise"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
