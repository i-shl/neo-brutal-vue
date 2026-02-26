<template>
  <div class="neo-demo-block">
    <NeoRow>
      <NeoCol :span="12">12 cols</NeoCol>
      <NeoCol :span="12">12 cols</NeoCol>
    </NeoRow>
    <NeoRow>
      <NeoCol :span="8">8</NeoCol>
      <NeoCol :span="8">8</NeoCol>
      <NeoCol :span="8">8</NeoCol>
    </NeoRow>
  </div>
</template>

<script setup lang="ts">
import { NeoRow, NeoCol } from 'neo-brutal-vue'
</script>
