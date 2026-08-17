import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Loader2, ArrowUpRight } from "lucide-react";
import { MockSearchService } from "@/services/mockServices";
import { LiveDot, DemoTag, Overline } from "@/components/atoms";
import { cn } from "@/lib/utils";

export function useSearch() {
  const [status, setStatus] = useState("idle"); // idle | loading | results | no-results | error
  const [data, setData] = useState(null);

  const run = async (query) => {
    if (!query || !query.trim()) {
      setStatus("idle");
      setData(null);
      return;
    }
    setStatus("loading");
    try {
      const res = await MockSearchService.search(query);
      if (res.status === "results") {
        setStatus("results");
        setData(res.result);
      } else if (res.status === "no-results") {
        setStatus("no-results");
        setData({ suggestions: res.suggestions });
      } else {
        setStatus("idle");
        setData(null);
      }
    } catch {
      setStatus("error");
      setData(null);
    }
  };

  const reset = () => {
    setStatus("idle");
    setData(null);
  };

  return { status, data, run, reset };
}

export function SearchResults({ data, status, onNavigate, compact = false }) {
  const navigate = useNavigate();
  const go = (path) => {
    onNavigate?.();
    navigate(path);
  };

  if (status === "loading") {
    return (
      <div data-testid="search-loading" className="space-y-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-16 animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div data-testid="search-error" className="rounded-2xl border border-border bg-card p-6 text-center">
        <p className="font-serif text-xl">Something went wrong.</p>
        <p className="mt-1 text-sm text-muted-foreground">Please try your search again.</p>
      </div>
    );
  }

  if (status === "no-results") {
    return (
      <div data-testid="search-no-results" className="rounded-2xl border border-border bg-card p-6">
        <p className="font-serif text-2xl">No exact match yet.</p>
        <p className="mt-1 text-sm text-muted-foreground">Try exploring one of these questions.</p>
        <div className="mt-4 flex flex-col gap-2">
          {data?.suggestions?.map((s, i) => (
            <button
              key={i}
              data-testid={`search-suggestion-${i}`}
              onClick={() => go(`/topic/${s.fieldSlug}`)}
              className="group flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-3 text-left transition-colors hover:border-primary"
            >
              <span className="text-sm font-medium">{s.text}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (status === "results" && data?.field) {
    const { field, question, expert, live, upcoming } = data;
    return (
      <div data-testid="search-results" className="overflow-hidden rounded-2xl border border-border bg-card">
        <button
          onClick={() => go(`/topic/${field.slug}`)}
          data-testid="search-result-field"
          className="grid w-full grid-cols-1 gap-4 p-5 text-left transition-colors hover:bg-muted/50 sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <div>
            <Overline>{field.name}</Overline>
            <p className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">{question}</p>
            {expert && (
              <p className="mt-2 text-sm text-muted-foreground">
                Answered by <span className="text-foreground">{expert.name}</span> · {expert.role} · {expert.years} yrs
              </p>
            )}
          </div>
          {expert && (
            <img
              src={expert.image}
              alt={expert.name}
              loading="lazy"
              className="h-16 w-16 rounded-full object-cover ring-2 ring-border sm:h-20 sm:w-20"
            />
          )}
        </button>
        <div className="grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {live && (
            <button
              onClick={() => go(`/conversations/${live.slug}`)}
              data-testid="search-result-live"
              className="flex items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-muted/50"
            >
              <span>
                <LiveDot className="mb-1" />
                <span className="block text-sm font-medium">{live.title}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
          )}
          {upcoming && (
            <button
              onClick={() => go(`/conversations/${upcoming.slug}`)}
              data-testid="search-result-upcoming"
              className="flex items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-muted/50"
            >
              <span>
                <span className="font-accent text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">Upcoming</span>
                <span className="mt-1 block text-sm font-medium">{upcoming.title}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}

// Full-screen overlay search launched from header
export default function SearchOverlay({ open, onClose }) {
  const [value, setValue] = useState("");
  const { status, data, run, reset } = useSearch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60);
      const onKey = (e) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    } else {
      setValue("");
      reset();
    }
  }, [open]); // eslint-disable-line

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    run(value);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-xl sm:p-8" role="dialog" aria-modal="true" aria-label="Search Expéria">
      <div className="mx-auto mt-8 w-full max-w-2xl sm:mt-20">
        <div className="mb-4 flex items-center justify-between">
          <Overline>Ask Expéria</Overline>
          <button data-testid="search-overlay-close" onClick={onClose} aria-label="Close search" className="rounded-full border border-border bg-card p-2 transition-colors hover:text-primary">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={submit} className="relative">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            ref={inputRef}
            data-testid="search-overlay-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What are you curious about?"
            className="w-full rounded-full border border-border bg-card py-5 pl-14 pr-28 font-serif text-lg outline-none transition-shadow focus:ring-2 focus:ring-primary sm:text-xl"
          />
          <button
            type="submit"
            data-testid="search-overlay-submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-3 font-accent text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-[calc(50%+2px)]"
          >
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Ask"}
          </button>
        </form>
        <div className={cn("mt-6", status === "idle" && "hidden")}>
          <SearchResults data={data} status={status} onNavigate={onClose} />
        </div>
        {status === "idle" && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Try <button onClick={() => { setValue("airport"); run("airport"); }} className="text-primary underline-offset-4 hover:underline">airport</button>,{" "}
            <button onClick={() => { setValue("chips"); run("chips"); }} className="text-primary underline-offset-4 hover:underline">chips</button> or{" "}
            <button onClick={() => { setValue("startup"); run("startup"); }} className="text-primary underline-offset-4 hover:underline">startup</button>
          </p>
        )}
      </div>
    </div>
  );
}
