import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LiveDot, Overline, TextLink } from "@/components/atoms";
import { IMAGES, EXPERTS } from "@/data/mockData";

export default function FeaturedStory() {
  const rahul = EXPERTS[0];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Overline>A story you use, but never see</Overline>
          <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            You probably use an airport <em className="font-display italic text-primary">without knowing</em> how it really works.
          </h2>
          <div className="mt-8 space-y-4 border-l-2 border-primary/30 pl-5 text-lg italic text-muted-foreground">
            <p className="font-display">What happens when an aircraft develops a problem minutes before departure?</p>
            <p className="font-display">Who decides whether it flies?</p>
            <p className="font-display">What do passengers never see behind the scenes?</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/conversations/inside-indian-aviation"
              data-testid="featured-join-cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-accent text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Join the conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <TextLink to="/questions" testId="featured-questions-link">See what people are asking</TextLink>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem]">
            <img src={IMAGES.aviation} alt="Inside airline operations" loading="lazy" className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur">
              <LiveDot />
              <span className="flex items-center gap-1 font-accent text-xs font-semibold text-white"><Eye className="h-3 w-3" /> 247 watching</span>
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
              <p className="font-serif text-xl text-white">Inside Indian Aviation</p>
              <p className="text-xs text-white/60">30 Years in the Industry</p>
              <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-3">
                <img src={rahul.image} alt={rahul.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-white">{rahul.name}</p>
                  <p className="text-[0.7rem] text-white/60">{rahul.role} · {rahul.years} years experience</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
