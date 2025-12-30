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
  company: string;
  action: string;
}

export const pingPongWar: PingPongEvent[] = [
  // January
  { date: "Jan 20", side: "china", model: "DeepSeek-R1", company: "DeepSeek", action: "发球" },
  { date: "Jan 23", side: "china", model: "豆包 1.5 Pro", company: "ByteDance", action: "跟进" },
  { date: "Jan 27", side: "china", model: "Qwen2.5-Max", company: "Alibaba", action: "扣杀" },
  { date: "Jan 31", side: "us", model: "o3-mini", company: "OpenAI", action: "回球" },
  // February
  { date: "Feb 05", side: "us", model: "Gemini 2.0 Flash GA", company: "Google", action: "反击" },
  { date: "Feb 17", side: "china", model: "Step-Video-T2V", company: "StepFun", action: "截击" },
  { date: "Feb 27", side: "us", model: "GPT-4.5 Preview", company: "OpenAI", action: "试探" },
  // March
  { date: "Mar 16", side: "china", model: "文心 4.5 / X1", company: "Baidu", action: "双打" },
  { date: "Mar 25", side: "us", model: "Gemini 2.5 Pro Exp", company: "Google", action: "反攻" },
  { date: "Mar 25", side: "china", model: "DeepSeek-V3-0324", company: "DeepSeek", action: "同步回应" },
  { date: "Mar 27", side: "china", model: "Qwen2.5-Omni", company: "Alibaba", action: "全模态出击" },
  // April
  { date: "Apr 05", side: "us", model: "Llama 4 Scout/Maverick", company: "Meta", action: "开源反击" },
  { date: "Apr 13", side: "china", model: "Skywork-OR1", company: "Kunlun", action: "侧翼进攻" },
  { date: "Apr 14", side: "china", model: "GLM-4-32B/9B", company: "Zhipu", action: "跟进" },
  { date: "Apr 15", side: "us", model: "o3 / o4-mini", company: "OpenAI", action: "推理升级" },
  { date: "Apr 28", side: "china", model: "Qwen3 系列", company: "Alibaba", action: "重炮出击" },
  // May
  { date: "May 20", side: "us", model: "Codex-1", company: "OpenAI", action: "Agent发球" },
  { date: "May 21", side: "us", model: "Gemini 2.5 / Veo 3", company: "Google", action: "全面进攻" },
  { date: "May 22", side: "china", model: "混元 TurboS", company: "Tencent", action: "即时回应" },
  { date: "May 23", side: "us", model: "Claude 4 Opus/Sonnet", company: "Anthropic", action: "重磅出击" },
  { date: "May 29", side: "china", model: "DeepSeek-R1-0528", company: "DeepSeek", action: "快速迭代" },
  // June
  { date: "Jun 06", side: "china", model: "Qwen3-Embedding", company: "Alibaba", action: "基础设施" },
  { date: "Jun 11", side: "us", model: "o3-pro", company: "OpenAI", action: "专业版" },
  { date: "Jun 12", side: "china", model: "豆包 1.6 / Seedance", company: "ByteDance", action: "视频反击" },
  { date: "Jun 18", side: "us", model: "Gemini 2.5 GA", company: "Google", action: "正式版" },
  { date: "Jun 18", side: "china", model: "MiniMax-M1", company: "MiniMax", action: "开源推理" },
  // July
  { date: "Jul 04", side: "china", model: "Qwen-TTS / VLo", company: "Alibaba", action: "多模态扩展" },
  { date: "Jul 11", side: "us", model: "Grok 4", company: "xAI", action: "强势入场" },
  { date: "Jul 18", side: "us", model: "ChatGPT Agent", company: "OpenAI", action: "Agent升级" },
  { date: "Jul 23", side: "china", model: "Qwen3-Coder 480B", company: "Alibaba", action: "代码重炮" },
  { date: "Jul 29", side: "china", model: "GLM-4.5 / Step 3", company: "Zhipu/StepFun", action: "联合进攻" },
  // August
  { date: "Aug 06", side: "us", model: "Claude Opus 4.1", company: "Anthropic", action: "迭代升级" },
  { date: "Aug 07", side: "us", model: "gpt-oss-120b", company: "OpenAI", action: "开源试水" },
  { date: "Aug 07", side: "us", model: "Genie 3", company: "Google", action: "世界模型" },
  { date: "Aug 08", side: "us", model: "GPT-5 系列", company: "OpenAI", action: "王者归来" },
  { date: "Aug 18", side: "china", model: "混元3D世界模型", company: "Tencent", action: "3D反击" },
  { date: "Aug 20", side: "china", model: "DeepSeek-V3.1", company: "DeepSeek", action: "混合推理" },
  { date: "Aug 22", side: "china", model: "Seed-OSS-36B", company: "ByteDance", action: "开源跟进" },
  { date: "Aug 24", side: "us", model: "Grok 2.5 开源", company: "xAI", action: "开源反击" },
  // September
  { date: "Sep 09", side: "china", model: "Qwen3-Max Preview", company: "Alibaba", action: "万亿预览" },
  { date: "Sep 10", side: "us", model: "Veo 3 API", company: "Google", action: "视频API" },
  { date: "Sep 16", side: "us", model: "GPT-5-Codex", company: "OpenAI", action: "代码专精" },
  { date: "Sep 22", side: "us", model: "Grok 4 Fast", company: "xAI", action: "速度升级" },
  { date: "Sep 23", side: "china", model: "DeepSeek-V3.1-Terminus", company: "DeepSeek", action: "安全版本" },
  { date: "Sep 25", side: "china", model: "Qwen MAX / Wan 2.5", company: "Alibaba", action: "双线出击" },
  { date: "Sep 30", side: "us", model: "Claude Sonnet 4.5", company: "Anthropic", action: "中端升级" },
  // October
  { date: "Oct 13", side: "us", model: "Gemini 2.5 Computer Use", company: "Google", action: "Agent能力" },
  { date: "Oct 20", side: "us", model: "Veo 3.1 / Claude Haiku 4.5", company: "Google/Anthropic", action: "多点开花" },
  { date: "Oct 21", side: "china", model: "DeepSeek-OCR", company: "DeepSeek", action: "OCR突破" },
  { date: "Oct 22", side: "china", model: "GLM-4.6 / CodeBuddy", company: "Zhipu/Tencent", action: "代码工具" },
  { date: "Oct 28", side: "china", model: "MiniMax M2", company: "MiniMax", action: "模型升级" },
  // November
  { date: "Nov 04", side: "china", model: "Qwen3-Max Thinking", company: "Alibaba", action: "深度思考" },
  { date: "Nov 11", side: "china", model: "文心 5.0 Preview", company: "Baidu", action: "预览版" },
  { date: "Nov 13", side: "us", model: "GPT-5.1", company: "OpenAI", action: "快速迭代" },
  { date: "Nov 17", side: "china", model: "GLM-4.6 登顶", company: "Zhipu", action: "榜首夺取" },
  { date: "Nov 19", side: "us", model: "Gemini 3 / Grok 4.1", company: "Google/xAI", action: "双雄争霸" },
  { date: "Nov 21", side: "us", model: "Nemotron 3 / SAM 3", company: "NVIDIA/Meta", action: "基础设施" },
  { date: "Nov 25", side: "us", model: "Claude Opus 4.5", company: "Anthropic", action: "旗舰升级" },
  // December
  { date: "Dec 02", side: "china", model: "DeepSeek V3.2", company: "DeepSeek", action: "年终大招" },
  { date: "Dec 09", side: "china", model: "混元 2.0 406B", company: "Tencent", action: "规模升级" },
  { date: "Dec 12", side: "us", model: "GPT-5.2", company: "OpenAI", action: "底线救球" },
  { date: "Dec 17", side: "china", model: "Wan 2.6 电影级", company: "Alibaba", action: "视频进化" },
  { date: "Dec 18", side: "us", model: "Gemini 3 Flash", company: "Google", action: "极速版本" },
  { date: "Dec 22", side: "us", model: "Trellis 2 / SAM Audio", company: "Microsoft/Meta", action: "多模态" },
  { date: "Dec 24", side: "china", model: "GLM-4.7 / MiniMax M2.1", company: "Zhipu/MiniMax", action: "年末冲刺" },
  { date: "Dec 29", side: "china", model: "Qwen Code v0.5", company: "Alibaba", action: "收官之作" },
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