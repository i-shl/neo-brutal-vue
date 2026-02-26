<template>
  <div class="neo-demo-block">
    <NeoMarquee :duration="20" pause-on-hover>
      <div v-for="i in 5" :key="i" style="font-size: 2rem; font-weight: 900; white-space: nowrap;">
        NEOBRUTALISM STYLE {{ i }} •
      </div>
    </NeoMarquee>
  </div>
</template>

<script setup lang="ts">
import { NeoMarquee } from 'neo-brutal-vue'
</script>
