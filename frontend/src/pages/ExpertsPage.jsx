import { motion } from "framer-motion";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Stagger, staggerItem } from "@/components/Reveal";
import ExpertCard from "@/components/cards/ExpertCard";
import { EXPERTS } from "@/data/mockData";

export default function ExpertsPage() {
  return (
    <PageShell>
      <PageHero
        overline="The people, not the profiles"
        title={<>Don't just read about it. <em className="font-display italic text-primary">Hear it</em> from someone who lived it.</>}
        sub="Every profile here is a fictional Demo Profile created to show how Expéria works."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-2 gap-5 lg:grid-cols-3" stagger={0.06}>
          {EXPERTS.map((e) => (
            <motion.div key={e.slug} variants={staggerItem}>
              <ExpertCard expert={e} className="h-full" />
            </motion.div>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}
