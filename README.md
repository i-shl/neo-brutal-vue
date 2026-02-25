# NeoBrutal Vue

> Neobrutalism style Vue 3 UI component library

English | [中文](./README.zh-CN.md)

- **Docs**: Run `npm run docs:dev` locally for full documentation (VitePress)

## ✨ Features

- 🎨 **Neobrutalism design** - Bold borders, hard shadows, strong contrast
- 📦 **40+ components** - Base, form, layout, data display, feedback, navigation
- 🎯 **TypeScript** - Full type definitions
- 🎭 **Theme system** - Light/dark mode support
- 📱 **Responsive** - 5 sizes (xs/sm/md/lg/xl)
- 🔧 **Tree-shakeable** - Full or on-demand import
- 📚 **Documentation** - Usage guide and examples

## 🛠 Installation

```bash
npm install neo-brutal-vue
# or
yarn add neo-brutal-vue
# or
pnpm add neo-brutal-vue
```

## 📦 Usage

### Full import

```typescript
// main.ts
import { createApp } from 'vue'
import NeoBrutalVue from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'

const app = createApp(App)
app.use(NeoBrutalVue)
```

### On-demand import

```typescript
// Import components as needed (import styles once)
import { NeoButton, NeoInput } from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'
```

## 🎨 Design

### Neobrutalism

- **Borders**: 2–4px bold black borders
- **Shadows**: 4–8px hard offset shadows (no blur)
- **Contrast**: Strong black/white contrast
- **Colors**: Bold solid backgrounds, high saturation

### Theme colors

Override via CSS variables (see `src/styles/variables.css`):

```css
:root {
  --neo-primary: #8338ec;
  --neo-secondary: #06d6a0;
  --neo-accent: #ffbe0b;
  --neo-success: #06d6a0;
  --neo-warning: #fb5607;
  --neo-danger: #ef233c;
  --neo-info: #3a86ff;
}
```

## 🔧 Scripts

```bash
npm run dev          # Library dev mode
npm run build        # Build library (output dist/)
npm run preview      # Preview build
npm run docs:dev     # Docs dev server
npm run docs:build   # Build docs (output docs/.vitepress/dist)
```

## 🌟 Examples

### Button

```vue
<template>
  <NeoButton type="primary">Primary</NeoButton>
  <NeoButton type="success">Success</NeoButton>
  <NeoButton size="xs">XS</NeoButton>
  <NeoButton size="lg">LG</NeoButton>
  <NeoButton circle>🔥</NeoButton>
  <NeoButton shape="round">Round</NeoButton>
</template>
```

### Form

```vue
<template>
  <NeoInput v-model="inputValue" placeholder="Enter text" />
  <NeoCheckbox v-model="checked">I agree</NeoCheckbox>
  <NeoSwitch v-model="enabled" />
</template>
```

## 📄 License

[MIT](LICENSE)

## 🤝 Contributing

Issues and Pull Requests are welcome!
