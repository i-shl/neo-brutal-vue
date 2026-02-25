# Accordion

Similar to Collapse. Supports accordion (single expand) or multiple expand. API is consistent with NeoCollapse.

## Basic Usage

```vue
<template>
  <NeoAccordion v-model="active">
    <NeoAccordionItem name="a" title="Item A">Content A</NeoAccordionItem>
    <NeoAccordionItem name="b" title="Item B">Content B</NeoAccordionItem>
  </NeoAccordion>
</template>

<script setup lang="ts">
const active = ref('a')
</script>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Currently expanded item(s) | `string \| number \| (string \| number)[]` |
| accordion | Whether accordion mode | `boolean` |

Events: `update:modelValue`.
