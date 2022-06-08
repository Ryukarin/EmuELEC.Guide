export const themeData = {
  "blog": {
    "description": "游戏爱好者",
    "intro": "/intro.html",
    "medias": {
      "Gitee": "https://gitee.com/ryuukarin",
      "GitHub": "https://github.com/Ryukarin"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$lVa1Lq.Xw04.rz867/L52OjlB8IyGkSK.zOlnuKImjOYxqiwzxExi"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {
        "description": "游戏爱好者",
        "intro": "/intro.html",
        "medias": {
          "Gitee": "https://gitee.com/ryuukarin",
          "GitHub": "https://github.com/Ryukarin"
        }
      },
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        "",
        "project",
        {
          "text": "玩法教程",
          "icon": "note",
          "collapsable": true,
          "prefix": "guide/",
          "children": [
            "",
            "00.introduce",
            "01.install",
            "02.settings",
            "03.addrom",
            "04.scraper",
            "05.gamelist",
            "06.bezels",
            "07.splash",
            "08.theme",
            "09.summary"
          ]
        },
        {
          "text": "更多技巧",
          "icon": "more",
          "collapsable": true,
          "prefix": "more/",
          "children": [
            "",
            "01.directory_file",
            "02.change_bootvideo",
            "03.reset_setup",
            "04.install_drastic",
            "05.locale_zh",
            "06.mount_fstype",
            "77.change_bootsplash",
            "88.change_system",
            "99.remk_img"
          ]
        }
      ],
      "sidebarIcon": true,
      "headingDepth": 2,
      "author": {
        "name": "KARIN",
        "url": "https://ryukarin.github.io/blog/"
      },
      "logo": "/logo.png",
      "repo": "https://github.com/Ryukarin/EmuELEC.Guide",
      "docsDir": "",
      "navbar": [
        "/",
        "/project",
        {
          "text": "玩法教程",
          "icon": "note",
          "link": "/guide/"
        },
        {
          "text": "更多技巧",
          "icon": "more",
          "link": "/more/"
        },
        {
          "text": "资源下载",
          "icon": "install",
          "children": [
            {
              "text": "镜像",
              "icon": "cache",
              "link": "https://cloud.189.cn/web/share?code=Vri2QjU3MfMj"
            },
            {
              "text": "工具",
              "icon": "cache",
              "link": "https://cloud.189.cn/web/share?code=YjQvuu6JZNfq"
            }
          ]
        }
      ],
      "footer": "MIT Licensed",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "请输入密码",
        "errorHint": "请输入正确密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家"
      }
    }
  }
}
