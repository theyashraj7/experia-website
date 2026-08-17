import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { ArrowLeft, Calendar, Clock, Users, Eye } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import LiveRoomPreview from "@/components/sections/LiveRoomPreview";
import { Reveal } from "@/components/Reveal";
import { Overline, LiveDot, DemoTag, CTA } from "@/components/atoms";
import ReserveButton from "@/components/ReserveButton";
import { LIVE_NOW, UPCOMING, getExpert, IMAGES } from "@/data/mockData";

export default function ConversationDetail() {
  const { slug } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const liveItem = LIVE_NOW.find((c) => c.slug === slug);
  const upcomingItem = UPCOMING.find((c) => c.slug === slug);
  const item = liveItem || upcomingItem;

  if (!item) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-32 text-center">
          <h1 className="font-serif text-4xl">This conversation isn't available.</h1>
          <div className="mt-8 flex justify-center"><CTA to="/live">Explore what's live</CTA></div>
        </div>
      </PageShell>
    );
  }

  const expert = getExpert(item.expertSlug);
  const isLive = Boolean(liveItem);

  return (
    <PageShell>
      <section className="border-b border-border bg-surface pt-8">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link to={isLive ? "/live" : "/live"} className="inline-flex items-center gap-2 font-accent text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to live
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {isLive ? <LiveDot /> : <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-primary">Starting soon</span>}
            <Overline>{item.field}</Overline>
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">{item.title}</h1>
          {item.subtitle && <p className="mt-3 font-display text-2xl italic text-muted-foreground">{item.subtitle}</p>}
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            {isLive ? (
              <span className="inline-flex items-center gap-1.5"><Eye className="h-4 w-4" /> {item.viewers} watching now</span>
            ) : (
              <>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {item.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {item.time}</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" /> {item.interested?.toLocaleString("en-IN")} interested</span>
              </>
            )}
          </div>
        </div>
      </section>

      {isLive ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <LiveRoomPreview
            standalone
            expert={expert}
            image={item.image}
            viewers={item.viewers}
            stage={item.stage}
          />
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="font-serif text-2xl">Ready to join?</p>
            <p className="max-w-md text-sm text-muted-foreground">Watch, listen, chat, ask a question or request the stage to speak directly with {expert?.name.split(" ")[0]}.</p>
            <CTA testId="conversation-join" onClick={() => toast.success("You're in the room", { description: `${expert?.name} can see your questions now. (Demo Environment)` })}>Join conversation</CTA>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img src={item.image} alt={item.title} className="aspect-[16/9] w-full object-cover" />
              </div>
              <h2 className="mt-8 font-serif text-2xl tracking-tight sm:text-3xl">What you'll take away</h2>
              <ul className="mt-5 space-y-3 text-base text-foreground/80">
                {expert?.canExplain.map((c) => (
                  <li key={c} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{c}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <p className="font-serif text-4xl font-semibold tracking-tight">₹{item.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">A reservation holds your seat in the room.</p>
                <ReserveButton slug={item.slug} price={item.price} full className="mt-5" testId="conversation-reserve" />
                <p className="mt-3 text-center text-xs text-muted-foreground">Demo reservation · no real payment</p>

                {expert && (
                  <Link to={`/experts/${expert.slug}`} className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                    <img src={expert.image} alt={expert.name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-serif text-lg">{expert.name}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{expert.role} · {expert.years} yrs</p>
                      <DemoTag className="mt-1" />
                    </div>
                  </Link>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </PageShell>
  );
}
