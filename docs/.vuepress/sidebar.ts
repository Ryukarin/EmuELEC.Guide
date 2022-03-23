import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  "project",
  { text: "玩法教程", icon: "note", collapsable: true, prefix: "guide/", children:
    [ "", "00.introduce", "01.install", "02.settings", "03.addrom", "04.scraper", "05.gamelist", "06.bezels", "07.splash", "08.theme", "09.summary" ] },
  { text: "更多技巧", icon: "more", collapsable: true, prefix: "more/", children:
    [ "", "01.directory_file", "02.change_bootvideo", "03.reset_setup", "04.install_drastic", "05.locale_zh", "77.change_bootsplash", "88.change_system", "99.remk_img" ] },
]);
