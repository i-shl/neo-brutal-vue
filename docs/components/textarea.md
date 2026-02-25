# Textarea

Multi-line text input.

## Basic Usage

```vue
<template>
  <NeoTextarea v-model="text" placeholder="Enter multiline text" :rows="4" />
</template>

<script setup lang="ts">
const text = ref('')
</script>
```

## Disabled & Readonly

```vue
<template>
  <NeoTextarea v-model="text" disabled />
  <NeoTextarea v-model="text" readonly />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value | `string` |
| placeholder | Placeholder | `string` |
| rows | Rows | `number` |
| maxlength | Max length | `number \| string` |
| showWordLimit | Show word count | `boolean` |
| disabled | Disabled | `boolean` |
| readonly | Readonly | `boolean` |
| size | Size | `ComponentSize` |

Events: `update:modelValue`, `input`, `change`, `focus`, `blur`.
