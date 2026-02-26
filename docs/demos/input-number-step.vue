<template>
  <NeoInputNumber v-model="num" :step="0.5" :precision="1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInputNumber } from 'neo-brutal-vue'

const num = ref(0)
</script>
