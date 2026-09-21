import Image from "next/image";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { skillGroups } from "@/content/profile";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="What I work with"
      lead="The tools I have actually built and shipped things with, grouped by where they sit in a system."
    >
      <div className="space-y-14">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.name} delay={gi * 50}>
            <div>
              <div className="border-l-2 border-accent pl-5">
                <h3 className="text-base font-semibold">{group.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{group.blurb}</p>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-card bg-surface px-4 py-3.5 shadow-raise transition-shadow duration-200 hover:shadow-lift"
                  >
                    {item.icon ? (
                      <Image
                        src={`/logos/${item.icon}.svg`}
                        alt=""
                        width={24}
                        height={24}
                        /* Near-black marks would vanish on the dark surface. */
                        className={`size-6 shrink-0 object-contain ${
                          item.mono ? "dark:brightness-0 dark:invert" : ""
                        }`}
                      />
                    ) : (
                      <span className="size-6 shrink-0 rounded-pill bg-accent-soft" />
                    )}
                    <span className="truncate text-sm">{item.name}</span>
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
