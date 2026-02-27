<template>
  <div class="neo-demo-block neo-demo-vertical">
    <p><strong>justify="center"</strong></p>
    <NeoRow justify="center">
      <NeoCol :span="4">A</NeoCol>
      <NeoCol :span="4">B</NeoCol>
    </NeoRow>
    <p><strong>justify="between"</strong></p>
    <NeoRow justify="between">
      <NeoCol :span="4">Left</NeoCol>
      <NeoCol :span="4">Right</NeoCol>
    </NeoRow>
    <p><strong>align="center" (tall cols)</strong></p>
    <NeoRow align="center" style="min-height: 80px">
      <NeoCol :span="4" style="height: 40px">Short</NeoCol>
      <NeoCol :span="4" style="height: 60px">Tall</NeoCol>
    </NeoRow>
  </div>
</template>

<script setup lang="ts">
import { NeoRow, NeoCol } from 'neo-brutal-vue'
</script>
