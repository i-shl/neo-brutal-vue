<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    items: { image: string; title?: string }[]
    active?: number
    showArrows?: boolean
    autoplay?: boolean
    interval?: number
  }>(),
  { showArrows: true, autoplay: false, interval: 3000 },
)

const activeIndex = ref(props.active || 0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.items.length
}

const prev = () => {
  activeIndex.value =
    (activeIndex.value - 1 + props.items.length) % props.items.length
}

const startAutoplay = () => {
  if (props.autoplay && props.items.length > 1) {
    autoplayTimer = setInterval(next, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

watch(
  () => props.autoplay,
  (val) => {
    if (val) startAutoplay()
    else stopAutoplay()
  },
)

watch(
  () => props.active,
  (val) => {
    if (val !== undefined) activeIndex.value = val
  },
)

if (props.autoplay) startAutoplay()
onUnmounted(stopAutoplay)
</script>

<template>
  <div class="neo-carousel">
    <div
      class="neo-carousel__inner"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div v-for="(item, idx) in items" :key="idx" class="neo-carousel__item">
        <img :src="item.image" :alt="item.title" loading="lazy" />
        <div v-if="item.title" class="neo-carousel__caption">
          <span class="neo-carousel__caption-text">{{ item.title }}</span>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button
      v-if="showArrows && items.length > 1"
      class="neo-carousel__arrow neo-carousel__arrow--prev"
      title="Previous"
      @click="prev"
    >
      <span class="neo-carousel__arrow-icon">←</span>
    </button>
    <button
      v-if="showArrows && items.length > 1"
      class="neo-carousel__arrow neo-carousel__arrow--next"
      title="Next"
      @click="next"
    >
      <span class="neo-carousel__arrow-icon">→</span>
    </button>

    <!-- Indicators -->
    <div class="neo-carousel__indicators">
      <button 
        v-for="(_, idx) in items" 
        :key="idx" 
        class="neo-carousel__indicator"
        :class="{ 'is-active': idx === activeIndex }" 
        :title="`Slide ${idx + 1}`"
        @click="activeIndex = idx" 
      />
    </div>
  </div>
</template>

<style scoped>
.neo-carousel {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border: var(--neo-border-thick);
  box-shadow: 10px 10px 0px var(--neo-black);
  overflow: hidden;
  background-color: var(--neo-white);
  font-family: var(--neo-font-family);
}

.neo-carousel__inner {
  display: flex;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
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
  bottom: 2.5rem;
  left: 2.5rem;
  right: 2.5rem;
  pointer-events: none;
}

.neo-carousel__caption-text {
  display: inline-block;
  background-color: var(--neo-main);
  color: var(--neo-black);
  padding: 1rem 1.5rem;
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0px var(--neo-black);
  font-weight: var(--neo-font-weight-black);
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transform: rotate(-1deg);
}

.neo-carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0px var(--neo-black);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--neo-transition);
}

.neo-carousel__arrow:hover {
  background-color: var(--neo-main);
  transform: translateY(-50%) translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--neo-black);
}

.neo-carousel__arrow:active {
  transform: translateY(-50%) translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--neo-black);
}

.neo-carousel__arrow--prev { left: 1.5rem; }
.neo-carousel__arrow--next { right: 1.5rem; }

.neo-carousel__arrow-icon {
  font-size: 1.5rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
}

.neo-carousel__indicators {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
}

.neo-carousel__indicator {
  width: 1rem;
  height: 1rem;
  border: var(--neo-border);
  background-color: var(--neo-white);
  box-shadow: 2px 2px 0 var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
  padding: 0;
}

.neo-carousel__indicator:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 var(--neo-black);
}

.neo-carousel__indicator.is-active {
  background-color: var(--neo-black);
  transform: scale(1.1) rotate(45deg);
  box-shadow: 3px 3px 0 rgba(0,0,0,0.3);
}
</style>
