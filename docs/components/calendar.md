# Calendar

Calendar component. Date selection, schedule display, etc.

## Basic Usage

```vue
<template>
  <NeoCalendar v-model="date" />
</template>

<script setup lang="ts">
const date = ref(new Date())
</script>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Current date | `Date` |

Events: `update:modelValue`, `select`, etc. (refer to component implementation).
