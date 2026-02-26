# NeoBrutal Vue

> Neobrutalism 风格的 Vue 3 组件库

[English](./README.md) | 中文

- **文档**：本地运行 `npm run docs:dev` 查看完整使用文档（VitePress）

## ✨ 特性

- 🎨 **Neobrutalism 设计风格** - 粗边框、硬阴影、大胆对比
- 📦 **丰富的大量组件** - 涵盖基础、表单、布局、数据展示等，且持续迭代中
- 🎯 **TypeScript 支持** - 完整类型定义
- 🎭 **主题系统** - 支持浅色/深色主题切换
- 📱 **响应式设计** - 5 种尺寸规格（xs/sm/md/lg/xl）
- 🔧 **按需引入** - 支持全量安装和按需引入
- 📚 **完整文档** - 详细的使用说明和示例

## 🛠 安装

```bash
npm install neo-brutal-vue
# 或
yarn add neo-brutal-vue
# 或
pnpm add neo-brutal-vue
```

## 📦 使用方式

### 全量引入

```typescript
// main.ts
import { createApp } from 'vue'
import NeoBrutalVue from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'

const app = createApp(App)
app.use(NeoBrutalVue)
```

### 按需引入

```typescript
// 按需引入单独组件（样式仍需全局引入一次）
import { NeoButton, NeoInput } from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'
```

## 🎨 设计风格

### Neobrutalism 特点

- **边框**: 2-4px 的粗黑边框
- **阴影**: 4-8px 的硬偏移阴影（非模糊）
- **对比**: 强烈的色彩对比（黑白分明）
- **形状**: 直角或轻微圆角，简洁有力
- **颜色**: 大胆的纯色背景，高饱和度

### 主题色彩

通过 CSS 变量覆盖即可换肤（参见 `src/styles/variables.css`）：

```css
:root {
  --neo-primary: #8338ec;    /* 主色 */
  --neo-secondary: #06d6a0;  /* 次色 */
  --neo-accent: #ffbe0b;     /* 强调色 */
  --neo-success: #06d6a0;    /* 成功 */
  --neo-warning: #fb5607;    /* 警告 */
  --neo-danger: #ef233c;     /* 错误 */
  --neo-info: #3a86ff;       /* 信息 */
}
```

## 🔧 开发命令

```bash
# 库开发模式
npm run dev

# 构建库（产出 dist/，含类型声明）
npm run build

# 预览构建结果
npm run preview

# 文档站本地开发
npm run docs:dev

# 文档站构建（产出 docs/.vitepress/dist）
npm run docs:build
```

## 🌟 示例

### 基础按钮

```vue
<template>
  <!-- 类型 -->
  <NeoButton type="primary">主要按钮</NeoButton>
  <NeoButton type="success">成功按钮</NeoButton>
  
  <!-- 尺寸 -->
  <NeoButton size="xs">超小</NeoButton>
  <NeoButton size="lg">大号</NeoButton>
  
  <!-- 形状 -->
  <NeoButton circle>🔥</NeoButton>
  <NeoButton shape="round">圆角</NeoButton>
</template>
```

### 表单组件

```vue
<template>
  <NeoInput v-model="inputValue" placeholder="请输入内容" />
  <NeoCheckbox v-model="checked">我已阅读用户协议</NeoCheckbox>
  <NeoSwitch v-model="enabled" />
</template>
```

## 📄 许可证

[MIT](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来完善这个组件库！
