<template>
  <NeoCarousel :items="items" height="400px" :active="1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCarousel } from 'neo-brutal-vue'

const items = ref([
  { image: 'https://picsum.photos/800/300?1', title: 'Title 1' },
  { image: 'https://picsum.photos/800/300?2', title: 'Title 2' },
])
</script>
