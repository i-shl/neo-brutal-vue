<template>
  <div class="neo-demo-block">
    <NeoScrollArea max-height="300px">
    <div v-for="i in 15" :key="i">Line {{ i }} - Some content here</div>
    </NeoScrollArea>
  </div>
</template>

<script setup lang="ts">
import { NeoScrollArea } from 'neo-brutal-vue'
</script>
