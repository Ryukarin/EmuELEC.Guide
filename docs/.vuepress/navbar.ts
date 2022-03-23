import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  "/project",
  { text: "玩法教程", icon: "note", link: "/guide/" },
  { text: "更多技巧", icon: "more", link: "/more/" },
  { text: "资源下载", icon: "install", children: [
    { text: "镜像", icon: "cache", link: "https://cloud.189.cn/web/share?code=Vri2QjU3MfMj" },
    { text: "工具", icon: "cache", link: "https://cloud.189.cn/web/share?code=YjQvuu6JZNfq" },
      ],
  },
]);
