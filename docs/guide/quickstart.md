# Quick Start

## Installation

```bash
npm install neo-brutal-vue
# or
yarn add neo-brutal-vue
pnpm add neo-brutal-vue
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
