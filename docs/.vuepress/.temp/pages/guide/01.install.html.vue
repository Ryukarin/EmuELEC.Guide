<template><h2 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h2>
<p>到<a href="https://github.com/EmuELEC/EmuELEC/releases" target="_blank" rel="noopener noreferrer">EmuELEC开源项目<ExternalLinkIcon/></a>下载对应设备的镜像，或者到本站提供的网盘链接下载（只提供通用版本）。</p>
<ul>
<li><code>EmuELEC-Amlogic.aarch64-xxx-generic.img.gz</code> 适用于 S905、S905x、S905l、S905w 等</li>
<li><code>EmuELEC-Amlogic-ng.aarch64-xxx-generic.img.gz</code> 适用于 S905x2、S905x3、S922x、A311D（注意 <code>ng</code>）</li>
<li><code>EmuELEC-OdroidGoAdvance.aarch64-xxx-odroidgo2.img.gz</code> 适用于 Odroid-GO Advance 和 Odroid-GO Super</li>
<li><code>EmuELEC-GameForce.aarch64-xxx-chi.img.gz</code> 适用于 GameForce</li>
</ul>
<p>根据自己设备的芯片型号，来下载对应的镜像。</p>
<p>本教程是以百视通R3300L为例来写的，因此需要下载<code>EmuELEC-Amlogic.aarch64-xxx-generic.img.gz</code> 镜像。</p>
<h2 id="烧录镜像" tabindex="-1"><a class="header-anchor" href="#烧录镜像" aria-hidden="true">#</a> 烧录镜像</h2>
<p>准备一张容量大小适当的TF卡/U盘，并准备好镜像烧录工具（推荐 <a href="https://www.balena.io/etcher/" target="_blank" rel="noopener noreferrer">Etcher<ExternalLinkIcon/></a>）。</p>
<ol>
<li>
<p>首先把下载好的镜像包<code>EmuELEC-Amlogic.aarch64-4.3-Generic.img.gz</code>解压缩，得到镜像文件<code>EmuELEC-Amlogic.aarch64-4.3-Generic.img</code></p>
</li>
<li>
<p>打开镜像烧录工具 Etcher</p>
<p>①选择刚刚解压缩后的镜像文件；</p>
<p>②选择要烧录到的TF卡/U盘；</p>
<p>③点击【Flash】按钮进行烧录。</p>
<p><img src="@source/guide/assets/Snipaste_1-1.png" alt="Snipaste_1-1" loading="lazy"></p>
</li>
<li>
<p>等待烧录完成</p>
<p><img src="@source/guide/assets/Snipaste_1-2.png" alt="Snipaste_1-2" loading="lazy"></p>
</li>
<li>
<p>完成如下图，如有提示格式化磁盘之类的弹窗，请选择【NO】</p>
<p><img src="@source/guide/assets/Snipaste_1-3.png" alt="Snipaste_1-3" loading="lazy"></p>
</li>
</ol>
<h2 id="替换dtb文件" tabindex="-1"><a class="header-anchor" href="#替换dtb文件" aria-hidden="true">#</a> 替换DTB文件</h2>
<p>烧录完成后，会出现一个新的EMUELEC分区，打开后如下图所示，其中<code>dtb.img</code>（设备树文件）是需要替换为你的设备相匹配的<code>dtb.img</code>文件。</p>
<p><img src="@source/guide/assets/Snipaste_1-4.png" alt="Snipaste_1-4" loading="lazy"></p>
<p>打开<code>device_treess</code>目录，里面有很多常见的DTB文件，找到对应的DTB文件重命名为<code>dtb.img</code>并替换EMUELEC分区根目录的<code>dtb.img</code>文件。</p>
<p><img src="@source/guide/assets/Snipaste_1-5.png" alt="Snipaste_1-5" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<ul>
<li>如何确认设备的DTB</li>
</ul>
<p>如果你的设备已经装了Android系统，那么安装一个Terminal，输入如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> /proc/device-tree/amlogic-dt-id
gxl_p211_1g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/guide/assets/Snipaste_1-6.png" alt="Snipaste_1-6" loading="lazy"></p>
<p><strong>gxl_p211_1g</strong>就是你的设备所需要的DTB文件的名称（没有就找名称相似、接近的）；如果此方法不成功，就只能一个一个尝试；再不行就是没有专用的DTB文件，放弃吧。（p211是板子型号，1g是内存大小，1gbit是千兆网口）</p>
<ul>
<li>切换系统</li>
</ul>
<p>在上述操作时，可以顺便安装一个<code>Reboot to LibreELEC.apk</code>软件，方便从Android系统切换到EmuELEC系统。</p>
</div>
<p>以上，EmuELEC系统启动盘就制作好了，把制作好的启动盘插到你的设备上，设置引导TF卡/U盘启动，就会进入EmuELEC系统了。</p>
</template>
