# Project Platform 网站 V0

中文静态测试版，用于讨论页面结构、产品类别、供应商资料展示与采购需求流程。品牌名称仍为占位名。

## 在线预览

**[点击打开网站](https://ekoh1230.github.io/project-platform-website/)**

这是 V0 公开预览，供应商与设备资料仍在准备中。采购需求表单只在浏览器内生成草稿，不会提交或保存。

## 本地查看

在本目录运行：

```powershell
python -m http.server 8000
```

浏览 `http://localhost:8000/`。网站只使用 HTML、CSS、JavaScript 和 SVG，无需安装依赖。

## 页面

- `index.html`：首页与平台路径
- `products.html`：拟覆盖的设备类别
- `suppliers.html`：供应商资料示意与首批供应商计划
- `solutions.html`：按商业问题探索方案
- `services.html`：平台服务和交易边界
- `requirement.html`：本地生成采购需求草稿
- `insights.html`：行业内容栏目规划
- `about.html`：平台定位和当前阶段

## 当前边界

- 不包含真实供应商、设备型号、价格或已核实的认证声称。
- 需求表单仅在当前浏览器生成可复制草稿，不发送、不保存任何数据。
- 网站使用 `noindex,nofollow`，适合测试与内部评审；正式公开前需确认品牌、域名、文案、隐私说明和联络方式。
- 页面的设备图形为原创 SVG 概念示意，不代表具体在售产品。

## 发布

使用 GitHub Pages 从 `main` 分支根目录发布。仓库保持公开，页面继续标记 `noindex,nofollow`，并明确展示测试版与待确认信息。
