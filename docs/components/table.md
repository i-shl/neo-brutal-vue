# Table

Data table. Supports column config, stripe, border, etc.

## Basic Usage

```vue
<template>
  <NeoTable :data="tableData" :columns="columns" />
</template>

<script setup lang="ts">
const tableData = ref([
  { name: 'Tom', age: 18 },
  { name: 'Jerry', age: 20 },
])
const columns = [
  { prop: 'name', label: 'Name' },
  { prop: 'age', label: 'Age' },
]
</script>
```

## Stripe & Border

```vue
<template>
  <NeoTable :data="data" :columns="columns" stripe border />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| data | Table data | `any[]` |
| columns | Column config | `TableColumn[]` |
| stripe | Stripe rows | `boolean` |
| border | Border | `boolean` |
| height | Fixed height | `string \| number` |
| maxHeight | Maximum height | `string \| number` |
| showHeader | Whether to show header | `boolean` |

TableColumn: `prop`, `label`, `width`, `minWidth`, `fixed`, `sortable`, `formatter`, etc.
