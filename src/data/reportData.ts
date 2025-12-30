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
}

export const pingPongWar: PingPongEvent[] = [
  // ============ JANUARY ============
  // China
  { date: "Jan 20", side: "china", model: "DeepSeek-R1", company: "DeepSeek" },
  { date: "Jan 23", side: "china", model: "豆包 1.5 Pro", company: "ByteDance" },
  { date: "Jan 27", side: "china", model: "Qwen2.5-Max", company: "Alibaba" },
  // US
  { date: "Jan 31", side: "us", model: "o3-mini", company: "OpenAI" },

  // ============ FEBRUARY ============
  // US
  { date: "Feb 05", side: "us", model: "Gemini 2.0 Flash GA", company: "Google" },
  { date: "Feb 05", side: "us", model: "Gemini 2.0 Flash-Lite", company: "Google" },
  { date: "Feb 05", side: "us", model: "Gemini 2.0 Pro Exp", company: "Google" },
  { date: "Feb 20", side: "us", model: "Helix", company: "Figure" },
  { date: "Feb 27", side: "us", model: "GPT-4.5 (Research Preview)", company: "OpenAI" },
  // China
  { date: "Feb 17", side: "china", model: "Step-Video-T2V", company: "StepFun" },
  { date: "Feb 17", side: "china", model: "Step-Audio", company: "StepFun" },

  // ============ MARCH ============
  // China
  { date: "Mar 16", side: "china", model: "文心 4.5", company: "Baidu" },
  { date: "Mar 16", side: "china", model: "文心 X1", company: "Baidu" },
  { date: "Mar 25", side: "china", model: "DeepSeek-V3-0324", company: "DeepSeek" },
  { date: "Mar 27", side: "china", model: "Qwen2.5-Omni", company: "Alibaba" },
  // US
  { date: "Mar 25", side: "us", model: "Gemini 2.5 Pro Exp", company: "Google" },

  // ============ APRIL ============
  // US
  { date: "Apr 05", side: "us", model: "Llama 4 Scout", company: "Meta" },
  { date: "Apr 05", side: "us", model: "Llama 4 Maverick", company: "Meta" },
  { date: "Apr 15", side: "us", model: "o3", company: "OpenAI" },
  { date: "Apr 15", side: "us", model: "o4-mini", company: "OpenAI" },
  // China
  { date: "Apr 13", side: "china", model: "Skywork-OR1-32B", company: "Kunlun" },
  { date: "Apr 13", side: "china", model: "Skywork-OR1-7B", company: "Kunlun" },
  { date: "Apr 14", side: "china", model: "GLM-4-32B", company: "Zhipu" },
  { date: "Apr 14", side: "china", model: "GLM-4-9B", company: "Zhipu" },
  { date: "Apr 14", side: "china", model: "GLM-Z1", company: "Zhipu" },
  { date: "Apr 25", side: "china", model: "文心 4.5 Turbo", company: "Baidu" },
  { date: "Apr 25", side: "china", model: "文心 X1 Turbo", company: "Baidu" },
  { date: "Apr 28", side: "china", model: "Qwen3 235B MoE", company: "Alibaba" },
  { date: "Apr 28", side: "china", model: "Qwen3 30B MoE", company: "Alibaba" },
  { date: "Apr 28", side: "china", model: "Qwen3 32B", company: "Alibaba" },
  { date: "Apr 28", side: "china", model: "Qwen3 14B", company: "Alibaba" },
  { date: "Apr 28", side: "china", model: "Qwen3 8B", company: "Alibaba" },

  // ============ MAY ============
  // US
  { date: "May 20", side: "us", model: "Codex-1", company: "OpenAI" },
  { date: "May 21", side: "us", model: "Imagen 4", company: "Google" },
  { date: "May 21", side: "us", model: "Gemini 2.5 Pro", company: "Google" },
  { date: "May 21", side: "us", model: "Gemini 2.5 Flash", company: "Google" },
  { date: "May 21", side: "us", model: "Gemini 2.5 DeepThink", company: "Google" },
  { date: "May 22", side: "us", model: "Gemma 3n", company: "Google" },
  { date: "May 23", side: "us", model: "Claude 4 Opus", company: "Anthropic" },
  { date: "May 23", side: "us", model: "Claude 4 Sonnet", company: "Anthropic" },
  // China
  { date: "May 22", side: "china", model: "混元 TurboS", company: "Tencent" },
  { date: "May 22", side: "china", model: "混元 T1Vision", company: "Tencent" },
  { date: "May 22", side: "china", model: "混元 Voice", company: "Tencent" },
  { date: "May 29", side: "china", model: "DeepSeek-R1-0528", company: "DeepSeek" },

  // ============ JUNE ============
  // US
  { date: "Jun 11", side: "us", model: "o3-pro", company: "OpenAI" },
  { date: "Jun 18", side: "us", model: "Gemini 2.5 Pro GA", company: "Google" },
  { date: "Jun 18", side: "us", model: "Gemini 2.5 Flash GA", company: "Google" },
  { date: "Jun 18", side: "us", model: "Gemini 2.5 Lite GA", company: "Google" },
  { date: "Jun 25", side: "us", model: "AFM (Foundation Models)", company: "Apple" },
  // China
  { date: "Jun 06", side: "china", model: "Qwen3-Embedding 0.6B", company: "Alibaba" },
  { date: "Jun 06", side: "china", model: "Qwen3-Embedding 4B", company: "Alibaba" },
  { date: "Jun 06", side: "china", model: "Qwen3-Embedding 8B", company: "Alibaba" },
  { date: "Jun 12", side: "china", model: "豆包 1.6", company: "ByteDance" },
  { date: "Jun 12", side: "china", model: "Seedance 1.0 Pro", company: "ByteDance" },
  { date: "Jun 16", side: "china", model: "混元 3D 2.1", company: "Tencent" },
  { date: "Jun 17", side: "china", model: "Qwen3 MLX", company: "Alibaba" },
  { date: "Jun 18", side: "china", model: "MiniMax-M1", company: "MiniMax" },
  { date: "Jun 20", side: "china", model: "Hailuo 02", company: "MiniMax" },
  { date: "Jun 20", side: "china", model: "MiniMax Agent", company: "MiniMax" },

  // ============ JULY ============
  // US
  { date: "Jul 11", side: "us", model: "Grok 4", company: "xAI" },
  { date: "Jul 17", side: "us", model: "Kiro", company: "Amazon" },
  { date: "Jul 18", side: "us", model: "ChatGPT Agent", company: "OpenAI" },
  { date: "Jul 21", side: "us", model: "Act-Two", company: "Runway" },
  { date: "Jul 28", side: "us", model: "Aleph", company: "Runway" },
  // China
  { date: "Jul 01", side: "china", model: "Ernie 4.5 开源", company: "Baidu" },
  { date: "Jul 03", side: "china", model: "MuseSteamer", company: "Baidu" },
  { date: "Jul 04", side: "china", model: "Qwen-TTS", company: "Alibaba" },
  { date: "Jul 04", side: "china", model: "Qwen VLo", company: "Alibaba" },
  { date: "Jul 10", side: "china", model: "GLM-4.1V-9B-Thinking", company: "Zhipu" },
  { date: "Jul 16", side: "china", model: "RoboBrain 2.0", company: "BAAI" },
  { date: "Jul 23", side: "china", model: "Qwen3-Coder 480B", company: "Alibaba" },
  { date: "Jul 24", side: "china", model: "GR-3", company: "ByteDance" },
  { date: "Jul 24", side: "china", model: "Mureka V7", company: "Kunlun" },
  { date: "Jul 25", side: "china", model: "Qwen-MT", company: "Alibaba" },
  { date: "Jul 25", side: "china", model: "Qwen3-235B-A22B-Instruct-FP8", company: "Alibaba" },
  { date: "Jul 25", side: "china", model: "Qwen3-235B-Thinking", company: "Alibaba" },
  { date: "Jul 25", side: "china", model: "Seed LiveInterpret 2.0", company: "ByteDance" },
  { date: "Jul 29", side: "china", model: "混元 3D 世界模型 1.0", company: "Tencent" },
  { date: "Jul 29", side: "china", model: "GLM-4.5 开源", company: "Zhipu" },
  { date: "Jul 29", side: "china", model: "Step 3", company: "StepFun" },
  { date: "Jul 29", side: "china", model: "日日新 V6.5", company: "SenseTime" },
  { date: "Jul 29", side: "china", model: "Intern-S1", company: "Shanghai AI Lab" },
  { date: "Jul 30", side: "china", model: "Qwen3-30B-A3B-Instruct-2507", company: "Alibaba" },
  { date: "Jul 31", side: "china", model: "Qwen3-30B-A3B-Thinking-2507", company: "Alibaba" },
  { date: "Jul 31", side: "china", model: "Skywork UniPic", company: "Kunlun" },

  // ============ AUGUST ============
  // US
  { date: "Aug 06", side: "us", model: "Claude Opus 4.1", company: "Anthropic" },
  { date: "Aug 07", side: "us", model: "gpt-oss-120b", company: "OpenAI" },
  { date: "Aug 07", side: "us", model: "gpt-oss-20b", company: "OpenAI" },
  { date: "Aug 07", side: "us", model: "Genie 3", company: "Google" },
  { date: "Aug 08", side: "us", model: "GPT-5 Standard", company: "OpenAI" },
  { date: "Aug 08", side: "us", model: "GPT-5 mini", company: "OpenAI" },
  { date: "Aug 08", side: "us", model: "GPT-5 nano", company: "OpenAI" },
  { date: "Aug 08", side: "us", model: "GPT-5 chat", company: "OpenAI" },
  { date: "Aug 18", side: "us", model: "DINOv3", company: "Meta" },
  { date: "Aug 24", side: "us", model: "Grok 2.5 开源", company: "xAI" },
  { date: "Aug 27", side: "us", model: "Gemini 2.5 Flash Image", company: "Google" },
  { date: "Aug 28", side: "us", model: "VibeVoice-1.5B", company: "Microsoft" },
  { date: "Aug 29", side: "us", model: "MAI-Voice-1", company: "Microsoft" },
  { date: "Aug 29", side: "us", model: "MAI-1-preview", company: "Microsoft" },
  { date: "Aug 29", side: "us", model: "Grok-Code-Fast-1", company: "xAI" },
  // China
  { date: "Aug 01", side: "china", model: "Qwen3-Coder-Flash 30B", company: "Alibaba" },
  { date: "Aug 06", side: "china", model: "Qwen-Image", company: "Alibaba" },
  { date: "Aug 12", side: "china", model: "GLM-4.5V", company: "Zhipu" },
  { date: "Aug 12", side: "china", model: "Matrix-Game 2.0", company: "Kunlun" },
  { date: "Aug 14", side: "china", model: "Skywork UniPic 2.0", company: "Kunlun" },
  { date: "Aug 18", side: "china", model: "混元 3D 世界模型 Lite", company: "Tencent" },
  { date: "Aug 18", side: "china", model: "VeOmni 框架", company: "ByteDance" },
  { date: "Aug 18", side: "china", model: "Mureka V7.5", company: "Kunlun" },
  { date: "Aug 19", side: "china", model: "AudioGenie", company: "Tencent" },
  { date: "Aug 20", side: "china", model: "Qwen-Image-Edit", company: "Alibaba" },
  { date: "Aug 20", side: "china", model: "DeepSeek-V3.1", company: "DeepSeek" },
  { date: "Aug 20", side: "china", model: "Klear-Reasoner", company: "Kuaishou" },
  { date: "Aug 21", side: "china", model: "AutoGLM 2.0", company: "Zhipu" },
  { date: "Aug 22", side: "china", model: "Qoder", company: "Alibaba" },
  { date: "Aug 22", side: "china", model: "Seed-OSS-36B", company: "ByteDance" },
  { date: "Aug 22", side: "china", model: "ToonComposer", company: "Tencent" },
  { date: "Aug 22", side: "china", model: "Intern-S1-mini", company: "Shanghai AI Lab" },
  { date: "Aug 22", side: "china", model: "MuseSteamer 2.0", company: "Baidu" },
  { date: "Aug 28", side: "china", model: "Wan 2.2-S2V", company: "Alibaba" },
  { date: "Aug 28", side: "china", model: "Waver 1.0", company: "ByteDance" },
  { date: "Aug 28", side: "china", model: "MiniCPM-V 4.5", company: "MiniCPM" },
  { date: "Aug 29", side: "china", model: "HunyuanVideo-Foley", company: "Tencent" },

  // ============ SEPTEMBER ============
  // US
  { date: "Sep 10", side: "us", model: "Veo 3 API", company: "Google" },
  { date: "Sep 16", side: "us", model: "GPT-5-Codex", company: "OpenAI" },
  { date: "Sep 22", side: "us", model: "Grok 4 Fast", company: "xAI" },
  { date: "Sep 23", side: "us", model: "Ray3", company: "Luma AI" },
  { date: "Sep 26", side: "us", model: "ChatGPT Pulse", company: "OpenAI" },
  { date: "Sep 26", side: "us", model: "Code World Model", company: "Meta" },
  { date: "Sep 26", side: "us", model: "Audio2Face 开源", company: "NVIDIA" },
  { date: "Sep 29", side: "us", model: "Suno v5", company: "Suno" },
  { date: "Sep 30", side: "us", model: "Claude Sonnet 4.5", company: "Anthropic" },
  // China
  { date: "Sep 02", side: "china", model: "LongCat-Flash-Chat", company: "Meituan" },
  { date: "Sep 02", side: "china", model: "Step-Audio 2 mini", company: "StepFun" },
  { date: "Sep 03", side: "china", model: "HunyuanWorld-Voyager", company: "Tencent" },
  { date: "Sep 03", side: "china", model: "Hunyuan-MT-7B", company: "Tencent" },
  { date: "Sep 05", side: "china", model: "Kimi K2-0905", company: "Moonshot" },
  { date: "Sep 09", side: "china", model: "Qwen3-Max-Preview", company: "Alibaba" },
  { date: "Sep 09", side: "china", model: "即梦图片 4.0", company: "ByteDance" },
  { date: "Sep 09", side: "china", model: "MiniCPM 4.1", company: "MiniCPM" },
  { date: "Sep 10", side: "china", model: "Qwen3-ASR-Flash", company: "Alibaba" },
  { date: "Sep 10", side: "china", model: "Ernie X1.1", company: "Baidu" },
  { date: "Sep 11", side: "china", model: "HunyuanImage 2.1", company: "Tencent" },
  { date: "Sep 12", side: "china", model: "Qwen3-Next", company: "Alibaba" },
  { date: "Sep 16", side: "china", model: "Youtu-GraphRAG", company: "Tencent" },
  { date: "Sep 16", side: "china", model: "Kwali AI", company: "Kuaishou" },
  { date: "Sep 16", side: "china", model: "ZipVoice", company: "Xiaomi" },
  { date: "Sep 17", side: "china", model: "混元 3D 3.0", company: "Tencent" },
  { date: "Sep 18", side: "china", model: "Tongyi DeepResearch", company: "Alibaba" },
  { date: "Sep 18", side: "china", model: "VLAC", company: "Shanghai AI Lab" },
  { date: "Sep 19", side: "china", model: "Vibe Coding Agent", company: "Kunlun" },
  { date: "Sep 19", side: "china", model: "InternVLA·A1", company: "Shanghai AI Lab" },
  { date: "Sep 19", side: "china", model: "VoxCPM", company: "MiniCPM" },
  { date: "Sep 23", side: "china", model: "DeepSeek-V3.1-Terminus", company: "DeepSeek" },
  { date: "Sep 23", side: "china", model: "DeepSeek-R1-Safe", company: "DeepSeek" },
  { date: "Sep 23", side: "china", model: "LongCat-Flash-Thinking", company: "Meituan" },
  { date: "Sep 24", side: "china", model: "Qwen3-Omni 正式版", company: "Alibaba" },
  { date: "Sep 24", side: "china", model: "Qwen3-TTS-Flash", company: "Alibaba" },
  { date: "Sep 25", side: "china", model: "Wan 2.5", company: "Alibaba" },
  { date: "Sep 25", side: "china", model: "Qwen MAX 正式版", company: "Alibaba" },
  { date: "Sep 25", side: "china", model: "Qwen3-VL", company: "Alibaba" },
  { date: "Sep 25", side: "china", model: "通义百聆", company: "Alibaba" },
  { date: "Sep 26", side: "china", model: "Vidu Q2", company: "Shengshu" },
  { date: "Sep 26", side: "china", model: "Neovate Code", company: "Ant Group" },
  { date: "Sep 28", side: "china", model: "Kimi OK Computer Agent", company: "Moonshot" },
  { date: "Sep 30", side: "china", model: "DeepSeek-V3.2-Exp", company: "DeepSeek" },

  // ============ OCTOBER ============
  // US
  { date: "Oct 13", side: "us", model: "Gemini 2.5 Computer Use", company: "Google" },
  { date: "Oct 15", side: "us", model: "MAI-Image-1", company: "Microsoft" },
  { date: "Oct 20", side: "us", model: "Veo 3.1", company: "Google" },
  { date: "Oct 20", side: "us", model: "C2S-Scale 27B", company: "Google" },
  { date: "Oct 20", side: "us", model: "Claude Haiku 4.5", company: "Anthropic" },
  { date: "Oct 20", side: "us", model: "Sora 2 Storyboard", company: "OpenAI" },
  { date: "Oct 31", side: "us", model: "Firefly Image 5", company: "Adobe" },
  // China
  { date: "Oct 15", side: "china", model: "Youtu-Embedding", company: "Tencent" },
  { date: "Oct 15", side: "china", model: "Ring-1T", company: "Ant Group" },
  { date: "Oct 21", side: "china", model: "DeepSeek-OCR", company: "DeepSeek" },
  { date: "Oct 21", side: "china", model: "PaddleOCR-VL", company: "Baidu" },
  { date: "Oct 22", side: "china", model: "CodeBuddy IDE 1.0", company: "Tencent" },
  { date: "Oct 22", side: "china", model: "GLM Coding Plan", company: "Zhipu" },
  { date: "Oct 23", side: "china", model: "HunyuanWorld-Mirror 1.1", company: "Tencent" },
  { date: "Oct 23", side: "china", model: "Qwen3-VL-2B", company: "Alibaba" },
  { date: "Oct 23", side: "china", model: "Qwen3-VL-32B", company: "Alibaba" },
  { date: "Oct 24", side: "china", model: "Seed3D 1.0", company: "ByteDance" },
  { date: "Oct 27", side: "china", model: "豆包编程创作模式", company: "ByteDance" },
  { date: "Oct 28", side: "china", model: "豆包视频生成 1.0 Pro Fast", company: "ByteDance" },
  { date: "Oct 28", side: "china", model: "MiniMax M2", company: "MiniMax" },
  { date: "Oct 28", side: "china", model: "LongCat-Video", company: "Meituan" },
  { date: "Oct 28", side: "china", model: "Kimi CLI", company: "Moonshot" },
  { date: "Oct 29", side: "china", model: "Hailuo 2.3", company: "MiniMax" },
  { date: "Oct 30", side: "china", model: "混元交互式 AI 播客", company: "Tencent" },
  { date: "Oct 31", side: "china", model: "Speech 2.6", company: "MiniMax" },

  // ============ NOVEMBER ============
  // US
  { date: "Nov 03", side: "us", model: "Aardvark", company: "OpenAI" },
  { date: "Nov 11", side: "us", model: "GPT-5-Codex-Mini", company: "OpenAI" },
  { date: "Nov 12", side: "us", model: "Omnilingual ASR", company: "Meta" },
  { date: "Nov 13", side: "us", model: "GPT-5.1 Instant", company: "OpenAI" },
  { date: "Nov 13", side: "us", model: "GPT-5.1 Thinking", company: "OpenAI" },
  { date: "Nov 19", side: "us", model: "Gemini 3 Pro", company: "Google" },
  { date: "Nov 19", side: "us", model: "Gemini 3 Deep Think", company: "Google" },
  { date: "Nov 19", side: "us", model: "Grok 4.1", company: "xAI" },
  { date: "Nov 21", side: "us", model: "GPT-5.1-Codex-Max", company: "OpenAI" },
  { date: "Nov 21", side: "us", model: "SAM 3", company: "Meta" },
  { date: "Nov 21", side: "us", model: "SAM 3D", company: "Meta" },
  { date: "Nov 21", side: "us", model: "Nano Banana Pro", company: "Google" },
  { date: "Nov 25", side: "us", model: "Claude Opus 4.5", company: "Anthropic" },
  { date: "Nov 25", side: "us", model: "WorldGen", company: "Meta" },
  { date: "Nov 25", side: "us", model: "Olmo 3", company: "AI2" },
  // China
  { date: "Nov 03", side: "china", model: "Music 2.0", company: "MiniMax" },
  { date: "Nov 03", side: "china", model: "Emu 3.5", company: "BAAI" },
  { date: "Nov 04", side: "china", model: "Qwen3-Max Thinking", company: "Alibaba" },
  { date: "Nov 04", side: "china", model: "LongCat-Flash-Omni", company: "Meituan" },
  { date: "Nov 05", side: "china", model: "SkyReels V3", company: "Kunlun" },
  { date: "Nov 06", side: "china", model: "FG-CLIP2", company: "360" },
  { date: "Nov 07", side: "china", model: "Kimi-k2 Thinking", company: "Moonshot" },
  { date: "Nov 10", side: "china", model: "Step-Audio-EditX", company: "StepFun" },
  { date: "Nov 11", side: "china", model: "文心 5.0 Preview", company: "Baidu" },
  { date: "Nov 12", side: "china", model: "Doubao-Seed-Code", company: "ByteDance" },
  { date: "Nov 12", side: "china", model: "SenseNova-SI", company: "SenseTime" },
  { date: "Nov 13", side: "china", model: "KaLM-Embedding", company: "Tencent" },
  { date: "Nov 17", side: "china", model: "GLM-4.6", company: "Zhipu" },
  { date: "Nov 19", side: "china", model: "灵光APP", company: "Ant Group" },
  { date: "Nov 28", side: "china", model: "Z-Image 6B", company: "Alibaba" },
  { date: "Nov 28", side: "china", model: "DeepSeekMath-V2", company: "DeepSeek" },
  { date: "Nov 28", side: "china", model: "Depth Anything 3", company: "ByteDance" },

  // ============ DECEMBER ============
  // US
  { date: "Dec 03", side: "us", model: "Gen-4.5", company: "Runway" },
  { date: "Dec 03", side: "us", model: "Alpamayo-R1", company: "NVIDIA" },
  { date: "Dec 04", side: "us", model: "Nova 2 Lite", company: "Amazon" },
  { date: "Dec 04", side: "us", model: "Nova 2 Pro", company: "Amazon" },
  { date: "Dec 04", side: "us", model: "Nova 2 Sonic", company: "Amazon" },
  { date: "Dec 04", side: "us", model: "Nova 2 Omni", company: "Amazon" },
  { date: "Dec 08", side: "us", model: "Gemini 3 Deep Think Beta", company: "Google" },
  { date: "Dec 12", side: "us", model: "GPT-5.2 Instant", company: "OpenAI" },
  { date: "Dec 12", side: "us", model: "GPT-5.2 Thinking", company: "OpenAI" },
  { date: "Dec 12", side: "us", model: "GPT-5.2 Pro", company: "OpenAI" },
  { date: "Dec 15", side: "us", model: "GWM-1", company: "Runway" },
  { date: "Dec 17", side: "us", model: "GPT-Image-1.5", company: "OpenAI" },
  { date: "Dec 17", side: "us", model: "Nemotron 3 Nano", company: "NVIDIA" },
  { date: "Dec 17", side: "us", model: "Nemotron 3 Super", company: "NVIDIA" },
  { date: "Dec 17", side: "us", model: "Nemotron 3 Ultra", company: "NVIDIA" },
  { date: "Dec 18", side: "us", model: "Gemini 3 Flash", company: "Google" },
  { date: "Dec 22", side: "us", model: "Trellis 2", company: "Microsoft" },
  { date: "Dec 22", side: "us", model: "SAM Audio", company: "Meta" },
  { date: "Dec 23", side: "us", model: "NitroGen", company: "NVIDIA" },
  // China
  { date: "Dec 01", side: "china", model: "混元 3D Studio 1.1", company: "Tencent" },
  { date: "Dec 01", side: "china", model: "Mureka V7.6", company: "Kunlun" },
  { date: "Dec 01", side: "china", model: "O2", company: "Kunlun" },
  { date: "Dec 02", side: "china", model: "DeepSeek V3.2 Standard", company: "DeepSeek" },
  { date: "Dec 02", side: "china", model: "DeepSeek V3.2 Speciale", company: "DeepSeek" },
  { date: "Dec 02", side: "china", model: "Vidi2", company: "ByteDance" },
  { date: "Dec 02", side: "china", model: "Kling O1", company: "Kuaishou" },
  { date: "Dec 02", side: "china", model: "GELab-Zero-4B", company: "StepFun" },
  { date: "Dec 04", side: "china", model: "NEO", company: "SenseTime" },
  { date: "Dec 05", side: "china", model: "Seedream 4.5", company: "ByteDance" },
  { date: "Dec 08", side: "china", model: "豆包语音识别 2.0", company: "ByteDance" },
  { date: "Dec 08", side: "china", model: "Kling Digital Human 2.0", company: "Kuaishou" },
  { date: "Dec 09", side: "china", model: "混元 2.0 406B", company: "Tencent" },
  { date: "Dec 09", side: "china", model: "GLM-4.6V", company: "Zhipu" },
  { date: "Dec 09", side: "china", model: "LongCat-Image", company: "Meituan" },
  { date: "Dec 10", side: "china", model: "AutoGLM 开源", company: "Zhipu" },
  { date: "Dec 11", side: "china", model: "GLM-ASR", company: "Zhipu" },
  { date: "Dec 12", side: "china", model: "GLM-TTS", company: "Zhipu" },
  { date: "Dec 12", side: "china", model: "Qwen3-Omni-Flash", company: "Alibaba" },
  { date: "Dec 12", side: "china", model: "VoxCPM 1.5", company: "MiniCPM" },
  { date: "Dec 16", side: "china", model: "Seko 2.0", company: "SenseTime" },
  { date: "Dec 17", side: "china", model: "Wan 2.6", company: "Alibaba" },
  { date: "Dec 17", side: "china", model: "Fun-CosyVoice3", company: "Alibaba" },
  { date: "Dec 17", side: "china", model: "Fun-ASR", company: "Alibaba" },
  { date: "Dec 17", side: "china", model: "小浣熊 3.0", company: "SenseTime" },
  { date: "Dec 17", side: "china", model: "Xiaomi MiMo-V2-Flash", company: "Xiaomi" },
  { date: "Dec 18", side: "china", model: "混元世界模型 1.5", company: "Tencent" },
  { date: "Dec 18", side: "china", model: "Seedance 1.5 Pro", company: "ByteDance" },
  { date: "Dec 24", side: "china", model: "Fun-Audio-Chat", company: "Alibaba" },
  { date: "Dec 24", side: "china", model: "GLM-4.7", company: "Zhipu" },
  { date: "Dec 24", side: "china", model: "MiniMax M2.1", company: "MiniMax" },
  { date: "Dec 25", side: "china", model: "Seed Prover 1.5", company: "ByteDance" },
  { date: "Dec 26", side: "china", model: "Qwen-Image-Edit-2511", company: "Alibaba" },
  { date: "Dec 29", side: "china", model: "Qwen Code v0.5.0", company: "Alibaba" },
  { date: "Dec 29", side: "china", model: "Zcode", company: "Zhipu" },
  { date: "Dec 29", side: "china", model: "Skywork Sheets 2.0", company: "Kunlun" },
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