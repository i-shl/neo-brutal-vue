# Tree

Tree structure data display. Supports expand/collapse and selection.

## Basic Usage

```vue
<template>
  <NeoTree :data="treeData" />
</template>

<script setup lang="ts">
const treeData = ref([
  { id: '1', label: 'Level 1', children: [
    { id: '1-1', label: 'Level 2-1' },
    { id: '1-2', label: 'Level 2-2' },
  ]},
  { id: '2', label: 'Level 2' },
])
</script>
```

## Selectable & Line

```vue
<template>
  <NeoTree :data="treeData" selectable show-line />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| data | Tree data | `TreeData[]` |
| showLine | Whether to show connecting lines | `boolean` |
| selectable | Whether selectable | `boolean` |

TreeData structure: `{ id, label, children?, expanded? }`.

Events: `node-click`, etc.
