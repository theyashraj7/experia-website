import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading, TextLink } from "@/components/atoms";
import QuestionCard from "@/components/cards/QuestionCard";
import { QUESTIONS } from "@/data/mockData";

export default function QuestionExplorer() {
  const items = QUESTIONS.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <SectionHeading
            overline="Curiosity, answered"
            title={<>Questions you didn't know <br className="hidden sm:block" />you <em className="font-display italic text-primary">wanted answered.</em></>}
            sub="Some things are easy to search. Some are better explained by someone who's lived them."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <TextLink to="/questions" testId="explore-all-questions">See all questions</TextLink>
        </Reveal>
      </div>

      <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {items.map((q) => (
          <motion.div key={q.slug} variants={staggerItem}>
            <QuestionCard question={q} className="h-full" />
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
