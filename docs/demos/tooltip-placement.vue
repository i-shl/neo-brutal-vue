<template>
  <div>
    <NeoTooltip content="Top" placement="top">
      <NeoButton>Top</NeoButton>
    </NeoTooltip>
    <NeoTooltip content="Click to show" trigger="click">
      <NeoButton>Click</NeoButton>
    </NeoTooltip>
  </div>
</template>

<script setup lang="ts">
import { NeoTooltip, NeoButton } from 'neo-brutal-vue'
</script>
