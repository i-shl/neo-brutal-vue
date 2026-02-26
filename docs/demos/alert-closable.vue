<template>
  <div class="neo-demo-block neo-demo-vertical">
    <NeoAlert v-if="visible" title="可关闭" closable @close="handleClose" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoAlert } from 'neo-brutal-vue'

const visible = ref(true)

function handleClose() {
  visible.value = false
}
</script>
