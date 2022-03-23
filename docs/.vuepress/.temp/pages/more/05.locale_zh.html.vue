<template><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2>
<p>前面的【玩法教程】系列的【<RouterLink to="/guide/02.settings.html#%E8%AF%AD%E8%A8%80%E6%97%B6%E5%8C%BA%E8%AE%BE%E7%BD%AE">EmuELEC基本设置</RouterLink>】中虽然将系统设置成中文，但是有些系统显示仍然是英文。那么如何能把那些没有完全汉化的部分给汉化呢？</p>
<p>这就需要对汉化文件进行修改编译了。</p>
<h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h2>
<p>找到系统语言包路径：<code>/storage/.config/emuelec/configs/locale/</code>，这里已经有很多语言的翻译目录</p>
<p><img src="@source/more/assets/more_5-1.png" alt="more_5-1.png" loading="lazy"></p>
<p>找到我们需要汉化的中文路径：<code>/storage/.config/emuelec/configs/locale/zh_CN/LC_MESSAGES</code>，将此目录下的<code>emulationstation2.po</code>文件复制出来，放到本地。</p>
<p><img src="@source/more/assets/more_5-2.png" alt="more_5-2.png" loading="lazy"></p>
<p>这个文件就是需要我们修改的，首先下载安装软件<a href="https://poedit.net/" target="_blank" rel="noopener noreferrer">Poedit<ExternalLinkIcon/></a>，用Poedit打开<code>emulationstation2.po</code>，对文件里没有翻译的部分进行补充翻译，翻译完成后保存。</p>
<p><img src="@source/more/assets/more_5-3.png" alt="more_5-3.png" loading="lazy"></p>
<p>再选择【文件】➡【编译为MO...】，名字默认为<code>emulationstation2.mo</code>即可</p>
<p><img src="@source/more/assets/more_5-4.png" alt="more_5-4.png" loading="lazy"></p>
<p>最后将本地修改编译后的两个文件<code>emulationstation2.po</code>和<code>emulationstation2.mo</code>复制替换<code>/storage/.config/emuelec/configs/locale/zh_CN/LC_MESSAGES</code>的对应两个文件。</p>
<p><img src="@source/more/assets/more_5-5.png" alt="more_5-5.png" loading="lazy"></p>
<p>再重启EmulationStation，看看系统相关的设置信息，是不是已经变成上面修改过的汉化信息了呢？（下图未完全汉化，仅作测试对比）</p>
<ul>
<li>修改前</li>
</ul>
<p><img src="@source/more/assets/more_5-6.png" alt="more_5-6.png" loading="lazy"></p>
<ul>
<li>修改后</li>
</ul>
<p><img src="@source/more/assets/more_5-7.png" alt="more_5-7.png" loading="lazy"></p>
<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>
<p>如果<code>emulationstation2.po</code>中缺少某些项目信息的源文本，可以用文本编辑器打开<code>emulationstation2.po</code>自行添加一对（源文本和翻译文本），再重新编译为MO文件进行替换。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>msgid "English"
msgstr "中文"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/more/assets/more_5-8.png" alt="more_5-8.png" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">关于.mo、.po格式文件</p>
<p><strong>.mo文件是什么？</strong></p>
<p><code>.mo</code>是Machine Object（机器对象）的缩写形式，它是面向计算机的、由<code>.po</code>文件通过GNU gettext工具包编译而成的二进制文件，应用程序通过读取<code>.mo</code>文件使自身的界面转换成用户使用的语言，如简体中文。<code>.mo</code>是一个二进制文件，不能直接编辑。</p>
<p><strong>.po文件是什么？</strong></p>
<p><code>.po</code>是Portable Object（可移植对象）的缩写形式，它是面向翻译人员的、提取于源代码的一种资源文件。<code>.po</code>文件可以用任何编辑器如poEdit，vi，Emacs，editplus打开，交给翻译人员来将其中的文字翻译成本国语言。</p>
<p><strong>.pot文件是什么？</strong></p>
<p><code>.pot</code>文件是一种模板文件，其实质与<code>.po</code>文件一样，其中包含了从源代码中提取所有的翻译字符串的列表，主要提供给翻译人员使用。</p>
<p><strong>通常汉化步骤：</strong></p>
<ol>
<li>将<code>.mo</code>语言包反编译为<code>.po</code>文件</li>
<li>理解<code>.po</code>的翻译样式</li>
<li>将英文翻译成中文然后，反编译成<code>.mo</code>生成二进制中文语言包</li>
<li>替换测试</li>
</ol>
</div>
</template>
