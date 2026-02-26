# InputNumber 数字输入框

仅允许输入数字的输入框，支持步进、最小/最大值。

## 基础用法

<demo vue="../../demos/input-number-basic.vue" />

## 步进与精度

<demo vue="../../demos/input-number-step.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `number` | - |
| min | 最小值 | `number` | - |
| max | 最大值 | `number` | - |
| step | 步长 | `number` | `1` |
| precision | 精度（小数位数） | `number` | - |
| disabled | 禁用 | `boolean` | `false` |
| size | 尺寸 | `ComponentSize` | `'md'` |

事件：`update:modelValue`、`change`。
