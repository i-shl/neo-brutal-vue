<template>
  <div style="position: relative; height: 200px;">
    <NeoLoading :loading="true" fullscreen text="Loading..." />
    <p>Content area</p>
  </div>
</template>

<script setup lang="ts">
import { NeoLoading } from 'neo-brutal-vue'
</script>
