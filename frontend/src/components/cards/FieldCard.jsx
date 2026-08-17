import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Overline } from "@/components/atoms";
import { cn } from "@/lib/utils";

export default function FieldCard({ field, className = "", size = "md" }) {
  const tall = size === "tall";
  return (
    <Link
      to={`/topic/${field.slug}`}
      data-testid={`field-card-${field.slug}`}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card",
        tall ? "min-h-[24rem]" : "min-h-[18rem]",
        className
      )}
    >
      <div className="absolute inset-0">
        <img
          src={field.image}
          alt={field.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />
      </div>
      <div className="relative p-5 text-white sm:p-6">
        <Overline className="text-white/80">{field.name}</Overline>
        <p className="mt-2 max-w-[16rem] font-serif text-xl leading-tight text-shadow-cinematic sm:text-2xl">
          {field.hook}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-accent text-[0.7rem] uppercase tracking-[0.14em] text-white/70">
            {field.experts} experts · {field.conversations} conversations
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-white group-hover:text-black">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
