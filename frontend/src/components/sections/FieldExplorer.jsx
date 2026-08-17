import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { SectionHeading, TextLink } from "@/components/atoms";
import FieldCard from "@/components/cards/FieldCard";
import { FIELDS } from "@/data/mockData";

export default function FieldExplorer() {
  const featured = FIELDS.slice(0, 8);
  return (
    <section className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              overline="Explore by field"
              title={<>What part of the world <em className="font-display italic text-primary">makes you curious?</em></>}
              sub="Explore real experience across the fields that shape the world."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink to="/topics" testId="explore-all-fields">Explore all fields</TextLink>
          </Reveal>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="mt-10 flex snap-x-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar lg:hidden">
          {featured.map((f) => (
            <FieldCard key={f.slug} field={f} className="w-[80vw] max-w-xs shrink-0 snap-start" />
          ))}
        </div>

        {/* Desktop: bento */}
        <Stagger className="mt-12 hidden grid-cols-12 gap-5 lg:grid" stagger={0.06}>
          <motion.div variants={staggerItem} className="col-span-5"><FieldCard field={featured[0]} size="tall" className="h-full" /></motion.div>
          <motion.div variants={staggerItem} className="col-span-4"><FieldCard field={featured[1]} size="tall" className="h-full" /></motion.div>
          <motion.div variants={staggerItem} className="col-span-3"><FieldCard field={featured[2]} size="tall" className="h-full" /></motion.div>
          <motion.div variants={staggerItem} className="col-span-3"><FieldCard field={featured[3]} className="h-full" /></motion.div>
          <motion.div variants={staggerItem} className="col-span-3"><FieldCard field={featured[4]} className="h-full" /></motion.div>
          <motion.div variants={staggerItem} className="col-span-3"><FieldCard field={featured[5]} className="h-full" /></motion.div>
          <motion.div variants={staggerItem} className="col-span-3"><FieldCard field={featured[6]} className="h-full" /></motion.div>
        </Stagger>
      </div>
    </section>
  );
}
