# Collapse

Expandable/collapsible panel group.

## Basic Usage

```vue
<template>
  <NeoCollapse v-model="activeNames">
    <NeoCollapseItem name="1" title="Panel 1">Content 1</NeoCollapseItem>
    <NeoCollapseItem name="2" title="Panel 2">Content 2</NeoCollapseItem>
    <NeoCollapseItem name="3" title="Panel 3">Content 3</NeoCollapseItem>
  </NeoCollapse>
</template>

<script setup lang="ts">
const activeNames = ref(['1'])
</script>
```

## Accordion (Single Expand)

```vue
<template>
  <NeoCollapse v-model="activeName" accordion>
    <NeoCollapseItem name="1" title="Panel 1">Content 1</NeoCollapseItem>
    <NeoCollapseItem name="2" title="Panel 2">Content 2</NeoCollapseItem>
  </NeoCollapse>
</template>

<script setup lang="ts">
const activeName = ref('1')
</script>
```

## API

**NeoCollapse**

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Currently expanded item(s) (string or string array) | `string \| string[]` |
| accordion | Whether accordion mode (only one expanded) | `boolean` |

**NeoCollapseItem**

| Prop | Description | Type |
|------|-------------|------|
| name | Unique identifier | `string` |
| title | Title | `string` |
| disabled | Disabled | `boolean` |

Events: `update:modelValue`, `change`.
