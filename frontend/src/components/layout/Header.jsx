import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import SearchOverlay from "@/components/SearchOverlay";
import { LiveDot } from "@/components/atoms";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Explore", to: "/topics" },
  { label: "Live", to: "/live" },
  { label: "Experts", to: "/experts" },
  { label: "Questions", to: "/questions" },
  { label: "My Learning", to: "/learning" },
];

function ThemeToggle({ className = "" }) {
  const { resolved, toggle } = useTheme();
  return (
    <button
      data-testid="theme-toggle"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:text-primary",
        className
      )}
    >
      {resolved === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function Header({ overHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = overHero && !scrolled;
  const iconBtn = onHero
    ? "border-white/25 bg-white/10 text-white hover:text-white"
    : "border-border bg-card/60 text-foreground hover:text-primary";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
          scrolled
            ? "glass border-b border-border bg-background/70 supports-[backdrop-filter]:bg-background/60"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" data-testid="logo-home" className="group flex items-center gap-2">
            <span className={cn("font-serif text-2xl font-bold tracking-tight sm:text-[1.7rem]", onHero && "text-white")}>EXPÉRIA</span>
            <span className={cn("hidden rounded-full border px-2 py-0.5 font-accent text-[0.55rem] uppercase tracking-[0.2em] sm:inline", onHero ? "border-white/30 text-white/70" : "border-border/70 text-muted-foreground")}>Demo</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={cn(
                    "relative rounded-full px-4 py-2 font-accent text-sm font-medium transition-colors",
                    onHero
                      ? active ? "text-white" : "text-white/70 hover:text-white"
                      : active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label === "Live" && <LiveDot label={false} className="mr-1.5" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              data-testid="header-search-button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={cn("flex h-10 w-10 items-center justify-center rounded-full border transition-colors", iconBtn)}
            >
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle className={cn("hidden sm:flex", onHero && "border-white/25 bg-white/10 text-white hover:text-white")} />
            <Link
              to="/live"
              data-testid="header-cta-live"
              className="hidden items-center rounded-full bg-primary px-5 py-2.5 font-accent text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:inline-flex"
            >
              Explore live
            </Link>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  data-testid="mobile-menu-trigger"
                  aria-label="Open menu"
                  className={cn("flex h-10 w-10 items-center justify-center rounded-full border lg:hidden", iconBtn)}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm border-border bg-background">
                <SheetTitle className="sr-only">EXPÉRIA navigation menu</SheetTitle>
                <SheetDescription className="sr-only">Browse Expéria — explore fields, live conversations, experts, questions and your learning.</SheetDescription>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold">EXPÉRIA</span>
                  <ThemeToggle />
                </div>
                <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                  {NAV.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2 rounded-xl px-3 py-3 font-serif text-2xl transition-colors hover:text-primary"
                      >
                        {item.label === "Live" && <LiveDot label={false} />}
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Link
                    to="/live"
                    data-testid="mobile-menu-cta-live"
                    className="mt-8 flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 font-accent text-sm font-bold text-primary-foreground"
                  >
                    Explore what's happening live
                  </Link>
                </SheetClose>
                <p className="mt-6 text-center font-accent text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Demo Environment · INR ₹
                </p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
