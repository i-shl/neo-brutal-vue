# Rate

Star rating component.

## Basic Usage

```vue
<template>
  <NeoRate v-model="score" />
</template>

<script setup lang="ts">
const score = ref(3)
</script>
```

## Half Star & Custom Count

```vue
<template>
  <NeoRate v-model="score" allow-half :max="10" />
</template>
```

## Read Only

```vue
<template>
  <NeoRate v-model="score" disabled />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Current score | `number` |
| max | Maximum score (number of stars) | `number` |
| allowHalf | Whether to allow half selection | `boolean` |
| disabled | Disabled | `boolean` |
| color | Selected color | `string` |
| voidColor | Unselected color | `string` |

Events: `update:modelValue`, `change`.
