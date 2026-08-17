import { Reveal } from "@/components/Reveal";
import { Overline } from "@/components/atoms";

export default function PageHero({ overline, title, sub, children }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          {overline && <Overline className="mb-4 block">{overline}</Overline>}
          <h1 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {sub && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
