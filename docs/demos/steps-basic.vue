<template>
  <NeoSteps :active="1">
    <NeoStep title="Step 1" description="Description 1" />
    <NeoStep title="Step 2" description="Description 2" />
    <NeoStep title="Step 3" description="Description 3" />
  </NeoSteps>
</template>

<script setup lang="ts">
import { NeoSteps, NeoStep } from 'neo-brutal-vue'
</script>
