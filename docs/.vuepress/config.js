const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "EmuELEC",
//  description: "复古游戏",

  dest: "./dist",

  head: [
    ["script",{ src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }],
    ["script",{ src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" }],
    ["script",{ src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ["script",{ src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }]
  ],

//  locales: {
//    "/": {
//      lang: "en-US",
//    },
//    "/zh/": {
//      title: "Theme Demo",
//      description: "vuepress-theme-hope 的 demo",
//    },
//  },

  themeConfig: {
    logo: "/logo.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "KARIN",
//    repo: "https://github.com/Ryukarin/emuelec_guide",

    nav: [
      { text: "博客主页", icon: "home", link: "/" },
      { text: "项目介绍", icon: "folder", link: "/project/" },
      { text: "玩法教程", icon: "note", link: "/guide/"},
      { text: "更多技巧", icon: "more", link: "/more/"},
      { text: "资源下载", icon: "install", items: [
      	{text: "镜像", icon: "cache", link: "https://www.aliyundrive.com/s/xRXmuU2duse" },
      	{text: "工具", icon: "cache", link: "https://www.aliyundrive.com/s/3T8DcHhNJot" }]}
    ],

    sidebar: {
      "/": [
        "",
        "project",
        {
          title: "玩法教程",
          icon: "note",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        },
        {
          title: "更多技巧",
          icon: "config",
          prefix: "more/",
          children: ["", ],
        },
        
      ],
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
    },

    footer: {
      display: true,
      content: "MIT Licensed",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
