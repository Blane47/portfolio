import Reveal from "./Reveal";

/**
 * Every major section shares this frame: consistent vertical rhythm,
 * a centred heading block, and a max measure for readable body copy.
 */
export default function Section({
  id,
  title,
  lead,
  children,
  className = "",
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="mb-12 max-w-2xl sm:mb-16">
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              {title}
            </h2>
            {lead ? (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {lead}
              </p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
