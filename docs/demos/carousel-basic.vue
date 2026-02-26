<template>
  <NeoCarousel :items="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCarousel } from 'neo-brutal-vue'

const items = ref([
  { image: 'https://picsum.photos/800/300?1', title: 'Title 1' },
  { image: 'https://picsum.photos/800/300?2', title: 'Title 2' },
  { image: 'https://picsum.photos/800/300?3', title: 'Title 3' },
])
</script>
