// Monthly MVP data for the 2025 AI Annual Report
export interface MonthlyMVP {
  month: string;
  monthNumber: number;
  title: string;
  titleEmphasis: string;
  mvp: string;
  reason: string;
  category: 'opensource' | 'video' | 'multimodal' | 'reasoning' | 'agents' | 'competition';
}

export const monthlyMVPs: MonthlyMVP[] = [
  {
    month: "January",
    monthNumber: 1,
    title: "The Robin Hood",
    titleEmphasis: "Moment",
    mvp: "DeepSeek-R1",
    reason: "It wasn't just open source—it democratized reasoning models, forcing OpenAI to release o3-mini by month's end.",
    category: "opensource",
  },
  {
    month: "February",
    monthNumber: 2,
    title: "Video Strikes",
    titleEmphasis: "Back",
    mvp: "Step-Video-T2V & Gemini 2.0",
    reason: "While everyone waited for Sora, Google and StepFun pushed video generation to new heights.",
    category: "video",
  },
  {
    month: "March",
    monthNumber: 3,
    title: "The Trillion",
    titleEmphasis: "Club",
    mvp: "Qwen2.5-Omni & DeepSeek V3",
    reason: "Alibaba and DeepSeek showcased China's AI muscle. The Thinker-Talker architecture made real-time voice interaction a reality.",
    category: "multimodal",
  },
  {
    month: "April",
    monthNumber: 4,
    title: "Open Source",
    titleEmphasis: "Party",
    mvp: "Llama 4",
    reason: "Meta continued as the 405B parameter open-source gatekeeper, forcing GPT-4 Turbo into price cuts.",
    category: "opensource",
  },
  {
    month: "May",
    monthNumber: 5,
    title: "Empire Strikes",
    titleEmphasis: "Back",
    mvp: "Google I/O",
    reason: "Google's full-stack assault: Gemini 2.5, Veo, and Project Astra revealed the true multimodal future.",
    category: "multimodal",
  },
  {
    month: "June",
    monthNumber: 6,
    title: "AI on",
    titleEmphasis: "Device",
    mvp: "Apple Intelligence",
    reason: "Critics called it 'vaporware,' but it marked AI's official entry into 2 billion pockets via Apple devices.",
    category: "multimodal",
  },
  {
    month: "July",
    monthNumber: 7,
    title: "The Coding",
    titleEmphasis: "Singularity",
    mvp: "Qwen3-Coder",
    reason: "A 480B parameter code model directly challenging Claude 3.5 Sonnet. Developer anxiety peaked.",
    category: "reasoning",
  },
  {
    month: "August",
    monthNumber: 8,
    title: "Return of the",
    titleEmphasis: "King",
    mvp: "GPT-5",
    reason: "The long-awaited arrival. Some said 'underwhelming,' but it reset the LLM ceiling. Nano Banana stunned everyone.",
    category: "multimodal",
  },
  {
    month: "September",
    monthNumber: 9,
    title: "Reasoning as a",
    titleEmphasis: "Service",
    mvp: "OpenAI o1 & Qwen3-Max",
    reason: "'Slow thinking' became standard. AI learned to pause and reflect before responding.",
    category: "reasoning",
  },
  {
    month: "October",
    monthNumber: 10,
    title: "Agent",
    titleEmphasis: "OS",
    mvp: "Computer Use & AutoGLM",
    reason: "AI finally got hands—controlling computers and phones. The chatbot-to-agent watershed moment.",
    category: "agents",
  },
  {
    month: "November",
    monthNumber: 11,
    title: "Ragnarök",
    titleEmphasis: "",
    mvp: "Gemini 3.0 vs Grok 4.1",
    reason: "Google's Gemini 3.0 topped every benchmark. xAI's Grok followed close behind. The bloodiest month of competition.",
    category: "competition",
  },
  {
    month: "December",
    monthNumber: 12,
    title: "Endgame &",
    titleEmphasis: "Rebirth",
    mvp: "GPT-5.2 & DeepSeek V3.2",
    reason: "OpenAI activated Code Red against Gemini 3. DeepSeek V3.2 proved open source isn't going anywhere.",
    category: "competition",
  },
];

// Deep Dive Analytics Data
export interface PricePoint {
  date: string;
  model: string;
  pricePerMillion: number;
  booksFor1Dollar: number;
}

export const priceDeflation: PricePoint[] = [
  { date: "Jan 2025", model: "GPT-4 Turbo", pricePerMillion: 10.00, booksFor1Dollar: 1 },
  { date: "Mar 2025", model: "DeepSeek V3", pricePerMillion: 2.00, booksFor1Dollar: 5 },
  { date: "Jun 2025", model: "Gemini Flash", pricePerMillion: 0.50, booksFor1Dollar: 10 },
  { date: "Sep 2025", model: "GPT-4o Mini", pricePerMillion: 0.15, booksFor1Dollar: 35 },
  { date: "Dec 2025", model: "DeepSeek V3.2", pricePerMillion: 0.02, booksFor1Dollar: 250 },
];

export interface PingPongEvent {
  date: string;
  side: 'us' | 'china';
  model: string;
  action: string;
}

export const pingPongWar: PingPongEvent[] = [
  { date: "Jan 20", side: "china", model: "DeepSeek R1", action: "serves" },
  { date: "Jan 31", side: "us", model: "o3-mini", action: "returns" },
  { date: "Mar 15", side: "china", model: "Qwen2.5-Omni", action: "volleys" },
  { date: "Apr 18", side: "us", model: "Llama 4", action: "smashes" },
  { date: "Apr 29", side: "china", model: "Qwen 3", action: "counters" },
  { date: "May 14", side: "us", model: "Gemini 2.5", action: "drives" },
  { date: "Jul 22", side: "china", model: "Qwen3-Coder", action: "spikes" },
  { date: "Aug 12", side: "us", model: "GPT-5", action: "returns" },
  { date: "Sep 18", side: "us", model: "OpenAI o1", action: "lobs" },
  { date: "Sep 25", side: "china", model: "Qwen3-Max", action: "smashes" },
  { date: "Oct 30", side: "us", model: "Computer Use", action: "volleys" },
  { date: "Nov 15", side: "us", model: "Gemini 3.0", action: "intercepts" },
  { date: "Dec 10", side: "us", model: "GPT-5.2", action: "saves" },
  { date: "Dec 20", side: "china", model: "DeepSeek V3.2", action: "returns" },
];

export interface PersonalityMilestone {
  date: string;
  model: string;
  trait: string;
  description: string;
}

export const personalityMilestones: PersonalityMilestone[] = [
  { date: "Feb", model: "GPT-4o Voice", trait: "Flirtation", description: "Learned to be coy and playful" },
  { date: "May", model: "Gemini Live", trait: "Accents", description: "Mastered regional voice variations" },
  { date: "Jul", model: "Grok", trait: "Arguing", description: "Embraced confrontational discourse" },
  { date: "Sep", model: "o1", trait: "Pausing", description: "Learned to think before speaking" },
  { date: "Dec", model: "GPT-5.2", trait: "Discretion", description: "Mastered 'seeing but not saying'" },
];

// Sherlocked (killed products) data
export interface SherlockedVictim {
  product: string;
  killer: string;
  epitaph: string;
}

export const sherlockedVictims: SherlockedVictim[] = [
  {
    product: "PDF Summarizers",
    killer: "Gemini 1.5 / GPT-5 Context Windows",
    epitaph: "Swallowed whole by million-token contexts.",
  },
  {
    product: "AI Search Wrappers",
    killer: "SearchGPT / Perplexity",
    epitaph: "The giants built it themselves. RIP thin wrappers.",
  },
  {
    product: "Junior Developers",
    killer: "Claude 3.5 Sonnet / Qwen3-Coder",
    epitaph: "Automated into 'prompt engineers.' Allegedly.",
  },
];

// 2025 Glossary
export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  definition: string;
}

export const glossary2025: GlossaryTerm[] = [
  {
    term: "Vibe Coding",
    pronunciation: "/vaɪb ˈkoʊdɪŋ/",
    definition: "The art of generating code entirely through AI, where the developer's role is reduced to nodding approval and fixing bugs.",
  },
  {
    term: "Thinking Process",
    pronunciation: "/ˈθɪŋkɪŋ ˈprɒsɛs/",
    definition: "The visible reasoning chain in models like o1 and DeepSeek R1. Users now feel uncomfortable when they can't see AI 'thinking.'",
  },
  {
    term: "Context Engineering",
    pronunciation: "/ˈkɒntɛkst ˌɛndʒɪˈnɪərɪŋ/",
    definition: "The successor to prompt engineering. Prompt is dead; context is eternal.",
  },
  {
    term: "Slop",
    pronunciation: "/slɒp/",
    definition: "Low-quality AI-generated content flooding the internet. The junk food of the digital age.",
  },
];

// Model names for animation
export const modelNames = [
  "GPT-5", "Gemini 3.0", "Claude 3.5", "DeepSeek V3", "Qwen 3",
  "Llama 4", "Grok 4", "o1", "Mistral", "Phi-4",
  "GPT-5.2", "Gemini 2.5", "Command R+", "Jamba", "Falcon 3",
];