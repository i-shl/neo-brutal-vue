<template>
  <div>
    <NeoButton @click="open = true">Open Command (Ctrl+K)</NeoButton>
    <NeoCommand v-model="open" placeholder="Type to search..." :groups="groups" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoCommand } from 'neo-brutal-vue'

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
