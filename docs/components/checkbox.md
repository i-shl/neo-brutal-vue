# Checkbox

Multi-select checkbox.

## Basic Usage

```vue
<template>
  <NeoCheckbox v-model="checked">I agree</NeoCheckbox>
</template>

<script setup lang="ts">
const checked = ref(false)
</script>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value | `boolean \| array` |
| label | Option value (for group) | `string \| number \| boolean` |
| disabled | Disabled | `boolean` |
| size | Size | `ComponentSize` |
