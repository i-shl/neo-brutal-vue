# Slider

Drag to select a value within a range. Supports range selection (dual sliders).

## Basic Usage

```vue
<template>
  <NeoSlider v-model="value" :min="0" :max="100" />
</template>

<script setup lang="ts">
const value = ref(50)
</script>
```

## With Input

```vue
<template>
  <NeoSlider v-model="value" show-input />
</template>
```

## Range Selection

```vue
<template>
  <NeoSlider v-model="range" :min="0" :max="100" range />
</template>

<script setup lang="ts">
const range = ref([20, 80])
</script>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value (single: number, range: [number, number]) | `number \| number[]` |
| min | Minimum value | `number` |
| max | Maximum value | `number` |
| step | Step size | `number` |
| showInput | Whether to show input | `boolean` |
| showTooltip | Whether to show tooltip on hover | `boolean` |
| disabled | Disabled | `boolean` |
| size | Size | `ComponentSize` |

Events: `update:modelValue`, `change`.
