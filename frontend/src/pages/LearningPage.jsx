import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import KnowledgeJourney from "@/components/sections/KnowledgeJourney";
import Recommendations from "@/components/sections/Recommendations";
import CuriosityBridge from "@/components/sections/CuriosityBridge";
import { LEARNER } from "@/data/mockData";

export default function LearningPage() {
  return (
    <PageShell>
      <PageHero
        overline={`Welcome back, ${LEARNER.name}`}
        title={<>Your map of <em className="font-display italic text-primary">curiosity.</em></>}
        sub="Every conversation you join becomes part of a personal journey. Here's where your curiosity has taken you so far."
      />
      <KnowledgeJourney />
      <Recommendations />
      <CuriosityBridge />
    </PageShell>
  );
}
