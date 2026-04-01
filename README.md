# Claude Code Book Web Reader

基于 Vite 构建的《解码 Agent Harness》网页版阅读站。

## 声明

本项目基于原仓库 [lintsinghua/claude-code-book](https://github.com/lintsinghua/claude-code-book) 进行二次开发，目标是提供更友好的网页阅读体验。

## 项目目标

- 在不改动原书稿目录结构的前提下，提供在线阅读能力
- 提供章节导航、上下篇跳转与阅读进度记忆
- 以轻量、可维护的前端工程方式持续演进

## 功能特性

- 章节树导航：按书籍结构展示全部章节
- Markdown 渲染：实时加载并渲染各章节内容
- 上一篇/下一篇：支持连续阅读
- 主题切换：支持明暗主题偏好
- 阅读记忆：自动记录最近阅读章节

## 项目结构

```
.
├─ src/
│  ├─ main.js
│  ├─ style.css
│  └─ bookManifest.js
├─ docs/plans/
│  └─ 2026-04-01-book-web-design.md
├─ 第一部分-基础篇/
├─ 第二部分-核心系统篇/
├─ 第三部分-高级模式篇/
├─ 第四部分-工程实践篇/
├─ 附录/
├─ index.html
├─ vite.config.js
└─ package.json
```

## 快速开始

### 1) 安装依赖

```bash
npm install
```

### 2) 本地开发

```bash
npm run dev
```

### 3) 生产构建

```bash
npm run build
```

### 4) 本地预览构建产物

```bash
npm run preview
```

## 内容维护说明

- 书籍内容来源于仓库内各 Markdown 章节文件
- 章节目录由 src/bookManifest.js 统一维护
- 新增章节时，请同步更新 src/bookManifest.js

## 贡献方式

欢迎通过 Issue 或 Pull Request 参与改进：

- 修复页面显示问题或阅读体验问题
- 优化导航、样式与交互
- 补充构建与部署文档

## 许可证

书籍内容与相关版权遵循原项目及其许可证约定；如需转载或二次发布，请先阅读并遵守原仓库许可条款。
