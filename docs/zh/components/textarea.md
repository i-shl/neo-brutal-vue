# Textarea 文本域

多行文本输入。

## 基础用法

<demo vue="../../demos/textarea-basic.vue" />

## 禁用与状态

<demo vue="../../demos/textarea-states.vue" />

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
