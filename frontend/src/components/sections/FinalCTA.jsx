import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Overline } from "@/components/atoms";

export default function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Overline>Start with one</Overline>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-4xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
        >
          The world is full of things you haven't seen{" "}
          <em className="font-display italic text-primary">from the inside.</em>
        </motion.h2>
        <p className="mt-7 font-display text-2xl italic text-muted-foreground sm:text-3xl">Start with one.</p>

        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/live"
            data-testid="final-cta-live"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-accent text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          >
            Explore what's happening live
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/topics"
            data-testid="final-cta-fields"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-accent text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Explore all fields
          </Link>
        </div>
      </div>
    </section>
  );
}
