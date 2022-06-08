<template><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2>
<p>之前有个小伙伴问了我一个问题，是关于EmuELEC外置USB存储设备挂载游戏ROM的，在4.2版本之前，他都是正常使用的，后来出了4.3，4.4以及4.5之后，升级到了4.3之后的版本，他之前的USB存储设备连接上盒子，启动系统却没有游戏加载出来，让我帮他看看是什么情况。于是就有了此文。</p>
<h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h2>
<p>我的盒子是R3300L，是S905l的芯片，只能升级到4.3，之后的版本不再支持S905l的了。但是解决方法和思路应该是一样的。下面就来说说思路和方法。</p>
<p>到官网看了下<a href="https://github.com/EmuELEC/EmuELEC/wiki/ROMS-on-USB-media" target="_blank" rel="noopener noreferrer">外置USB存储设备挂载游戏ROM的方法<ExternalLinkIcon/></a>，试了一下，果然不行。尝试换个文件系统格式，最终确认只有FAT32格式的文件系统是可以正常加载的。</p>
<p>又在官方的代码库中扒拉好久，找到了相关的脚本<a href="https://raw.githubusercontent.com/EmuELEC/EmuELEC/7d51b8e7105c9bad63c8866554071e16b72b08c0/packages/sx05re/emuelec/bin/mount_romfs.sh" target="_blank" rel="noopener noreferrer"><code>mount_romfs.sh</code><ExternalLinkIcon/></a>。才发现原来如此：</p>
<p>方法有二：</p>
<p><strong>在两种方法之前，首先把你的USB存储设备的标卷改名为EEROMS。</strong></p>
<p><strong>其一</strong></p>
<p>直接修改脚本，简单省事，只需要把脚本的ROM_FS_TYPE=&quot;vfat&quot;等号后面改为你USB存储设备的文件系统格式，默认为vfat（即FAT32格式），比如你的USB存储设备是ntfs格式，那这行改为 <code>ROM_FS_TYPE=&quot;ntfs&quot;</code>，然后保存脚本，脚本位置为<code>/usr/bin/mount_romfs.sh</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token comment"># SPDX-License-Identifier: GPL-2.0-or-later</span>
<span class="token comment"># Copyright (C) 2019-present Shanti Gilbert (https://github.com/shantigilbert)</span>

<span class="token comment"># Source predefined functions and variables</span>
<span class="token builtin class-name">.</span> /etc/profile

<span class="token comment"># fat32 is default</span>
<span class="token assign-left variable">ROM_FS_TYPE</span><span class="token operator">=</span><span class="token string">"vfat"</span>	<span class="token comment">#如果你的USB存储设备是ntfs格式，那这行改为 ROM_FS_TYPE="ntfs"</span>

<span class="token comment"># Get EEROMS filetype</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -e <span class="token string">"/flash/ee_fstype"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">EE_FS_TYPE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> <span class="token string">"/flash/ee_fstype"</span><span class="token variable">)</span></span>
    
    <span class="token keyword">case</span> <span class="token variable">$EE_FS_TYPE</span> <span class="token keyword">in</span>
    <span class="token string">"ntfs"</span><span class="token operator">|</span><span class="token string">"ext4"</span><span class="token operator">|</span><span class="token string">"exfat"</span><span class="token punctuation">)</span>
        <span class="token assign-left variable">ROM_FS_TYPE</span><span class="token operator">=</span><span class="token variable">${EE_FS_TYPE}</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token comment"># Failsafe</span>
        <span class="token assign-left variable">ROM_FS_TYPE</span><span class="token operator">=</span><span class="token string">"vfat"</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span> 
<span class="token keyword">fi</span>

<span class="token assign-left variable">EE_FS_TYPE</span><span class="token operator">=</span><span class="token variable">${ROM_FS_TYPE}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><strong>其二</strong></p>
<p>根据脚本的内容可知，在自动获取你的USB存储设备的文件系统格式时，没有正确的获取到。于是我写了个脚本<a href="https://github.com/Ryukarin/MyFiles/blob/main/EEmountusb/ee_mountusb.sh" target="_blank" rel="noopener noreferrer"><code>ee_mountusb.sh</code><ExternalLinkIcon/></a>。</p>
<p>首先ssh工具连接到emuelec系统，下载此脚本传输到emuelec中，并执行<code>sh ee_mountusb.sh</code></p>
<p>最后，重启EmulationStation，USB设备中的游戏即可正常加载。</p>
<hr>
<p>以上就是解决EmuELEC外置USB存储设备挂载游戏ROM不成功的问题的方法，两种方法随意选择，都可以解决。</p>
</template>
