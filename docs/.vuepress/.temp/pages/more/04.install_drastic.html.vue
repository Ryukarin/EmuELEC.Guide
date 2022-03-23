<template><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2>
<p>EmuELEC系统是支持Nintendou的NDS平台的，但是系统没有直接配置好模拟器，只提供了一个安装选项。进入设置SETUP菜单，选择【Install Drastic】进行安装Drastic，提示安装完成（实际应该没有安装成功，或者出现错误提示：<u>wget: error getting response: Connection reset by peer</u>）。</p>
<p><img src="@source/more/assets/more_4-1.png" alt="more_4-1.png" loading="lazy"></p>
<p>然后把NDS平台的游戏ROM文件放入roms对应目录下，重启EmulationStation之后进入NDS平台游戏，出现错误：</p>
<p><img src="@source/more/assets/more_4-2.png" alt="more_4-2.png" loading="lazy"></p>
<p>下面就来分析一下原因，如何解决这个问题。</p>
<h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析" aria-hidden="true">#</a> 原因分析</h2>
<p>其实，找到安装脚本<code>/storage/roms/setup/install_drastic.sh</code>（<RouterLink to="/more/03.reset_setup.html">修改系统设置菜单</RouterLink>之后的位置，原位置为<code>/usr/bin/scripts/setup/install_drastic.sh</code>），查看部分内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>.
<span class="token keyword">if</span> <span class="token function">grep</span> -q <span class="token string">"aarch64"</span> /etc/motd<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">LINK</span><span class="token operator">=</span><span class="token string">"https://raw.githubusercontent.com/shantigilbert/binaries-1/master/drastic.tar.gz"</span>
<span class="token keyword">else</span>
    <span class="token assign-left variable">LINK</span><span class="token operator">=</span><span class="token string">"https://raw.githubusercontent.com/shantigilbert/binaries/master/odroid-xu4/drastic.tar.gz"</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">ES_FOLDER</span><span class="token operator">=</span><span class="token string">"/storage/.emulationstation"</span>
<span class="token assign-left variable">LINKDEST</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$ES_FOLDER</span>/scripts/drastic.tar.gz"</span>
<span class="token assign-left variable">CFG</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$ES_FOLDER</span>/es_systems.cfg"</span>
<span class="token assign-left variable">EXE</span><span class="token operator">=</span><span class="token string">"emuelecRunEmu.sh"</span>

<span class="token function">mkdir</span> -p <span class="token string">"<span class="token variable">$ES_FOLDER</span>/scripts/"</span>

<span class="token function">wget</span> -O <span class="token variable">$LINKDEST</span> <span class="token variable">$LINK</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>从上面的脚本内容或报错信息，可以看出是下载<code>drastic.tar.gz</code>文件时出错了。</p>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2>
<p>前面<RouterLink to="/more/03.reset_setup.html">修改系统设置菜单</RouterLink>完成后，到本站的【资源下载】➡【工具】下载以下三个文件：</p>
<ul>
<li><code>install_drastic.sh</code>（脚本已经修改）</li>
<li><code>drastic_aarch64.tar.gz</code></li>
<li><code>drastic_no_aarch64.tar.gz</code></li>
</ul>
<p>然后把这三个文件放入到EmuELEC启动盘的EMUELEC分区的根目录</p>
<p><img src="@source/more/assets/more_4-3.png" alt="more_4-3.png" loading="lazy"></p>
<p>然后启动EmuELEC系统，ssh连接到EmuELEC，然后执行下面命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> -f /flash/install_drastic.sh /storage/roms/setup/
<span class="token function">chmod</span> <span class="token number">755</span> /storage/roms/setup/install_drastic.sh
<span class="token comment"># 将文件/storage/roms/setup/install_drastic.sh替换成下载的install_drastic.sh</span>
<span class="token comment"># 修改install_drastic.sh的权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/more/assets/more_4-4.png" alt="more_4-4.png" loading="lazy"></p>
<p>然后再次选择【Install Drastic】进行安装Drastic，安装完成之后再进入游戏试试看，哦了！正常进入游戏界面。只是手柄按键需要重新映射一下。</p>
<p><img src="@source/more/assets/more_4-5.png" alt="more_4-5.png" loading="lazy"></p>
<h2 id="配置drastic" tabindex="-1"><a class="header-anchor" href="#配置drastic" aria-hidden="true">#</a> 配置Drastic</h2>
<p>Drastic虽然安装好了，但是还需要进一步配置。先把游戏ROM文件放入roms对应目录下，然后进入此平台游戏，会发现手柄按键映射“驴头不对马嘴“。此时，需要借一个外接USB键盘进行辅助映射。按下键盘<kbd>M</kbd>键，在菜单里，选择【Configure  Controls】，可对手柄进行映射。</p>
<p>具体内容可参照<a href="https://post.smzdm.com/p/ax0r9n23/" target="_blank" rel="noopener noreferrer">人中日月大佬帖子<ExternalLinkIcon/></a></p>
</template>
