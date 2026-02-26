<template>
  <div>
    <NeoRadio v-model="city" label="beijing" border>Beijing</NeoRadio>
    <NeoRadio v-model="city" label="shanghai" border>Shanghai</NeoRadio>
    <NeoRadio v-model="city" label="guangzhou" border>Guangzhou</NeoRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoRadio } from 'neo-brutal-vue'

const city = ref('beijing')
</script>
