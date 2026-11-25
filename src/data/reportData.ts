export interface ReleaseEvent {
  date: string;
  model: string;
  company: string;
  side: "us" | "china";
  source: string;
}

export interface MonthlyMVP {
  month: string;
  monthNumber: number;
  title: string;
  titleEmphasis: string;
  mvp: string;
  reason: string;
  category: string;
  events: ReleaseEvent[];
}

export const monthlyMVPs: MonthlyMVP[] = [
  {
    month: "January",
    monthNumber: 1,
    title: "Reasoning",
    titleEmphasis: "Arrives",
    mvp: "DeepSeek-R1 & o3-mini",
    reason: "DeepSeek released R1 with downloadable weights on January 20. OpenAI released o3-mini on January 31 and gave free ChatGPT users a way to try it.",
    category: "reasoning",
    events: [
      {
        date: "Jan 20",
        model: "DeepSeek-R1",
        company: "DeepSeek",
        side: "china",
        source: "https://api-docs.deepseek.com/news/news250120/",
      },
      {
        date: "Jan 31",
        model: "o3-mini",
        company: "OpenAI",
        side: "us",
        source: "https://openai.com/index/openai-o3-mini/",
      },
    ],
  },
  {
    month: "February",
    monthNumber: 2,
    title: "Video and",
    titleEmphasis: "Multimodality",
    mvp: "Step-Video-T2V & Gemini 2.0 Flash",
    reason: "Google made Gemini 2.0 Flash generally available through its API on February 5. StepFun published the Step-Video-T2V weights and inference code on February 17.",
    category: "video",
    events: [
      {
        date: "Feb 05",
        model: "Gemini 2.0 Flash",
        company: "Google",
        side: "us",
        source: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-updates-february-2025/",
      },
      {
        date: "Feb 17",
        model: "Step-Video-T2V",
        company: "StepFun",
        side: "china",
        source: "https://github.com/stepfun-ai/Step-Video-T2V",
      },
    ],
  },
  {
    month: "March",
    monthNumber: 3,
    title: "From Text",
    titleEmphasis: "to Speech",
    mvp: "Qwen2.5-Omni & DeepSeek-V3-0324",
    reason: "DeepSeek published its V3-0324 update on March 25. On March 27, the Qwen team introduced Qwen2.5-Omni, whose Thinker–Talker architecture supports streaming speech output.",
    category: "multimodal",
    events: [
      {
        date: "Mar 25",
        model: "DeepSeek-V3-0324",
        company: "DeepSeek",
        side: "china",
        source: "https://api-docs.deepseek.com/news/news250325/",
      },
      {
        date: "Mar 27",
        model: "Qwen2.5-Omni",
        company: "Alibaba",
        side: "china",
        source: "https://qwenlm.github.io/blog/qwen2.5-omni/",
      },
    ],
  },
  {
    month: "April",
    monthNumber: 4,
    title: "A Month of",
    titleEmphasis: "Open Weights",
    mvp: "Llama 4 & Qwen3",
    reason: "Meta released Llama 4 Scout and Maverick on April 5. They have 109B and 400B total parameters, respectively, with 17B active per token in each. The Qwen team published its Qwen3 announcement on April 29.",
    category: "open weights",
    events: [
      {
        date: "Apr 05",
        model: "Llama 4 Scout and Maverick",
        company: "Meta",
        side: "us",
        source: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
      },
      {
        date: "Apr 14",
        model: "GPT-4.1 family",
        company: "OpenAI",
        side: "us",
        source: "https://openai.com/index/gpt-4-1/",
      },
      {
        date: "Apr 29",
        model: "Qwen3",
        company: "Alibaba",
        side: "china",
        source: "https://qwenlm.github.io/blog/qwen3/",
      },
    ],
  },
  {
    month: "May",
    monthNumber: 5,
    title: "Video Finds",
    titleEmphasis: "Its Voice",
    mvp: "Google I/O & Claude 4",
    reason: "Google unveiled Veo 3 with audio generation and Imagen 4 at I/O on May 20. Anthropic announced Claude Opus 4 and Sonnet 4 on May 22. DeepSeek published an updated R1 on May 28.",
    category: "video",
    events: [
      {
        date: "May 20",
        model: "Veo 3 and Imagen 4",
        company: "Google",
        side: "us",
        source: "https://blog.google/innovation-and-ai/products/generative-media-models-io-2025/",
      },
      {
        date: "May 22",
        model: "Claude Opus 4 and Sonnet 4",
        company: "Anthropic",
        side: "us",
        source: "https://www.anthropic.com/news/claude-4",
      },
      {
        date: "May 28",
        model: "DeepSeek-R1-0528",
        company: "DeepSeek",
        side: "china",
        source: "https://www.deepseek.com/en/news/r1-0528/",
      },
    ],
  },
  {
    month: "June",
    monthNumber: 6,
    title: "AI on",
    titleEmphasis: "Device",
    mvp: "Apple Foundation Models & Gemini 2.5",
    reason: "Apple announced the Foundation Models framework on June 9, giving developers access to its on-device language model. Google made Gemini 2.5 Pro and Flash stable on June 17 and introduced Flash-Lite in preview.",
    category: "on-device",
    events: [
      {
        date: "Jun 09",
        model: "Foundation Models framework announcement",
        company: "Apple",
        side: "us",
        source: "https://machinelearning.apple.com/research/apple-foundation-models-2025-updates",
      },
      {
        date: "Jun 17",
        model: "Gemini 2.5 Pro and Flash stable",
        company: "Google",
        side: "us",
        source: "https://blog.google/products-and-platforms/products/gemini/gemini-2-5-model-family-expands/",
      },
    ],
  },
  {
    month: "July",
    monthNumber: 7,
    title: "Coding",
    titleEmphasis: "Agents",
    mvp: "Qwen3-Coder & ChatGPT agent",
    reason: "OpenAI introduced ChatGPT agent on July 17. The Qwen team announced Qwen3-Coder on July 22, starting with a mixture-of-experts model with 480B total parameters and 35B active.",
    category: "agents",
    events: [
      {
        date: "Jul 17",
        model: "ChatGPT agent",
        company: "OpenAI",
        side: "us",
        source: "https://openai.com/index/introducing-chatgpt-agent/",
      },
      {
        date: "Jul 22",
        model: "Qwen3-Coder-480B-A35B-Instruct",
        company: "Alibaba",
        side: "china",
        source: "https://qwenlm.github.io/blog/qwen3-coder/",
      },
    ],
  },
  {
    month: "August",
    monthNumber: 8,
    title: "New Models,",
    titleEmphasis: "New Images",
    mvp: "GPT-5 & Nano Banana",
    reason: "OpenAI released GPT-5, GPT-5 mini and GPT-5 nano in the API on August 7. Google introduced Gemini 2.5 Flash Image, also called Nano Banana, on August 26.",
    category: "multimodal",
    events: [
      {
        date: "Aug 07",
        model: "GPT-5 family",
        company: "OpenAI",
        side: "us",
        source: "https://openai.com/index/introducing-gpt-5-for-developers/",
      },
      {
        date: "Aug 21",
        model: "DeepSeek-V3.1",
        company: "DeepSeek",
        side: "china",
        source: "https://deepseek.com/en/news/deepseek-v3-1/",
      },
      {
        date: "Aug 26",
        model: "Nano Banana",
        company: "Google",
        side: "us",
        source: "https://blog.google/products-and-platforms/products/gemini/updated-image-editing-model/",
      },
    ],
  },
  {
    month: "September",
    monthNumber: 9,
    title: "Models for",
    titleEmphasis: "Longer Tasks",
    mvp: "Qwen3-Max & Claude Sonnet 4.5",
    reason: "The Qwen team published its Qwen3-Max announcement on September 24. Anthropic introduced Claude Sonnet 4.5 on September 29, with an emphasis on coding and agent tasks.",
    category: "agents",
    events: [
      {
        date: "Sep 24",
        model: "Qwen3-Max",
        company: "Alibaba",
        side: "china",
        source: "https://qwen.ai/blog?id=241398b9cd6353de490b0f82806c7848c5d2777d",
      },
      {
        date: "Sep 29",
        model: "Claude Sonnet 4.5",
        company: "Anthropic",
        side: "us",
        source: "https://www.anthropic.com/news/claude-sonnet-4-5",
      },
    ],
  },
  {
    month: "October",
    monthNumber: 10,
    title: "AI in the",
    titleEmphasis: "Browser",
    mvp: "ChatGPT Atlas & DeepSeek-OCR",
    reason: "OpenAI launched ChatGPT Atlas for macOS on October 21. The first DeepSeek-OCR preprint was submitted that day, describing an approach to compressing text context into visual tokens.",
    category: "agents",
    events: [
      {
        date: "Oct 21",
        model: "ChatGPT Atlas",
        company: "OpenAI",
        side: "us",
        source: "https://openai.com/index/introducing-chatgpt-atlas/",
      },
      {
        date: "Oct 21",
        model: "DeepSeek-OCR preprint",
        company: "DeepSeek",
        side: "china",
        source: "https://arxiv.org/abs/2510.18234",
      },
    ],
  },
  {
    month: "November",
    monthNumber: 11,
    title: "Three New",
    titleEmphasis: "Reasoners",
    mvp: "Kimi K2 Thinking, Grok 4.1 & Gemini 3",
    reason: "Moonshot released Kimi K2 Thinking on November 6. xAI announced the wider release of Grok 4.1 on November 17, and Google introduced Gemini 3 Pro on November 18.",
    category: "reasoning",
    events: [
      {
        date: "Nov 06",
        model: "Kimi K2 Thinking",
        company: "Moonshot AI",
        side: "china",
        source: "https://platform.kimi.com/blog/posts/k2-think",
      },
      {
        date: "Nov 17",
        model: "Grok 4.1",
        company: "xAI",
        side: "us",
        source: "https://x.ai/news/grok-4-1",
      },
      {
        date: "Nov 18",
        model: "Gemini 3 Pro",
        company: "Google",
        side: "us",
        source: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-3-developers/",
      },
    ],
  },
  {
    month: "December",
    monthNumber: 12,
    title: "A December",
    titleEmphasis: "Double Release",
    mvp: "GPT-5.2 & DeepSeek-V3.2",
    reason: "DeepSeek announced V3.2 and V3.2-Speciale on December 1. OpenAI announced GPT-5.2 on December 11 and began rolling out Instant, Thinking, and Pro in ChatGPT.",
    category: "reasoning",
    events: [
      {
        date: "Dec 01",
        model: "DeepSeek-V3.2 and Speciale",
        company: "DeepSeek",
        side: "china",
        source: "https://api-docs.deepseek.com/news/news251201/",
      },
      {
        date: "Dec 11",
        model: "GPT-5.2",
        company: "OpenAI",
        side: "us",
        source: "https://openai.com/index/introducing-gpt-5-2/",
      },
    ],
  },
];

export const selectedReleases = monthlyMVPs.flatMap(month => month.events);

export const launchPrices = [
  { date: "Apr 2025", model: "GPT-4.1", pricePerMillion: 2, source: "https://openai.com/index/gpt-4-1/" },
  { date: "Aug 2025", model: "GPT-5", pricePerMillion: 1.25, source: "https://openai.com/index/introducing-gpt-5-for-developers/" },
  { date: "Dec 2025", model: "GPT-5.2", pricePerMillion: 1.75, source: "https://openai.com/index/introducing-gpt-5-2/" },
];

export const interactionMilestones = [
  {
    date: "Mar 27", model: "Qwen2.5-Omni", trait: "Streaming speech",
    description: "The Thinker–Talker design lets the model return text and stream speech.",
    source: "https://qwenlm.github.io/blog/qwen2.5-omni/",
  },
  {
    date: "May 20", model: "Veo 3", trait: "Video with audio",
    description: "Google introduced video generation with audio, including dialogue and sound effects.",
    source: "https://blog.google/innovation-and-ai/products/generative-media-models-io-2025/",
  },
  {
    date: "Jul 17", model: "ChatGPT agent", trait: "Working in a browser",
    description: "ChatGPT agent combines research and actions on the web using a virtual computer.",
    source: "https://openai.com/index/introducing-chatgpt-agent/",
  },
];

export const sherlockedVictims = [
  {
    product: "PDF Summarizers",
    killer: "Long-context assistants",
    epitaph: "When a general assistant can take an entire document, what makes a dedicated summarizer worth opening?",
  },
  {
    product: "AI Search Wrappers",
    killer: "Built-in web search",
    epitaph: "A reminder that a specialized search tool needs to offer something beyond a chat box.",
  },
  {
    product: "Coding Templates",
    killer: "Coding agents",
    epitaph: "An agent can draft the scaffolding. Someone still has to decide what belongs in it.",
  },
];

export const glossary2025 = [
  { term: "Vibe Coding", definition: "An informal style of coding by describing what you want to an AI tool and iterating on what it generates." },
  { term: "Reasoning Summary", definition: "A user-facing summary of a model’s reasoning steps. The level of detail varies by product." },
  { term: "Context Engineering", definition: "Designing the instructions, data, and tool results a model receives for a task." },
  { term: "Slop", definition: "A colloquial term for low-quality, mass-produced AI-generated content." },
];

export const modelNames = [
  "GPT-5", "Gemini 3 Pro", "Claude Sonnet 4.5", "DeepSeek-V3.2", "Qwen3-Max",
  "Llama 4", "Grok 4.1", "Kimi K2 Thinking", "GPT-5.2", "Gemini 2.5 Flash",
];
