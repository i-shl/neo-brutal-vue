# Statistic

Display statistic numbers. Supports prefix, suffix, and precision.

## Basic Usage

<demo vue="../demos/statistic-basic.vue" />

## Precision & Suffix

<demo vue="../demos/statistic-precision.vue" />

## Type

<demo vue="../demos/statistic-type.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| value | Value | `string \| number` |
| precision | Decimal places | `number` |
| prefix | Prefix | `string` |
| suffix | Suffix | `string` |
| valueStyle | Value style | `object` |
| type | Color type for value | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |
| color | Custom color (overrides type) | `string` |

Slots: `title`, `prefix`, `suffix`, default (custom value).
