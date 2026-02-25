# Switch 开关

开关选择器。

## 基础用法

```vue
<template>
  <NeoSwitch v-model="enabled" />
</template>

<script setup lang="ts">
const enabled = ref(false)
</script>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值 | `boolean \| string \| number` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |
| activeText / inactiveText | 开关文字 | `string` |
