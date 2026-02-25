# Installation

## Requirements

- Vue >= 3.3
- Build environment with ES Module support (Vite, Webpack, Rollup, etc.)

## Package Manager

```bash
# npm
npm install neo-brutal-vue

# yarn
yarn add neo-brutal-vue

# pnpm
pnpm add neo-brutal-vue
```

## Styles

You **must** import styles when using the library, otherwise components won't have Neobrutalism styling:

```ts
import 'neo-brutal-vue/dist/style.css'
```

Import once in your entry file (e.g. `main.ts`) for global effect.

## TypeScript

The package includes type definitions (`dist/index.d.ts`). No need for extra `@types`. If using on-demand import, you can import types from `neo-brutal-vue`:

```ts
import type { ButtonProps, ComponentSize } from 'neo-brutal-vue'
```
