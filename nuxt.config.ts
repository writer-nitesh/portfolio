// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-llms",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  // Site URL used by sitemap, robots, OG tags etc.
  site: {
    url: "https://ni30.vercel.app",
    name: "Nitesh Singh — Software Developer",
  },

  // --- Sitemap ---
  sitemap: {
    urls: [
      { loc: "/", priority: 1.0, changefreq: "monthly" },
      { loc: "/devcard", priority: 0.8, changefreq: "yearly" },
    ],
  },

  // --- Robots ---
  robots: {
    groups: [
      {
        userAgent: ["*"],
        allow: ["/"],
        disallow: ["/api/"],
      },
    ],
    sitemap: ["https://ni30.vercel.app/sitemap.xml"],
  },

  // --- LLMs.txt ---
  llms: {
    domain: "https://ni30.vercel.app",
    title: "Nitesh Singh — Software Developer",
    description:
      "Portfolio of Nitesh Singh, a software developer experienced in web and mobile development. Co-founder at Tradio. Skilled in React, Next.js, TypeScript, Firebase, and more.",
    sections: [
      {
        title: "Pages",
        links: [
          {
            title: "Portfolio Home",
            href: "https://ni30.vercel.app/",
            description:
              "Main portfolio page with profile, highlights, and projects.",
          },
          {
            title: "DevCard",
            href: "https://ni30.vercel.app/devcard",
            description:
              "Interactive 3D developer card inspired by Aipan folk art.",
          },
        ],
      },
    ],
  },

  // --- Build Time Optimizations ---
  typescript: {
    typeCheck: false,
  },

  sourcemap: {
    server: false,
    client: false,
  },

  vite: {
    optimizeDeps: {
      include: ["vue"],
    },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
