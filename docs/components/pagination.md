# Pagination

Pagination for lists/tables.

## Basic Usage

```vue
<template>
  <NeoPagination
    v-model:current="current"
    :total="100"
    :page-size="10"
  />
</template>

<script setup lang="ts">
const current = ref(1)
</script>
```

## Page Size Select & Simple Layout

```vue
<template>
  <NeoPagination
    v-model:current="current"
    v-model:page-size="pageSize"
    :total="200"
    :page-sizes="[10, 20, 50]"
    layout="sizes, prev, pager, next"
  />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| current | Current page (supports v-model:current) | `number` |
| pageSize | Page size (supports v-model:pageSize) | `number` |
| total | Total count | `number` |
| pageSizes | Page size options | `number[]` |
| layout | Layout component combination | `string` |
| background | Whether buttons have background | `boolean` |
| small | Small size | `boolean` |

Events: `current-change`, `size-change`.
