<template>
  <NeoResult status="success" title="Success">
    <template #extra>
      <NeoButton type="primary">Back to Home</NeoButton>
    </template>
  </NeoResult>
</template>

<script setup lang="ts">
import { NeoResult, NeoButton } from 'neo-brutal-vue'
</script>
