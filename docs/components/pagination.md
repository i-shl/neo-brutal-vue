# Pagination 分页

分页器，配合列表/表格使用。

## 基础用法

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

## 每页条数选择与简洁模式

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

| 属性 | 说明 | 类型 |
|------|------|------|
| current | 当前页（支持 v-model:current） | `number` |
| pageSize | 每页条数（支持 v-model:pageSize） | `number` |
| total | 总条数 | `number` |
| pageSizes | 每页条数选项 | `number[]` |
| layout | 布局子件组合 | `string` |
| background | 按钮是否带背景 | `boolean` |
| small | 小尺寸 | `boolean` |

事件：`current-change`、`size-change`。
