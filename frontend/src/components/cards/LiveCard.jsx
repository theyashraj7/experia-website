import { Link } from "react-router-dom";
import { Eye, ArrowRight } from "lucide-react";
import { LiveDot } from "@/components/atoms";
import { cn } from "@/lib/utils";

export default function LiveCard({ item, className = "", featured = false }) {
  return (
    <Link
      to={`/conversations/${item.slug}`}
      data-testid={`live-card-${item.slug}`}
      className={cn(
        "group relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card",
        featured && "min-h-[26rem]",
        className
      )}
    >
      <div className="absolute inset-0">
        <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/10" />
      </div>
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/45 px-2.5 py-1 backdrop-blur">
        <LiveDot />
        <span className="flex items-center gap-1 font-accent text-[0.7rem] font-semibold text-white">
          <Eye className="h-3 w-3" /> {item.viewers}
        </span>
      </div>
      <div className="relative p-5 text-white sm:p-6">
        <span className="font-accent text-[0.65rem] uppercase tracking-[0.18em] text-white/70">{item.field}</span>
        <p className={cn("mt-1.5 font-serif leading-tight text-shadow-cinematic", featured ? "text-3xl sm:text-4xl" : "text-2xl")}>
          {item.title}
        </p>
        <p className="mt-1 text-sm text-white/70">{item.subtitle}</p>
        <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
          <span className="text-sm">
            <span className="font-semibold">{item.expert}</span>
            <span className="block text-[0.7rem] text-white/60">{item.role} · {item.years} yrs</span>
          </span>
          <span className="flex items-center gap-1 font-accent text-xs font-bold">
            Join
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
