<template>
  <NeoSteps :active="2" direction="vertical">
    <NeoStep title="A" />
    <NeoStep title="B" />
    <NeoStep title="C" />
  </NeoSteps>
</template>

<script setup lang="ts">
import { NeoSteps, NeoStep } from 'neo-brutal-vue'
</script>
