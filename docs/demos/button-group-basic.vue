<template>
  <div class="neo-demo-vertical">
    <NeoButtonGroup>
      <NeoButton>Left</NeoButton>
      <NeoButton>Center</NeoButton>
      <NeoButton>Right</NeoButton>
    </NeoButtonGroup>

    <NeoButtonGroup>
      <NeoButton type="primary">Boldly</NeoButton>
      <NeoButton type="warning">Go</NeoButton>
      <NeoButton type="danger">There</NeoButton>
      <NeoButton type="success">!</NeoButton>
    </NeoButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { NeoButton, NeoButtonGroup } from 'neo-brutal-vue'
</script>
