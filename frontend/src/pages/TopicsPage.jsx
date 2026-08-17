import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Stagger, staggerItem } from "@/components/Reveal";
import FieldCard from "@/components/cards/FieldCard";
import { FIELDS, ALL_FIELD_NAMES } from "@/data/mockData";

export default function TopicsPage() {
  return (
    <PageShell>
      <PageHero
        overline="Explore by field"
        title={<>What part of the world <em className="font-display italic text-primary">makes you curious?</em></>}
        sub="Explore real experience across the fields that shape the world."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {FIELDS.map((f) => (
            <motion.div key={f.slug} variants={staggerItem}>
              <FieldCard field={f} className="h-full" />
            </motion.div>
          ))}
        </Stagger>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <p className="font-accent text-xs uppercase tracking-[0.2em] text-muted-foreground">Every field on Expéria</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {ALL_FIELD_NAMES.map((name) => {
              const known = FIELDS.find((f) => f.name === name);
              return (
                <Link
                  key={name}
                  to={known ? `/topic/${known.slug}` : "/topics"}
                  className="rounded-full border border-border bg-card px-4 py-2 font-accent text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
