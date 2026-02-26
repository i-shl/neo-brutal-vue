<script setup lang="ts">
import { ref } from 'vue'
import { NeoWaterfall } from '../../src'

const chars = '的一是在不了有和人这中大为上个国我以要他时来生会而年地得可说就那能要下过子心后自着也之对里和到'.split('')
function randomText(min: number, max: number) {
  const len = Math.floor(Math.random() * (max - min + 1)) + min
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

const items = ref(
  Array.from({ length: 20 }, (_, i) => ({
    title: `卡片 ${i + 1}`,
    content: randomText(5, 20)
  }))
)
</script>

<template>
  <div class="waterfall-demo">
    <NeoWaterfall :items="items" :cols="5" :gap="20">
      <template #default="slotProps">
        <div v-if="slotProps && slotProps.item" class="custom-card">
          <h3 style="margin-top: 0">{{ slotProps.item.title }}</h3>
          <p>{{ slotProps.item.content }}</p>
        </div>
      </template>
    </NeoWaterfall>
  </div>
</template>

<style scoped>
.custom-card {
  padding: 10px;
}
</style>
