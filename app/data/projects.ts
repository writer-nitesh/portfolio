import type { Project } from "../types/projects.types";

const projects: Array<Project> = [
  {
    name: "Bhagavad Gita",
    description: [
      "Welcome to the Bhagavad Gita app, your ultimate spiritual companion. Dive deep into the divine wisdom of Lord Krishna and find peace, purpose, and clarity in your daily life.",
      "The Bhagavad Gita is a timeless ancient Hindu scripture that offers profound philosophical insights and practical solutions to life's biggest challenges. Whether you are seeking spiritual growth, inner peace, or a better understanding of karma and dharma, this app brings the sacred teachings right to your fingertips.",
      "🌟 Key Features:",
      "• Completely Offline: No internet? No problem! Access the entire Bhagavad Gita anytime, anywhere without any internet connection.",
      "• Dual Languages: Read all the Shlokas (verses) with complete translations and meanings in both Hindi and English.",
      "• Easy Navigation: Jump to any Adhyay (Chapter) or Shloka effortlessly with a clean, user-friendly interface.",
      "• Beautiful Design: Experience a calm, fast, and highly readable UI designed for peaceful reading sessions.",
      "Why read the Bhagavad Gita?",
      "The Gita is not just a religious text; it is a manual for life. It teaches us how to handle stress, perform our duties without attachment to the results, and live a life of righteousness.",
      "Start your spiritual journey today. Download the Bhagavad Gita app and bring the divine words of Lord Krishna into your daily routine, even when you are entirely offline.",
      "Jai Shree Krishna! 🙏",
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.duniyalabs.bhagavadgita",
    },
    start: "",
    end: "",
    technology_used: ["expo", "react-native", "nativewind", "zustand"],
    image: "/images/projects/gita_play_store_listing.png",
  },
  {
    name: "TRADIO: ALGO & PAPER TRADING",
    description: [
      "Tradio is the fastest way to create, test, and paper trade trading strategies using real-time market data. Whether you're a beginner learning the market or a professional building advanced trading systems, Tradio gives you everything you need to trade smarter without risking real capital.",
      "🚀 Key Features",
      "📌 Algo Strategy Builder: Create your own trading strategies with simple conditions. Test ideas across stocks, Nifty, BankNifty, and F&O instruments.",
      "📌 Real-Time Paper Trading: Place trades in live markets without using real money. Practice intraday, options, and swing trading safely.",
      "📌 Fast Backtesting Engine: Check how your strategy performs on historical market data. View win rate, drawdown, P&L, and performance accuracy.",
      "📌 Live Market Simulator: Experience real trading conditions with no capital risk. Perfect for beginners, students, and professional traders.",
      "📌 Advanced Analytics: Track your trades, understand performance, and refine your edge. See charts, logs, metrics, and real-time trade updates.",
      "🎯 Why Traders Love Tradio: No brokerage account needed. No capital required. Easy strategy builder. Accurate market simulation. Suitable for beginners & advanced traders.",
      "📈 Who Is This App For? Algo traders, Options traders, Intraday & scalping traders, Students learning the stock market.",
      "🔒 Trade Safely: Tradio is for educational and simulation purposes. There is no real money trading, no brokerage, and no financial risk.",
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.tradiohub.tradio",
    },
    start: "",
    end: "",
    technology_used: ["expo", "react-native", "nativewind", "zustand"],
    image: "/images/projects/tradio_play_store_listing.png",
  },

  {
    name: "freeMusic4All",
    description: [
      "A web app for listening to ad-free music and downloading tracks effortlessly, even on the go.",
      "Inspired by a real-life experience of losing internet connectivity while traveling on a college bus, leading to the discovery of a music API and the development of an intuitive UI to address this need.",
      "Now not working because Jio Saavan fixed their API",
    ],
    links: {
      live: "https://freemusic4all.pages.dev/",
      source: "https://github.com/writer-nitesh/freeMusic4All",
    },
    start: "Mar 2023",
    end: "Present",
    technology_used: ["React JS", "Tailwind", "Typescript"],
    image:
      "https://github.com/writer-nitesh/freeMusic4All/blob/main/src/assets/images/freeMusic4All_screenshot.png?raw=true",
  },
  {
    name: "Pavitra Pheres",
    description: [
      "A blog website dedicated to showcasing the rich culture of Uttarakhand, with a focus on promoting destination weddings amidst the Himalayas.",
      "Built to explore the development of an SEO-friendly, high-performance blog without relying on WordPress, ensuring cost-efficiency.",
      "Integrated Open Graph metadata for enhanced preview functionality when shared on social media.",
      "Designed to provide curated resources and inspiration for creating unforgettable memories in the heart of Uttarakhand.",
    ],
    links: {
      live: "https://pavitra-pheres.pages.dev/",
      source: "https://github.com/writer-nitesh/pavitra_pheres",
    },
    start: "May 2024",
    end: "Sep 2024",
    technology_used: ["Astro JS", "Tailwind", "Typescript"],
    image:
      "https://github.com/writer-nitesh/pavitra_pheres/raw/master/public/screenshots/ss2.png",
  },
  {
    name: "WhatsApp Clone (Meme Creator)",
    description: [
      "Make realistic-looking WhatsApp chat conversations. Choose contacts, avatars, and timestamps to make your memes ultra-believable",
      "Fun meme generator inspired by WhatsApp's chat interface memes.",
    ],
    links: {
      live: "https://whatsappclone-9r7.pages.dev/",
      source: "https://github.com/writer-nitesh/whatsappClone",
    },
    start: "April 2024",
    end: "April 2024",
    technology_used: [
      "React JS",
      "Tailwind",
      "Typescript",
      "Redux/Redux Toolkit",
    ],
    image:
      "https://github.com/writer-nitesh/whatsappClone/raw/master/screenshot.png",
  },
  {
    name: "Ecom",
    description: ["ECOM is an e-commerce shopping website built with nextjs"],
    links: {
      live: "http://ecom-0x99f.vercel.app",
      source: "https://github.com/writer-nitesh/ecom",
    },
    start: "August 2024",
    end: "August 2024",
    technology_used: [
      "Next JS",
      "Tailwind CSS",
      "Typescript",
      "Fake Store API",
      "Zustand",
    ],
    image:
      "https://raw.githubusercontent.com/writer-nitesh/ecom/refs/heads/master/images/ecom_4.png",
  },
  {
    name: "Shrinkk",
    description: [
      "Shinkk: A Simulated Stock Market",
      "Tagline: Built for shrinkking Patience",
      "Shinkk generates realistic-looking market data that fluctuates over time, mimicking the dynamic nature of real stock markets.",
      "Track the simulated market trends through charts that visually represent price movements",
    ],
    links: {
      live: "https://shrinkk-six.vercel.app/",
      source: "https://github.com/writer-nitesh/shrink",
    },
    start: "March 2024",
    end: "April 2024",
    technology_used: ["Next JS", "MDX", "Tailwind", "Typescript", "Chart JS"],
    image:
      "https://github.com/writer-nitesh/shrink/blob/master/src/assets/images/explore.png?raw=true",
  },
  {
    name: "Tipsy Text",
    description: ["A client project"],
    links: {
      live: "https://tipsytext-web.pages.dev/",
    },
    start: "",
    end: "",
    technology_used: ["React JS", "Tailwind CSS"],
    image: "/images/projects/tipsy_text.png",
  },
  {
    name: "Reactive",
    description: ["React Component Learning Project"],
    links: {
      live: "https://re-active.pages.dev/",
      source: "https://github.com/writer-nitesh/re_active",
    },
    start: "March 2024",
    end: "April 2024",
    technology_used: ["React JS", "Tailwind", "Typescript"],
  },
  {
    name: "The Code Report",
    description: ["Most awaited developer newsletter."],
    links: {
      live: "https://thecodereport.pages.dev/",
      source: "https://github.com/writer-nitesh/thecodereport",
    },
    start: "Mar 2024",
    end: "Mar 2024",
    technology_used: ["React JS", "Tailwind", "Typescript"],
    image:
      "https://github.com/writer-nitesh/thecodereport/raw/main/public/images/the_code_report.png",
  },
];

export default projects;
