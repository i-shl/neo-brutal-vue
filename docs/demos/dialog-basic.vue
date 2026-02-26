<template>
  <div>
    <NeoButton @click="open = true">Open Dialog</NeoButton>
    <NeoDialog v-model="open" title="Title" width="500px">
      Dialog content
    </NeoDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoDialog } from 'neo-brutal-vue'

const open = ref(false)
</script>
