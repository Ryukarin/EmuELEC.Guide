<template><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<ul>
<li>
<p>Ubuntu环境（推荐Ubuntu 20.04 LTS x64，并连接到互联网）</p>
</li>
<li>
<p>EmuELEC镜像包的<code>SYSTEM</code>文件</p>
</li>
<li>
<p>解包打包脚本工具<code>system.sh</code>文件</p>
</li>
</ul>
<h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h2>
<ol>
<li>
<p>准备文件</p>
<p>进入Ununtu系统，在你的家目录下新建一个目录（本例：<code>~/test</code>），把所需文件放进去</p>
<p><code>system.sh</code>脚本工具请到本站的【资源下载】➡【工具】下载</p>
</li>
</ol>
<p><img src="@source/more/assets/more_88-1.png" alt="more_88-1" loading="lazy"></p>
<ol start="2">
<li>解压<code>EmuELEC-xxx.img.gz</code>压缩包</li>
</ol>
<p><img src="@source/more/assets/more_88-2.png" alt="more_88-2" loading="lazy"></p>
<ol start="3">
<li>然后挂载<code>EmuELEC-xxx.img</code>镜像</li>
</ol>
<p><img src="@source/more/assets/more_88-3.png" alt="more_88-3" loading="lazy"></p>
<ol start="4">
<li>
<p>挂载后，左侧有两个磁盘分区，进入EMUELEC分区，把<code>SYSTEM</code>文件复制到之前新建目录（本例：<code>~/test</code>）<img src="@source/more/assets/more_88-4.png" alt="more_88-4" loading="lazy"></p>
</li>
<li>
<p>返回脚本所在目录（本例：<code>~/test</code>），并在空白处右击“在终端打开”</p>
</li>
</ol>
<p><img src="@source/more/assets/more_88-5.png" alt="more_88-5" loading="lazy"></p>
<ol start="6">
<li>输入执行脚本命令：<code>bash system.sh</code></li>
</ol>
<p><img src="@source/more/assets/more_88-6.png" alt="more_88-6" loading="lazy"></p>
<ol start="7">
<li>需要<code>sudo</code>权限，输入用户密码</li>
</ol>
<p><img src="@source/more/assets/more_88-7.png" alt="more_88-7" loading="lazy"></p>
<ol start="8">
<li>解包中（文件较大，过程比较长）</li>
</ol>
<p><img src="@source/more/assets/more_88-8.png" alt="more_88-8" loading="lazy"></p>
<ol start="9">
<li>解包完成（多出一个<code>squashfs-root</code>目录，就是<code>SYSTEM</code>文件解压出来的）</li>
</ol>
<p><img src="@source/more/assets/more_88-9.png" alt="more_88-9" loading="lazy"></p>
<ol start="10">
<li>进入<code>squashfs-root</code>目录，根据需要修改相关配置（默认修改了开机视频位置）</li>
</ol>
<p><img src="@source/more/assets/more_88-10.png" alt="more_88-10" loading="lazy"></p>
<ol start="11">
<li>相关配置修改完成之后，下一步打包中（文件较多，过程比较长）</li>
</ol>
<p><img src="@source/more/assets/more_88-11.png" alt="more_88-11" loading="lazy"></p>
<ol start="12">
<li>打包完成，新打包好的文件名<code>SYSTEM</code></li>
</ol>
<p><img src="@source/more/assets/more_88-12.png" alt="more_88-12" loading="lazy"></p>
<ol start="13">
<li>别忘了将挂载的两个分区卸载了</li>
</ol>
<p><img src="@source/more/assets/more_88-13.png" alt="more_88-13" loading="lazy"></p>
<ol start="14">
<li>最后，将新打包好的<code>SYSTEM</code>文件替换EmuELEC启动盘中的<code>SYSTEM</code>文件。</li>
</ol>
<p>以上，EmuELEC系统的SYSTEM文件就已经完成修改了，开机进入EmuELEC系统，相关配置已经生效。</p>
<div class="custom-container tip"><p class="custom-container-title">关于 SYSTEM 文件</p>
<p>本篇文章的第2～4、13步骤可以替换为：</p>
<p>将制作好的EmuELEC启动盘里的<code>kernel.img</code>文件复制过来，放到脚本文件<code>kernel.sh</code>所在目录（本例：<code>~/test</code>）</p>
</div>
</template>
