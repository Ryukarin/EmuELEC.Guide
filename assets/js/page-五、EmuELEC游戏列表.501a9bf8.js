(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{555:function(t,s,a){t.exports=a.p+"assets/img/Snipaste_5-1.95b3b2e9.png"},556:function(t,s,a){t.exports=a.p+"assets/img/Snipaste_5-2.6779afce.png"},557:function(t,s,a){t.exports=a.p+"assets/img/Snipaste_5-3.7a9fb39c.png"},558:function(t,s,a){t.exports=a.p+"assets/img/Snipaste_5-4.f1f91273.png"},559:function(t,s,a){t.exports=a.p+"assets/img/Snipaste_5-5.575dbf58.png"},692:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("在上一片有提到"),n("code",[t._v("gamelist.xml")]),t._v("文件，也就是游戏列表，下面我们具体说说这个游戏列表文件。")]),t._v(" "),n("h2",{attrs:{id:"抓取到的文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抓取到的文件"}},[t._v("#")]),t._v(" 抓取到的文件")]),t._v(" "),n("p",[t._v("当我们把游戏ROM抓取完成之后，进入到游戏ROM所在目录，会发现多出了几个子目录：")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("images")]),t._v("：抓取到的游戏ROM对应的"),n("u",[t._v("游戏截图")]),t._v("、"),n("u",[t._v("游戏logo")]),t._v("、"),n("u",[t._v("游戏封面")]),t._v("以及"),n("u",[t._v("游戏同人图片")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("videos")]),t._v("：抓取到的游戏ROM对应的"),n("u",[t._v("游戏视频")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("manuals")]),t._v("：抓取到的游戏ROM对应的"),n("u",[t._v("游戏手册")]),t._v("（一般不抓取，都是外文看不懂）")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(555),alt:"Snipaste_5-1",loading:"lazy"}})]),t._v(" "),n("p",[n("code",[t._v("images")]),t._v("、"),n("code",[t._v("videos")]),t._v("目录下，抓取到的图片和视频")]),t._v(" "),n("p",[n("img",{attrs:{src:a(556),alt:"Snipaste_5-2",loading:"lazy"}})]),t._v(" "),n("h2",{attrs:{id:"游戏列表说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#游戏列表说明"}},[t._v("#")]),t._v(" 游戏列表说明")]),t._v(" "),n("p",[t._v("游戏列表文件"),n("code",[t._v("gamelist.xml")]),t._v("也更新了。打开列表文件看看：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(557),alt:"Snipaste_5-3",loading:"lazy"}})]),t._v(" "),n("p",[n("code",[t._v("gamelist.xml")]),t._v("与没抓取游戏ROM信息之前（参考第三篇文章）相比，多出了很多内容，如：游戏画面、游戏视频、游戏logo、游戏封面......")]),t._v(" "),n("p",[t._v("其实需要修改的地方，也就一个"),n("code",[t._v("<name>游戏名</name>")]),t._v("元素标签，比如将游戏"),n("u",[n("strong",[t._v("Conrta (J)")])]),t._v("改成中文的"),n("u",[n("strong",[t._v("魂斗罗")])]),t._v("，设定换行符为"),n("u",[t._v("Unix/macOS(LF)")]),t._v("，再保存一下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(558),alt:"Snipaste_5-4",loading:"lazy"}})]),t._v(" "),n("p",[t._v("然后手柄按"),n("kbd",[t._v("START")]),t._v("键盘调出【主菜单】➡【游戏设置】➡【更新游戏列表】")]),t._v(" "),n("p",[t._v("再次进入游戏平台看看，游戏名称变成了中文"),n("u",[n("strong",[t._v("魂斗罗")])]),t._v("，其他游戏按照此方法修改即可")]),t._v(" "),n("p",[n("img",{attrs:{src:a(559),alt:"Snipaste_5-5",loading:"lazy"}})]),t._v(" "),n("p",[t._v("方法都很简单，但是数量多的话还是要花很长时间的，会写函数脚本工具的就可以很方便快速的搞定，其实写工具也不是太难，难得是要有中英文对照数据才好写工具。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("xml格式说明")]),t._v(" "),n("blockquote",[n("p",[t._v("必须有xml声明语句；")]),t._v(" "),n("p",[t._v("必须有且仅有一个根元素；")]),t._v(" "),n("p",[t._v("标签大小写敏感；")]),t._v(" "),n("p",[t._v("标签成对；")]),t._v(" "),n("p",[t._v("必须正确地嵌套；")]),t._v(" "),n("p",[t._v("属性值用双引号；")]),t._v(" "),n("p",[t._v("...")])]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0"?>')]),t._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--第一行是xml的声明--\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("gamelist")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--根元素gamelist的开始标签--\x3e")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("game")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("18624"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--gamelist的子元素game的开始标签--\x3e")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--game的子元素path（一对标签）--\x3e")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--game的子元素name（一对标签）--\x3e")]),t._v("\n\t\t...\t\t\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--...--\x3e")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("region")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("region")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--game的子元素region（一对标签）--\x3e")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("game")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--根元素gamelist的子元素game的结束标签--\x3e")]),t._v("\n\t...\t\t\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--...--\x3e")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("game")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("18624"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--同上--\x3e")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t...\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("region")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("region")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("game")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("gamelist")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--元素gamelist的结束标签--\x3e")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);