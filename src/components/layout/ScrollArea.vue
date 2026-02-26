<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  height?: string | number
  maxHeight?: string | number
  shadow?: boolean
}>()

const areaStyle = computed(() => ({
  height: typeof props.height === 'number' ? props.height + 'px' : props.height,
  maxHeight: typeof props.maxHeight === 'number' ? props.maxHeight + 'px' : props.maxHeight
}))
</script>

<template>
  <div class="neo-scroll-area" :class="{ 'has-shadow': shadow }" :style="areaStyle">
    <div class="neo-scroll-area__viewport">
      <div class="neo-scroll-area__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-scroll-area {
  position: relative;
  border: var(--neo-border-thick);
  background-color: var(--neo-white);
  overflow: hidden;
  transition: var(--neo-transition);
}

.neo-scroll-area.has-shadow {
  box-shadow: 8px 8px 0px var(--neo-black);
}

.neo-scroll-area__viewport {
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--neo-black) var(--neo-gray-100);
}

.neo-scroll-area__content {
  padding: 1.5rem;
}

/* Chrome, Safari, etc. */
.neo-scroll-area__viewport::-webkit-scrollbar {
  width: 14px;
}

.neo-scroll-area__viewport::-webkit-scrollbar-track {
  background: var(--neo-gray-100);
  border-left: var(--neo-border);
}

.neo-scroll-area__viewport::-webkit-scrollbar-thumb {
  background: var(--neo-black);
  border: 3px solid var(--neo-gray-100);
  border-radius: 0;
}

.neo-scroll-area__viewport::-webkit-scrollbar-thumb:hover {
  background: var(--neo-main);
}
</style>
