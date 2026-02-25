<script setup lang="ts">
const props = defineProps<{
  height?: string | number
  maxHeight?: string | number
}>()
</script>

<template>
  <div class="neo-scroll-area" :style="{ height: typeof height === 'number' ? height + 'px' : height, maxHeight: typeof maxHeight === 'number' ? maxHeight + 'px' : maxHeight }">
    <div class="neo-scroll-area__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.neo-scroll-area {
  position: relative;
  overflow: auto;
  border: 3px solid black;
  scrollbar-width: thin;
  scrollbar-color: black var(--neo-yellow);
}

.neo-scroll-area__content {
  padding: 1rem;
}

/* Chrome, Safari, etc. */
.neo-scroll-area::-webkit-scrollbar {
  width: 14px;
}

.neo-scroll-area::-webkit-scrollbar-track {
  background: var(--neo-yellow);
  border-left: 3px solid black;
}

.neo-scroll-area::-webkit-scrollbar-thumb {
  background: black;
  border: 2px solid var(--neo-yellow);
}

.neo-scroll-area::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>
