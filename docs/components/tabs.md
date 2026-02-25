# Tabs

Tab switching for content.

## Basic Usage

```vue
<template>
  <NeoTabs v-model="activeName">
    <NeoTabPane name="tab1" label="Tab 1">Content 1</NeoTabPane>
    <NeoTabPane name="tab2" label="Tab 2">Content 2</NeoTabPane>
    <NeoTabPane name="tab3" label="Tab 3">Content 3</NeoTabPane>
  </NeoTabs>
</template>

<script setup lang="ts">
const activeName = ref('tab1')
</script>
```

## Card & Border Card

```vue
<template>
  <NeoTabs v-model="active" type="card" />
  <NeoTabs v-model="active" type="border-card" />
</template>
```

## API

**NeoTabs**

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Currently active name | `string` |
| type | Style type | `'line' \| 'card' \| 'border-card'` |
| tabPosition | Tab position | `'top' \| 'right' \| 'bottom' \| 'left'` |

**NeoTabPane**

| Prop | Description | Type |
|------|-------------|------|
| name | Unique identifier | `string` |
| label | Tab label | `string` |
| disabled | Disabled | `boolean` |
| closable | Whether closable | `boolean` |

Events: `update:modelValue`, `tab-click`.
