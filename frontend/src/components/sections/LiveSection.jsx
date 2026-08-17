import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading, TextLink } from "@/components/atoms";
import LiveCard from "@/components/cards/LiveCard";
import { LIVE_NOW } from "@/data/mockData";

export default function LiveSection() {
  const [featured, ...rest] = LIVE_NOW;
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <SectionHeading
            overline="Happening right now"
            title={<>Some answers shouldn't be <em className="font-display italic text-live">watched later.</em></>}
            sub="Join conversations happening right now."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <TextLink to="/live" testId="view-all-live">View all live</TextLink>
        </Reveal>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="mt-10 flex snap-x-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar lg:hidden">
        {LIVE_NOW.map((c) => (
          <LiveCard key={c.slug} item={c} className="w-[82vw] max-w-md shrink-0 snap-start" />
        ))}
      </div>

      <Stagger className="mt-12 hidden grid-cols-12 gap-5 lg:grid" stagger={0.07}>
        <motion.div variants={staggerItem} className="col-span-6"><LiveCard item={featured} featured className="h-full" /></motion.div>
        <div className="col-span-6 grid grid-cols-2 gap-5">
          {rest.slice(0, 4).map((c) => (
            <motion.div key={c.slug} variants={staggerItem}><LiveCard item={c} className="h-full" /></motion.div>
          ))}
        </div>
      </Stagger>
    </section>
  );
}
