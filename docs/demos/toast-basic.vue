<template>
  <div>
    <NeoButton @click="showToast">Show Toast</NeoButton>
    <NeoToast v-if="visible" type="success" title="Success" message="Operation completed" @close="visible = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoToast } from 'neo-brutal-vue'

const visible = ref(false)
function showToast() {
  visible.value = true
}
</script>
