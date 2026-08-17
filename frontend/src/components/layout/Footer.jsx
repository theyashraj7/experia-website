import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const COLUMNS = [
  {
    heading: "Platform",
    routed: true,
    links: [
      ["Explore", "/topics"],
      ["Live", "/live"],
      ["Experts", "/experts"],
      ["Topics", "/topics"],
      ["Questions", "/questions"],
      ["My Learning", "/learning"],
    ],
  },
  {
    heading: "Company",
    links: [["About"], ["How it works"], ["Become an Expert"], ["Careers"], ["Contact"]],
  },
  {
    heading: "Support",
    links: [["Help Center"], ["Community Guidelines"], ["Safety"], ["Contact Support"]],
  },
  {
    heading: "Legal",
    links: [["Privacy"], ["Terms"], ["Reservation Policy"], ["Expert Guidelines"]],
  },
];

function ThemeSegment() {
  const { theme, setTheme } = useTheme();
  const options = ["light", "dark", "system"];
  return (
    <div data-testid="footer-theme-segment" className="inline-flex rounded-full border border-white/15 bg-white/5 p-1">
      {options.map((opt) => (
        <button
          key={opt}
          data-testid={`footer-theme-${opt}`}
          onClick={() => setTheme(opt)}
          className={cn(
            "rounded-full px-3 py-1.5 font-accent text-xs font-semibold capitalize transition-colors",
            theme === opt ? "bg-white text-black" : "text-white/60 hover:text-white"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0E15] text-white">
      <div className="noise" />
      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-20 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <span className="font-serif text-5xl font-bold tracking-tight sm:text-6xl">EXPÉRIA</span>
            <p className="mt-5 max-w-xs font-display text-2xl italic leading-tight text-white/70">
              Real People. Real Experience. Real Knowledge.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="font-accent text-xs uppercase tracking-[0.22em] text-white/40">{col.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map(([label, to]) => {
                    const testId = `footer-link-${label.toLowerCase().replace(/\s+/g, "-")}`;
                    const className = "text-left text-sm text-white/70 transition-colors hover:text-white";
                    return (
                      <li key={label}>
                        {col.routed ? (
                          <Link to={to} data-testid={testId} className={className}>{label}</Link>
                        ) : (
                          <button
                            data-testid={testId}
                            onClick={() => toast(`${label}`, { description: "This page isn't part of the demo yet." })}
                            className={className}
                          >
                            {label}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <ThemeSegment />
            <span className="font-accent text-xs text-white/50">Language: English</span>
            <span className="font-accent text-xs text-white/50">Currency: INR ₹</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-accent text-[0.62rem] uppercase tracking-[0.2em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Demo Environment
            </span>
            <span className="font-accent text-xs text-white/40">© 2026 Expéria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
