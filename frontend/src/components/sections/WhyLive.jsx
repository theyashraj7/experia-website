import { motion } from "framer-motion";
import { MessageCircle, Users, Hand, Ear, Lightbulb, Mic } from "lucide-react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { Overline, LiveDot } from "@/components/atoms";
import { WHY_LIVE, EXPERTS } from "@/data/mockData";

const ICONS = { ask: MessageCircle, chat: Users, stage: Hand, listen: Ear, learn: Lightbulb };

export default function WhyLive() {
  const expert = EXPERTS[0];
  const stageStudents = [EXPERTS[1], EXPERTS[2], EXPERTS[3], EXPERTS[4]];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + interactions */}
        <div>
          <Reveal>
            <Overline>Why live?</Overline>
            <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              You're not watching a <em className="font-display italic text-primary">lecture.</em>
            </h2>
          </Reveal>
          <Stagger className="mt-10 space-y-1" stagger={0.08}>
            {WHY_LIVE.map((w) => {
              const Icon = ICONS[w.key];
              return (
                <motion.div
                  key={w.key}
                  variants={staggerItem}
                  data-testid={`why-live-${w.key}`}
                  className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-border hover:bg-card"
                >
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="font-serif text-2xl leading-none tracking-tight">{w.label}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{w.copy}</p>
                  </div>
                </motion.div>
              );
            })}
          </Stagger>
        </div>

        {/* Right: stage visualization */}
        <Reveal delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-[#0D0E15] p-6 text-white sm:p-8">
            <div className="noise opacity-[0.05]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <LiveDot />
                <span className="font-accent text-xs text-white/60">Stage · 4 / 5</span>
              </div>
              {/* Expert */}
              <div className="mt-6 flex flex-col items-center text-center">
                <img src={expert.image} alt={expert.name} className="h-24 w-24 rounded-2xl object-cover ring-2 ring-primary/60" />
                <p className="mt-3 font-serif text-xl">{expert.name}</p>
                <p className="text-xs text-white/60">The person who lived it</p>
              </div>
              {/* Stage slots */}
              <p className="mt-8 text-center font-accent text-[0.65rem] uppercase tracking-[0.22em] text-white/40">
                Up to 5 invited on stage
              </p>
              <div className="mt-3 flex justify-center gap-2.5">
                {stageStudents.map((s) => (
                  <img key={s.slug} src={s.image} alt="" className="h-11 w-11 rounded-full object-cover ring-1 ring-white/20" />
                ))}
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-white/30 text-white/40">
                  <Mic className="h-4 w-4" />
                </span>
              </div>
              {/* Audience */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-accent text-[0.65rem] uppercase tracking-[0.2em] text-white/50">Audience</span>
                  <span className="inline-flex items-center gap-1 text-xs text-white/60"><Users className="h-3.5 w-3.5" /> 247</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Watch · Listen · Chat · Ask · Request the stage.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
