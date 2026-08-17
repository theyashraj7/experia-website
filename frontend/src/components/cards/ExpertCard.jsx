import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DemoTag } from "@/components/atoms";
import { cn } from "@/lib/utils";

export default function ExpertCard({ expert, className = "" }) {
  return (
    <Link
      to={`/experts/${expert.slug}`}
      data-testid={`expert-card-${expert.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={expert.image}
          alt={expert.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute left-4 top-4">
          <DemoTag className="border-white/30 bg-black/30 text-white/90" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <span className="font-accent text-[0.65rem] uppercase tracking-[0.18em] text-white/70">{expert.field}</span>
          <p className="font-serif text-2xl leading-tight">{expert.name}</p>
          <p className="text-xs text-white/75">{expert.role} · {expert.years} yrs</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <p className="font-serif text-lg italic leading-snug text-foreground/90">“{expert.hook}”</p>
        <span className="mt-4 flex items-center gap-1.5 font-accent text-xs font-bold text-foreground transition-colors group-hover:text-primary">
          Meet {expert.name.split(" ")[0]}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
