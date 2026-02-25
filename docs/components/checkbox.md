# Checkbox 复选框

多选勾选框。

## 基础用法

```vue
<template>
  <NeoCheckbox v-model="checked">我已阅读协议</NeoCheckbox>
</template>

<script setup lang="ts">
const checked = ref(false)
</script>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值 | `boolean \| array` |
| label | 选项值（用于组） | `string \| number \| boolean` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |
