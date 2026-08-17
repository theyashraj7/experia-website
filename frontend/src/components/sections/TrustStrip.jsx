import Marquee from "react-fast-marquee";
import { Users, Sparkles, MessageSquare, Compass } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TRUST } from "@/data/mockData";

const ICONS = [Users, Sparkles, MessageSquare, Compass];
const WORDS = ["Real People", "Real Experience", "Real Conversations", "Real Knowledge"];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="border-b border-border py-6">
        <Marquee gradient={false} speed={40} autoFill className="overflow-hidden">
          {WORDS.map((w, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8">
              <span className="font-display text-3xl italic text-foreground/70 sm:text-4xl">{w}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0 lg:px-8">
        {TRUST.map((t, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={t.title} delay={i * 0.07} className="flex flex-col gap-3 p-8 sm:p-10">
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
              <div>
                <p className="font-serif text-xl tracking-tight sm:text-2xl">{t.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.sub}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
