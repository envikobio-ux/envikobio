# 项目上下文

## 项目概述

**Enviko Bio 企业官网** - 上海Enviko生物技术有限公司官方网站，专注于可持续生物合成解决方案。

### 公司信息
- **公司名称**: Shanghai Enviko Biotechnology Co., Ltd. (上海Enviko生物技术有限公司)
- **核心业务**: 生物合成技术、生物基产品研发
- **服务领域**: 制药、化妆品、食品、农药、农业

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **集成服务**: coze-coding-dev-sdk (URL内容抓取)

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── api/            # API路由
│   │   │   └── fetch-url/  # URL内容抓取API
│   │   ├── about/          # 关于我们页面
│   │   ├── products/       # 产品页面
│   │   ├── solutions/      # 解决方案页面
│   │   ├── news/           # 新闻页面
│   │   └── contact/        # 联系我们页面
│   ├── components/         # 组件目录
│   │   ├── layout/         # 布局组件
│   │   │   ├── Header.tsx  # 导航栏
│   │   │   └── Footer.tsx  # 页脚
│   │   └── ui/             # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

- 项目文件（如 app 目录、pages 目录、components 等）默认初始化到 `src/` 目录下。

## 页面说明

1. **首页 (/)** - Hero区域、统计数据、研究领域、核心技术、影响力展示
2. **关于我们 (/about)** - 公司使命、发展历程、核心价值、团队介绍
3. **产品 (/products)** - 制药产品、化妆品原料、农业解决方案
4. **解决方案 (/solutions)** - 制药生物合成、化妆品生物合成、可持续农业
5. **新闻 (/news)** - 最新动态、行业资讯
6. **联系我们 (/contact)** - 联系表单、联系信息

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

- **项目理解加速**：初始可以依赖项目下`package.json`文件理解项目类型，如果没有或无法理解退化成阅读其他文件。
- **Hydration 错误预防**：严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。


## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**


