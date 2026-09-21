import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "./ui/Reveal";
import Socials from "./Socials";
import { profile, stats } from "@/content/profile";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Atmospheric bloom — sits behind content, adds warmth without decoration. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[38rem] w-[70rem] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(45% 50% at 30% 40%, var(--color-accent-soft) 0%, transparent 70%), radial-gradient(40% 45% at 75% 30%, var(--color-accent-soft) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {profile.eyebrow}
              <span className="text-accent">{profile.role}</span>
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.headline.lead}{" "}
              <em className="not-italic text-accent">{profile.headline.accent}</em>{" "}
              {profile.headline.trail}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3.5 text-sm font-medium text-on-accent transition-colors duration-150 hover:bg-accent-strong"
              >
                See my work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-pill border border-line px-6 py-3.5 text-sm font-medium transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={14} />
                {profile.location}
              </span>
              <Socials />
            </div>
          </Reveal>
        </div>

        {/* Portrait — a rounded panel rather than the reference's circle. */}
        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-xs lg:max-w-sm">
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] bg-accent-soft shadow-lift">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 380px"
                className="object-cover"
              />
            </div>

            {stats.length > 0 ? (
              <dl className="absolute -bottom-5 left-2 flex gap-2 sm:-bottom-6 sm:-left-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[1.1rem] border border-line bg-surface px-4 py-3 shadow-raise"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="font-display text-2xl leading-none">{s.value}</span>
                      <span className="mt-1 block text-[11px] leading-tight text-muted">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
