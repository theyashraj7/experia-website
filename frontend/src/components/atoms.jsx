import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Overline({ children, className = "" }) {
  return (
    <span className={cn("font-accent text-xs uppercase tracking-[0.28em] text-primary", className)}>
      {children}
    </span>
  );
}

export function LiveDot({ className = "", label = true, testId }) {
  return (
    <span data-testid={testId} className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative inline-flex h-2 w-2">
        <span className="live-pulse absolute" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
      </span>
      {label && (
        <span className="font-accent text-[0.7rem] font-bold uppercase tracking-[0.2em] text-live">
          Live
        </span>
      )}
    </span>
  );
}

export function DemoTag({ children = "Demo Profile", className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-background/50 px-2.5 py-0.5 font-accent text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({ overline, title, sub, align = "left", className = "" }) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {overline && <Overline className="mb-4 block">{overline}</Overline>}
      <h2 className="font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

// Pill CTA — renders as Link (to) or button (onClick)
export function CTA({ children, to, onClick, variant = "primary", className = "", testId, arrow = true, type }) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-accent text-sm font-bold tracking-wide transition-[transform,background-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25",
    invert: "bg-foreground text-background hover:-translate-y-0.5 hover:opacity-90",
    ghost: "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary",
    onDark: "bg-white text-black hover:-translate-y-0.5 hover:bg-white/90",
  };
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  const cls = cn(base, variants[variant], className);
  if (to) {
    return (
      <Link to={to} data-testid={testId} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type || "button"} onClick={onClick} data-testid={testId} className={cls}>
      {inner}
    </button>
  );
}

export function TextLink({ children, to, onClick, className = "", testId }) {
  const cls = cn(
    "group inline-flex items-center gap-1.5 font-accent text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-primary",
    className
  );
  const inner = (
    <>
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  if (to) return <Link to={to} data-testid={testId} className={cls}>{inner}</Link>;
  return <button type="button" onClick={onClick} data-testid={testId} className={cls}>{inner}</button>;
}
