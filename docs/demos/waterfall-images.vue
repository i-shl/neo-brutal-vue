<script setup lang="ts">
import { ref } from 'vue'
import { NeoWaterfall } from '../../src'

const items = ref([
  { url: 'https://picsum.photos/400/600?random=1', title: '图片 1' },
  { url: 'https://picsum.photos/400/300?random=2', title: '图片 2' },
  { url: 'https://picsum.photos/400/500?random=3', title: '图片 3' },
  { url: 'https://picsum.photos/400/400?random=4', title: '图片 4' },
  { url: 'https://picsum.photos/400/700?random=5', title: '图片 5' },
  { url: 'https://picsum.photos/400/350?random=6', title: '图片 6' }
])
</script>

<template>
  <div class="waterfall-image-demo">
    <NeoWaterfall :items="items" :cols="2" :gap="16">
      <template #default="slotProps">
        <div v-if="slotProps && slotProps.item" class="image-card">
          <img 
            :src="slotProps.item.url" 
            :alt="slotProps.item.title"
            style="width: 100%; display: block; border-bottom: var(--neo-border-thick)"
          />
          <div style="padding: 10px; font-weight: bold">{{ slotProps.item.title }}</div>
        </div>
      </template>
    </NeoWaterfall>
  </div>
</template>

<style scoped>
.image-card {
  overflow: hidden;
}
.image-card img {
  transition: transform 0.3s ease;
}
.image-card:hover img {
  transform: scale(1.05);
}
</style>
