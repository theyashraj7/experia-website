import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import FeaturedStory from "@/components/sections/FeaturedStory";
import FieldExplorer from "@/components/sections/FieldExplorer";
import QuestionExplorer from "@/components/sections/QuestionExplorer";
import ExpertShowcase from "@/components/sections/ExpertShowcase";
import LiveSection from "@/components/sections/LiveSection";
import UpcomingSection from "@/components/sections/UpcomingSection";
import WhyLive from "@/components/sections/WhyLive";
import LiveRoomPreview from "@/components/sections/LiveRoomPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import KnowledgeJourney from "@/components/sections/KnowledgeJourney";
import Recommendations from "@/components/sections/Recommendations";
import CuriosityBridge from "@/components/sections/CuriosityBridge";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <PageShell heroFlush overHero>
      <Hero />
      <TrustStrip />
      <FeaturedStory />
      <FieldExplorer />
      <QuestionExplorer />
      <ExpertShowcase />
      <LiveSection />
      <UpcomingSection />
      <WhyLive />
      <LiveRoomPreview />
      <HowItWorks />
      <KnowledgeJourney />
      <Recommendations />
      <CuriosityBridge />
      <FinalCTA />
    </PageShell>
  );
}
