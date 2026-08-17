import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading, Overline, CTA } from "@/components/atoms";
import LiveCard from "@/components/cards/LiveCard";
import UpcomingCard from "@/components/cards/UpcomingCard";
import ExpertCard from "@/components/cards/ExpertCard";
import QuestionCard from "@/components/cards/QuestionCard";
import {
  getField, getLiveByField, getUpcomingByField, getExpertsByField, getQuestionsByField, FIELDS,
} from "@/data/mockData";

export default function TopicDetail() {
  const { slug } = useParams();
  const field = getField(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!field) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-32 text-center">
          <h1 className="font-serif text-4xl">This field isn't ready yet.</h1>
          <p className="mt-4 text-muted-foreground">Explore the fields we've opened so far.</p>
          <div className="mt-8 flex justify-center"><CTA to="/topics">Explore all fields</CTA></div>
        </div>
      </PageShell>
    );
  }

  const live = getLiveByField(slug);
  const upcoming = getUpcomingByField(slug);
  const experts = getExpertsByField(slug);
  const questions = getQuestionsByField(slug);
  const related = FIELDS.filter((f) => f.slug !== slug).slice(0, 5);

  return (
    <PageShell heroFlush overHero>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={field.image} alt={field.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/60 to-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-40">
          <Link to="/topics" className="inline-flex items-center gap-2 font-accent text-sm text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All fields
          </Link>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight text-shadow-cinematic sm:text-6xl lg:text-7xl">{field.name}</h1>
          <p className="mt-4 max-w-xl font-display text-2xl italic text-white/85 sm:text-3xl">{field.hook}</p>
          <p className="mt-5 font-accent text-sm text-white/60">{field.experts} experts · {field.conversations} conversations</p>
        </div>
      </section>

      {live.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal><SectionHeading overline="Live now" title="Happening right now" /></Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {live.map((c) => <motion.div key={c.slug} variants={staggerItem}><LiveCard item={c} className="h-full" /></motion.div>)}
          </Stagger>
        </section>
      )}

      {upcoming.length > 0 && (
        <section className="border-t border-border bg-surface py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal><SectionHeading overline="Starting soon" title="Reserve your seat" /></Reveal>
            <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
              {upcoming.map((c) => <motion.div key={c.slug} variants={staggerItem}><UpcomingCard item={c} className="h-full" /></motion.div>)}
            </Stagger>
          </div>
        </section>
      )}

      {experts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal><SectionHeading overline="The people" title="Hear it from someone who lived it" /></Reveal>
          <Stagger className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4" stagger={0.06}>
            {experts.map((e) => <motion.div key={e.slug} variants={staggerItem}><ExpertCard expert={e} className="h-full" /></motion.div>)}
          </Stagger>
        </section>
      )}

      {questions.length > 0 && (
        <section className="border-t border-border bg-surface py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal><SectionHeading overline="Curiosity" title="Questions people are asking" /></Reveal>
            <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {questions.map((q) => <motion.div key={q.slug} variants={staggerItem}><QuestionCard question={q} className="h-full" /></motion.div>)}
            </Stagger>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Overline>Keep exploring</Overline>
        <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Related fields</h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {related.map((f) => (
            <Link key={f.slug} to={`/topic/${f.slug}`} data-testid={`related-field-${f.slug}`} className="rounded-full border border-border bg-card px-4 py-2 font-accent text-sm transition-colors hover:border-primary hover:text-primary">
              {f.name}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
