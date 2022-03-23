<template><p>在上一片有提到<code>gamelist.xml</code>文件，也就是游戏列表，下面我们具体说说这个游戏列表文件。</p>
<h2 id="抓取到的文件" tabindex="-1"><a class="header-anchor" href="#抓取到的文件" aria-hidden="true">#</a> 抓取到的文件</h2>
<p>当我们把游戏ROM抓取完成之后，进入到游戏ROM所在目录，会发现多出了几个子目录：</p>
<ul>
<li>
<p><code>images</code>：抓取到的游戏ROM对应的<u>游戏截图</u>、<u>游戏logo</u>、<u>游戏封面</u>以及<u>游戏同人图片</u></p>
</li>
<li>
<p><code>videos</code>：抓取到的游戏ROM对应的<u>游戏视频</u></p>
</li>
<li>
<p><code>manuals</code>：抓取到的游戏ROM对应的<u>游戏手册</u>（一般不抓取，都是外文看不懂）</p>
</li>
</ul>
<p><img src="@source/guide/assets/Snipaste_5-1.png" alt="Snipaste_5-1" loading="lazy"></p>
<p><code>images</code>、<code>videos</code>目录下，抓取到的图片和视频</p>
<p><img src="@source/guide/assets/Snipaste_5-2.png" alt="Snipaste_5-2" loading="lazy"></p>
<h2 id="游戏列表说明" tabindex="-1"><a class="header-anchor" href="#游戏列表说明" aria-hidden="true">#</a> 游戏列表说明</h2>
<p>游戏列表文件<code>gamelist.xml</code>也更新了。打开列表文件看看：</p>
<p><img src="@source/guide/assets/Snipaste_5-3.png" alt="Snipaste_5-3" loading="lazy"></p>
<p><code>gamelist.xml</code>与没抓取游戏ROM信息之前（参考第三篇文章）相比，多出了很多内容，如：游戏画面、游戏视频、游戏logo、游戏封面......</p>
<p>其实需要修改的地方，也就一个<code>&lt;name&gt;游戏名&lt;/name&gt;</code>元素标签，比如将游戏<u><strong>Conrta (J)</strong></u>改成中文的<u><strong>魂斗罗</strong></u>，设定换行符为<u>Unix/macOS(LF)</u>，再保存一下</p>
<p><img src="@source/guide/assets/Snipaste_5-4.png" alt="Snipaste_5-4" loading="lazy"></p>
<p>然后手柄按<kbd>START</kbd>键盘调出【主菜单】➡【游戏设置】➡【更新游戏列表】</p>
<p>再次进入游戏平台看看，游戏名称变成了中文<u><strong>魂斗罗</strong></u>，其他游戏按照此方法修改即可</p>
<p><img src="@source/guide/assets/Snipaste_5-5.png" alt="Snipaste_5-5" loading="lazy"></p>
<p>方法都很简单，但是数量多的话还是要花很长时间的，会写函数脚本工具的就可以很方便快速的搞定，其实写工具也不是太难，难得是要有中英文对照数据才好写工具。</p>
<div class="custom-container tip"><p class="custom-container-title">xml格式说明</p>
<blockquote>
<p>必须有xml声明语句；</p>
<p>必须有且仅有一个根元素；</p>
<p>标签大小写敏感；</p>
<p>标签成对；</p>
<p>必须正确地嵌套；</p>
<p>属性值用双引号；</p>
<p>...</p>
</blockquote>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0"?></span>			<span class="token comment">&lt;!--第一行是xml的声明--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gamelist</span><span class="token punctuation">></span></span>						<span class="token comment">&lt;!--根元素gamelist的开始标签--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>game</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>18624<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>				<span class="token comment">&lt;!--gamelist的子元素game的开始标签--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>					<span class="token comment">&lt;!--game的子元素path（一对标签）--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>					<span class="token comment">&lt;!--game的子元素name（一对标签）--></span>
		...								<span class="token comment">&lt;!--...--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>region</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>region</span><span class="token punctuation">></span></span>				<span class="token comment">&lt;!--game的子元素region（一对标签）--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>game</span><span class="token punctuation">></span></span>							<span class="token comment">&lt;!--根元素gamelist的子元素game的结束标签--></span>
	...								<span class="token comment">&lt;!--...--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>game</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>18624<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>				<span class="token comment">&lt;!--同上--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
		...
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>region</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>region</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>game</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gamelist</span><span class="token punctuation">></span></span>						<span class="token comment">&lt;!--元素gamelist的结束标签--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></div>
</template>
