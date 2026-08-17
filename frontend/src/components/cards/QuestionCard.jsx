import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function QuestionCard({ question, className = "" }) {
  return (
    <Link
      to={`/topic/${question.fieldSlug}`}
      data-testid={`question-card-${question.slug}`}
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:p-8",
        className
      )}
    >
      <div>
        <span className="font-accent text-[0.7rem] uppercase tracking-[0.18em] text-primary">{question.field}</span>
        <p className="mt-3 font-serif text-2xl leading-[1.1] tracking-tight sm:text-[1.7rem]">
          {question.text}
        </p>
      </div>
      <div className="mt-8 flex items-end justify-between border-t border-border pt-4">
        <div className="text-sm text-muted-foreground">
          <span className="text-foreground">{question.expert}</span>
          <span className="block text-xs">{question.answers} people asked · Live conversation</span>
        </div>
        <span className="flex items-center gap-1 font-accent text-xs font-bold text-foreground transition-colors group-hover:text-primary">
          Explore
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
