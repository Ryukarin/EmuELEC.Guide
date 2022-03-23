<template><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<p>重新打包镜像文件，准确来说应该是修改镜像文件（img格式）。</p>
<ul>
<li>Windows环境</li>
<li>DiskGenius磁盘工具</li>
<li>修改过的<code>kernel.img</code>文件</li>
<li>修改过的<code>SYSTEM</code>文件</li>
</ul>
<h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h2>
<ol>
<li>首先将原版镜像解压，再将之前修改的<code>keinel.img</code>和<code>SYSTEM</code>文件复制到同一个路径</li>
</ol>
<p><img src="@source/more/assets/more_99-1.png" alt="more_99-1" loading="lazy"></p>
<ol start="2">
<li>打开DiskGenius磁盘工具，选择【磁盘】菜单，再选择【打开虚拟磁盘文件】</li>
</ol>
<p><img src="@source/more/assets/more_99-2.png" alt="more_99-2" loading="lazy"></p>
<ol start="3">
<li>选择刚刚解压的原版镜像文件</li>
</ol>
<p><img src="@source/more/assets/more_99-3.png" alt="more_99-3" loading="lazy"></p>
<ol start="4">
<li>打开后，左侧出现虚拟磁盘文件的分区情况</li>
</ol>
<p><img src="@source/more/assets/more_99-4.png" alt="more_99-4" loading="lazy"></p>
<ol start="5">
<li>选择EMUELEC分区，选择浏览文件</li>
</ol>
<p><img src="@source/more/assets/more_99-5.png" alt="more_99-5" loading="lazy"></p>
<ol start="6">
<li>再空白处右击，快捷菜单选择【复制文件到当前分区】</li>
</ol>
<p><img src="@source/more/assets/more_99-6.png" alt="more_99-6" loading="lazy"></p>
<ol start="7">
<li>选择之前修改好的<code>kernel.img</code>和<code>SYSTEM</code>文件</li>
</ol>
<p><img src="@source/more/assets/more_99-7.png" alt="more_99-7" loading="lazy"></p>
<ol start="8">
<li>跳出弹窗，选择【全部替换】</li>
</ol>
<p><img src="@source/more/assets/more_99-8.png" alt="more_99-8" loading="lazy"></p>
<ol start="9">
<li>替换完成后，确认这两个文件的时间是否变成之前修改的时间</li>
</ol>
<p><img src="@source/more/assets/more_99-9.png" alt="more_99-9" loading="lazy"></p>
<ol start="10">
<li>再选择【磁盘】菜单，再选择【关闭虚拟磁盘文件】</li>
</ol>
<p><img src="@source/more/assets/more_99-10.png" alt="more_99-10" loading="lazy"></p>
<ol start="11">
<li>最后再看看镜像文件，时间已经更新为现在时间，说明镜像文件修改成功</li>
</ol>
<p><img src="@source/more/assets/more_99-11.png" alt="more_99-11" loading="lazy"></p>
<p>以上，img格式的镜像文件就修改好了。</p>
<p>把上面修改好的镜像文件用烧录工具烧录到你的TF卡/U盘中即可。</p>
<div class="custom-container tip"><p class="custom-container-title">关于img格式镜像文件</p>
<p>此文没有用Linux下的方法制作img格式镜像文件，是觉得Windows平台下制作修改更简单，当然Linux下也是可以的，就是有点麻烦。下面做个大概介绍：</p>
<ol>
<li><code>dd</code>命令新建空白镜像</li>
<li><code>losetup</code>命令挂载空白镜像到loop设备</li>
<li><code>fdisk</code>命令对loop设备分区，设置启动分区</li>
<li><code>losetup -d</code>命令断开第2步挂载的loop设备</li>
<li><code>fdisk -l</code>查看空白镜像的分区情况</li>
<li><code>losetup</code>命令将空白镜像的两个分区分别挂载到loop设备</li>
<li><code>mkfs</code>命令格式化分区</li>
<li><code>mount</code>命令挂载第6步的loop设备到目录</li>
<li>将对应的文件拷贝到挂载目录</li>
<li><code>umount</code>命令卸载分区，<code>losetup -d</code>命令断开第6步挂载的loop设备</li>
</ol>
</div>
</template>
