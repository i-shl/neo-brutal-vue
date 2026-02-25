# Table 表格

数据表格，支持列配置、斑马纹、边框等。

## 基础用法

```vue
<template>
  <NeoTable :data="tableData" :columns="columns" />
</template>

<script setup lang="ts">
const tableData = ref([
  { name: '张三', age: 18 },
  { name: '李四', age: 20 },
])
const columns = [
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' },
]
</script>
```

## 斑马纹与边框

```vue
<template>
  <NeoTable :data="data" :columns="columns" stripe border />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| data | 表格数据 | `any[]` |
| columns | 列配置 | `TableColumn[]` |
| stripe | 斑马纹 | `boolean` |
| border | 边框 | `boolean` |
| height | 固定高度 | `string \| number` |
| maxHeight | 最大高度 | `string \| number` |
| showHeader | 是否显示表头 | `boolean` |

TableColumn：`prop`、`label`、`width`、`minWidth`、`fixed`、`sortable`、`formatter` 等。
