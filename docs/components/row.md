# Row

Grid row. Use with Col for 12-column layout.

## Basic Usage

```vue
<template>
  <NeoRow>
    <NeoCol :span="12">12 cols</NeoCol>
    <NeoCol :span="12">12 cols</NeoCol>
  </NeoRow>
  <NeoRow>
    <NeoCol :span="8">8</NeoCol>
    <NeoCol :span="8">8</NeoCol>
    <NeoCol :span="8">8</NeoCol>
  </NeoRow>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| gutter | Grid gap (pixels) | `number \| string` |
| justify | Horizontal alignment | `string` |
| align | Vertical alignment | `string` |
