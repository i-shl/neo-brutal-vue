# Skeleton

Placeholder skeleton for loading content.

## Basic Usage

<demo vue="../demos/skeleton-basic.vue" />

## Type

<demo vue="../demos/skeleton-type.vue" />

## Multiple Rows & Custom

<demo vue="../demos/skeleton-rows.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| loading | Whether to show skeleton | `boolean` |
| animated | Whether to animate | `boolean` |
| rows | Number of paragraph rows | `number` |
| avatar | Whether to show avatar placeholder | `boolean` |
| type | Color type for skeleton | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |

Slots: default (content to show when loading completes).
