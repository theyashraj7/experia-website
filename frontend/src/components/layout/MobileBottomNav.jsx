import { Link, useLocation } from "react-router-dom";
import { Home, Radio, Compass, BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Home", to: "/", icon: Home },
  { label: "Live", to: "/live", icon: Radio },
  { label: "Explore", to: "/topics", icon: Compass },
  { label: "Learning", to: "/learning", icon: BookMarked },
];

export default function MobileBottomNav() {
  const { pathname } = useLocation();
  return (
    <nav
      data-testid="mobile-bottom-nav"
      aria-label="Bottom navigation"
      className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 glass lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-4">
        {ITEMS.map(({ label, to, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              data-testid={`bottomnav-${label.toLowerCase()}`}
              className={cn(
                "flex min-h-[56px] flex-col items-center justify-center gap-1 py-2 transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", label === "Live" && active && "text-live")} strokeWidth={active ? 2.4 : 1.8} />
              <span className="font-accent text-[0.62rem] font-semibold uppercase tracking-[0.12em]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
