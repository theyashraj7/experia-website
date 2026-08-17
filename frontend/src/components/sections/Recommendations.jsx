import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { Overline } from "@/components/atoms";
import { RECOMMENDATIONS } from "@/data/mockData";

export default function Recommendations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <Reveal>
        <Overline>For you</Overline>
        <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
          Because you explored <em className="font-display italic text-primary">{RECOMMENDATIONS.basedOn}…</em>
        </h2>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">You might also be curious about:</p>
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {RECOMMENDATIONS.items.map((item) => (
          <motion.div key={item.name} variants={staggerItem}>
            <Link
              to="/topic/aviation"
              data-testid={`recommendation-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div>
                <p className="font-serif text-2xl tracking-tight">{item.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.hook}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
