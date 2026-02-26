# InputNumber

Numeric input with step, min/max support.

## Basic Usage

<demo vue="../demos/input-number-basic.vue" />

## Step & Precision

<demo vue="../demos/input-number-step.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Bound value | `number` | - |
| min | Min value | `number` | - |
| max | Max value | `number` | - |
| step | Step | `number` | `1` |
| precision | Decimal places | `number` | - |
| disabled | Disabled | `boolean` | `false` |
| size | Size | `ComponentSize` | `'md'` |

Events: `update:modelValue`, `change`.
