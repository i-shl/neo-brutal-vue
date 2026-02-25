# Loading

Loading state. Supports fullscreen or local.

## Basic Usage

```vue
<template>
  <NeoLoading text="Loading..." />
</template>
```

## Fullscreen Loading

Via method call (if the library provides a global method):

```ts
// Open fullscreen Loading
NeoLoading.service({ text: 'Loading...', fullscreen: true })

// Close
loadingInstance.close()
```

Or use inside a parent container:

```vue
<template>
  <div style="position: relative;">
    <NeoLoading fullscreen />
    Content area
  </div>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| text | Loading text | `string` |
| fullscreen | Whether fullscreen | `boolean` |
| lock | Whether to lock scroll | `boolean` |
| background | Overlay background color | `string` |
