<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label?: string
  timestamp?: string
  color?: string
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}>()

const dotClass = computed(() => {
  const classes = ['neo-timeline-item__dot']
  if (props.type) classes.push(`neo-timeline-item__dot--${props.type}`)
  return classes.join(' ')
})

const dotStyle = computed(() => {
  if (props.color) return { backgroundColor: props.color }
  return {}
})
</script>

<template>
  <div class="neo-timeline-item">
    <div class="neo-timeline-item__tail" />
    <div :class="dotClass" :style="dotStyle" />
    <div class="neo-timeline-item__content">
      <div v-if="timestamp" class="neo-timeline-item__time">{{ timestamp }}</div>
      <div v-if="label" class="neo-timeline-item__label">{{ label }}</div>
      <div class="neo-timeline-item__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-timeline-item {
  position: relative;
  padding-left: 2.5rem;
  padding-bottom: 2rem; /* Spacing between items */
  width: 100%;
}

.neo-timeline-item:last-child {
  padding-bottom: 0;
}

.neo-timeline-item__tail {
  position: absolute;
  left: 0.5rem;
  top: 1rem; /* Start from dot center */
  height: 100%; /* Go all the way to next item */
  width: 4px;
  background-color: var(--neo-black);
}

.neo-timeline-item:last-child .neo-timeline-item__tail {
  display: none;
}

.neo-timeline-item__dot {
  position: absolute;
  left: 0.125rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 2px 2px 0 var(--neo-black);
  z-index: 1;
}

.neo-timeline-item__dot--primary { background-color: var(--neo-main); }
.neo-timeline-item__dot--success { background-color: var(--neo-success); }
.neo-timeline-item__dot--warning { background-color: var(--neo-warning); }
.neo-timeline-item__dot--danger  { background-color: var(--neo-danger); }
.neo-timeline-item__dot--info    { background-color: var(--neo-info); }

.neo-timeline-item__content {
  padding: 1.25rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0 var(--neo-black);
  transition: var(--neo-transition);
  cursor: default;
}

.neo-timeline-item__content:hover {
  transform: translate(-3px, -3px);
  box-shadow: 10px 10px 0 var(--neo-black);
  background-color: var(--neo-gray-50);
}

.neo-timeline-item__label {
  font-size: 1.125rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.neo-timeline-item__time {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: var(--neo-font-weight-black);
  background-color: var(--neo-black);
  color: var(--neo-white);
  padding: 2px 6px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.neo-timeline-item__body {
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  line-height: 1.6;
}
</style>