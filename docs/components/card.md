# Card

Content container with title, subtitle, and slots.

## Basic Usage

```vue
<template>
  <NeoCard title="Card Title" sub-title="Subtitle">
    Card content
  </NeoCard>
</template>
```

## Variant

`default`, `flat`, `elevated`, `gradient`, `colored`.

## Slots

- `header`: Custom header
- `title`: Title
- `sub-title`: Subtitle
- `footer`: Footer
- default: Body content

## API

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| subTitle | Subtitle | `string` |
| shadow | Shadow | `boolean \| 'hover' \| 'never'` |
| bordered | Bordered | `boolean` |
| variant | Variant | `CardVariant` |
