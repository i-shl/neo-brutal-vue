# Accordion 手风琴

与 Collapse 类似，支持手风琴或多项展开，API 与 NeoCollapse 一致。

## 基础用法

```vue
<template>
  <NeoAccordion v-model="active">
    <NeoAccordionItem name="a" title="项 A">内容 A</NeoAccordionItem>
    <NeoAccordionItem name="b" title="项 B">内容 B</NeoAccordionItem>
  </NeoAccordion>
</template>

<script setup lang="ts">
const active = ref('a')
</script>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前展开项 | `string \| number \| (string \| number)[]` |
| accordion | 是否手风琴 | `boolean` |

事件：`update:modelValue`。
