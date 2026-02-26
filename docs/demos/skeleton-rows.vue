<template>
  <div class="neo-demo-vertical">
    <div class="neo-demo-block">
      <NeoSkeleton :rows="4" :loading="true" />
    </div>
    <div class="neo-demo-block">
      <NeoSkeleton :rows="2" :loading="true" avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NeoSkeleton } from 'neo-brutal-vue'
</script>
