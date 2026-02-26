<template>
  <div>
    <NeoRadio v-model="picked" label="option1">Option A</NeoRadio>
    <NeoRadio v-model="picked" label="option2">Option B</NeoRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoRadio } from 'neo-brutal-vue'

const picked = ref('option1')
</script>
