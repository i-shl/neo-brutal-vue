# Tree 树形控件

树形结构数据展示，支持展开/收起、可选。

## 基础用法

```vue
<template>
  <NeoTree :data="treeData" />
</template>

<script setup lang="ts">
const treeData = ref([
  { id: '1', label: '一级 1', children: [
    { id: '1-1', label: '二级 1-1' },
    { id: '1-2', label: '二级 1-2' },
  ]},
  { id: '2', label: '一级 2' },
])
</script>
```

## 可选与连线

```vue
<template>
  <NeoTree :data="treeData" selectable show-line />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| data | 树数据 | `TreeData[]` |
| showLine | 是否显示连接线 | `boolean` |
| selectable | 是否可选 | `boolean` |

TreeData 结构：`{ id, label, children?, expanded? }`。

事件：`node-click` 等。
