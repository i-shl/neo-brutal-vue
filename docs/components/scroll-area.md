# ScrollArea

Scroll container with fixed or max height. Custom scrollbar styling.

## Basic Usage

```vue
<template>
  <NeoScrollArea height="200px">
    <div>Very long content...</div>
  </NeoScrollArea>
</template>
```

## Max Height

```vue
<template>
  <NeoScrollArea max-height="300px">Content</NeoScrollArea>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| height | Fixed height | `string \| number` |
| maxHeight | Maximum height | `string \| number` |
