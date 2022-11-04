import{_ as s,o as a,c as n,a as e}from"./chunks/framework.a6941a15.js";const D=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configuration.md","lastUpdated":1654681186000}'),o={name:"guide/configuration.md"},t=e(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><p>Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let&#39;s first create a <code>.vitepress</code> directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The essential file for configuring a VitePress site is <code>.vitepress/config.js</code>, which should export a JavaScript object:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Just playing around.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>In the above example, the site will have the title of <code>VitePress</code>, and <code>Just playing around.</code> as the description meta tag.</p><p>Learn everything about VitePress features at <a href="./theme-introduction">Theme: Introduction</a> to find how to configure specific features within this config file.</p><p>You may also find all configuration references at <a href="./../config/introduction">Configs</a>.</p>`,8),p=[t];function l(i,c,r,d,u,y){return a(),n("div",null,p)}const h=s(o,[["render",l]]);export{D as __pageData,h as default};
