<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  columns?: number | string
  gap?: number | string
}>()

const gridClass = computed(() => [
  'neo-row',
  props.columns ? `neo-row--cols-${props.columns}` : ''
])

const gridStyle = computed(() => ({
  gap: props.gap
    ? typeof props.gap === 'number'
      ? `${props.gap}px`
      : String(props.gap)
    : undefined,
  gridTemplateColumns: typeof props.columns === 'number'
    ? `repeat(${props.columns}, 1fr)`
    : typeof props.columns === 'string'
      ? props.columns
      : 'repeat(12, 1fr)',
}))
</script>

<template>
  <div :class="gridClass" :style="gridStyle">
    <slot />
  </div>
</template>

<style scoped>
.neo-row {
  display: grid;
  width: 100%;
  gap: var(--neo-spacing-md);
  grid-template-columns: repeat(12, 1fr);
}

.neo-row--cols-1 { grid-template-columns: repeat(1, 1fr); }
.neo-row--cols-2 { grid-template-columns: repeat(2, 1fr); }
.neo-row--cols-3 { grid-template-columns: repeat(3, 1fr); }
.neo-row--cols-4 { grid-template-columns: repeat(4, 1fr); }
.neo-row--cols-5 { grid-template-columns: repeat(5, 1fr); }
.neo-row--cols-6 { grid-template-columns: repeat(6, 1fr); }
</style>