# Popover

Popover layer on click/hover. Can hold more content.

## Basic Usage

```vue
<template>
  <NeoPopover content="Popover content" title="Title">
    <NeoButton>Click</NeoButton>
  </NeoPopover>
</template>
```

## Trigger & Placement

```vue
<template>
  <NeoPopover trigger="hover" placement="bottom" content="Show on hover" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| content | Body content | `string` |
| title | Title | `string` |
| trigger | Trigger | `'hover' \| 'click' \| 'focus' \| 'manual'` |
| placement | Placement | Same as Tooltip |
| width | Width | `string \| number` |
| effect | Theme | `'light' \| 'dark'` |
| disabled | Disabled | `boolean` |

Slots: default (trigger element), `content` (custom content).
