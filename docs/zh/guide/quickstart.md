# 快速开始

## 安装

```bash
npm install neo-brutal-vue
# 或
yarn add neo-brutal-vue
pnpm add neo-brutal-vue
```

## 全量引入

在 `main.ts` 中引入组件库和样式：

```ts
import { createApp } from 'vue'
import NeoBrutalVue from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(NeoBrutalVue)
app.mount('#app')
```

之后即可在任意组件中直接使用 `<NeoButton>`、`<NeoInput>` 等组件。

## 按需引入

只引入用到的组件，减小打包体积：

```ts
import { NeoButton, NeoInput, NeoCard } from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'
```

在组件中注册或直接使用：

```vue
<template>
  <NeoButton type="primary">主要按钮</NeoButton>
  <NeoInput v-model="value" placeholder="请输入" />
</template>

<script setup lang="ts">
import { NeoButton, NeoInput } from 'neo-brutal-vue'
import 'neo-brutal-vue/dist/style.css'

const value = ref('')
</script>
```

## 自定义组件前缀

全量注册时可通过 `app.use(NeoBrutalVue, { prefix: 'Nb' })` 修改前缀，组件将注册为 `NbButton`、`NbInput` 等：

```ts
app.use(NeoBrutalVue, { prefix: 'Nb' })
```
