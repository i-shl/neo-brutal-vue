<template>
  <div>
    <NeoButton disabled>Disabled</NeoButton>
    <NeoButton :loading="true">Loading</NeoButton>
  </div>
</template>

<script setup lang="ts">
import { NeoButton } from 'neo-brutal-vue'
</script>
