# InputNumber

Numeric input with step, min/max support.

## Basic Usage

```vue
<template>
  <NeoInputNumber v-model="num" :min="0" :max="100" />
</template>

<script setup lang="ts">
const num = ref(0)
</script>
```

## Step & Precision

```vue
<template>
  <NeoInputNumber v-model="num" :step="0.5" :precision="1" />
</template>
```

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Bound value | `number` | - |
| min | Min value | `number` | - |
| max | Max value | `number` | - |
| step | Step | `number` | `1` |
| precision | Decimal places | `number` | - |
| disabled | Disabled | `boolean` | `false` |
| size | Size | `ComponentSize` | `'md'` |

Events: `update:modelValue`, `change`.
