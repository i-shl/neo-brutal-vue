<template>
  <NeoSelect
    v-model="value"
    :options="options"
    placeholder="Search and select..."
    filterable
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSelect } from 'neo-brutal-vue'

const value = ref('')
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Mango', value: 'mango' },
]
</script>
