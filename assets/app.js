const navItems=[
  ["index.html","首页","home"],["products.html","产品分类","products"],["suppliers.html","供应商","suppliers"],
  ["solutions.html","解决方案","solutions"],["services.html","服务","services"],["insights.html","行业内容","insights"],["about.html","关于我们","about"]
];
const page=document.body.dataset.page||"home";
const header=document.getElementById("site-header");
if(header){
  header.innerHTML='<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html" aria-label="Project Platform 首页"><span class="brand-mark">P</span><span>Project Platform <small>暂用名称</small></span></a><button class="menu-toggle" type="button" aria-controls="main-nav" aria-expanded="false">菜单</button><nav class="nav-links" id="main-nav" aria-label="主导航">'+
    navItems.map(([href,label,key])=>'<a href="'+href+'"'+(page===key?' aria-current="page"':'')+'>'+label+'</a>').join("")+
    '<a class="nav-cta" href="requirement.html"'+(page==="requirement"?' aria-current="page"':'')+'>发布需求 ↗</a></nav></div></header>';
  const toggle=header.querySelector(".menu-toggle"),nav=header.querySelector("#main-nav");
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
  nav.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}});
}
const footer=document.getElementById("site-footer");
if(footer){
  footer.innerHTML='<footer class="site-footer"><div class="container"><div class="footer-grid"><div><div class="brand"><span class="brand-mark">P</span><span>Project Platform</span></div><p style="max-width:310px;margin-top:18px">连接中国自动化设备供应端与欧洲商业需求端。中文测试版，品牌名称待定。</p></div><div><h3>探索</h3><a href="products.html">产品分类</a><a href="solutions.html">解决方案</a><a href="suppliers.html">供应商</a></div><div><h3>合作</h3><a href="services.html">平台服务</a><a href="suppliers.html#founding">首批供应商计划</a><a href="requirement.html">发布需求</a></div><div><h3>平台</h3><a href="about.html">关于我们</a><a href="insights.html">行业内容</a><a href="about.html#contact">联系与下一步</a></div></div><div class="footer-bottom">© Project Platform · V0 中文测试版 · 本站展示内容用于方案讨论，未开放真实询盘提交或企业认证。</div></div></footer>';
}
const observer=("IntersectionObserver" in window)&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});},{threshold:.08})
  :null;
document.querySelectorAll(".reveal").forEach(el=>observer?observer.observe(el):el.classList.add("visible"));
const filters=document.querySelectorAll("[data-filter]");
if(filters.length){
  filters.forEach(button=>button.addEventListener("click",()=>{
    filters.forEach(item=>item.setAttribute("aria-pressed",String(item===button)));
    const category=button.dataset.filter;
    document.querySelectorAll("[data-category]").forEach(card=>{card.hidden=category!=="all"&&card.dataset.category!==category;});
  }));
}
const form=document.getElementById("requirement-form");
if(form){
  const result=document.getElementById("draft-result"),draft=document.getElementById("draft-text"),status=document.getElementById("copy-status");
  const params=new URLSearchParams(location.search),interest=params.get("interest");
  if(interest){const select=form.elements.namedItem("interest");if([...select.options].some(o=>o.value===interest))select.value=interest;}
  form.addEventListener("submit",event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const labels={company:"公司/组织",country:"所在国家",industry:"行业",problem:"希望解决的问题",interest:"关注的设备类型",quantity:"预计数量",budget:"预算范围",timeline:"采购时间",location:"安装地点",details:"其他要求"};
    const interestSelect=form.elements.namedItem("interest");
    const values=Object.fromEntries(data.entries());
    values.interest=interestSelect.value?interestSelect.options[interestSelect.selectedIndex].text:"";
    draft.textContent="采购需求草稿（V0 测试版）\n\n"+Object.entries(labels).map(([key,label])=>label+"："+(String(values[key]||"").trim()||"待补充")).join("\n")+"\n\n此草稿尚未发送给平台或供应商。";
    result.classList.add("open");result.scrollIntoView({behavior:"smooth",block:"nearest"});status.textContent="";
  });
  document.getElementById("copy-draft").addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(draft.textContent);status.textContent="草稿已复制，可自行保存或发送。";}
    catch{status.textContent="当前浏览器未允许复制，请手动选中下方文字。";}
  });
  form.addEventListener("reset",()=>{result.classList.remove("open");draft.textContent="";status.textContent="";});
}
const assistantScript=document.createElement("script");
assistantScript.type="module";
assistantScript.src="assets/assistant.mjs";
document.head.append(assistantScript);
