<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressProps } from '@/types'

const props = withDefaults(defineProps<ProgressProps>(), {
  percentage: 0,
  strokeWidth: 16,
  showText: true,
  textInside: false
})

const progressClass = computed(() => {
  const classes: string[] = ['neo-progress']
  
  if (props.status) classes.push(`neo-progress--${props.status}`)
  if (props.textInside) classes.push('neo-progress--text-inside')
  
  return classes.join(' ')
})

const barStyle = computed(() => ({
  width: `${props.percentage}%`,
}))

const outerStyle = computed(() => ({
  height: `${props.strokeWidth}px`,
}))

const displayPercentage = computed(() => {
  if (props.format) {
    return props.format(props.percentage)
  }
  return `${props.percentage}%`
})

const barColor = computed(() => {
  if (props.color) {
    if (Array.isArray(props.color)) {
      return props.color[0]
    }
    return props.color
  }
  if (props.status === 'success') return 'var(--neo-success)'
  if (props.status === 'warning') return 'var(--neo-warning)'
  if (props.status === 'exception') return 'var(--neo-danger)'
  return 'var(--neo-main)'
})
</script>

<template>
  <div :class="progressClass">
    <div class="neo-progress__bar-container">
      <div class="neo-progress__outer" :style="outerStyle">
        <div class="neo-progress__inner" :style="{ ...barStyle, backgroundColor: barColor }">
          <span v-if="textInside && showText" class="neo-progress__text neo-progress__text--inside">
            {{ displayPercentage }}
          </span>
        </div>
      </div>
    </div>
    <span v-if="!textInside && showText" class="neo-progress__text neo-progress__text--outside">
      {{ displayPercentage }}
    </span>
  </div>
</template>

<style scoped>
.neo-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.neo-progress__bar-container {
  flex: 1;
}

.neo-progress__outer {
  width: 100%;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0px var(--neo-black);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.neo-progress__inner {
  height: 100%;
  background-color: var(--neo-main);
  border-right: var(--neo-border-thick);
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.neo-progress__text {
  font-family: var(--neo-font-family);
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  color: var(--neo-black);
  white-space: nowrap;
}

.neo-progress__text--inside {
  padding-right: 0.5rem;
  font-size: 0.75rem;
}

.neo-progress__text--outside {
  background-color: var(--neo-black);
  color: var(--neo-white);
  padding: 2px 8px;
  border-radius: 4px;
}

.neo-progress--success .neo-progress__inner { background-color: var(--neo-success); }
.neo-progress--warning .neo-progress__inner { background-color: var(--neo-warning); }
.neo-progress--exception .neo-progress__inner { background-color: var(--neo-danger); }
</style>
