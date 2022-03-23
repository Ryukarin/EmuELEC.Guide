<template><h2 id="进入系统" tabindex="-1"><a class="header-anchor" href="#进入系统" aria-hidden="true">#</a> 进入系统</h2>
<p>从TF卡/U盘顺利启动，启动画面如下，正在扩容分区，格式化等操作，完成后会自动重启</p>
<p><img src="@source/guide/assets/Snipaste_2-1.png" alt="Snipaste_2-1" loading="lazy"></p>
<p>重启后，开始进入系统，第一次系统加载时间会长一些，耐心等待</p>
<p><img src="@source/guide/assets/Snipaste_2-2.png" alt="Snipaste_2-2" loading="lazy"></p>
<p>经过耐心的等待，顺利进入系统，画面如下</p>
<p><img src="@source/guide/assets/Snipaste_2-3.png" alt="Snipaste_2-3" loading="lazy"></p>
<h2 id="emulationstation设置" tabindex="-1"><a class="header-anchor" href="#emulationstation设置" aria-hidden="true">#</a> EmulationStation设置</h2>
<h3 id="手柄映射" tabindex="-1"><a class="header-anchor" href="#手柄映射" aria-hidden="true">#</a> 手柄映射</h3>
<p>手柄连接到设备上，系统会自动识别到，长按手柄上任意一个按键来映射手柄</p>
<p><img src="@source/guide/assets/Snipaste_2-4.png" alt="Snipaste_2-4" loading="lazy"></p>
<p>按照提示映射你的手柄</p>
<p><img src="@source/guide/assets/Snipaste_2-5.png" alt="Snipaste_2-5" loading="lazy"></p>
<h3 id="语言时区设置" tabindex="-1"><a class="header-anchor" href="#语言时区设置" aria-hidden="true">#</a> 语言时区设置</h3>
<p>按下手柄的<kbd>START</kbd>键调出主菜单【MAIN MENU】，选择【SYSTEM SETTINGS】</p>
<blockquote>
<p>手柄<kbd>A</kbd>键为确认，<kbd>B</kbd>键为返回。</p>
</blockquote>
<p><img src="@source/guide/assets/Snipaste_2-6.png" alt="Snipaste_2-6" loading="lazy"></p>
<p>选择【LANGUAGE】</p>
<p><img src="@source/guide/assets/Snipaste_2-7.png" alt="Snipaste_2-7" loading="lazy"></p>
<p>选择【简体中文】</p>
<p><img src="@source/guide/assets/Snipaste_2-8.png" alt="Snipaste_2-8" loading="lazy"></p>
<p>返回到【SYSTEM SETTINGS】，选择【TIMEZONE】</p>
<p><img src="@source/guide/assets/Snipaste_2-9.png" alt="Snipaste_2-9" loading="lazy"></p>
<p>选择【ASIA/SHANGHAI】</p>
<p><img src="@source/guide/assets/Snipaste_2-10.png" alt="Snipaste_2-10" loading="lazy"></p>
<p>然后再返回到【SYSTEM SETTINGS】，确认语言和时区</p>
<p><img src="@source/guide/assets/Snipaste_2-11.png" alt="Snipaste_2-11" loading="lazy"></p>
<p>再次按手柄<kbd>B</kbd>键返回，跳出【EmulationStation will restart】提示，选【YES】</p>
<p><img src="@source/guide/assets/Snipaste_2-12.png" alt="Snipaste_2-12" loading="lazy"></p>
<p>然后 EmulationStation 重启之后，语言和时区就变成所设定的语言和时区了。</p>
<h3 id="网络设置" tabindex="-1"><a class="header-anchor" href="#网络设置" aria-hidden="true">#</a> 网络设置</h3>
<p>连接网络有两种方式，一是有线网络，二是无线WiFi，有线直接将网线接入设备即可，下面来说说WiFi的连接设置。</p>
<p>按下手柄的<kbd>START</kbd>键调出【主菜单】，选择【网络设置】</p>
<p><img src="@source/guide/assets/Snipaste_2-13.png" alt="Snipaste_2-13" loading="lazy"></p>
<p>打开【启动WIFI】</p>
<p><img src="@source/guide/assets/Snipaste_2-14.png" alt="Snipaste_2-14" loading="lazy"></p>
<p>然后输入【WiFi名称】和【WiFi密码】来连接WiFi</p>
<p><img src="@source/guide/assets/Snipaste_2-15.png" alt="Snipaste_2-15" loading="lazy"></p>
<p>退出【主菜单】再重新进入，可以看到最下面有了IP地址（记住，后面会用到），或者屏幕右上角的WiFi图标出现，说明WiFi连接成功</p>
<p><img src="@source/guide/assets/Snipaste_2-16.png" alt="Snipaste_2-16" loading="lazy"></p>
<h2 id="retroarch设置" tabindex="-1"><a class="header-anchor" href="#retroarch设置" aria-hidden="true">#</a> RetroArch设置</h2>
<h3 id="中文界面设置" tabindex="-1"><a class="header-anchor" href="#中文界面设置" aria-hidden="true">#</a> 中文界面设置</h3>
<p>使用ssh登陆工具（MobaXterm、WinSCP之类）登陆到你的设备</p>
<p>打开MobaXterm，点击【Start local terminal】开启一个本地终端</p>
<p><img src="@source/guide/assets/Snipaste_2-17.png" alt="Snipaste_2-17" loading="lazy"></p>
<p>输入命令<code>ssh root@192.168.x.y</code>，如需输入密码，密码为emuelec</p>
<blockquote>
<p>192.168.x.y是你设备的IP地址，就是上面连接网络获取到的IP地址。</p>
<p>连接成功后如下图所示，左侧红框是EmuELEC设备的目录结构。</p>
</blockquote>
<p><img src="@source/guide/assets/Snipaste_2-18.png" alt="Snipaste_2-18" loading="lazy"></p>
<p>进入下图左上红框的位置：<code>/tmp/assets/ozone/</code>，替换这两个字体文件。</p>
<blockquote>
<p>字体文件放在本站的【资源下载】中，将下载好的字体文件直接拖拽进去即可，左下方会有上传进度显示，有替换提示框选yes；如果没有替换这两个字体，直接更改语言为中文的话，文字则会显示不全，有方块乱码。</p>
</blockquote>
<p><img src="@source/guide/assets/Snipaste_2-19.png" alt="Snipaste_2-19" loading="lazy"></p>
<p>按下手柄的<kbd>SELECT</kbd>键调出【快速进入】菜单，选择【重启RetroArch】</p>
<p><img src="@source/guide/assets/Snipaste_2-20.png" alt="Snipaste_2-20" loading="lazy"></p>
<p>进入到RetroArch，选择【Settings】➡【User】</p>
<p><img src="@source/guide/assets/Snipaste_2-21.png" alt="Snipaste_2-21" loading="lazy"></p>
<p>选择【Language】➡【简体中文】</p>
<p><img src="@source/guide/assets/Snipaste_2-22.png" alt="Snipaste_2-22" loading="lazy"></p>
<p>返回到主界面再选择【设置】➡【界面】</p>
<p><img src="@source/guide/assets/Snipaste_2-23.png" alt="Snipaste_2-23" loading="lazy"></p>
<p>选择【显示高级设置】更改为【ON】</p>
<p><img src="@source/guide/assets/Snipaste_2-24.png" alt="Snipaste_2-24" loading="lazy"></p>
<p>返回到主界面再选择【菜单】➡【配置文件】</p>
<p><img src="@source/guide/assets/Snipaste_2-25.png" alt="Snipaste_2-25" loading="lazy"></p>
<p>选择【保存当前配置】</p>
<p><img src="@source/guide/assets/Snipaste_2-26.png" alt="Snipaste_2-26" loading="lazy"></p>
<p>返回到主界面再选择【菜单】➡【退出程序】</p>
<p><img src="@source/guide/assets/Snipaste_2-27.png" alt="Snipaste_2-27" loading="lazy"></p>
<p>以上，RetroArch界面语言更改就完成了，再次进入RetroArch，完美显示中文。</p>
<h3 id="中文消息设置" tabindex="-1"><a class="header-anchor" href="#中文消息设置" aria-hidden="true">#</a> 中文消息设置</h3>
<p>但是，当我们在RetroArch中进行一些操作触发通知消息时，显示的中文有乱码，如下：</p>
<p><img src="@source/guide/assets/Snipaste_2-28.png" alt="Snipaste_2-28" loading="lazy"></p>
<p>进入下图左上红框的位置：<code>/storage/.config/retroarch/</code>，双击打开<code>retroarch.cfg</code>配置文件</p>
<p><img src="@source/guide/assets/Snipaste_2-29.png" alt="Snipaste_2-29" loading="lazy"></p>
<p>在打开<code>retroarch.cfg</code>的编辑器中点击🔍按钮，输入<code>video_font_path</code>查找</p>
<p><img src="@source/guide/assets/Snipaste_2-30.png" alt="Snipaste_2-30" loading="lazy"></p>
<p>把找到的那行等于号后面的路径更改为：<code>&quot;/tmp/assets/ozone/regular.ttf&quot;</code>，然后保存</p>
<p><img src="@source/guide/assets/Snipaste_2-31.png" alt="Snipaste_2-31" loading="lazy"></p>
<p>再次触发通知消息时，显示的中文正常了。</p>
<p><img src="@source/guide/assets/Snipaste_2-32.png" alt="Snipaste_2-32" loading="lazy"></p>
<p>当然，关于EmuELEC的基本设置还有许多，这里就不一一列举了，感兴趣的小伙伴可以自己去尝试各项功能。</p>
</template>
