# 安装

## 环境要求

- Vue >= 3.3
- 支持 ES Module 的构建环境（Vite、Webpack、Rollup 等）

## 包管理器

```bash
# npm
npm install neo-brutal-vue

# yarn
yarn add neo-brutal-vue

# pnpm
pnpm add neo-brutal-vue
```

## 样式引入

使用组件库时**必须**引入样式，否则组件没有 Neobrutalism 样式：

```ts
import 'neo-brutal-vue/dist/style.css'
```

可在入口文件（如 `main.ts`）中引入一次即可全局生效。

## TypeScript

包内自带类型定义（`dist/index.d.ts`），无需额外安装 `@types`。若使用按需引入，可直接从 `neo-brutal-vue` 导入类型：

```ts
import type { ButtonProps, ComponentSize } from 'neo-brutal-vue'
```
