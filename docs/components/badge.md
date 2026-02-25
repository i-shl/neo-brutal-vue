# Badge

Display number or dot indicator on element corner.

## Basic Usage

```vue
<template>
  <NeoBadge :value="5">
    <NeoButton>Messages</NeoButton>
  </NeoBadge>
</template>
```

## Max Value & Dot

```vue
<template>
  <NeoBadge :value="100" :max="99">Comments</NeoBadge>
  <NeoBadge is-dot>Status</NeoBadge>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| value | Display value (number or text) | `string \| number` |
| max | Max value, shows max+ when exceeded | `number` |
| isDot | Whether to display as dot | `boolean` |
| hidden | Whether to hide | `boolean` |
| type | Type | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` |
