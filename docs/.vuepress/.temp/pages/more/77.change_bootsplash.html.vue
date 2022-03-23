<template><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<ul>
<li>
<p>Ubuntu环境（推荐Ubuntu 20.04 LTS x64，并连接到互联网）</p>
</li>
<li>
<p>EmuELEC镜像包的<code>kernel.img</code>文件</p>
</li>
<li>
<p>解包打包脚本工具<code>kernel.sh</code>文件</p>
</li>
<li>
<p>要替换的开机图片<code>kernel_splash.png</code>（png格式，分辨率最好为1920x1080）</p>
</li>
</ul>
<h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h2>
<ol>
<li>
<p>准备文件</p>
<p>进入Ununtu系统，在你的家目录下新建一个目录（本例：<code>~/test</code>），把所需文件放进去</p>
<p><code>kernel.sh</code>脚本工具请到本站的【资源下载】➡【工具】下载，<code>kernel_splash.png</code>请自备</p>
</li>
</ol>
<p><img src="@source/more/assets/more_77-1.png" alt="more_77-1" loading="lazy"></p>
<ol start="2">
<li>解压<code>EmuELEC-xxx.img.gz</code>压缩包</li>
</ol>
<p><img src="@source/more/assets/more_77-2.png" alt="more_77-2" loading="lazy"></p>
<ol start="3">
<li>然后挂载<code>EmuELEC-xxx.img</code>镜像</li>
</ol>
<p><img src="@source/more/assets/more_77-3.png" alt="more_77-3" loading="lazy"></p>
<ol start="4">
<li>挂载后，左侧有两个磁盘分区，进入EMUELEC分区，把<code>kernel.img</code>文件复制到之前新建目录（本例：<code>~/test</code>）</li>
</ol>
<p><img src="@source/more/assets/more_77-4.png" alt="more_77-4" loading="lazy"></p>
<ol start="5">
<li>返回脚本所在目录（本例：<code>~/test</code>），并在空白处右击“在终端打开”</li>
</ol>
<p><img src="@source/more/assets/more_77-5.png" alt="more_77-5" loading="lazy"></p>
<ol start="6">
<li>输入执行脚本命令：<code>bash kernel.sh</code></li>
</ol>
<p><img src="@source/more/assets/more_77-6.png" alt="more_77-6" loading="lazy"></p>
<ol start="7">
<li>需要<code>sudo</code>权限，输入用户密码</li>
</ol>
<p><img src="@source/more/assets/more_77-7.png" alt="more_77-7" loading="lazy"></p>
<ol start="8">
<li>下载工具，解包（按照提示操作，准备好<code>kernel_splash.png</code>图片）</li>
</ol>
<p><img src="@source/more/assets/more_77-8.png" alt="more_77-8" loading="lazy"></p>
<ol start="9">
<li>打包完成，新打包好的文件名<code>kernel.img</code></li>
</ol>
<p><img src="@source/more/assets/more_77-9.png" alt="more_77-9" loading="lazy"></p>
<ol start="10">
<li>别忘了将挂载的两个分区卸载了</li>
</ol>
<p><img src="@source/more/assets/more_77-10.png" alt="more_77-10" loading="lazy"></p>
<ol start="11">
<li>最后，将新打包好的<code>kernel.img</code>文件替换EmuELEC启动盘中的<code>kernel.img</code>文件。</li>
</ol>
<p>以上，EmuELEC系统的开机闪图就已经完成替换了，重新启动EmuELEC系统看看效果：</p>
<p><img src="@source/more/assets/more_77-11.png" alt="more_77-11" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">关于 kernel.img 文件</p>
<p>本篇文章的第2～4、10步骤可以替换为：</p>
<p>将制作好的EmuELEC启动盘里的<code>kernel.img</code>文件复制过来，放到脚本文件<code>kernel.sh</code>所在目录（本例：<code>~/test</code>）</p>
</div>
</template>
