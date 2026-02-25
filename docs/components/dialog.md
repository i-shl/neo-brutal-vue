# Dialog

Modal dialog for forms, confirmation, or custom content.

## Basic Usage

```vue
<template>
  <NeoButton @click="open = true">Open Dialog</NeoButton>
  <NeoDialog v-model="open" title="Title" width="500px">
    Dialog content
  </NeoDialog>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
```

## Custom Footer

```vue
<template>
  <NeoDialog v-model="open" title="Confirm">
    <p>Are you sure you want to proceed?</p>
    <template #footer>
      <NeoButton @click="open = false">Cancel</NeoButton>
      <NeoButton type="primary" @click="confirm">Confirm</NeoButton>
    </template>
  </NeoDialog>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Whether visible | `boolean` |
| title | Title | `string` |
| width | Width | `string \| number` |
| modal | Whether to show overlay | `boolean` |
| closeOnClickModal | Whether to close on overlay click | `boolean` |
| closeOnPressEscape | Whether to close on Esc | `boolean` |
| showClose | Whether to show close button | `boolean` |
| destroyOnClose | Destroy content on close | `boolean` |

Slots: default (content), `header`, `footer`.

Events: `update:modelValue`, `open`, `close`, `opened`.
