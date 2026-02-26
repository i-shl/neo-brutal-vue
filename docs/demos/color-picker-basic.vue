<script setup lang="ts">
import { ref } from 'vue'
import { NeoColorPicker } from '../../src'

const color = ref('#a3e635')
</script>

<template>
  <div style="display: flex; align-items: center; gap: 20px">
    <NeoColorPicker v-model="color" />
    <span style="font-weight: bold">选中的颜色：{{ color }}</span>
  </div>
</template>
