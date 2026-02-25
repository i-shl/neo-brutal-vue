# Switch

Toggle switch.

## Basic Usage

```vue
<template>
  <NeoSwitch v-model="enabled" />
</template>

<script setup lang="ts">
const enabled = ref(false)
</script>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value | `boolean \| string \| number` |
| disabled | Disabled | `boolean` |
| size | Size | `ComponentSize` |
| activeText / inactiveText | Switch text | `string` |
