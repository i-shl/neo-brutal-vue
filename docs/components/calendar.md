# Calendar 日历

日历组件，可选日期、展示日程等。

## 基础用法

```vue
<template>
  <NeoCalendar v-model="date" />
</template>

<script setup lang="ts">
const date = ref(new Date())
</script>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前日期 | `Date` |

事件：`update:modelValue`、`select` 等（以组件实现为准）。
