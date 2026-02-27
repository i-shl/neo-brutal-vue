# Quick Start

## Requirements

- Vue >= 3.3
- Build environment with ES Module support (Vite, Webpack, Rollup, etc.)

## Installation

```bash
npm install neo-brutal-vue
# or
yarn add neo-brutal-vue
# or
pnpm add neo-brutal-vue
# or
bun add neo-brutal-vue
```

## Full Import

Import the library and styles in `main.ts`:

```ts
import { createApp } from 'vue'
import NeoBrutalVue from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(NeoBrutalVue)
app.mount('#app')
```

You can then use `<NeoButton>`, `<NeoInput>`, etc. in any component.

> **Note**: You **must** import styles `neo-brutal-vue/dist/style.css` when using the library, otherwise components won't have Neobrutalism styling. Import once in your entry file for global effect.

## On-Demand Import

Import only the components you need to reduce bundle size:

```ts
import { NeoButton, NeoInput, NeoCard } from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'
```

Register or use in components:

```vue
<template>
  <NeoButton type="primary">Primary</NeoButton>
  <NeoInput v-model="value" placeholder="Enter text" />
</template>

<script setup lang="ts">
import { NeoButton, NeoInput } from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'

const value = ref('')
</script>
```

## Custom Prefix

When using full registration, you can change the prefix via `app.use(NeoBrutalVue, { prefix: 'Nb' })`. Components will register as `NbButton`, `NbInput`, etc.:

```ts
app.use(NeoBrutalVue, { prefix: 'Nb' })
```

## TypeScript

The package includes type definitions (`dist/index.d.ts`). No need for extra `@types`. If using on-demand import, you can import types from `neo-brutal-vue`:

```ts
import type { ButtonProps, ComponentSize } from 'neo-brutal-vue'
```
