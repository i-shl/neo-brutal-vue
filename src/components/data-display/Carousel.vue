<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  items: { image: string, title?: string }[]
  active?: number
}>()

const activeIndex = ref(props.active || 0)

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.items.length
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + props.items.length) % props.items.length
}
</script>

<template>
  <div class="neo-carousel">
    <div class="neo-carousel__inner" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
      <div v-for="(item, idx) in items" :key="idx" class="neo-carousel__item">
        <img :src="item.image" :alt="item.title">
        <div v-if="item.title" class="neo-carousel__caption">{{ item.title }}</div>
      </div>
    </div>
    <button class="neo-carousel__arrow prev" @click="prev"></button>
    <button class="neo-carousel__arrow next" @click="next"></button>
    <div class="neo-carousel__dots">
      <span v-for="(_, idx) in items" :key="idx" 
            :class="{ active: idx === activeIndex }" 
            @click="activeIndex = idx" />
    </div>
  </div>
</template>

<style scoped>
.neo-carousel {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border: 4px solid black;
  box-shadow: 8px 8px 0px black;
  overflow: hidden;
  background: white;
}

.neo-carousel__inner {
  display: flex;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.neo-carousel__item {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.neo-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.neo-carousel__caption {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: var(--neo-yellow);
  padding: 1rem 2rem;
  border: 3px solid black;
  box-shadow: 4px 4px 0px black;
  font-weight: 900;
  text-transform: uppercase;
}

.neo-carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: white;
  border: 3px solid black;
  box-shadow: 4px 4px 0px black;
  font-family: serif;
  font-size: 1.5rem;
  font-weight: 900;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neo-carousel__arrow:active {
  transform: translateY(-50%) translate(2px, 2px);
  box-shadow: 2px 2px 0px black;
}

.prev { left: 1rem; }
.next { right: 1rem; }

.neo-carousel__dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.neo-carousel__dots span {
  width: 12px;
  height: 12px;
  border: 2px solid black;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.neo-carousel__dots span.active {
  background: var(--neo-primary);
  transform: scale(1.2);
}
</style>
