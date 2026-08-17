import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Overline } from "@/components/atoms";
import { CURIOSITY_BRIDGE, IMAGES } from "@/data/mockData";

export default function CuriosityBridge() {
  return (
    <section className="relative overflow-hidden bg-[#0D0E15] py-20 text-white sm:py-28 lg:py-36">
      <div className="absolute inset-0 opacity-20">
        <img src={IMAGES.bridge} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0E15] via-[#0D0E15]/85 to-[#0D0E15]" />
      </div>
      <div className="noise opacity-[0.05]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Overline className="text-primary">The curiosity bridge</Overline>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
            One question can open an <em className="font-display italic text-primary">entire world.</em>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
          <ul className="relative space-y-3">
            {CURIOSITY_BRIDGE.map((label, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: left ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex ${left ? "justify-start" : "justify-end"}`}
                >
                  <div className={`flex items-center gap-4 ${left ? "" : "flex-row-reverse text-right"}`}>
                    <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-primary/20" />
                    <span className="font-serif text-2xl tracking-tight sm:text-3xl">
                      <span className="mr-3 font-accent text-xs align-middle text-white/40">0{i + 1}</span>
                      {label}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
