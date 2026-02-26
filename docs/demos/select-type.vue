<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <NeoSelect v-model="value" :options="options" type="primary" placeholder="Primary" />
    <NeoSelect v-model="value" :options="options" type="success" placeholder="Success" />
    <NeoSelect v-model="value" :options="options" type="warning" placeholder="Warning" />
    <NeoSelect v-model="value" :options="options" type="danger" placeholder="Danger" />
    <NeoSelect v-model="value" :options="options" type="info" placeholder="Info" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSelect } from 'neo-brutal-vue'

const value = ref('1')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
</script>
