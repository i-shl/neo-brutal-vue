# Textarea 文本域

多行文本输入。

## 基础用法

```vue
<template>
  <NeoTextarea v-model="text" placeholder="请输入多行内容" :rows="4" />
</template>

<script setup lang="ts">
const text = ref('')
</script>
```

## 禁用与只读

```vue
<template>
  <NeoTextarea v-model="text" disabled />
  <NeoTextarea v-model="text" readonly />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值 | `string` |
| placeholder | 占位符 | `string` |
| rows | 行数 | `number` |
| maxlength | 最大长度 | `number \| string` |
| showWordLimit | 显示字数统计 | `boolean` |
| disabled | 禁用 | `boolean` |
| readonly | 只读 | `boolean` |
| size | 尺寸 | `ComponentSize` |

事件：`update:modelValue`、`input`、`change`、`focus`、`blur`。
