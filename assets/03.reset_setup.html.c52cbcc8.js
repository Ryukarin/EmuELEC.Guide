import{_ as t,r as p,o as e,a as o,b as n,e as c,w as l,F as u,d as s,f as i}from"./app.f29b127d.js";var r="/EmuELEC.Guide/assets/more_3-1.16cc4776.png",k="/EmuELEC.Guide/assets/more_3-2.35fdca90.png",g="/EmuELEC.Guide/assets/more_3-3.d1f90eea.png",m="/EmuELEC.Guide/assets/more_3-4.b8c33b83.png";const d={},b=n("h2",{id:"\u524D\u63D0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u63D0","aria-hidden":"true"},"#"),s(" \u524D\u63D0")],-1),h=s("\u6211\u4EEC\u4FEE\u6539\u4E86\u8BED\u8A00\u4E3A\u4E2D\u6587\u540E\uFF0C\u5E73\u53F0\u6E38\u620F\u90FD\u6709\u5BF9\u5E94\u7684\u6E38\u620F\u5217\u8868\u53EF\u4EE5\u66F4\u6539\u6210\u4E2D\u6587\uFF0C\u4F46\u662F\u8FD9\u4E2A\u7CFB\u7EDF\u7684\u8BBE\u7F6E\u83DC\u5355SETUP\u5374\u65E0\u6CD5\u4FEE\u6539\uFF0C\u5176\u5B9E\u4E5F\u662F\u53EF\u4EE5\u7684\u3002\u6B63\u597D\u4E5F\u53EF\u4EE5\u987A\u4FBF\u89E3\u51B3\u56FD\u5185\u5C0F\u4F19\u4F34"),_=s("\u5B89\u88C5NDS\u6A21\u62DF\u5668drastic"),E=s("\u5931\u8D25\u7684\u95EE\u9898\u3002"),f=i(`<h2 id="\u4FEE\u6539setup\u83DC\u5355\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539setup\u83DC\u5355\u8DEF\u5F84" aria-hidden="true">#</a> \u4FEE\u6539SETUP\u83DC\u5355\u8DEF\u5F84</h2><p>\u628ASETUP\u83DC\u5355\u7684\u8DEF\u5F84\u4FEE\u6539\u6210<code>/storage/roms/setup</code>\uFF0C\u5E76\u5C06\u539FSETUP\u83DC\u5355\u8DEF\u5F84\u4E0B\u5185\u5BB9\u590D\u5236\u5230<code>/storage/roms/setup</code>\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">&#39;s/\\/usr\\/bin\\/scripts\\/setup/\\/storage\\/roms\\/setup/g&#39;</span> /storage/.config/emulationstation/es_systems.cfg
<span class="token function">cp</span> -r /usr/bin/scripts/setup/ /storage/roms/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+r+'" alt="more_3-1.png" loading="lazy"></p><p>\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u5C31\u662F\u4FEE\u6539<code>es_systems.cfg</code>\u6587\u4EF6\u7684\u5185\u5BB9\u548C\u590D\u5236SETUP\u83DC\u5355\u5185\u5BB9\u3002</p><h2 id="\u8865\u5168setup\u83DC\u5355\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u8865\u5168setup\u83DC\u5355\u56FE\u7247" aria-hidden="true">#</a> \u8865\u5168SETUP\u83DC\u5355\u56FE\u7247</h2><p>\u4E0A\u9762\u4E24\u6761\u547D\u4EE4\u5B8C\u6210\u540E\uFF0C\u539F\u7248\u7684SETUP\u83DC\u5355\u4E0B\u7684\u51E0\u4E2A\u9009\u9879\uFF08youtube\u3001bluetooth\u3001scummvm\uFF09\u6CA1\u6709\u56FE\u7247\uFF0C\u90A3\u4E48\u6211\u4EEC\u81EA\u5DF1\u8865\u51E0\u5F20\u56FE\u7247\uFF0C\u5C06\u4E0B\u52173\u5F20\u56FE\u7247\u653E\u5230<code>/storage/roms/setup/downloaded_images</code>\u76EE\u5F55\u4E0B\uFF0C\u5C31\u8865\u5168\u4E86SETUP\u83DC\u5355\u56FE\u7247\u3002\uFF08\u56FE\u7247\u4E0B\u8F7D\u5230\u672C\u7AD9\u7684\u3010\u8D44\u6E90\u4E0B\u8F7D\u3011\u27A1\u3010\u5DE5\u5177\u3011\uFF09</p><ul><li><code>youtube.png</code></li><li><code>bluetooth.png</code></li><li><code>scummvm.png</code></li></ul><p><img src="'+k+'" alt="more_3-2.png" loading="lazy"></p><h2 id="\u4FEE\u6539setup\u83DC\u5355\u4E3A\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539setup\u83DC\u5355\u4E3A\u4E2D\u6587" aria-hidden="true">#</a> \u4FEE\u6539SETUP\u83DC\u5355\u4E3A\u4E2D\u6587</h2><p>\u6253\u5F00<code>/storage/roms/setup/gamelist.xml</code>\uFF0C\u53EF\u4EE5\u5C06<u><strong>\u540D\u5B57</strong></u>\u548C<u><strong>\u63CF\u8FF0</strong></u>\u4FEE\u6539\u4E3A\u4E2D\u6587\uFF08\u5373name\u6807\u7B7E\u548Cdesc\u6807\u7B7E\uFF0C\u9700\u8981\u81EA\u5DF1\u7FFB\u8BD1\u4FEE\u6539\uFF09\uFF0C\u7136\u540E\u4FDD\u5B58\u3002</p><p><img src="'+g+'" alt="more_3-3.png" loading="lazy"></p><p>\u91CD\u542FEmulationStation\u518D\u8FDB\u5165SETUP\u83DC\u5355\u770B\u770B\uFF0C\u5DF2\u7ECF\u4FEE\u6539\u6210\u4E2D\u6587\u4E86\u3002</p><p><img src="'+m+`" alt="more_3-4.png" loading="lazy"></p><h2 id="ports\u6E38\u620F\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#ports\u6E38\u620F\u5E73\u53F0" aria-hidden="true">#</a> PORTS\u6E38\u620F\u5E73\u53F0</h2><p>\u5F53\u7136\uFF0C\u8FD8\u6709\u7CFB\u7EDF\u81EA\u5E26\u7684ports\u6E38\u620F\u5E73\u53F0\uFF0C\u4E5F\u662F\u53EF\u4EE5\u4FEE\u6539\u7684\u3002\u6839\u636E<code>es_systems.cfg</code>\u6587\u4EF6\u91CCports\u5E73\u53F0\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u6253\u5F00<code>/storage/roms/ports_scripts/gamelist.xml</code>\uFF0C\u8FDB\u884C\u7FFB\u8BD1\u4FEE\u6539\u6210\u4E2D\u6587\u5373\u53EF\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>ports<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fullname</span><span class="token punctuation">&gt;</span></span>Ports<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fullname</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manufacturer</span><span class="token punctuation">&gt;</span></span>Ports<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manufacturer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>release</span><span class="token punctuation">&gt;</span></span>Varies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>release</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hardware</span><span class="token punctuation">&gt;</span></span>port<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hardware</span><span class="token punctuation">&gt;</span></span>            
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">&gt;</span></span>/storage/roms/ports_scripts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>    <span class="token comment">&lt;!--ports\u5E73\u53F0\u8DEF\u5F84--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>extension</span><span class="token punctuation">&gt;</span></span>.sh .SH<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>extension</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">&gt;</span></span>/usr/bin/bash %ROM% -P%SYSTEM% --core=%CORE% --emulator=%EMULATOR% --controllers=&quot;%CONTROLLERSCONFIG%&quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>platform</span><span class="token punctuation">&gt;</span></span>ports<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>platform</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>theme</span><span class="token punctuation">&gt;</span></span>ports<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>theme</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u5173\u4E8Ees_systems.cfg\u6587\u4EF6</p><p><code>es_systems.cfg</code>\u6587\u4EF6\uFF1A\u5168\u8DEF\u5F84\u540D\u79F0\u4E3A<code>/storage/.config/emulationstation/es_systems.cfg</code>\u3002</p><p>\u5B83\u662FEmuELEC\u7CFB\u7EDF\u7684\u524D\u7AEFEmulationStation\uFF08\u540E\u9762\u7B80\u79F0ES\uFF09\u7684\u5E73\u53F0\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u770B\u5230\u7684\u6E38\u620F\u5E73\u53F0\u7684\u5206\u7C7B\u53CA\u76F8\u5173\u914D\u7F6E\u90FD\u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC\u3002\u6BD4\u5982NEOGEO\u5E73\u53F0\u7684\u914D\u7F6E\u5185\u5BB9\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>neogeo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>                            <span class="token comment">&lt;!--\u5E73\u53F0\u540D\u79F0--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fullname</span><span class="token punctuation">&gt;</span></span>SNK Neo-Geo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fullname</span><span class="token punctuation">&gt;</span></span>            <span class="token comment">&lt;!--\u5E73\u53F0\u5168\u79F0--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manufacturer</span><span class="token punctuation">&gt;</span></span>SNK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manufacturer</span><span class="token punctuation">&gt;</span></span>            <span class="token comment">&lt;!--\u5E73\u53F0\u5F00\u53D1\u5546--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>release</span><span class="token punctuation">&gt;</span></span>1990<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>release</span><span class="token punctuation">&gt;</span></span>                        <span class="token comment">&lt;!--\u5E73\u53F0\u53D1\u884C\u5E74\u4EFD--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hardware</span><span class="token punctuation">&gt;</span></span>console<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hardware</span><span class="token punctuation">&gt;</span></span>                <span class="token comment">&lt;!--\u5E73\u53F0\u63A7\u5236\u5668--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">&gt;</span></span>/storage/roms/neogeo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>            <span class="token comment">&lt;!--\u5E73\u53F0\u6E38\u620F\u5B58\u653E\u8DEF\u5F84--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>extension</span><span class="token punctuation">&gt;</span></span>.7z .7Z .zip .ZIP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>extension</span><span class="token punctuation">&gt;</span></span>    <span class="token comment">&lt;!--\u5E73\u53F0\u6E38\u620FROM\u6269\u5C55\u540D--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">&gt;</span></span>emuelecRunEmu.sh %ROM% -P%SYSTEM% --core=%CORE% --emulator=%EMULATOR% --controllers=&quot;%CONTROLLERSCONFIG%&quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">&gt;</span></span>        <span class="token comment">&lt;!--\u8C03\u7528\u547D\u4EE4emuelecRunEmu.sh\u8FD0\u884C\u6E38\u620F--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>platform</span><span class="token punctuation">&gt;</span></span>neogeo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>platform</span><span class="token punctuation">&gt;</span></span>                    <span class="token comment">&lt;!--\u5E73\u53F0--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>theme</span><span class="token punctuation">&gt;</span></span>neogeo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>theme</span><span class="token punctuation">&gt;</span></span>                        <span class="token comment">&lt;!--\u4E3B\u9898--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>emulators</span><span class="token punctuation">&gt;</span></span>                                    <span class="token comment">&lt;!--\u6A21\u62DF\u5668\u76F8\u5173--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>emulator</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>libretro<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>                <span class="token comment">&lt;!--\u6A21\u62DF\u5668--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cores</span><span class="token punctuation">&gt;</span></span>                                    <span class="token comment">&lt;!--\u6A21\u62DF\u5668\u6838\u5FC3\u76F8\u5173--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>core</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>fbneo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>core</span><span class="token punctuation">&gt;</span></span>    <span class="token comment">&lt;!--\u6A21\u62DF\u5668\u9ED8\u8BA4\u6838\u5FC3--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>core</span><span class="token punctuation">&gt;</span></span>mame2003_plus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>core</span><span class="token punctuation">&gt;</span></span>            <span class="token comment">&lt;!--\u6A21\u62DF\u5668\u5176\u5B83\u6838\u5FC3--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>core</span><span class="token punctuation">&gt;</span></span>fbalpha2012<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>core</span><span class="token punctuation">&gt;</span></span>            <span class="token comment">&lt;!--\u6A21\u62DF\u5668\u5176\u5B83\u6838\u5FC3--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cores</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>emulator</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>emulators</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5982\u9700\u4FEE\u6539\u76F8\u5173\u5185\u5BB9\uFF0C\u5982\u6DFB\u52A0\u6A21\u62DF\u5668\u6838\u5FC3\u3001\u4FEE\u6539\u9ED8\u8BA4\u6A21\u62DF\u5668\u6838\u5FC3\u7B49\uFF0C\u6309\u7167\u6B63\u786E\u683C\u5F0F\u4FEE\u6539</p></div>`,18);function x(S,v){const a=p("RouterLink");return e(),o(u,null,[b,n("p",null,[h,c(a,{to:"/more/04.install_drastic.html"},{default:l(()=>[_]),_:1}),E]),f],64)}var y=t(d,[["render",x]]);export{y as default};
