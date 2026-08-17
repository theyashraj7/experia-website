import { Link } from "react-router-dom";
import { Calendar, Clock, Users } from "lucide-react";
import ReserveButton from "@/components/ReserveButton";
import { cn } from "@/lib/utils";

export default function UpcomingCard({ item, className = "" }) {
  return (
    <div
      data-testid={`upcoming-card-${item.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <Link to={`/conversations/${item.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 font-accent text-[0.65rem] uppercase tracking-[0.16em] text-white backdrop-blur">
          {item.field}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{item.date}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{item.time}</span>
        </div>
        <Link to={`/conversations/${item.slug}`}>
          <p className="mt-3 font-serif text-xl leading-tight tracking-tight transition-colors hover:text-primary sm:text-2xl">
            {item.title}
          </p>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="text-foreground">{item.expert}</span> · {item.role}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" /> {item.interested.toLocaleString("en-IN")} interested
          </span>
        </div>
        <ReserveButton slug={item.slug} price={item.price} full className="mt-4" />
      </div>
    </div>
  );
}
