# Col

Grid column. Must be placed inside Row. span is 1–12.

## Basic Usage

```vue
<template>
  <NeoRow>
    <NeoCol :span="6">6</NeoCol>
    <NeoCol :span="6">6</NeoCol>
    <NeoCol :span="12">12</NeoCol>
  </NeoRow>
</template>
```

## Offset

```vue
<template>
  <NeoCol :span="6" :offset="6">span=6, offset=6</NeoCol>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| span | Grid span 1–12 | `number` |
| offset | Grid left offset 1–12 | `number` |
