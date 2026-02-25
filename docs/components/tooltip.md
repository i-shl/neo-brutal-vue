# Tooltip

Show hint text on hover or focus.

## Basic Usage

```vue
<template>
  <NeoTooltip content="Hint text">
    <NeoButton>Hover me</NeoButton>
  </NeoTooltip>
</template>
```

## Placement & Trigger

```vue
<template>
  <NeoTooltip content="Top" placement="top">Top</NeoTooltip>
  <NeoTooltip content="Click to show" trigger="click">Click</NeoTooltip>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| content | Tooltip content | `string` |
| placement | Placement | `'top' \| 'bottom' \| 'left' \| 'right'` etc. |
| trigger | Trigger | `'hover' \| 'click' \| 'focus' \| 'manual'` |
| effect | Theme | `'light' \| 'dark'` |
| disabled | Whether disabled | `boolean` |

Slots: default (trigger element).
