# Toast

Lightweight global message. Auto-dismisses after a period.

## Basic Usage

<demo vue="../demos/toast-basic.vue" />

## Types

<demo vue="../demos/toast-more.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Whether visible | `boolean` |
| type | Type | `'success' \| 'error' \| 'warning' \| 'info' \| 'default'` |
| title | Title | `string` |
| message | Message body | `string` |
| duration | Display duration (ms) | `number` |
| closable | Whether closable | `boolean` |
| position | Position | `ToastPosition` |

Events: `close`.
