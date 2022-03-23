<template><h2 id="开启" tabindex="-1"><a class="header-anchor" href="#开启" aria-hidden="true">#</a> 开启</h2>
<p>按手柄<kbd>START</kbd>键，调出【主菜单】，选择【EMUELEC SETTINGS】</p>
<p><img src="@source/more/assets/more_2-1.png" alt="more_2-1.png" loading="lazy"></p>
<p>打开【总是显示开机视频】</p>
<p><img src="@source/more/assets/more_2-2.png" alt="more_2-2.png" loading="lazy"></p>
<h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h2>
<p>ssh连接到EmuELEC系统，输入以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> /usr/bin/show_splash.sh /storage/.config/emuelec/scripts/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/more/assets/more_2-3.png" alt="more_2-3.png" loading="lazy"></p>
<p>进入目录：<code>/storage/.config/emuelec/scripts/</code>，打开<code>show_splash.sh</code>文件，</p>
<p>将<u>VIDEOSPLASH=&quot;/usr/config/splash/emuelec_intro_1080p.mp4&quot;</u>修改成</p>
<p><u>VIDEOSPLASH=&quot;/storage/.config/splash/emuelec_intro_1080p.mp4&quot;</u>，然后保存</p>
<p><img src="@source/more/assets/more_2-4.png" alt="more_2-4.png" loading="lazy"></p>
<p>再进入目录：<code>/storage/.config/</code>，打开<code>autostart.sh</code>文件，添加如下内容，然后保存</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Show splash creen </span>
/storage/.config/emuelec/scripts/show_splash.sh intro
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/more/assets/more_2-5.png" alt="more_2-5.png" loading="lazy"></p>
<h2 id="更换" tabindex="-1"><a class="header-anchor" href="#更换" aria-hidden="true">#</a> 更换</h2>
<p>最后进入目录：<code>/storage/.config/splash/</code>，将此目录下的<code>emuelec_intro_1080p.mp4</code>视频文件替换成你的视频，保持文件名称不变，仍是<code>emuelec_intro_1080p.mp4</code>这个名字。</p>
<p>以上步骤完成之后，重启EmuELEC系统，看看开机视频是否更改成功了。</p>
</template>
