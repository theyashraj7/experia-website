import { useState } from "react";
import { toast } from "sonner";
import { Eye, Send, Hand, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Overline, LiveDot } from "@/components/atoms";
import { EXPERTS, IMAGES } from "@/data/mockData";

const CHAT = [
  { name: "Ishaan", text: "This is fascinating." },
  { name: "Meera", text: "Can you explain how the decision gets made?" },
  { name: "Dev", text: "How often does this actually happen?" },
  { name: "Ananya", text: "Never thought about it this way 🤯" },
];

export default function LiveRoomPreview({
  expert = EXPERTS[0],
  image = IMAGES.aviation,
  viewers = 247,
  question = "What happens when an aircraft has a technical issue before departure?",
  stage = "4 / 5",
  standalone = false,
}) {
  const students = [EXPERTS[1], EXPERTS[2], EXPERTS[3], EXPERTS[4]];
  const [chatValue, setChatValue] = useState("");
  const sendChat = (e) => {
    e.preventDefault();
    if (!chatValue.trim()) return;
    toast.success("Message sent to the room", { description: "Demo Environment — the conversation is a preview." });
    setChatValue("");
  };
  return (
    <section className={standalone ? "" : "relative overflow-hidden bg-[#0D0E15] py-20 text-white sm:py-28 lg:py-32"}>
      {!standalone && <div className="noise opacity-[0.05]" />}
      <div className={standalone ? "" : "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {!standalone && (
          <Reveal className="mb-12 max-w-2xl">
            <Overline className="text-primary">A room built for questions</Overline>
            <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              This is what a live <em className="font-display italic text-primary">conversation</em> looks like.
            </h2>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.9fr_1fr]">
            {/* Main stage */}
            <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-black">
              <div className="relative aspect-[16/10] w-full">
                <img src={image} alt={expert.name} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur">
                  <LiveDot />
                  <span className="flex items-center gap-1 font-accent text-xs font-semibold text-white"><Eye className="h-3.5 w-3.5" /> {viewers} watching</span>
                </div>
                {/* Question ticker */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                  <span className="font-accent text-[0.62rem] uppercase tracking-[0.2em] text-white/60">Current question</span>
                  <p className="mt-1 font-serif text-lg leading-tight text-white sm:text-xl">“{question}”</p>
                </div>
                {/* Participant tiles */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  {students.map((s) => (
                    <img key={s.slug} src={s.image} alt="" className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/25" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="flex items-center gap-3">
                  <img src={expert.image} alt={expert.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{expert.name}</p>
                    <p className="text-[0.7rem] text-white/55">{expert.role} · Stage {stage}</p>
                  </div>
                </div>
                <button data-testid="live-room-request-stage" onClick={() => toast.success("Stage request sent", { description: `Waiting for ${expert.name.split(" ")[0]} to invite you up. (Demo)` })} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-accent text-xs font-bold text-black transition-transform hover:-translate-y-0.5">
                  <Hand className="h-4 w-4" /> Request stage
                </button>
              </div>
            </div>

            {/* Chat panel */}
            <div className="flex flex-col rounded-[1.5rem] border border-white/12 bg-white/[0.03]">
              <div className="flex items-center gap-2 border-b border-white/10 p-4">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="font-accent text-xs uppercase tracking-[0.18em] text-white/60">Live chat</span>
              </div>
              <div className="flex-1 space-y-4 p-4">
                {CHAT.map((c, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-accent text-xs font-bold text-primary">{c.name}</span>
                    <p className="text-white/80">{c.text}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 p-3">
                <form onSubmit={sendChat} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
                  <input
                    data-testid="live-room-chat-input"
                    value={chatValue}
                    onChange={(e) => setChatValue(e.target.value)}
                    placeholder="Ask a question…"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                  />
                  <button type="submit" data-testid="live-room-chat-send" aria-label="Send message">
                    <Send className="h-4 w-4 text-white/60 transition-colors hover:text-white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
