<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps } from '@/types'

const props = withDefaults(defineProps<BadgeProps>(), {
  isDot: false,
  hidden: false
})

const badgeClass = computed(() => {
  const classes: string[] = ['neo-badge']
  
  if (props.type) classes.push(`neo-badge--${props.type}`)
  if (props.isDot) classes.push('neo-badge--dot')
  if (props.hidden) classes.push('neo-badge--hidden')
  
  return classes.join(' ')
})

const displayValue = computed(() => {
  if (props.isDot) return ''
  if (typeof props.value === 'number' && typeof props.max === 'number') {
    return props.value > props.max ? `${props.max}+` : props.value
  }
  return props.value
})
</script>

<template>
  <span :class="badgeClass">
    <slot />
    <sup v-if="!hidden" class="neo-badge__content">
      {{ displayValue }}
    </sup>
  </span>
</template>

<style scoped>
.neo-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.neo-badge__content {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  font-family: var(--neo-font-family);
  font-size: 10px;
  font-weight: var(--neo-font-weight-bold);
  line-height: 1;
  color: var(--neo-white);
  background-color: var(--neo-danger);
  border: 2px solid var(--neo-bg-primary);
  border-radius: var(--neo-radius-full);
  transform: translate(30%, -30%);
  box-shadow: var(--neo-shadow-sm);
}

/* ==================== Badge Types ==================== */
.neo-badge--primary .neo-badge__content {
  background-color: var(--neo-primary);
}

.neo-badge--success .neo-badge__content {
  background-color: var(--neo-success);
}

.neo-badge--warning .neo-badge__content {
  background-color: var(--neo-warning);
}

.neo-badge--info .neo-badge__content {
  background-color: var(--neo-info);
}

/* ==================== Badge Dot ==================== */
.neo-badge--dot .neo-badge__content {
  width: 8px;
  height: 8px;
  min-width: 0;
  padding: 0;
  border-radius: 50%;
}

/* ==================== Badge Hidden ==================== */
.neo-badge--hidden .neo-badge__content {
  display: none;
}
</style>
