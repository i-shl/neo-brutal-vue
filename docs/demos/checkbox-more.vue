<template>
  <div class="neo-demo-vertical">
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <NeoCheckbox v-model="c1">Option A</NeoCheckbox>
      <NeoCheckbox v-model="c2" disabled>禁用</NeoCheckbox>
      <NeoCheckbox v-model="c3" disabled>禁用已选</NeoCheckbox>
    </div>
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <NeoCheckbox v-model="c4" size="xs">XS</NeoCheckbox>
      <NeoCheckbox v-model="c5" size="sm">SM</NeoCheckbox>
      <NeoCheckbox v-model="c6" size="md">MD</NeoCheckbox>
      <NeoCheckbox v-model="c7" size="lg">LG</NeoCheckbox>
      <NeoCheckbox v-model="c8" size="xl">XL</NeoCheckbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCheckbox } from 'neo-brutal-vue'

const c1 = ref(true)
const c2 = ref(false)
const c3 = ref(true)
const c4 = ref(false)
const c5 = ref(true)
const c6 = ref(false)
const c7 = ref(false)
const c8 = ref(false)
</script>
