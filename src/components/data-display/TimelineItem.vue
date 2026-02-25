<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  width?: number | string
  height?: number
  label?: string
  timestamp?: string
  color?: string
}>()

const itemStyle = computed(() => ({
  width: props.width || '100%',
  height: props.height || 'auto'
}))

const dotStyle = computed(() => ({
  backgroundColor: props.color || 'var(--neo-primary)'
}))
</script>

<template>
  <div class="neo-timeline-item" :style="itemStyle">
    <div class="neo-timeline-item__dot" :style="dotStyle" />
    <div class="neo-timeline-item__content">
      <div v-if="label" class="neo-timeline-item__label">{{ label }}</div>
      <div v-if="timestamp" class="neo-timeline-item__time">{{ timestamp }}</div>
      <div class="neo-timeline-item__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-timeline-item {
  position: relative;
  padding-bottom: var(--neo-spacing-md);
}

.neo-timeline-item__dot {
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--neo-primary);
  border: var(--neo-border-width-thin) solid var(--neo-white);
  box-shadow: var(--neo-shadow-sm);
}

.neo-timeline-item__content {
  padding-left: var(--neo-spacing-sm);
}

.neo-timeline-item__label {
  font-weight: var(--neo-font-weight-semibold);
  color: var(--neo-text-primary);
}

.neo-timeline-item__time {
  font-size: var(--neo-font-size-xs);
  color: var(--neo-text-tertiary);
  margin-bottom: var(--neo-spacing-xs);
}

.neo-timeline-item__body {
  color: var(--neo-text-secondary);
}
</style>