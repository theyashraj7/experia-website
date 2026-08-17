import { motion } from "framer-motion";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Stagger, staggerItem } from "@/components/Reveal";
import CuriositySearch from "@/components/CuriositySearch";
import QuestionCard from "@/components/cards/QuestionCard";
import { QUESTIONS } from "@/data/mockData";

export default function QuestionsPage() {
  return (
    <PageShell>
      <PageHero
        overline="Curiosity, answered"
        title={<>Questions you didn't know you<em className="font-display italic text-primary">wanted answered.</em></>}
        sub="Some things are easy to search. Some are better explained by someone who's lived them."
      >
        <div className="max-w-xl">
          <CuriositySearch autoRotate />
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {QUESTIONS.map((q) => (
            <motion.div key={q.slug} variants={staggerItem}>
              <QuestionCard question={q} className="h-full" />
            </motion.div>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}
