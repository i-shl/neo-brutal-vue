# Empty

Placeholder when there is no data.

## Basic Usage

```vue
<template>
  <NeoEmpty description="No data" />
</template>
```

## Custom Slot

```vue
<template>
  <NeoEmpty>
    <template #default>
      <p>Custom empty state content</p>
      <NeoButton type="primary">Add</NeoButton>
    </template>
  </NeoEmpty>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| description | Description text | `string` |

Slots: default (custom content).
