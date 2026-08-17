import { useState, useEffect } from "react";
import { Loader2, Check } from "lucide-react";
import { MockReservationService } from "@/services/mockServices";
import { cn } from "@/lib/utils";

// Demo reservation. States: idle → loading → reserved | error
export default function ReserveButton({ slug, price = 9, full = false, variant = "primary", className = "", testId }) {
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (MockReservationService.isReserved(slug)) setState("reserved");
  }, [slug]);

  const reserve = async () => {
    if (state === "loading" || state === "reserved") return;
    setState("loading");
    try {
      await MockReservationService.reserve(slug);
      setState("reserved");
    } catch {
      setState("error");
    }
  };

  const label = {
    idle: `Reserve your seat · ₹${price}`,
    loading: "Reserving…",
    reserved: "Seat reserved",
    error: "Couldn't reserve — try again",
  }[state];

  const styles =
    state === "reserved"
      ? "bg-emerald-600 text-white"
      : variant === "onDark"
      ? "bg-white text-black hover:-translate-y-0.5"
      : "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25";

  return (
    <button
      type="button"
      data-testid={testId || `reserve-${slug}`}
      onClick={reserve}
      disabled={state === "loading" || state === "reserved"}
      aria-live="polite"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-accent text-sm font-bold transition-[transform,background-color,box-shadow] duration-300 disabled:cursor-default",
        full && "w-full",
        styles,
        className
      )}
    >
      {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
      {state === "reserved" && <Check className="h-4 w-4" />}
      {label}
    </button>
  );
}
