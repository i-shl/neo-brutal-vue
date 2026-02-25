# Command

Command/search panel invoked by shortcut (similar to VS Code Command Palette).

## Basic Usage

```vue
<template>
  <NeoButton @click="open = true">Open Command (Ctrl+K)</NeoButton>
  <NeoCommand v-model="open" placeholder="Type to search..." :groups="groups" />
</template>

<script setup lang="ts">
const open = ref(false)
const groups = ref([
  {
    name: 'Common',
    items: [
      { id: '1', label: 'New', shortcut: 'Ctrl+N' },
      { id: '2', label: 'Save', shortcut: 'Ctrl+S' },
    ],
  },
])
</script>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Whether visible | `boolean` |
| placeholder | Search input placeholder | `string` |
| groups | Groups and command items | `CommandGroup[]` |

CommandGroup: `{ name: string, items: CommandItem[] }`.  
CommandItem: `{ id: string, label: string, icon?: string, shortcut?: string }`.

Events: `select` (when an item is selected).
