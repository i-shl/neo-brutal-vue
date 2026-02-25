# Upload

File upload with click and drag support.

## Basic Usage

```vue
<template>
  <NeoUpload action="/api/upload" />
</template>
```

## Drag Upload

```vue
<template>
  <NeoUpload action="/api/upload" drag />
</template>
```

## Multiple & Limit

```vue
<template>
  <NeoUpload action="/api/upload" multiple :limit="5" accept="image/*" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| action | Upload URL | `string` |
| drag | Whether to enable drag upload | `boolean` |
| multiple | Whether to allow multiple selection | `boolean` |
| accept | Accepted file types | `string` |
| limit | Maximum number of uploads | `number` |

Events: `success`, `error`, `change`, etc.
