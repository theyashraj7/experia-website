import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { Overline, DemoTag, CTA, SectionHeading } from "@/components/atoms";
import LiveCard from "@/components/cards/LiveCard";
import UpcomingCard from "@/components/cards/UpcomingCard";
import { getExpert, LIVE_NOW, UPCOMING } from "@/data/mockData";

export default function ExpertDetail() {
  const { slug } = useParams();
  const expert = getExpert(slug);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!expert) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-32 text-center">
          <h1 className="font-serif text-4xl">We couldn't find that person.</h1>
          <div className="mt-8 flex justify-center"><CTA to="/experts">Meet all experts</CTA></div>
        </div>
      </PageShell>
    );
  }

  const live = LIVE_NOW.filter((c) => c.expertSlug === slug);
  const upcoming = UPCOMING.filter((c) => c.expertSlug === slug);

  return (
    <PageShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16 lg:px-8 lg:py-24">
          <Reveal className="order-2 lg:order-1">
            <Link to="/experts" className="inline-flex items-center gap-2 font-accent text-sm text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> All experts
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <Overline>{expert.field}</Overline>
              <DemoTag />
            </div>
            <h1 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">{expert.name}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{expert.role} · {expert.years} years experience</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">{expert.bio}</p>
            <p className="mt-6 border-l-2 border-primary/40 pl-5 font-display text-2xl italic text-foreground/90">“{expert.hook}”</p>
          </Reveal>
          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img src={expert.image} alt={expert.name} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="flex items-center gap-2 font-serif text-2xl tracking-tight sm:text-3xl"><Sparkles className="h-5 w-5 text-primary" /> What they lived</h2>
            <ul className="mt-6 space-y-4">
              {expert.lived.map((l) => (
                <li key={l} className="flex gap-3 text-base text-foreground/80"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{l}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">What they can explain</h2>
            <ul className="mt-6 space-y-4">
              {expert.canExplain.map((c) => (
                <li key={c} className="flex gap-3 text-base text-foreground/80"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {(live.length > 0 || upcoming.length > 0) && (
        <section className="border-t border-border bg-surface py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal><SectionHeading overline="Conversations" title={`Talk with ${expert.name.split(" ")[0]}`} /></Reveal>
            <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {live.map((c) => <motion.div key={c.slug} variants={staggerItem}><LiveCard item={c} className="h-full" /></motion.div>)}
              {upcoming.map((c) => <motion.div key={c.slug} variants={staggerItem}><UpcomingCard item={c} className="h-full" /></motion.div>)}
            </Stagger>
          </div>
        </section>
      )}
    </PageShell>
  );
}
