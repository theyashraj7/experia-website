import { motion } from "framer-motion";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/atoms";
import LiveCard from "@/components/cards/LiveCard";
import UpcomingCard from "@/components/cards/UpcomingCard";
import { LIVE_NOW, UPCOMING } from "@/data/mockData";

export default function LivePage() {
  return (
    <PageShell>
      <PageHero
        overline="Happening right now"
        title={<>Some answers shouldn't be <em className="font-display italic text-live">watched later.</em></>}
        sub="Join conversations happening right now, or reserve your seat for what's starting soon."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {LIVE_NOW.map((c) => (
            <motion.div key={c.slug} variants={staggerItem}>
              <LiveCard item={c} className="h-full" />
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-border bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading overline="Starting soon" title={<>Want to go <em className="font-display italic text-primary">deeper?</em></>} sub="Reserve your seat for an upcoming live conversation." />
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {UPCOMING.map((c) => (
              <motion.div key={c.slug} variants={staggerItem}>
                <UpcomingCard item={c} className="h-full" />
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </PageShell>
  );
}
