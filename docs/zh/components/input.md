# Input 输入框

单行文本输入，支持前缀、后缀、清除、密码显隐等。

## 基础用法

<demo vue="../../demos/input-basic.vue" />

## 禁用、只读与可清空

<demo vue="../../demos/input-states.vue" />

## 尺寸与形状

<demo vue="../../demos/input-size.vue" />

`size`：`xs` / `sm` / `md` / `lg` / `xl`。  
`shape`：`default` / `round` / `pill`。

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `string \| number` | - |
| type | 输入类型 | `string` | `'text'` |
| size | 尺寸 | `ComponentSize` | `'md'` |
| disabled | 禁用 | `boolean` | `false` |
| readonly | 只读 | `boolean` | `false` |
| clearable | 可清空 | `boolean` | `false` |
| placeholder | 占位符 | `string` | `''` |

事件：`update:modelValue`、`input`、`change`、`focus`、`blur`、`clear`。
