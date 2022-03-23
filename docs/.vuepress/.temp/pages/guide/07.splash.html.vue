<template><p>关于闪图（splash），可能不清楚是什么意思。</p>
<div class="custom-container tip"><p class="custom-container-title">闪图（splash）是什么？</p>
<p>就是在我们进入游戏的时候，出现的画面，称之为闪图（splash）。</p>
</div>
<h2 id="系统闪图" tabindex="-1"><a class="header-anchor" href="#系统闪图" aria-hidden="true">#</a> 系统闪图</h2>
<p>和边框（bezel）一样，也是可以更改设置的，系统默认的是闪图是<code>/storage/.config/splash/loading-game.png</code>，暂且称之为<u><strong>系统闪图</strong></u>。在没有配置其他闪图之前，所有的游戏进入是显示的都是下图。（当然可自行替换其他图片，但需要保持文件名不变）</p>
<p><img src="@source/guide/assets/Snipaste_7-1.png" alt="Snipaste_7-1" loading="lazy"></p>
<h2 id="配置闪图" tabindex="-1"><a class="header-anchor" href="#配置闪图" aria-hidden="true">#</a> 配置闪图</h2>
<p>那我们先进入闪图的所在目录：<code>roms/splash</code>，分别新建对应游戏平台的闪图目录<code>famicom</code>和<code>arcade</code>，</p>
<p><img src="@source/guide/assets/Snipaste_7-2.png" alt="Snipaste_7-2" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">疑问</p>
<p>为什么NEO·GEO平台的游戏闪图目录是<code>roms/bezels/arcade</code>呢？而不是<code>roms/bezels/neogeo</code>呢？</p>
<p>同上一篇边框设置的文章一样，系统默认是把arcade、bneo、fbn、neogeo、mame、cps1、cps2、cps3这几个平台合并到一起，统一用<code>roms/splash/arcade</code>作为它们的闪图目录。</p>
</div>
<p>然后，在刚刚新建游戏平台的闪图目录下放入图片文件，并命名为<code>launching.png</code>（也可以用<code>launching.mp4</code>视频文件，但不建议），暂且将每个游戏平台的闪图目录下的<code>launching.png</code>称之为<u><strong>平台闪图</strong></u></p>
<p><img src="@source/guide/assets/Snipaste_7-3.png" alt="Snipaste_7-3" loading="lazy"></p>
<p>再分别进入上面两个游戏平台的游戏，看看游戏的闪图效果</p>
<h3 id="famicom平台闪图" tabindex="-1"><a class="header-anchor" href="#famicom平台闪图" aria-hidden="true">#</a> Famicom平台闪图</h3>
<p><img src="@source/guide/assets/Snipaste_7-4.png" alt="Snipaste_7-4" loading="lazy"></p>
<h3 id="neo·geo平台闪图" tabindex="-1"><a class="header-anchor" href="#neo·geo平台闪图" aria-hidden="true">#</a> NEO·GEO平台闪图</h3>
<p><img src="@source/guide/assets/Snipaste_7-5.png" alt="Snipaste_7-5" loading="lazy"></p>
<h2 id="游戏闪图" tabindex="-1"><a class="header-anchor" href="#游戏闪图" aria-hidden="true">#</a> 游戏闪图</h2>
<p>再然后，我们在游戏平台闪图目录下再放入游戏ROM名的png格式图片，如Famicom平台下放入对应的图片，这种以游戏ROM名命名的图片，暂且称之为<u><strong>游戏闪图</strong></u>（如<code>Contra (J).png</code>）</p>
<p><img src="@source/guide/assets/Snipaste_7-6.png" alt="Snipaste_7-6" loading="lazy"></p>
<p>再次进入Famicom的游戏看看闪图效果</p>
<ul>
<li>冒险岛</li>
</ul>
<p><img src="@source/guide/assets/Snipaste_7-7.png" alt="Snipaste_7-7" loading="lazy"></p>
<ul>
<li>超级马里奥</li>
</ul>
<p><img src="@source/guide/assets/Snipaste_7-8.png" alt="Snipaste_7-8" loading="lazy"></p>
<ul>
<li>魂斗罗</li>
</ul>
<p><img src="@source/guide/assets/Snipaste_7-9.png" alt="Snipaste_7-9" loading="lazy"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>根据上面的的测试结果，得出闪图的使用方法。</p>
<h3 id="闪图优先度" tabindex="-1"><a class="header-anchor" href="#闪图优先度" aria-hidden="true">#</a> 闪图优先度</h3>
<p>游戏闪图 &gt; 平台闪图 &gt; 系统闪图</p>
<h3 id="自定义闪图" tabindex="-1"><a class="header-anchor" href="#自定义闪图" aria-hidden="true">#</a> 自定义闪图</h3>
<p>根据自己的喜好，可随意设定自己的闪图。</p>
</template>
