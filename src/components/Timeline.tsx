"use client";

import { useState } from "react";
import { Briefcase, ChevronDown, GraduationCap, TrendingUp } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Pill from "./ui/Pill";
import { timeline, type TimelineEntry } from "@/content/profile";

function Entry({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(entry.highlights?.length || entry.impact?.length);
  const Icon = entry.kind === "education" ? GraduationCap : Briefcase;

  return (
    <Reveal delay={index * 60}>
      <div className="relative pl-12 sm:pl-16">
        {/* Node on the rail */}
        <span className="absolute left-0 top-1 grid size-9 place-items-center rounded-pill border border-line bg-surface text-accent sm:left-2">
          <Icon size={15} />
        </span>

        <div className="rounded-card bg-surface p-6 shadow-raise">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {entry.period}
            </span>
            {entry.type ? <Pill>{entry.type}</Pill> : null}
          </div>

          <h3 className="mt-3 text-lg font-semibold leading-snug">{entry.role}</h3>
          <p className="mt-1 text-sm text-accent">
            {entry.org}
            {entry.location ? (
              <span className="text-muted"> · {entry.location}</span>
            ) : null}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">{entry.summary}</p>

          {expandable ? (
            <>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="mt-3 inline-flex h-11 items-center gap-1.5 text-sm font-medium text-accent transition-opacity duration-150 hover:opacity-75"
              >
                {open ? "Show less" : "Show details"}
                <ChevronDown
                  size={15}
                  className="transition-transform duration-200"
                  style={{ transform: open ? "rotate(180deg)" : "none" }}
                />
              </button>

              {open ? (
                <div className="mt-5 space-y-6 border-t border-line pt-5">
                  {entry.highlights?.length ? (
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                        What I did
                      </p>
                      <ul className="mt-3 space-y-2">
                        {entry.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-pill bg-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {entry.impact?.length ? (
                    <div className="rounded-[0.6rem] bg-accent-soft/60 p-4">
                      <p className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        <TrendingUp size={12} />
                        Impact
                      </p>
                      <ul className="mt-3 space-y-2">
                        {entry.impact.map((h, i) => (
                          <li key={i} className="text-sm leading-relaxed text-muted">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

export default function Timeline() {
  const work = timeline.filter((e) => e.kind === "work");
  const education = timeline.filter((e) => e.kind === "education");

  return (
    <Section
      id="experience"
      title="Experience & education"
      lead="Where I have worked and studied, most recent first."
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {[
          { label: "Experience", entries: work },
          { label: "Education", entries: education },
        ].map((col) =>
          col.entries.length ? (
            <div key={col.label}>
              <h3 className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {col.label}
              </h3>
              {/* Single left rail — reads cleanly at every width.
                  Only drawn when there is more than one node to connect. */}
              <div
                className={`relative space-y-6 ${
                  col.entries.length > 1
                    ? "before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-line sm:before:left-6"
                    : ""
                }`}
              >
                {col.entries.map((entry, i) => (
                  <Entry key={`${entry.org}-${i}`} entry={entry} index={i} />
                ))}
              </div>
            </div>
          ) : null,
        )}
      </div>
    </Section>
  );
}
