<template>
  <div class="neo-demo-block neo-demo-vertical">
    <p><strong>12-column grid:</strong> Each row has 12 columns. Col span=6 takes half.</p>
    <NeoRow>
      <NeoCol :span="6">Left (6 cols)</NeoCol>
      <NeoCol :span="6">Right (6 cols)</NeoCol>
    </NeoRow>
    <p><strong>Three equal columns:</strong></p>
    <NeoRow>
      <NeoCol :span="4">Col 1</NeoCol>
      <NeoCol :span="4">Col 2</NeoCol>
      <NeoCol :span="4">Col 3</NeoCol>
    </NeoRow>
    <p><strong>With offset:</strong></p>
    <NeoRow>
      <NeoCol :span="4">Col 1</NeoCol>
      <NeoCol :span="4" :offset="4">Col 2 (offset 4)</NeoCol>
    </NeoRow>
  </div>
</template>

<script setup lang="ts">
import { NeoRow, NeoCol } from 'neo-brutal-vue'
</script>
