const CONFIG = {
  // profile setting (required)
  profile: {
    name: "emoket",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Engineer",
    bio: "Learn Share and Enjoy",
    email: "insight.emoket@gmail.com",
    linkedin: "emoket",
    github: "emoket",
    instagram: "",
  },
  // ServiceCard setting (If you don't have any project, just empty array below)
  projects: [
    //   {
    //     name: `morethan-log`,
    //     href: "https://github.com/morethanmin/morethan-log",
    //   },
    //   {
    //     name: `bbbb`,
    //     href: "https://bbb.com",
    //   },
  ],
  // blog setting (required)
  blog: {
    title: "L_earn",
    description: "Learn Share and Enjoy",
  },

  // CONFIG configration (required)
  link: "https://blog.emoket.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "emoket/l_earn",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
