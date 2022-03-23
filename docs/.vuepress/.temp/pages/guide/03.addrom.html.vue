<template><p>之前关于EmuELEC的基本设置已经说明过了，现在就说说如何添加游戏ROM。</p>
<h2 id="rom存放目录" tabindex="-1"><a class="header-anchor" href="#rom存放目录" aria-hidden="true">#</a> ROM存放目录</h2>
<p>首先找到EmuELEC系统存放游戏ROM的路径，在同一局域网下的电脑上，打开【计算机】，在地址栏输入【EmuELEC的IP地址】后回车</p>
<p><img src="@source/guide/assets/Snipaste_3-1.png" alt="Snipaste_3-1" loading="lazy"></p>
<p>就进入到EmuELEC系统的资源目录了，<code>roms</code>就是存放游戏ROM的目录</p>
<blockquote>
<p><code>roms</code>下有很多文件夹，大部分是模拟器平台对应的目录</p>
</blockquote>
<p><img src="@source/guide/assets/Snipaste_3-2.png" alt="Snipaste_3-2" loading="lazy"></p>
<h2 id="放入游戏rom" tabindex="-1"><a class="header-anchor" href="#放入游戏rom" aria-hidden="true">#</a> 放入游戏ROM</h2>
<p>例如：进入<code>roms/famicom</code>目录（任天堂红白机），放入几个游戏ROM文件</p>
<p><img src="@source/guide/assets/Snipaste_3-3.png" alt="Snipaste_3-3" loading="lazy"></p>
<p>按下手柄的<kbd>SELECT</kbd>键调出【快速进入】菜单，选择【重启EmulationStation】</p>
<p><img src="@source/guide/assets/Snipaste_3-4.png" alt="Snipaste_3-4" loading="lazy"></p>
<p>会发现主界面多了一个【Family Computer】游戏平台</p>
<p><img src="@source/guide/assets/Snipaste_3-5.png" alt="Snipaste_3-5" loading="lazy"></p>
<p>进入【Family Computer】游戏平台，有显示刚刚放进去的3个游戏</p>
<p><img src="@source/guide/assets/Snipaste_3-6.png" alt="Snipaste_3-6" loading="lazy"></p>
<p>进去试玩一下，可以正常游戏</p>
<blockquote>
<p>退出游戏：按两次 <kbd>SELECT</kbd>+<kbd>START</kbd> 组合键</p>
</blockquote>
<p><img src="@source/guide/assets/Snipaste_3-7.png" alt="Snipaste_3-7" loading="lazy"></p>
<p><img src="@source/guide/assets/Snipaste_3-8.png" alt="Snipaste_3-8" loading="lazy"></p>
<p><img src="@source/guide/assets/Snipaste_3-9.png" alt="Snipaste_3-9" loading="lazy"></p>
<p>试玩游戏之后，会在该平台ROM目录下自动生成一个<code>gamelist.xml</code>的文件，这个就是游戏列表，暂且不提，之后会作详细说明</p>
<p><img src="@source/guide/assets/Snipaste_3-10.png" alt="Snipaste_3-10" loading="lazy"></p>
<h2 id="需要bios的游戏平台" tabindex="-1"><a class="header-anchor" href="#需要bios的游戏平台" aria-hidden="true">#</a> 需要BIOS的游戏平台</h2>
<p>再例如，进入<code>roms/neogeo</code>，放入两个游戏ROM文件</p>
<p><img src="@source/guide/assets/Snipaste_3-11.png" alt="Snipaste_3-11" loading="lazy"></p>
<p>再次按下手柄的<kbd>SELECT</kbd>键调出【快速进入】菜单，选择【重启EmulationStation】</p>
<p><img src="@source/guide/assets/Snipaste_3-4.png" alt="Snipaste_3-4" loading="lazy"></p>
<p>会发现主界面又多了一个【NEO·GEO】游戏平台</p>
<p><img src="@source/guide/assets/Snipaste_3-12.png" alt="Snipaste_3-12" loading="lazy"></p>
<p>进入【NEO·GEO】游戏平台，有刚刚放进去的2个游戏</p>
<p><img src="@source/guide/assets/Snipaste_3-13.png" alt="Snipaste_3-13" loading="lazy"></p>
<p>选择一个游戏试玩一下，但不能进入游戏，出现如下图报错，查看报错原因是没有BIOS文件<code>neogeo.zip</code></p>
<p><img src="@source/guide/assets/Snipaste_3-14.png" alt="Snipaste_3-14" loading="lazy"></p>
<h2 id="添加bios文件" tabindex="-1"><a class="header-anchor" href="#添加bios文件" aria-hidden="true">#</a> 添加BIOS文件</h2>
<p>进入<code>roms/bios</code>，把NEOGEO模拟器的BIOS文件<code>neogeo.zip</code>放入该目录</p>
<p><img src="@source/guide/assets/Snipaste_3-15.png" alt="Snipaste_3-15" loading="lazy"></p>
<p>再次尝试进入游戏，可以正常进入游戏</p>
<p><img src="@source/guide/assets/Snipaste_3-16.png" alt="Snipaste_3-16" loading="lazy"></p>
<p><img src="@source/guide/assets/Snipaste_3-17.png" alt="Snipaste_3-17" loading="lazy"></p>
<p>同样，NEOGEO平台游戏ROM目录下也自动生成一个<code>gamelist.xml</code>游戏列表文件</p>
<p><img src="@source/guide/assets/Snipaste_3-18.png" alt="Snipaste_3-18" loading="lazy"></p>
<p>以上，就是关于EmuELEC添加游戏ROM的说明。</p>
<div class="custom-container tip"><p class="custom-container-title">关于BIOS文件</p>
<p>有一些模拟器平台是需要BIOS文件的，有一些模拟器平台是不需要的，这个具体可以网上查找相关内容，当然，在本站的【资源下载】的网盘中提供大多数模拟器所需的BIOS文件，下载后直接放入<code>roms/bios</code>中即可。</p>
</div>
</template>
