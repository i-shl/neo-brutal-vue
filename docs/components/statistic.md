# Statistic 统计数值

展示统计数字，支持前缀、后缀、精度。

## 基础用法

```vue
<template>
  <NeoStatistic title="总销售额" :value="123456.78" prefix="¥" />
</template>
```

## 精度与后缀

```vue
<template>
  <NeoStatistic :value="98.5" :precision="1" suffix="%" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| value | 数值 | `string \| number` |
| precision | 小数位数 | `number` |
| prefix | 前缀 | `string` |
| suffix | 后缀 | `string` |
| valueStyle | 数值样式 | `object` |

插槽：`title`、`prefix`、`suffix`、默认（自定义数值）。
