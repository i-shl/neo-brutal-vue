# Avatar

User avatar. Supports image, icon, or text.

## Basic Usage

```vue
<template>
  <NeoAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
  <NeoAvatar>U</NeoAvatar>
  <NeoAvatar icon="👤" />
</template>
```

## Size & Shape

```vue
<template>
  <NeoAvatar size="lg" src="..." />
  <NeoAvatar shape="square" src="..." />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| src | Image URL | `string` |
| icon | Icon (emoji or class name) | `string` |
| size | Size | `ComponentSize \| number` |
| shape | Shape | `'circle' \| 'square'` |
| alt | Image alt | `string` |

Slots: default (text or custom content).
