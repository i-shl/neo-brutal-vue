# Accordion 手风琴

与 Collapse 类似，支持手风琴或多项展开，API 与 NeoCollapse 一致。

## 基础用法

<demo vue="../../demos/accordion-basic.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前展开项 | `string \| number \| (string \| number)[]` |
| accordion | 是否手风琴 | `boolean` |

事件：`update:modelValue`。
