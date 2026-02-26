<template>
  <NeoPopover title="Title">
    <NeoButton>Click</NeoButton>
    <template #content>
      <span>Popover content</span>
    </template>
  </NeoPopover>
</template>

<script setup lang="ts">
import { NeoPopover, NeoButton } from 'neo-brutal-vue'
</script>
