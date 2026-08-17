import { FIELDS, EXPERTS, LIVE_NOW, UPCOMING, QUESTIONS } from "@/data/mockData";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// Deterministic keyword → intent map
const KEYWORD_MAP = [
  { keys: ["airport", "aviation", "aircraft", "flight", "plane", "pilot", "airline"], fieldSlug: "aviation", question: "How do airports actually work?", expertSlug: "rahul-mehta", live: "inside-indian-aviation", upcoming: "inside-indias-space-industry" },
  { keys: ["chip", "chips", "semiconductor", "fab", "silicon", "wafer"], fieldSlug: "semiconductors", question: "How are semiconductor chips made?", expertSlug: "arjun-rao", live: "how-semiconductor-fabs-are-built" },
  { keys: ["startup", "startups", "founder", "vc", "venture", "funding", "invest"], fieldSlug: "startups", question: "How do startups actually get funded?", expertSlug: "neha-kapoor", live: null, upcoming: "how-startups-actually-get-funded" },
  { keys: ["hospital", "emergency", "doctor", "medicine", "er", "surgery", "patient"], fieldSlug: "medicine", question: "What happens inside an emergency room?", expertSlug: "anjali-sharma", live: "life-inside-emergency-room" },
  { keys: ["factory", "manufacturing", "plant", "production", "assembly"], fieldSlug: "manufacturing", question: "How does a billion-dollar factory operate?", expertSlug: "vikram-iyer", live: "how-manufacturing-plants-work" },
  { keys: ["stock", "market", "exchange", "finance", "trading", "money"], fieldSlug: "finance", question: "How does a stock exchange actually work?", expertSlug: "neha-kapoor", live: "how-stock-exchanges-make-money" },
  { keys: ["space", "rocket", "satellite", "isro", "mission", "launch"], fieldSlug: "space", question: "How are satellites built and launched?", expertSlug: "arjun-rao", live: null, upcoming: "inside-indias-space-industry" },
  { keys: ["port", "container", "shipping", "cargo", "infrastructure"], fieldSlug: "infrastructure", question: "How does a port actually work?", expertSlug: "vikram-iyer", live: null, upcoming: "how-indian-ports-actually-operate" },
];

const find = (arr, slug) => arr.find((x) => x.slug === slug);

export const MockSearchService = {
  async search(query) {
    await delay(650);
    const q = (query || "").trim().toLowerCase();
    if (!q) return { status: "empty", query };

    const match = KEYWORD_MAP.find((m) => m.keys.some((k) => q.includes(k)));
    if (match) {
      const field = FIELDS.find((f) => f.slug === match.fieldSlug);
      const expert = EXPERTS.find((e) => e.slug === match.expertSlug);
      const live = match.live ? find(LIVE_NOW, match.live) : null;
      const upcoming = match.upcoming ? find(UPCOMING, match.upcoming) : null;
      return {
        status: "results",
        query,
        result: { field, question: match.question, expert, live, upcoming },
      };
    }

    // Suggestions for unknown queries
    return {
      status: "no-results",
      query,
      suggestions: QUESTIONS.slice(0, 4).map((x) => ({ text: x.text, fieldSlug: x.fieldSlug })),
    };
  },
};

const RES_KEY = "experia-reservations";

const readReservations = () => {
  try {
    return JSON.parse(localStorage.getItem(RES_KEY) || "[]");
  } catch {
    return [];
  }
};

export const MockReservationService = {
  isReserved(slug) {
    return readReservations().includes(slug);
  },
  async reserve(slug) {
    await delay(1100);
    const current = readReservations();
    if (!current.includes(slug)) {
      current.push(slug);
      localStorage.setItem(RES_KEY, JSON.stringify(current));
    }
    return { status: "reserved", slug };
  },
};
