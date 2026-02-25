# Toast

Lightweight global message. Auto-dismisses after a period.

## Basic Usage

Via component or global method (if provided):

```vue
<template>
  <NeoToast v-model="visible" type="success" title="Success" message="Operation completed" />
</template>
```

Or via API (example):

```ts
// If library provides useToast or $toast
toast.success('Operation successful')
toast.error('Operation failed')
toast({ type: 'info', message: 'Notice' })
```

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
