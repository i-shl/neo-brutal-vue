<template>
  <div class="neo-demo-vertical">
    <NeoInput v-model="value1" disabled placeholder="Disabled" />
    <NeoInput v-model="value2" readonly placeholder="Readonly" />
    <NeoInput v-model="value3" clearable placeholder="Clearable - type to clear" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInput } from 'neo-brutal-vue'

const value1 = ref('Disabled value')
const value2 = ref('Readonly value')
const value3 = ref('')
</script>
