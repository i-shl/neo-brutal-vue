<template>
  <NeoSelect v-model="value" :options="options" placeholder="Select" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSelect } from 'neo-brutal-vue'

const value = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
</script>
