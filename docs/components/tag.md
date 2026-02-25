# Tag

Tags for labeling and categorization.

## Basic Usage

```vue
<template>
  <NeoTag>Default</NeoTag>
  <NeoTag type="primary">Primary</NeoTag>
  <NeoTag type="success">Success</NeoTag>
  <NeoTag type="warning">Warning</NeoTag>
  <NeoTag type="danger">Danger</NeoTag>
</template>
```

## Closable

```vue
<template>
  <NeoTag closable @close="handleClose">Closable</NeoTag>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| type | Type | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |
| size | Size | `'xs' \| 'sm' \| 'md' \| 'lg'` |
| effect | Effect | `'light' \| 'dark' \| 'plain'` |
| closable | Whether closable | `boolean` |
