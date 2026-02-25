# Tabs 标签页

选项卡切换内容。

## 基础用法

```vue
<template>
  <NeoTabs v-model="activeName">
    <NeoTabPane name="tab1" label="标签一">内容一</NeoTabPane>
    <NeoTabPane name="tab2" label="标签二">内容二</NeoTabPane>
    <NeoTabPane name="tab3" label="标签三">内容三</NeoTabPane>
  </NeoTabs>
</template>

<script setup lang="ts">
const activeName = ref('tab1')
</script>
```

## 卡片式与边框式

```vue
<template>
  <NeoTabs v-model="active" type="card" />
  <NeoTabs v-model="active" type="border-card" />
</template>
```

## API

**NeoTabs**

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前激活的 name | `string` |
| type | 样式类型 | `'line' \| 'card' \| 'border-card'` |
| tabPosition | 标签位置 | `'top' \| 'right' \| 'bottom' \| 'left'` |

**NeoTabPane**

| 属性 | 说明 | 类型 |
|------|------|------|
| name | 唯一标识 | `string` |
| label | 标签文字 | `string` |
| disabled | 禁用 | `boolean` |
| closable | 是否可关闭 | `boolean` |

事件：`update:modelValue`、`tab-click`。
