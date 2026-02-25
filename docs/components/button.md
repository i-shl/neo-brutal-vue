# Button

Common action button with multiple types, sizes, and shapes.

## Basic Usage

```vue
<template>
  <NeoButton>Default</NeoButton>
  <NeoButton type="primary">Primary</NeoButton>
  <NeoButton type="success">Success</NeoButton>
  <NeoButton type="warning">Warning</NeoButton>
  <NeoButton type="danger">Danger</NeoButton>
</template>
```

## Type

Besides default: `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info`, `neo`, `pink`, `purple`, `blue`, `orange`, `green`.

## Variant

- `solid` (default): Filled
- `outline`: Outlined
- `ghost`: Transparent background

```vue
<template>
  <NeoButton variant="solid" type="primary">Solid</NeoButton>
  <NeoButton variant="outline" type="primary">Outline</NeoButton>
  <NeoButton variant="ghost" type="primary">Ghost</NeoButton>
</template>
```

## Size

`xs`, `sm`, `md`, `lg`, `xl`.

```vue
<template>
  <NeoButton size="xs">XS</NeoButton>
  <NeoButton size="sm">SM</NeoButton>
  <NeoButton size="md">MD</NeoButton>
  <NeoButton size="lg">LG</NeoButton>
  <NeoButton size="xl">XL</NeoButton>
</template>
```

## Shape

- `default`: Default radius
- `round`: More rounded
- `circle`: Circular (often with icon)
- `sharp`: Square corners

```vue
<template>
  <NeoButton shape="round">Round</NeoButton>
  <NeoButton circle>🔥</NeoButton>
  <NeoButton shape="sharp">Sharp</NeoButton>
</template>
```

## Disabled & Loading

```vue
<template>
  <NeoButton disabled>Disabled</NeoButton>
  <NeoButton :loading="true">Loading</NeoButton>
</template>
```

## Block

```vue
<template>
  <NeoButton block>Block Button</NeoButton>
</template>
```

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| type | Type | `string` | `'primary'` |
| variant | Variant | `'solid' \| 'outline' \| 'ghost' \| 'soft'` | `'solid'` |
| size | Size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| shape | Shape | `'default' \| 'round' \| 'circle' \| 'sharp'` | `'default'` |
| disabled | Disabled | `boolean` | `false` |
| loading | Loading | `boolean` | `false` |
| block | Block | `boolean` | `false` |
| href | Link URL (when rendered as anchor) | `string` | - |

## Events

| Event | Description |
|-------|-------------|
| click | Emitted on click |
