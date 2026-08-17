import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading, TextLink } from "@/components/atoms";
import UpcomingCard from "@/components/cards/UpcomingCard";
import { UPCOMING } from "@/data/mockData";

export default function UpcomingSection() {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              overline="Starting soon"
              title={<>Want to go <em className="font-display italic text-primary">deeper?</em></>}
              sub="Reserve your seat for an upcoming live conversation."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink to="/live" testId="view-all-upcoming">See the full schedule</TextLink>
          </Reveal>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="mt-10 flex snap-x-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar sm:hidden">
          {UPCOMING.map((c) => (
            <UpcomingCard key={c.slug} item={c} className="w-[80vw] max-w-xs shrink-0 snap-start" />
          ))}
        </div>

        <Stagger className="mt-12 hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-4" stagger={0.07}>
          {UPCOMING.map((c) => (
            <motion.div key={c.slug} variants={staggerItem}>
              <UpcomingCard item={c} className="h-full" />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
