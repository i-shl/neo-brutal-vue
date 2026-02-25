# Input

Single-line text input with prefix, suffix, clear, password toggle, etc.

## Basic Usage

```vue
<template>
  <NeoInput v-model="value" placeholder="Enter text" />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

## Disabled & Readonly

```vue
<template>
  <NeoInput v-model="value" disabled placeholder="Disabled" />
  <NeoInput v-model="value" readonly placeholder="Readonly" />
</template>
```

## Clearable

```vue
<template>
  <NeoInput v-model="value" clearable placeholder="Clearable" />
</template>
```

## Size & Shape

`size`: `xs` / `sm` / `md` / `lg` / `xl`.  
`shape`: `default` / `round` / `pill`.

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Bound value | `string \| number` | - |
| type | Input type | `string` | `'text'` |
| size | Size | `ComponentSize` | `'md'` |
| disabled | Disabled | `boolean` | `false` |
| readonly | Readonly | `boolean` | `false` |
| clearable | Clearable | `boolean` | `false` |
| placeholder | Placeholder | `string` | `''` |

Events: `update:modelValue`, `input`, `change`, `focus`, `blur`, `clear`.
