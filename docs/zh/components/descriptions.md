# Descriptions 描述列表

以键值对形式展示信息。

## 基础用法

<demo vue="../../demos/descriptions-basic.vue" />

## 边框与列数

<demo vue="../../demos/descriptions-border.vue" />

## API

**NeoDescriptions**

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| column | 列数 | `number` |
| border | 是否显示边框 | `boolean` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` |

**NeoDescriptionsItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| label | 标签 | `string` |
| span | 跨列数 | `number` |
