import{_ as i,r,o as l,a as c,b as a,e as n,w as o,F as d,f as e,d as s}from"./app.f29b127d.js";var u="/EmuELEC.Guide/assets/more_4-1.56eb4116.png",m="/EmuELEC.Guide/assets/more_4-2.1dea9e1d.png",_="/EmuELEC.Guide/assets/more_4-3.f38cdea4.png",b="/EmuELEC.Guide/assets/more_4-4.5bad076c.png",h="/EmuELEC.Guide/assets/more_4-5.e29a5b8a.png";const g={},k=e('<h2 id="\u524D\u63D0" tabindex="-1"><a class="header-anchor" href="#\u524D\u63D0" aria-hidden="true">#</a> \u524D\u63D0</h2><p>EmuELEC\u7CFB\u7EDF\u662F\u652F\u6301Nintendou\u7684NDS\u5E73\u53F0\u7684\uFF0C\u4F46\u662F\u7CFB\u7EDF\u6CA1\u6709\u76F4\u63A5\u914D\u7F6E\u597D\u6A21\u62DF\u5668\uFF0C\u53EA\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5B89\u88C5\u9009\u9879\u3002\u8FDB\u5165\u8BBE\u7F6ESETUP\u83DC\u5355\uFF0C\u9009\u62E9\u3010Install Drastic\u3011\u8FDB\u884C\u5B89\u88C5Drastic\uFF0C\u63D0\u793A\u5B89\u88C5\u5B8C\u6210\uFF08\u5B9E\u9645\u5E94\u8BE5\u6CA1\u6709\u5B89\u88C5\u6210\u529F\uFF0C\u6216\u8005\u51FA\u73B0\u9519\u8BEF\u63D0\u793A\uFF1A<u>wget: error getting response: Connection reset by peer</u>\uFF09\u3002</p><p><img src="'+u+'" alt="more_4-1.png" loading="lazy"></p><p>\u7136\u540E\u628ANDS\u5E73\u53F0\u7684\u6E38\u620FROM\u6587\u4EF6\u653E\u5165roms\u5BF9\u5E94\u76EE\u5F55\u4E0B\uFF0C\u91CD\u542FEmulationStation\u4E4B\u540E\u8FDB\u5165NDS\u5E73\u53F0\u6E38\u620F\uFF0C\u51FA\u73B0\u9519\u8BEF\uFF1A</p><p><img src="'+m+'" alt="more_4-2.png" loading="lazy"></p><p>\u4E0B\u9762\u5C31\u6765\u5206\u6790\u4E00\u4E0B\u539F\u56E0\uFF0C\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><h2 id="\u539F\u56E0\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0\u5206\u6790" aria-hidden="true">#</a> \u539F\u56E0\u5206\u6790</h2>',7),E=s("\u5176\u5B9E\uFF0C\u627E\u5230\u5B89\u88C5\u811A\u672C"),f=a("code",null,"/storage/roms/setup/install_drastic.sh",-1),v=s("\uFF08"),L=s("\u4FEE\u6539\u7CFB\u7EDF\u8BBE\u7F6E\u83DC\u5355"),q=s("\u4E4B\u540E\u7684\u4F4D\u7F6E\uFF0C\u539F\u4F4D\u7F6E\u4E3A"),C=a("code",null,"/usr/bin/scripts/setup/install_drastic.sh",-1),x=s("\uFF09\uFF0C\u67E5\u770B\u90E8\u5206\u5185\u5BB9\uFF1A"),D=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">..</span>.
<span class="token keyword">if</span> <span class="token function">grep</span> -q <span class="token string">&quot;aarch64&quot;</span> /etc/motd<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">LINK</span><span class="token operator">=</span><span class="token string">&quot;https://raw.githubusercontent.com/shantigilbert/binaries-1/master/drastic.tar.gz&quot;</span>
<span class="token keyword">else</span>
    <span class="token assign-left variable">LINK</span><span class="token operator">=</span><span class="token string">&quot;https://raw.githubusercontent.com/shantigilbert/binaries/master/odroid-xu4/drastic.tar.gz&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">ES_FOLDER</span><span class="token operator">=</span><span class="token string">&quot;/storage/.emulationstation&quot;</span>
<span class="token assign-left variable">LINKDEST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$ES_FOLDER</span>/scripts/drastic.tar.gz&quot;</span>
<span class="token assign-left variable">CFG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$ES_FOLDER</span>/es_systems.cfg&quot;</span>
<span class="token assign-left variable">EXE</span><span class="token operator">=</span><span class="token string">&quot;emuelecRunEmu.sh&quot;</span>

<span class="token function">mkdir</span> -p <span class="token string">&quot;<span class="token variable">$ES_FOLDER</span>/scripts/&quot;</span>

<span class="token function">wget</span> -O <span class="token variable">$LINKDEST</span> <span class="token variable">$LINK</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u811A\u672C\u5185\u5BB9\u6216\u62A5\u9519\u4FE1\u606F\uFF0C\u53EF\u4EE5\u770B\u51FA\u662F\u4E0B\u8F7D<code>drastic.tar.gz</code>\u6587\u4EF6\u65F6\u51FA\u9519\u4E86\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h2>`,3),N=s("\u524D\u9762"),S=s("\u4FEE\u6539\u7CFB\u7EDF\u8BBE\u7F6E\u83DC\u5355"),z=s("\u5B8C\u6210\u540E\uFF0C\u5230\u672C\u7AD9\u7684\u3010\u8D44\u6E90\u4E0B\u8F7D\u3011\u27A1\u3010\u5DE5\u5177\u3011\u4E0B\u8F7D\u4EE5\u4E0B\u4E09\u4E2A\u6587\u4EF6\uFF1A"),y=e('<ul><li><code>install_drastic.sh</code>\uFF08\u811A\u672C\u5DF2\u7ECF\u4FEE\u6539\uFF09</li><li><code>drastic_aarch64.tar.gz</code></li><li><code>drastic_no_aarch64.tar.gz</code></li></ul><p>\u7136\u540E\u628A\u8FD9\u4E09\u4E2A\u6587\u4EF6\u653E\u5165\u5230EmuELEC\u542F\u52A8\u76D8\u7684EMUELEC\u5206\u533A\u7684\u6839\u76EE\u5F55</p><p><img src="'+_+`" alt="more_4-3.png" loading="lazy"></p><p>\u7136\u540E\u542F\u52A8EmuELEC\u7CFB\u7EDF\uFF0Cssh\u8FDE\u63A5\u5230EmuELEC\uFF0C\u7136\u540E\u6267\u884C\u4E0B\u9762\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> -f /flash/install_drastic.sh /storage/roms/setup/
<span class="token function">chmod</span> <span class="token number">755</span> /storage/roms/setup/install_drastic.sh
<span class="token comment"># \u5C06\u6587\u4EF6/storage/roms/setup/install_drastic.sh\u66FF\u6362\u6210\u4E0B\u8F7D\u7684install_drastic.sh</span>
<span class="token comment"># \u4FEE\u6539install_drastic.sh\u7684\u6743\u9650</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="`+b+'" alt="more_4-4.png" loading="lazy"></p><p>\u7136\u540E\u518D\u6B21\u9009\u62E9\u3010Install Drastic\u3011\u8FDB\u884C\u5B89\u88C5Drastic\uFF0C\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\u518D\u8FDB\u5165\u6E38\u620F\u8BD5\u8BD5\u770B\uFF0C\u54E6\u4E86\uFF01\u6B63\u5E38\u8FDB\u5165\u6E38\u620F\u754C\u9762\u3002\u53EA\u662F\u624B\u67C4\u6309\u952E\u9700\u8981\u91CD\u65B0\u6620\u5C04\u4E00\u4E0B\u3002</p><p><img src="'+h+'" alt="more_4-5.png" loading="lazy"></p><h2 id="\u914D\u7F6Edrastic" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Edrastic" aria-hidden="true">#</a> \u914D\u7F6EDrastic</h2><p>Drastic\u867D\u7136\u5B89\u88C5\u597D\u4E86\uFF0C\u4F46\u662F\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u914D\u7F6E\u3002\u5148\u628A\u6E38\u620FROM\u6587\u4EF6\u653E\u5165roms\u5BF9\u5E94\u76EE\u5F55\u4E0B\uFF0C\u7136\u540E\u8FDB\u5165\u6B64\u5E73\u53F0\u6E38\u620F\uFF0C\u4F1A\u53D1\u73B0\u624B\u67C4\u6309\u952E\u6620\u5C04\u201C\u9A74\u5934\u4E0D\u5BF9\u9A6C\u5634\u201C\u3002\u6B64\u65F6\uFF0C\u9700\u8981\u501F\u4E00\u4E2A\u5916\u63A5USB\u952E\u76D8\u8FDB\u884C\u8F85\u52A9\u6620\u5C04\u3002\u6309\u4E0B\u952E\u76D8<kbd>M</kbd>\u952E\uFF0C\u5728\u83DC\u5355\u91CC\uFF0C\u9009\u62E9\u3010Configure Controls\u3011\uFF0C\u53EF\u5BF9\u624B\u67C4\u8FDB\u884C\u6620\u5C04\u3002</p>',10),w=s("\u5177\u4F53\u5185\u5BB9\u53EF\u53C2\u7167"),I={href:"https://post.smzdm.com/p/ax0r9n23/",target:"_blank",rel:"noopener noreferrer"},R=s("\u4EBA\u4E2D\u65E5\u6708\u5927\u4F6C\u5E16\u5B50");function F(O,G){const t=r("RouterLink"),p=r("ExternalLinkIcon");return l(),c(d,null,[k,a("p",null,[E,f,v,n(t,{to:"/more/03.reset_setup.html"},{default:o(()=>[L]),_:1}),q,C,x]),D,a("p",null,[N,n(t,{to:"/more/03.reset_setup.html"},{default:o(()=>[S]),_:1}),z]),y,a("p",null,[w,a("a",I,[R,n(p)])])],64)}var $=i(g,[["render",F]]);export{$ as default};
