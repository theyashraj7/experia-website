import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/atoms";
import { HOW_IT_WORKS } from "@/data/mockData";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          overline="How Expéria works"
          title={<>From curiosity to <em className="font-display italic text-primary">first-hand experience.</em></>}
        />
      </Reveal>
      <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
        {HOW_IT_WORKS.map((step) => (
          <motion.div
            key={step.n}
            variants={staggerItem}
            className="group flex flex-col justify-between gap-8 bg-background p-6 transition-colors hover:bg-surface sm:p-8"
          >
            <span className="font-serif text-5xl font-semibold tracking-tight text-primary/30 transition-colors group-hover:text-primary sm:text-6xl">
              {step.n}
            </span>
            <div>
              <p className="font-serif text-2xl tracking-tight">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
            </div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
