<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
    <NeoLink href="https://github.com" :underline="true">有下划线</NeoLink>
    <NeoLink href="https://github.com" :underline="false">无下划线</NeoLink>
  </div>
</template>

<script setup lang="ts">
import { NeoLink } from 'neo-brutal-vue'
</script>
