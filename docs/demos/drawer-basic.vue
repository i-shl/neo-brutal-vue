<template>
  <div>
    <NeoButton @click="open = true">Open Drawer</NeoButton>
    <NeoDrawer v-model="open" title="Drawer Title" direction="rtl">
      Drawer content
    </NeoDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoDrawer } from 'neo-brutal-vue'

const open = ref(false)
</script>
