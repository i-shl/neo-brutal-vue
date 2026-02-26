# Alert

In-page alert message. Supports types and closable.

## Basic Usage

<demo vue="../demos/alert-basic.vue" />

## Closable

<demo vue="../demos/alert-closable.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| description | Description | `string` |
| type | Type | `'success' \| 'warning' \| 'error' \| 'info'` |
| closable | Whether closable | `boolean` |
| showIcon | Whether to show icon | `boolean` |
| effect | Effect | `'light' \| 'dark'` |

Events: `close`.
