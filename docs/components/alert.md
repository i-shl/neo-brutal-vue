# Alert

In-page alert message. Supports types and closable.

## Basic Usage

```vue
<template>
  <NeoAlert title="Notice" description="This is a description" />
  <NeoAlert type="success" title="Success" />
  <NeoAlert type="warning" title="Warning" />
  <NeoAlert type="error" title="Error" />
  <NeoAlert type="info" title="Info" />
</template>
```

## Closable

```vue
<template>
  <NeoAlert title="Closable" closable @close="handleClose" />
</template>
```

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
