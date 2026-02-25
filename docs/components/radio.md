# Radio

Single selection from a group of options.

## Basic Usage

```vue
<template>
  <NeoRadio v-model="picked" label="option1">Option A</NeoRadio>
  <NeoRadio v-model="picked" label="option2">Option B</NeoRadio>
</template>

<script setup lang="ts">
const picked = ref('option1')
</script>
```

## Radio Group

```vue
<template>
  <NeoRadio v-model="city" label="beijing">Beijing</NeoRadio>
  <NeoRadio v-model="city" label="shanghai">Shanghai</NeoRadio>
  <NeoRadio v-model="city" label="guangzhou">Guangzhou</NeoRadio>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value | `string \| number \| boolean` |
| label | Option value | `string \| number \| boolean` |
| disabled | Disabled | `boolean` |
| size | Size | `ComponentSize` |
| border | Show border | `boolean` |

Events: `update:modelValue`, `change`.
