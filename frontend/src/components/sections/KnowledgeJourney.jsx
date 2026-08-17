import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { Overline } from "@/components/atoms";
import { LEARNER } from "@/data/mockData";

export default function KnowledgeJourney() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
          <Reveal>
            <Overline>Knowledge journey</Overline>
            <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              One conversation becomes a <em className="font-display italic text-primary">journey.</em>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your curiosity doesn't have to stop when the conversation ends. Expéria quietly becomes a
              personal map of everything you've wondered about.
            </p>
            <Link
              to="/learning"
              data-testid="knowledge-journey-cta"
              className="group mt-8 inline-flex items-center gap-2 font-accent text-sm font-bold text-foreground transition-colors hover:text-primary"
            >
              See your learning map
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[1.75rem] border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-serif text-lg text-primary">
                  {LEARNER.name[0]}
                </span>
                <div>
                  <p className="font-serif text-xl">{LEARNER.name}</p>
                  <p className="text-xs text-muted-foreground">Curious since 2026 · Demo learner</p>
                </div>
              </div>

              <Stagger className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4" stagger={0.06}>
                {LEARNER.stats.map((s) => (
                  <motion.div key={s.label} variants={staggerItem} className="bg-card p-5">
                    <p className="font-serif text-4xl font-semibold tracking-tight text-primary">{s.value}</p>
                    <p className="mt-1 text-[0.72rem] leading-tight text-muted-foreground">{s.label}</p>
                  </motion.div>
                ))}
              </Stagger>

              <div className="mt-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1.5 font-accent text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    <Flame className="h-4 w-4 text-live" /> Next goal
                  </span>
                  <span className="font-accent text-xs text-muted-foreground">{LEARNER.progress}%</span>
                </div>
                <p className="mt-2 font-serif text-lg">{LEARNER.nextGoal}</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${LEARNER.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
