// EXPÉRIA — Demo mock data. Frontend-only. No real people implied.
// Every profile is a fictional Demo Profile.

const u = (id, extra = "") =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=1400${extra}`;

export const IMAGES = {
  heroCockpit:
    "https://static.prod-images.emergentagent.com/jobs/71736643-23e0-493d-acea-d68720ab6026/images/f1397d6bc2ca56dcf828d93a130217a82e1f9be6414849a50d0f1a59a478800c.jpeg",
  aviation: u("photo-1552773346-ca6976a5d4ca"),
  medicine: u("photo-1579154491781-5e199df316aa"),
  space: u("photo-1581092795360-fd1ca04f0952"),
  manufacturing: u("photo-1717386255773-1e3037c81788"),
  finance: u("photo-1707762890671-52ef6d6f51e7"),
  technology: u("photo-1558494949-ef010cbdcc31"),
  semiconductors: u("photo-1668600418844-5b3d2e381e10"),
  startups: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1400",
  infrastructure: u("photo-1590497008432-598f04441de8"),
  law: u("photo-1564517063423-29c2be89bbb3"),
  science: "https://images.pexels.com/photos/8533045/pexels-photo-8533045.jpeg?auto=compress&cs=tinysrgb&w=1400",
  energy: "https://images.pexels.com/photos/31516243/pexels-photo-31516243.jpeg?auto=compress&cs=tinysrgb&w=1400",
  audience: u("photo-1540575467063-178a50c2df87"),
  liveAudience: u("photo-1594122230689-45899d9e6f69"),
  bridge: "https://images.pexels.com/photos/13595169/pexels-photo-13595169.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // Experts
  rahul: u("photo-1574281570877-bd815ebb50a4", "&h=1400"),
  anjali: "https://images.pexels.com/photos/10040258/pexels-photo-10040258.jpeg?auto=compress&cs=tinysrgb&w=1000",
  arjun: u("photo-1774813958486-4c180dcda729", "&h=1400"),
  neha: "https://images.pexels.com/photos/10620268/pexels-photo-10620268.jpeg?auto=compress&cs=tinysrgb&w=1000",
  vikram: u("photo-1769636929231-3cd7f853d038", "&h=1400"),
  karan: u("photo-1544531586-fde5298cdd40", "&h=1400"),
};

export const EXPERTS = [
  {
    slug: "rahul-mehta",
    name: "Rahul Mehta",
    role: "Former Airline Operations Director",
    years: 28,
    fieldSlug: "aviation",
    field: "Aviation",
    image: IMAGES.rahul,
    hook: "Ask Rahul what really happens when an aircraft can't leave the gate.",
    bio: "Spent nearly three decades inside airline operations control — the room that decides whether a flight leaves, waits, or turns back. He has seen the calls that passengers never hear about.",
    lived: [
      "Ran operations control for a major carrier during peak monsoon disruption",
      "Made go / no-go calls minutes before pushback",
      "Coordinated between engineering, crew and air traffic control under pressure",
    ],
    canExplain: [
      "How an airport actually coordinates hundreds of moving parts",
      "Who decides whether a delayed aircraft still flies",
      "What happens behind the scenes when a technical snag appears",
    ],
  },
  {
    slug: "anjali-sharma",
    name: "Dr. Anjali Sharma",
    role: "Former Emergency Medicine Professional",
    years: 18,
    fieldSlug: "medicine",
    field: "Medicine",
    image: IMAGES.anjali,
    hook: "Ask Anjali how an emergency room decides who gets treated first.",
    bio: "Worked the floor of a high-volume emergency department where seconds change outcomes. She has lived the decisions that textbooks summarise in a single line.",
    lived: [
      "Led triage during mass-casualty nights",
      "Made split-second prioritisation calls with limited information",
      "Trained junior doctors to stay calm inside chaos",
    ],
    canExplain: [
      "How triage really works when everyone needs help at once",
      "What an emergency doctor notices that patients never see",
      "How teams communicate when there is no time to explain",
    ],
  },
  {
    slug: "arjun-rao",
    name: "Arjun Rao",
    role: "Semiconductor Manufacturing Professional",
    years: 22,
    fieldSlug: "semiconductors",
    field: "Semiconductors",
    image: IMAGES.arjun,
    hook: "Ask Arjun how a room can be clean enough to build a chip.",
    bio: "Built and ran processes inside semiconductor fabrication — environments cleaner than an operating theatre, where a single speck of dust ruins millions in silicon.",
    lived: [
      "Commissioned cleanroom lines from empty shell to production",
      "Chased defects invisible to the human eye",
      "Balanced yield, cost and physics at nanometre scale",
    ],
    canExplain: [
      "How the tiny things inside your devices are actually made",
      "Why a fab has to stay impossibly clean",
      "What it takes to turn sand into a working chip",
    ],
  },
  {
    slug: "neha-kapoor",
    name: "Neha Kapoor",
    role: "Startup & Venture Capital Professional",
    years: 16,
    fieldSlug: "startups",
    field: "Startups",
    image: IMAGES.neha,
    hook: "Ask Neha why some startups get funded while others don't.",
    bio: "Sat on both sides of the table — building companies and later deciding which founders to back. She has heard thousands of pitches and knows what actually moves a decision.",
    lived: [
      "Raised and deployed capital across early-stage companies",
      "Rejected — and regretted rejecting — a few now-famous startups",
      "Coached founders through the hardest six months of their lives",
    ],
    canExplain: [
      "How a founder convinces someone to invest millions",
      "What investors really look for beyond the deck",
      "Why timing beats brilliance more often than people admit",
    ],
  },
  {
    slug: "vikram-iyer",
    name: "Vikram Iyer",
    role: "Manufacturing Operations Leader",
    years: 24,
    fieldSlug: "manufacturing",
    field: "Manufacturing",
    image: IMAGES.vikram,
    hook: "Ask Vikram how a ₹2 component can shut down an entire factory.",
    bio: "Ran the floor of large-scale factories where a single missing part halts a line worth crores an hour. He understands the choreography most people never think about.",
    lived: [
      "Recovered production lines after sudden supply failures",
      "Redesigned workflows that saved hours per shift",
      "Kept a ₹500 crore plant running through the unexpected",
    ],
    canExplain: [
      "How a huge factory actually runs, minute to minute",
      "Why one small component can stop everything",
      "What efficiency really means on a real production floor",
    ],
  },
  {
    slug: "karan-malhotra",
    name: "Prof. Karan Malhotra",
    role: "Education Advisor",
    years: 20,
    fieldSlug: "education",
    field: "Education",
    image: IMAGES.karan,
    hook: "Ask Karan the truth about what programmes actually teach you.",
    bio: "Advised institutions and students for two decades. He is candid about what formal education really delivers — and what it quietly leaves out.",
    lived: [
      "Designed curricula and mentored thousands of students",
      "Watched careers succeed and stall for reasons few discuss",
      "Advised families on choices worth lakhs",
    ],
    canExplain: [
      "What an MBA actually changes — and what it doesn't",
      "How to learn things a classroom can't teach",
      "How to think about education as an investment",
    ],
  },
];

export const FIELDS = [
  { slug: "aviation", name: "Aviation", hook: "What happens before your flight takes off?", image: IMAGES.aviation, experts: 12, conversations: 34 },
  { slug: "medicine", name: "Medicine", hook: "What does an emergency doctor see that patients don't?", image: IMAGES.medicine, experts: 18, conversations: 41 },
  { slug: "space", name: "Space", hook: "What actually happens after a rocket leaves Earth?", image: IMAGES.space, experts: 9, conversations: 22 },
  { slug: "manufacturing", name: "Manufacturing", hook: "How does a ₹500 crore factory actually run?", image: IMAGES.manufacturing, experts: 14, conversations: 28 },
  { slug: "finance", name: "Finance", hook: "Who really moves the market?", image: IMAGES.finance, experts: 21, conversations: 47 },
  { slug: "technology", name: "Technology", hook: "What happens behind the technology you use every day?", image: IMAGES.technology, experts: 26, conversations: 53 },
  { slug: "semiconductors", name: "Semiconductors", hook: "How are the tiny things inside your devices actually made?", image: IMAGES.semiconductors, experts: 7, conversations: 15 },
  { slug: "startups", name: "Startups", hook: "Why do some startups get funded while others don't?", image: IMAGES.startups, experts: 19, conversations: 38 },
  { slug: "infrastructure", name: "Infrastructure", hook: "How do cities actually keep moving?", image: IMAGES.infrastructure, experts: 11, conversations: 20 },
  { slug: "law", name: "Law", hook: "What really happens behind a legal case?", image: IMAGES.law, experts: 13, conversations: 24 },
  { slug: "science", name: "Science", hook: "How do discoveries become real-world breakthroughs?", image: IMAGES.science, experts: 16, conversations: 31 },
  { slug: "energy", name: "Energy", hook: "How does the world actually produce and move energy?", image: IMAGES.energy, experts: 10, conversations: 18 },
];

export const ALL_FIELD_NAMES = [
  "Aviation", "Medicine", "Space", "Manufacturing", "Finance", "Technology",
  "Semiconductors", "Startups", "Infrastructure", "Law", "Science", "Energy",
  "Design & Media", "Psychology", "Education", "Agriculture", "Public Systems",
  "Environment", "Sports", "Hospitality", "Architecture", "Transportation", "Consumer Goods",
];

export const QUESTIONS = [
  { slug: "component-shut-factory", text: "Why can a ₹2 component shut down an entire factory?", fieldSlug: "manufacturing", field: "Manufacturing", expert: "Vikram Iyer", conversation: "How Manufacturing Plants Actually Work", answers: 42 },
  { slug: "aircraft-cant-fly", text: "What happens when an aircraft can't fly 20 minutes before departure?", fieldSlug: "aviation", field: "Aviation", expert: "Rahul Mehta", conversation: "Inside Indian Aviation", answers: 68 },
  { slug: "hospital-who-first", text: "How does a hospital decide who gets treated first?", fieldSlug: "medicine", field: "Medicine", expert: "Dr. Anjali Sharma", conversation: "Life Inside an Emergency Room", answers: 55 },
  { slug: "market-crash-decision", text: "Who actually makes the decision when a stock suddenly crashes?", fieldSlug: "finance", field: "Finance", expert: "Neha Kapoor", conversation: "How Stock Exchanges Actually Make Money", answers: 73 },
  { slug: "satellites-survive-launch", text: "How do satellites survive being launched into space?", fieldSlug: "space", field: "Space", expert: "Arjun Rao", conversation: "Inside India's Space Industry", answers: 39 },
  { slug: "port-thousands-containers", text: "What happens inside a port when thousands of containers arrive?", fieldSlug: "infrastructure", field: "Infrastructure", expert: "Vikram Iyer", conversation: "How Indian Ports Actually Operate", answers: 31 },
  { slug: "fab-clean-enough", text: "How does a semiconductor fab stay clean enough to build a chip?", fieldSlug: "semiconductors", field: "Semiconductors", expert: "Arjun Rao", conversation: "How Semiconductor Fabs Are Built", answers: 27 },
  { slug: "startup-invest-millions", text: "How does a startup convince someone to invest millions?", fieldSlug: "startups", field: "Startups", expert: "Neha Kapoor", conversation: "How Startups Actually Get Funded", answers: 61 },
];

export const LIVE_NOW = [
  { slug: "inside-indian-aviation", title: "Inside Indian Aviation", subtitle: "30 Years in the Industry", expertSlug: "rahul-mehta", expert: "Rahul Mehta", role: "Former Airline Operations Director", years: 28, fieldSlug: "aviation", field: "Aviation", viewers: 247, image: IMAGES.aviation, stage: "4 / 5" },
  { slug: "how-manufacturing-plants-work", title: "How Manufacturing Plants Actually Work", subtitle: "Life on a Real Production Floor", expertSlug: "vikram-iyer", expert: "Vikram Iyer", role: "Manufacturing Operations Leader", years: 24, fieldSlug: "manufacturing", field: "Manufacturing", viewers: 186, image: IMAGES.manufacturing, stage: "3 / 5" },
  { slug: "life-inside-emergency-room", title: "Life Inside an Emergency Room", subtitle: "The Decisions Nobody Sees", expertSlug: "anjali-sharma", expert: "Dr. Anjali Sharma", role: "Former Emergency Medicine Professional", years: 18, fieldSlug: "medicine", field: "Medicine", viewers: 158, image: IMAGES.medicine, stage: "5 / 5" },
  { slug: "how-stock-exchanges-make-money", title: "How Stock Exchanges Actually Make Money", subtitle: "Following the Real Money", expertSlug: "neha-kapoor", expert: "Neha Kapoor", role: "Startup & Venture Capital Professional", years: 16, fieldSlug: "finance", field: "Finance", viewers: 312, image: IMAGES.finance, stage: "2 / 5" },
  { slug: "how-semiconductor-fabs-are-built", title: "How Semiconductor Fabs Are Built", subtitle: "Inside the Cleanest Room on Earth", expertSlug: "arjun-rao", expert: "Arjun Rao", role: "Semiconductor Manufacturing Professional", years: 22, fieldSlug: "semiconductors", field: "Semiconductors", viewers: 97, image: IMAGES.semiconductors, stage: "4 / 5" },
];

export const UPCOMING = [
  { slug: "inside-indias-space-industry", title: "Inside India's Space Industry: Missions Beyond the Headlines", expertSlug: "arjun-rao", expert: "Arjun Rao", role: "Semiconductor & Systems Professional", fieldSlug: "space", field: "Space", date: "Sat, 1 Aug", time: "7:30 PM IST", interested: 1240, price: 9, image: IMAGES.space },
  { slug: "how-startups-actually-get-funded", title: "How Startups Actually Get Funded", expertSlug: "neha-kapoor", expert: "Neha Kapoor", role: "Startup & Venture Capital Professional", fieldSlug: "startups", field: "Startups", date: "Sun, 2 Aug", time: "6:00 PM IST", interested: 2115, price: 9, image: IMAGES.startups },
  { slug: "the-truth-about-mba-programs", title: "The Truth About MBA Programs", expertSlug: "karan-malhotra", expert: "Prof. Karan Malhotra", role: "Education Advisor", fieldSlug: "education", field: "Education", date: "Tue, 4 Aug", time: "8:00 PM IST", interested: 878, price: 9, image: IMAGES.audience },
  { slug: "how-indian-ports-actually-operate", title: "How Indian Ports Actually Operate", expertSlug: "vikram-iyer", expert: "Vikram Iyer", role: "Manufacturing & Operations Leader", fieldSlug: "infrastructure", field: "Infrastructure", date: "Thu, 6 Aug", time: "7:00 PM IST", interested: 654, price: 9, image: IMAGES.infrastructure },
];

export const RECOMMENDATIONS = {
  basedOn: "Aviation",
  items: [
    { name: "Air Traffic Control", hook: "Who really keeps the sky organised?" },
    { name: "Aircraft Maintenance", hook: "What happens to a plane overnight?" },
    { name: "Airport Operations", hook: "How does an airport move thousands at once?" },
    { name: "Aerospace Engineering", hook: "How is a machine built to leave the ground?" },
    { name: "Defence Aviation", hook: "What changes when the mission isn't commercial?" },
  ],
};

export const CURIOSITY_BRIDGE = [
  "Aviation",
  "Airport Operations",
  "Air Traffic Control",
  "Aircraft Maintenance",
  "Aerospace Engineering",
  "Space Systems",
];

export const LEARNER = {
  name: "Yashraj",
  stats: [
    { value: 12, label: "Conversations attended" },
    { value: 28, label: "Experts followed" },
    { value: 7, label: "Topics explored" },
    { value: 5, label: "Day learning streak" },
  ],
  nextGoal: "Attend 2 more conversations this week.",
  progress: 60,
};

export const WHY_LIVE = [
  { key: "ask", label: "Ask", copy: "Ask the person who actually lived it." },
  { key: "chat", label: "Chat", copy: "Discuss the question with other curious people." },
  { key: "stage", label: "Request the stage", copy: "Ask to come on stage and speak directly with the expert." },
  { key: "listen", label: "Listen", copy: "Hear stories, decisions and lessons that aren't in a textbook." },
  { key: "learn", label: "Learn", copy: "Leave understanding how something really works." },
];

export const HOW_IT_WORKS = [
  { n: "01", title: "Discover", copy: "Find a question, field or conversation that makes you curious." },
  { n: "02", title: "Reserve", copy: "Reserve your seat for ₹9." },
  { n: "03", title: "Join", copy: "Enter the live conversation." },
  { n: "04", title: "Ask", copy: "Ask questions, chat or request the stage." },
  { n: "05", title: "Learn", copy: "Take away insight from someone who lived it." },
];

export const TRUST = [
  { title: "Real People", sub: "Verified professionals" },
  { title: "Real Experience", sub: "First-hand insights" },
  { title: "Real Conversations", sub: "Live & interactive" },
  { title: "Real Knowledge", sub: "Learn how things actually work" },
];

export const SEARCH_PLACEHOLDERS = [
  "How does an airport actually work?",
  "How are semiconductor chips made?",
  "What happens inside an emergency room?",
  "How does a stock exchange actually work?",
  "How are satellites built?",
  "How do billion-dollar factories operate?",
  "How do startups actually get funded?",
  "How does a port actually work?",
];

export const getExpert = (slug) => EXPERTS.find((e) => e.slug === slug);
export const getField = (slug) => FIELDS.find((f) => f.slug === slug);
export const getConversation = (slug) => LIVE_NOW.find((c) => c.slug === slug) || UPCOMING.find((c) => c.slug === slug);
export const getLiveByField = (fieldSlug) => LIVE_NOW.filter((c) => c.fieldSlug === fieldSlug);
export const getUpcomingByField = (fieldSlug) => UPCOMING.filter((c) => c.fieldSlug === fieldSlug);
export const getQuestionsByField = (fieldSlug) => QUESTIONS.filter((q) => q.fieldSlug === fieldSlug);
export const getExpertsByField = (fieldSlug) => EXPERTS.filter((e) => e.fieldSlug === fieldSlug);
