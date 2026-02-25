# Statistic

Display statistic numbers. Supports prefix, suffix, and precision.

## Basic Usage

```vue
<template>
  <NeoStatistic title="Total Sales" :value="123456.78" prefix="¥" />
</template>
```

## Precision & Suffix

```vue
<template>
  <NeoStatistic :value="98.5" :precision="1" suffix="%" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| value | Value | `string \| number` |
| precision | Decimal places | `number` |
| prefix | Prefix | `string` |
| suffix | Suffix | `string` |
| valueStyle | Value style | `object` |

Slots: `title`, `prefix`, `suffix`, default (custom value).
