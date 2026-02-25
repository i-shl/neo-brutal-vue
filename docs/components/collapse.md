# Collapse 折叠面板

可展开/收起的面板组。

## 基础用法

```vue
<template>
  <NeoCollapse v-model="activeNames">
    <NeoCollapseItem name="1" title="面板 1">内容 1</NeoCollapseItem>
    <NeoCollapseItem name="2" title="面板 2">内容 2</NeoCollapseItem>
    <NeoCollapseItem name="3" title="面板 3">内容 3</NeoCollapseItem>
  </NeoCollapse>
</template>

<script setup lang="ts">
const activeNames = ref(['1'])
</script>
```

## 手风琴（仅展开一个）

```vue
<template>
  <NeoCollapse v-model="activeName" accordion>
    <NeoCollapseItem name="1" title="面板 1">内容 1</NeoCollapseItem>
    <NeoCollapseItem name="2" title="面板 2">内容 2</NeoCollapseItem>
  </NeoCollapse>
</template>

<script setup lang="ts">
const activeName = ref('1')
</script>
```

## API

**NeoCollapse**

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前展开项（字符串或字符串数组） | `string \| string[]` |
| accordion | 是否手风琴模式 | `boolean` |

**NeoCollapseItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| name | 唯一标识 | `string` |
| title | 标题 | `string` |
| disabled | 禁用 | `boolean` |

事件：`update:modelValue`、`change`。
