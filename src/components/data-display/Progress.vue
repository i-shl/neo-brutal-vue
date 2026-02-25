<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressProps } from '@/types'

const props = withDefaults(defineProps<ProgressProps>(), {
  percentage: 0,
  strokeWidth: 10,
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
  width: `${props.percentage}%`
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
  return 'var(--neo-primary)'
})
</script>

<template>
  <div :class="progressClass">
    <div class="neo-progress__bar">
      <div class="neo-progress__outer">
        <div class="neo-progress__inner" :style="{ ...barStyle, backgroundColor: barColor }">
          <span v-if="textInside && showText" class="neo-progress__text">
            {{ displayPercentage }}
          </span>
        </div>
      </div>
    </div>
    <span v-if="!textInside && showText" class="neo-progress__text">
      {{ displayPercentage }}
    </span>
  </div>
</template>

<style scoped>
.neo-progress {
  display: flex;
  align-items: center;
  gap: var(--neo-spacing-sm);
  width: 100%;
}

.neo-progress__bar {
  flex: 1;
}

.neo-progress__outer {
  width: 100%;
  background-color: var(--neo-gray-200);
  border-radius: var(--neo-radius-full);
  overflow: hidden;
}

.neo-progress__inner {
  height: 100%;
  background-color: var(--neo-primary);
  border-radius: var(--neo-radius-full);
  transition: width var(--neo-transition-base);
  min-width: 0;
}

.neo-progress__text {
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-semibold);
  color: var(--neo-text-primary);
  white-space: nowrap;
}

.neo-progress--text-inside .neo-progress__inner {
  position: relative;
}

.neo-progress--text-inside .neo-progress__text {
  position: absolute;
  right: 0;
  transform: translateX(100%);
  padding-left: var(--neo-spacing-sm);
  color: var(--neo-text-secondary);
}

.neo-progress--success .neo-progress__inner {
  background-color: var(--neo-success);
}

.neo-progress--warning .neo-progress__inner {
  background-color: var(--neo-warning);
}

.neo-progress--exception .neo-progress__inner {
  background-color: var(--neo-danger);
}
</style>
