import { useState, useEffect, useRef } from "react";
import { Search, Loader2 } from "lucide-react";
import { useSearch, SearchResults } from "@/components/SearchOverlay";
import { SEARCH_PLACEHOLDERS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function CuriositySearch({ onDark = false, autoRotate = true, className = "" }) {
  const [value, setValue] = useState("");
  const [phIndex, setPhIndex] = useState(0);
  const [phVisible, setPhVisible] = useState(true);
  const { status, data, run, reset } = useSearch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (!autoRotate || value) return;
    const interval = setInterval(() => {
      setPhVisible(false);
      setTimeout(() => {
        setPhIndex((i) => (i + 1) % SEARCH_PLACEHOLDERS.length);
        setPhVisible(true);
      }, 400);
    }, 3200);
    return () => clearInterval(interval);
  }, [autoRotate, value]);

  const submit = (e) => {
    e.preventDefault();
    run(value);
  };

  const clear = () => {
    setValue("");
    reset();
  };

  return (
    <div className={cn("w-full", className)}>
      <form onSubmit={submit} className="relative">
        <Search
          className={cn(
            "pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2",
            onDark ? "text-white/70" : "text-muted-foreground"
          )}
        />
        <input
          ref={inputRef}
          data-testid="curiosity-search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="What are you curious about?"
          className={cn(
            "h-[60px] w-full rounded-full border pl-14 pr-32 font-serif text-lg outline-none transition-[box-shadow,border-color] focus:ring-2 focus:ring-primary sm:h-16 sm:text-xl",
            onDark
              ? "border-white/25 bg-white/10 text-white placeholder-transparent backdrop-blur-xl"
              : "border-border bg-card text-foreground placeholder-transparent shadow-sm"
          )}
          placeholder="What are you curious about?"
        />
        {/* Animated placeholder overlay */}
        {!value && (
          <span
            className={cn(
              "pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 truncate pr-32 font-serif text-lg italic transition-opacity duration-300 sm:text-xl",
              onDark ? "text-white/55" : "text-muted-foreground/70",
              phVisible ? "opacity-100" : "opacity-0"
            )}
          >
            {SEARCH_PLACEHOLDERS[phIndex]}
          </span>
        )}
        <button
          type="submit"
          data-testid="curiosity-search-submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary px-6 py-3 font-accent text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-[calc(50%+2px)]"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Ask"}
        </button>
      </form>

      {status !== "idle" && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className={cn("font-accent text-xs uppercase tracking-[0.2em]", onDark ? "text-white/60" : "text-muted-foreground")}>
              {status === "loading" ? "Looking…" : "Result"}
            </span>
            <button onClick={clear} data-testid="curiosity-search-clear" className={cn("font-accent text-xs underline-offset-4 hover:underline", onDark ? "text-white/70" : "text-muted-foreground")}>
              Clear
            </button>
          </div>
          <SearchResults data={data} status={status} />
        </div>
      )}
    </div>
  );
}
