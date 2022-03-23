import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-184f4da6","/intro.html",{"title":"KARIN","icon":"info","type":"article","readingTime":{"minutes":0.04,"words":12},"excerpt":"KARIN 我很懒，所以没有个人信息","date":"2022-03-23T05:24:01.000Z"},["/intro","/intro.md"]],
  ["v-590a42d9","/project.html",{"title":"项目介绍","icon":"folder","type":"home","readingTime":{"minutes":0,"words":0},"excerpt":"","date":"2022-03-23T05:24:01.000Z"},["/project","/project.md"]],
  ["v-8daa1a0e","/",{"title":"博客主页","icon":"home","type":"home","readingTime":{"minutes":0,"words":0},"excerpt":"","date":"2022-03-23T05:24:01.000Z"},["/index.html","/readme.md"]],
  ["v-5405215c","/guide/00.introduce.html",{"title":"零、EmuELEC是什么","type":"article","readingTime":{"minutes":1.2,"words":361},"excerpt":"EmuELEC 是什么 用于 Amlogic 设备的复古怀旧游戏的模拟。基于 CoreELEC 和 Lakka 以及 Batocera 。只是将它们与 Batocera-Emulationstation 和一些独立的模拟器（ Advancemame 、PPSSPP、Reicast、Amiberry 等）结合起来。 支持的设备 几乎所有 Amlogic S90","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/00.introduce","/guide/00.introduce.md"]],
  ["v-7d7b647f","/guide/01.install.html",{"title":"一、EmuELEC启动盘制作","type":"article","readingTime":{"minutes":2.04,"words":613},"excerpt":"下载镜像 到EmuELEC开源项目下载对应设备的镜像，或者到本站提供的网盘链接下载（只提供通用版本）。 EmuELEC-Amlogic.aarch64-xxx-generic.img.gz 适用于 S905、S905x、S905l、S905w 等; EmuELEC-Amlogic-ng.aarch64-xxx-generic.img.gz 适用于 S905x","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/01.install","/guide/01.install.md"]],
  ["v-087f1896","/guide/02.settings.html",{"title":"二、EmuELEC基本设置","type":"article","readingTime":{"minutes":3.61,"words":1083},"excerpt":"进入系统 从TF卡/U盘顺利启动，启动画面如下，正在扩容分区，格式化等操作，完成后会自动重启 重启后，开始进入系统，第一次系统加载时间会长一些，耐心等待 经过耐心的等待，顺利进入系统，画面如下 EmulationStation设置 手柄映射 手柄连接到设备上，系统会自动识别到，长按手柄上任意一个按键来映射手柄 按照提示映射你的手柄 语言时区设置 按下手柄的S","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/02.settings","/guide/02.settings.md"]],
  ["v-1a886d2b","/guide/03.addrom.html",{"title":"三、EmuELEC添加游戏","type":"article","readingTime":{"minutes":2.29,"words":687},"excerpt":"之前关于EmuELEC的基本设置已经说明过了，现在就说说如何添加游戏ROM。 ROM存放目录 首先找到EmuELEC系统存放游戏ROM的路径，在同一局域网下的电脑上，打开【计算机】，在地址栏输入【EmuELEC的IP地址】后回车 就进入到EmuELEC系统的资源目录了，roms就是存放游戏ROM的目录 \" roms下有很多文件夹，大部分是模拟器平台对应的目录","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/03.addrom","/guide/03.addrom.md"]],
  ["v-7a121ece","/guide/04.scraper.html",{"title":"四、EmuELEC抓取游戏信息","type":"article","readingTime":{"minutes":1.51,"words":454},"excerpt":"游戏ROM添加了，也可以正常游戏了。但是添加的游戏比较多的情况下，想知道选择的游戏更详细的信息，该怎么办呢？下面来说说抓取游戏ROM信息。 抓取元数据 按下手柄的START键调出【主菜单】，选择【抓取元数据】 根据需求选择抓取哪些数据（手册和地图一般不抓取），并输入【用户名】和【密码】，选择【开始抓取】 \" 游戏数据来源默认使用【ScreenScraper】","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/04.scraper","/guide/04.scraper.md"]],
  ["v-cf0207e8","/guide/05.gamelist.html",{"title":"五、EmuELEC游戏列表","type":"article","readingTime":{"minutes":2.08,"words":623},"excerpt":"在上一片有提到gamelist.xml文件，也就是游戏列表，下面我们具体说说这个游戏列表文件。 抓取到的文件 当我们把游戏ROM抓取完成之后，进入到游戏ROM所在目录，会发现多出了几个子目录： images：抓取到的游戏ROM对应的游戏截图、游戏logo、游戏封面以及游戏同人图片; videos：抓取到的游戏ROM对应的游戏视频; manuals：抓取到的游","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/05.gamelist","/guide/05.gamelist.md"]],
  ["v-523c4948","/guide/06.bezels.html",{"title":"六、EmuELEC边框设置","type":"article","readingTime":{"minutes":3.28,"words":985},"excerpt":"细心的朋友会发现，很多游戏在玩的时候，显示器两边会有黑边，看起来有些突兀。其实有个功能可以解决这个问题的，那就是接下来要说的边框（bezel）。 为什么会有黑边？ 小时候玩游戏，那时的老电视的屏幕比例基本都是4:3，但现在的显示器，液晶电视的屏幕比例基本都是16:9。用现在的显示器或液晶电视玩这些老游戏，屏幕两边就产生了黑边。 开启边框 首先手柄按START","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/06.bezels","/guide/06.bezels.md"]],
  ["v-475a9557","/guide/07.splash.html",{"title":"七、EmuELEC闪图设置","type":"article","readingTime":{"minutes":1.89,"words":567},"excerpt":"关于闪图（splash），可能不清楚是什么意思。 闪图（splash）是什么？ 就是在我们进入游戏的时候，出现的画面，称之为闪图（splash）。 系统闪图 和边框（bezel）一样，也是可以更改设置的，系统默认的是闪图是/storage/.config/splash/loading-game.png，暂且称之为系统闪图。在没有配置其他闪图之前，所有的游戏进","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/07.splash","/guide/07.splash.md"]],
  ["v-16592aea","/guide/08.theme.html",{"title":"八、EmuELEC主题设置","type":"article","readingTime":{"minutes":1,"words":301},"excerpt":"下载主题 按下手柄的START键调出【主菜单】，选择【更新文件和下载文件】 选择【主题】 选择要下载的主题（右上方有下载进度） 下载完成后，到主题路径查看，es-theme-alekfull-EmuELEC就是刚刚下载的主题，也可以直接把下载好的主题直接放到主题路径下 主题路径：/Storage/.config/emulationstation/themes","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/08.theme","/guide/08.theme.md"]],
  ["v-7797be4c","/guide/09.summary.html",{"title":"九、EmuELEC折腾总结","type":"article","readingTime":{"minutes":0.72,"words":217},"excerpt":"玩法总结 接触EmuELEC系统已经有好几年了，从一开始的小白进阶到现在会折腾的老白，期间确实学习到了很多东西。 从电视盒子的破解刷机，到系统的烧录，linux命令、系统修改等等...以后有时间的话，会把一些零散的折腾技巧也写下来。 这些还是需要自己静下来去学习，最后一句：值得。 更多的EmuELEC技巧，参照EmuELEC技巧导航 情怀 当然，还有很多不明","date":"2022-02-01T00:00:00.000Z","category":["Guide"],"tag":["EmuELEC"]},["/guide/09.summary","/guide/09.summary.md"]],
  ["v-fffb8e28","/guide/",{"title":"EmuELEC玩法导航","type":"article","readingTime":{"minutes":0.25,"words":76},"excerpt":"文章列表 零、EmuELEC是什么; 一、EmuELEC启动盘制作; 二、EmuELEC基本设置; 三、EmuELEC添加游戏; 四、EmuELEC抓取游戏信息; 五、EmuELEC游戏列表; 六、EmuELEC边框设置; 七、EmuELEC闪图设置; 八、EmuELEC主题设置; 九、EmuELEC折腾总结;","date":"2022-02-01T00:00:00.000Z","category":["Navigation"],"tag":["EmuELEC"]},["/guide/index.html","/guide/readme.md"]],
  ["v-d1650102","/more/01.directory_file.html",{"title":"分区目录文件","type":"article","readingTime":{"minutes":1.38,"words":413},"excerpt":"分区说明 在将img镜像烧录到TF卡/U盘后，会产生两个分区： EMUELEC分区：用于系统启动的文件，例如dtb.img 、SYSTEM、kernel.img等系统文件; STORAGE分区：空（只有扩容用的文件）; 目录结构 EmuELEC系统启动后，挂载信息如下： EMUELEC分区被挂载为/flash; STORAGE分区被挂载为/storage; ","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/01.directory_file","/more/01.directory_file.md"]],
  ["v-515d4f58","/more/02.change_bootvideo.html",{"title":"更换开机视频","type":"article","readingTime":{"minutes":0.73,"words":219},"excerpt":"开启 按手柄START键，调出【主菜单】，选择【EMUELEC SETTINGS】 打开【总是显示开机视频】 过程 ssh连接到EmuELEC系统，输入以下命令： 进入目录：/storage/.config/emuelec/scripts/，打开show_splash.sh文件， 将VIDEOSPLASH=\"/usr/config/splash/emuele","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/02.change_bootvideo","/more/02.change_bootvideo.md"]],
  ["v-1e8ce436","/more/03.reset_setup.html",{"title":"修改系统设置菜单","type":"article","readingTime":{"minutes":2.44,"words":733},"excerpt":"前提 我们修改了语言为中文后，平台游戏都有对应的游戏列表可以更改成中文，但是这个系统的设置菜单SETUP却无法修改，其实也是可以的。正好也可以顺便解决国内小伙伴安装NDS模拟器drastic失败的问题。 修改SETUP菜单路径 把SETUP菜单的路径修改成/storage/roms/setup，并将原SETUP菜单路径下内容复制到/storage/roms/","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/03.reset_setup","/more/03.reset_setup.md"]],
  ["v-43b5ea50","/more/04.install_drastic.html",{"title":"安装NDS模拟器drastic","type":"article","readingTime":{"minutes":1.95,"words":586},"excerpt":"前提 EmuELEC系统是支持Nintendou的NDS平台的，但是系统没有直接配置好模拟器，只提供了一个安装选项。进入设置SETUP菜单，选择【Install Drastic】进行安装Drastic，提示安装完成（实际应该没有安装成功，或者出现错误提示：wget: error getting response: Connection reset by pe","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/04.install_drastic","/more/04.install_drastic.md"]],
  ["v-5ec6d68e","/more/05.locale_zh.html",{"title":"ES中文翻译的完善","type":"article","readingTime":{"minutes":2.41,"words":724},"excerpt":"前提 前面的【玩法教程】系列的【EmuELEC基本设置】中虽然将系统设置成中文，但是有些系统显示仍然是英文。那么如何能把那些没有完全汉化的部分给汉化呢？ 这就需要对汉化文件进行修改编译了。 过程 找到系统语言包路径：/storage/.config/emuelec/configs/locale/，这里已经有很多语言的翻译目录 找到我们需要汉化的中文路径：/s","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/05.locale_zh","/more/05.locale_zh.md"]],
  ["v-7cfca044","/more/77.change_bootsplash.html",{"title":"更换开机闪图（进阶1）","type":"article","readingTime":{"minutes":1.44,"words":432},"excerpt":"准备 Ubuntu环境（推荐Ubuntu 20.04 LTS x64，并连接到互联网）; EmuELEC镜像包的kernel.img文件; 解包打包脚本工具kernel.sh文件; 要替换的开机图片kernel_splash.png（png格式，分辨率最好为1920x1080）; 过程 1. 准备文件 进入Ununtu系统，在你的家目录下新建一个目录（本例：","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/77.change_bootsplash","/more/77.change_bootsplash.md"]],
  ["v-c88d73b0","/more/88.change_system.html",{"title":"修改系统文件（进阶2）","type":"article","readingTime":{"minutes":1.65,"words":495},"excerpt":"准备 Ubuntu环境（推荐Ubuntu 20.04 LTS x64，并连接到互联网）; EmuELEC镜像包的SYSTEM文件; 解包打包脚本工具system.sh文件; 过程 1. 准备文件 进入Ununtu系统，在你的家目录下新建一个目录（本例：~/test），把所需文件放进去 system.sh脚本工具请到本站的【资源下载】➡【工具】下载 2. 解压","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/88.change_system","/more/88.change_system.md"]],
  ["v-1f1c4792","/more/99.remk_img.html",{"title":"重新打包镜像（进阶3）","type":"article","readingTime":{"minutes":2.01,"words":603},"excerpt":"准备 重新打包镜像文件，准确来说应该是修改镜像文件（img格式）。\rWindows环境; \rDiskGenius磁盘工具; \r修改过的kernel.img文件; \r修改过的SYSTEM文件; 过程 1. 首先将原版镜像解压，再将之前修改的keinel.img和SYSTEM文件复制到同一个路径 2. 打开DiskGenius磁盘工具，选择【磁盘】菜单，再选择【","date":"2022-02-01T00:00:00.000Z","category":["Skill"],"tag":["EmuELEC"]},["/more/99.remk_img","/more/99.remk_img.md"]],
  ["v-14f73021","/more/",{"title":"EmuELEC技巧导航","type":"article","readingTime":{"minutes":0.25,"words":74},"excerpt":"文章列表 分区目录文件; 更换开机视频; 修改系统设置菜单; 安装NDS模拟器drastic; ES中文翻译的完善; 更换开机闪图（进阶1）; 修改系统文件（进阶2）; 重新打包镜像（进阶3）;","date":"2022-02-01T00:00:00.000Z","category":["Navigation"],"tag":["EmuELEC"]},["/more/index.html","/more/readme.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"文章","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"加密","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"幻灯片","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"收藏","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"时间轴","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-ac0c2a6a","/category/guide/",{"title":"Guide 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/guide/index.html"]],
  ["v-4768ae2a","/tag/emuelec/",{"title":"EmuELEC 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/emuelec/index.html"]],
  ["v-b9b2fcfa","/category/navigation/",{"title":"Navigation 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/navigation/index.html"]],
  ["v-843173d4","/category/skill/",{"title":"Skill 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/skill/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
