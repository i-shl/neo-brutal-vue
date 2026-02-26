# Collapse 折叠面板

可展开/收起的面板组。

## 基础用法

<demo vue="../../demos/collapse-basic.vue" />

## 手风琴（仅展开一个）

<demo vue="../../demos/collapse-accordion.vue" />

## API

**NeoCollapse**

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前展开项（字符串或字符串数组） | `string \| string[]` |
| accordion | 是否手风琴模式 | `boolean` |

**NeoCollapseItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| name | 唯一标识 | `string` |
| title | 标题 | `string` |
| disabled | 禁用 | `boolean` |

事件：`update:modelValue`、`change`。
