<template>
  <div>
    <NeoButton @click="open = true">Right Drawer</NeoButton>
    <NeoButton @click="open2 = true">Bottom Drawer</NeoButton>
    <NeoDrawer v-model="open" title="Right Drawer" direction="rtl" size="400px">
      Content from right
    </NeoDrawer>
    <NeoDrawer v-model="open2" title="Bottom Drawer" direction="btt">
      Content from bottom
    </NeoDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoDrawer } from 'neo-brutal-vue'

const open = ref(false)
const open2 = ref(false)
</script>
