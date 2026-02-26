<template>
  <div class="neo-demo-block">
    <NeoScrollArea height="200px">
      <div v-for="i in 20" :key="i">Line {{ i }} - Some content here</div>
    </NeoScrollArea>
  </div>
</template>

<script setup lang="ts">
import { NeoScrollArea } from 'neo-brutal-vue'
</script>
