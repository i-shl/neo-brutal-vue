# Drawer

Panel that slides in from the screen side. Often used for forms or details.

## Basic Usage

```vue
<template>
  <NeoButton @click="open = true">Open Drawer</NeoButton>
  <NeoDrawer v-model="open" title="Drawer Title" direction="rtl">
    Drawer content
  </NeoDrawer>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
```

## Direction & Size

```vue
<template>
  <NeoDrawer v-model="open" title="Right Drawer" direction="rtl" size="400px" />
  <NeoDrawer v-model="open2" title="Bottom Drawer" direction="btt" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Whether visible | `boolean` |
| title | Title | `string` |
| direction | Direction | `'ltr' \| 'rtl' \| 'ttb' \| 'btt'` |
| size | Size (width or height) | `string \| number` |
| modal | Whether to show overlay | `boolean` |
| closeOnClickModal | Close on overlay click | `boolean` |
| showClose | Show close button | `boolean` |
| withHeader | Whether to show header | `boolean` |

Slots: default (content), `header`, `footer`.

Events: `update:modelValue`, `open`, `close`, `opened`.
