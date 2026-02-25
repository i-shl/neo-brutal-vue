<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  width?: number | string
  height?: number
  strokeWidth?: number
  status?: 'normal' | 'success' | 'warning' | 'error'
}>()

const timelineClass = computed(() => [
  'neo-timeline',
  props.status ? `neo-timeline--${props.status}` :''
])

const lineStyle = computed(() => ({
  width: props.width || '2px',
  height: props.height || '100%',
  backgroundColor: props.status === 'success' ? 'var(--neo-success)' : 
                     props.status === 'warning' ? 'var(--neo-warning)' :
                     props.status === 'error' ? 'var(--neo-danger)' :
                     'var(--neo-primary)'
}))
</script>

<template>
  <div :class="timelineClass">
    <div class="neo-timeline__line" :style="lineStyle" />
    <slot />
  </div>
</template>

<style scoped>
.neo-timeline {
  position: relative;
  padding-left: var(--neo-spacing-lg);
}

.neo-timeline__line {
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--neo-primary);
}
</style>