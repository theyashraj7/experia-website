import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading, TextLink } from "@/components/atoms";
import ExpertCard from "@/components/cards/ExpertCard";
import { EXPERTS } from "@/data/mockData";

export default function ExpertShowcase() {
  const items = EXPERTS.slice(0, 4);
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              overline="The people, not the profiles"
              title={<>Don't just read about it. <br className="hidden sm:block" /><em className="font-display italic text-primary">Hear it</em> from someone who lived it.</>}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink to="/experts" testId="meet-all-experts">Meet all experts</TextLink>
          </Reveal>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="mt-10 flex snap-x-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar sm:hidden">
          {items.map((e) => (
            <ExpertCard key={e.slug} expert={e} className="w-[78vw] max-w-xs shrink-0 snap-start" />
          ))}
        </div>

        <Stagger className="mt-12 hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-4" stagger={0.07}>
          {items.map((e) => (
            <motion.div key={e.slug} variants={staggerItem}>
              <ExpertCard expert={e} className="h-full" />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
