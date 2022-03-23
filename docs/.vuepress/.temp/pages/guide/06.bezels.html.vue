<template><p>细心的朋友会发现，很多游戏在玩的时候，显示器两边会有黑边，看起来有些突兀。其实有个功能可以解决这个问题的，那就是接下来要说的边框（bezel）。</p>
<div class="custom-container tip"><p class="custom-container-title">为什么会有黑边？</p>
<p>小时候玩游戏，那时的老电视的屏幕比例基本都是4:3，但现在的显示器，液晶电视的屏幕比例基本都是16:9。用现在的显示器或液晶电视玩这些老游戏，屏幕两边就产生了黑边。</p>
</div>
<h2 id="开启边框" tabindex="-1"><a class="header-anchor" href="#开启边框" aria-hidden="true">#</a> 开启边框</h2>
<p>首先手柄按<kbd>START</kbd>键调出【主菜单】，选择【游戏设置】</p>
<p><img src="@source/guide/assets/Snipaste_6-1.png" alt="Snipaste_6-1" loading="lazy"></p>
<p>打开【启用RA边框】</p>
<p><img src="@source/guide/assets/Snipaste_6-2.png" alt="Snipaste_6-2" loading="lazy"></p>
<p>然后再进入游戏看看效果</p>
<p><img src="@source/guide/assets/Snipaste_6-3.png" alt="Snipaste_6-3" loading="lazy"></p>
<p>所有游戏都是这个边框，这个边框是EmuELEC系统自带的，暂且称之为<u><strong>系统边框</strong></u></p>
<p>那可不可以增加其他的边框呢？当然可以</p>
<h2 id="下载边框" tabindex="-1"><a class="header-anchor" href="#下载边框" aria-hidden="true">#</a> 下载边框</h2>
<p>手柄按<kbd>START</kbd>键调出【主菜单】，选择【更新文件和下载文件】</p>
<p><img src="@source/guide/assets/Snipaste_6-4.png" alt="Snipaste_6-4" loading="lazy"></p>
<p>选择【框架项目】</p>
<p><img src="@source/guide/assets/Snipaste_6-5.png" alt="Snipaste_6-5" loading="lazy"></p>
<p>选择要下载的游戏平台进行下载（右上方有下载进度）</p>
<p><img src="@source/guide/assets/Snipaste_6-6.png" alt="Snipaste_6-6" loading="lazy"></p>
<h2 id="边框效果" tabindex="-1"><a class="header-anchor" href="#边框效果" aria-hidden="true">#</a> 边框效果</h2>
<p>下载完成后，再进入游戏看看效果</p>
<h3 id="famicom平台" tabindex="-1"><a class="header-anchor" href="#famicom平台" aria-hidden="true">#</a> Famicom平台</h3>
<p><img src="@source/guide/assets/Snipaste_6-7.png" alt="Snipaste_6-7" loading="lazy"></p>
<p><img src="@source/guide/assets/Snipaste_6-8.png" alt="Snipaste_6-8" loading="lazy"></p>
<p><img src="@source/guide/assets/Snipaste_6-9.png" alt="Snipaste_6-9" loading="lazy"></p>
<h3 id="neo·geo平台" tabindex="-1"><a class="header-anchor" href="#neo·geo平台" aria-hidden="true">#</a> NEO·GEO平台</h3>
<p><img src="@source/guide/assets/Snipaste_6-10.png" alt="Snipaste_6-10" loading="lazy"></p>
<p><img src="@source/guide/assets/Snipaste_6-11.png" alt="Snipaste_6-11" loading="lazy"></p>
<h2 id="边框及其配置" tabindex="-1"><a class="header-anchor" href="#边框及其配置" aria-hidden="true">#</a> 边框及其配置</h2>
<p>细心的小伙伴会发现，这两个游戏平台的边框有些不一样，为什么Famicom的所有游戏都是一样的边框；而NEO·GEO的每一个游戏的边框都不一样。那我们看看边框的所在目录：<code>roms/bezels</code></p>
<p>新增了如下图红框的文件及文件夹</p>
<p><img src="@source/guide/assets/Snipaste_6-12.png" alt="Snipaste_6-12" loading="lazy"></p>
<p>首先进入到<code>roms/bezels/famicom</code>目录看看，里面只有两个文件：</p>
<p><code>default.cfg</code>和<code>default.png</code></p>
<p>这种命名为default的图片和配置文件，暂且称之为<u><strong>平台边框</strong></u>，就是说在这个平台的所有游戏都使用这个default边框</p>
<p><img src="@source/guide/assets/Snipaste_6-13.png" alt="Snipaste_6-13" loading="lazy"></p>
<p>再进入到<code>roms/bezels/arcade</code>目录看看，里面的文件就不一样了</p>
<p><code>kof97.cfg</code>和<code>kof97.png</code>、<code>mslug.cfg</code>和<code>mslug.png</code></p>
<p>这里的边框名称是根据游戏ROM名来命名的，就是说每个游戏都有自己单独的一个边框，打开其中一个游戏的看看（如下图），这种根据游戏ROM名来命名的边框，暂且称之为<u><strong>游戏边框</strong></u></p>
<p><img src="@source/guide/assets/Snipaste_6-14.png" alt="Snipaste_6-14" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">疑问</p>
<p>为什么NEO·GEO平台的游戏边框目录是<code>roms/bezels/arcade</code>呢？而不是<code>roms/bezels/neogeo</code>呢？</p>
<p>这个问题很好，这是为什么呢？因为系统默认是把arcade、bneo、fbn、neogeo、mame、cps1、cps2、cps3这几个平台合并到一起，统一用<code>roms/bezels/arcade</code>作为它们的边框目录。</p>
</div>
<p>边框的所在目录<code>roms/bezels</code>下还有一个文件<code>arcade.png</code>，我们再来测试一下（仅作测试，请谨慎尝试）：</p>
<ol>
<li>
<p>把<code>roms/bezels/arcade.png</code>移动到<code>roms/bezels/arcade</code>并改名为<code>default.png</code></p>
</li>
<li>
<p>把<code>roms/bezels/famicom/default.cfg</code>复制到<code>roms/bezels/arcade</code>目录下</p>
</li>
<li>
<p>删除<code>roms/bezels/arcade</code>目录下的<code>mslug.cfg</code>和<code>mslug.png</code></p>
</li>
</ol>
<p><img src="@source/guide/assets/Snipaste_6-15.png" alt="Snipaste_6-15" loading="lazy"></p>
<p>完成后如下</p>
<p><img src="@source/guide/assets/Snipaste_6-16.png" alt="Snipaste_6-16" loading="lazy"></p>
<p>再次进入游戏合金弹头（<code>mslug.zip</code>，边框已经删除），发现边框是<code>roms/bezels/arcadedefault.png</code>，即启用了平台边框</p>
<p><img src="@source/guide/assets/Snipaste_6-17.png" alt="Snipaste_6-17" loading="lazy"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>根据上面的的测试结果，得出边框的使用方法。</p>
<h3 id="边框优先度" tabindex="-1"><a class="header-anchor" href="#边框优先度" aria-hidden="true">#</a> 边框优先度</h3>
<p><u>游戏边框 &gt; 平台边框 &gt; 系统边框</u></p>
<h3 id="自定义边框" tabindex="-1"><a class="header-anchor" href="#自定义边框" aria-hidden="true">#</a> 自定义边框</h3>
<p>根据上面的说明，虽然下载边框很方便，有可能我不喜欢某一个边框，我可以替换成喜欢的边框。</p>
<p>下载边框可以在GitHub上搜索bezel关键词，或者参考 <a href="https://github.com/thebezelproject?tab=repositories" target="_blank" rel="noopener noreferrer">The Bezel Project<ExternalLinkIcon/></a></p>
</template>
