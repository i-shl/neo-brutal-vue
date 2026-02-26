<template>
  <div>
    <NeoButton @click="open = true">Confirm Dialog</NeoButton>
    <NeoDialog v-model="open" title="Confirm">
      <p>Are you sure you want to proceed?</p>
      <template #footer>
        <NeoButton @click="open = false">Cancel</NeoButton>
        <NeoButton type="primary" @click="open = false">Confirm</NeoButton>
      </template>
    </NeoDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoDialog } from 'neo-brutal-vue'

const open = ref(false)
</script>
