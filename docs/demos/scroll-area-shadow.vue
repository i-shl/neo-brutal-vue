<template>
  <div class="neo-demo-block">
    <NeoScrollArea height="200px" :shadow="true">
      <div v-for="i in 20" :key="i">Line {{ i }} - 带阴影的滚动区域</div>
    </NeoScrollArea>
  </div>
</template>

<script setup lang="ts">
import { NeoScrollArea } from 'neo-brutal-vue'
</script>
