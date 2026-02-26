<template>
  <div class="neo-demo-block">
    <NeoRow>
      <NeoCol :span="6">6</NeoCol>
      <NeoCol :span="6">6</NeoCol>
    </NeoRow>
    <NeoRow>
      <NeoCol :span="12">12</NeoCol>
    </NeoRow>
  </div>
</template>

<script setup lang="ts">
import { NeoRow, NeoCol } from 'neo-brutal-vue'
</script>
