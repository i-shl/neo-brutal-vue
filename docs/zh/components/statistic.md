# Statistic 统计数值

展示统计数字，支持前缀、后缀、精度。

## 基础用法

<demo vue="../../demos/statistic-basic.vue" />

## 精度与后缀

<demo vue="../../demos/statistic-precision.vue" />

## 类型 (Type)

<demo vue="../../demos/statistic-type.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| value | 数值 | `string \| number` |
| precision | 小数位数 | `number` |
| prefix | 前缀 | `string` |
| suffix | 后缀 | `string` |
| valueStyle | 数值样式 | `object` |
| type | 数值的颜色类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |
| color | 自定义颜色（覆盖 type） | `string` |

插槽：`title`、`prefix`、`suffix`、默认（自定义数值）。
