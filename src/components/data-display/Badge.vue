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
    <Transition name="neo-badge-pop">
      <sup v-if="!hidden" class="neo-badge__content">
        {{ displayValue }}
      </sup>
    </Transition>
  </span>
</template>

<style scoped>
.neo-badge {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.neo-badge__content {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  
  font-family: var(--neo-font-family);
  font-size: 0.75rem;
  font-weight: var(--neo-font-weight-black);
  
  color: var(--neo-black);
  background-color: var(--neo-accent);
  border: var(--neo-border);
  border-radius: 4px;
  transform: translate(50%, -50%);
  box-shadow: 3px 3px 0px var(--neo-black);
  z-index: 10;
  transition: var(--neo-transition);
}

/* --- Types --- */
.neo-badge--primary .neo-badge__content { background-color: var(--neo-main); }
.neo-badge--danger .neo-badge__content { background-color: var(--neo-danger); color: var(--neo-white); }
.neo-badge--success .neo-badge__content { background-color: var(--neo-success); }
.neo-badge--info .neo-badge__content { background-color: var(--neo-info); color: var(--neo-white); }
.neo-badge--warning .neo-badge__content { background-color: var(--neo-warning); }

.neo-badge--dot .neo-badge__content {
  width: 0.75rem;
  height: 0.75rem;
  min-width: 0;
  padding: 0;
  border-radius: 50%;
}

.neo-badge--hidden .neo-badge__content {
  display: none;
}

/* Pop Animation */
.neo-badge-pop-enter-active {
  animation: neo-badge-pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.neo-badge-pop-leave-active {
  animation: neo-badge-pop-in 0.3s reverse ease-in;
}

@keyframes neo-badge-pop-in {
  0% { transform: translate(50%, -50%) scale(0); opacity: 0; }
  80% { transform: translate(50%, -50%) scale(1.2); opacity: 1; }
  100% { transform: translate(50%, -50%) scale(1); opacity: 1; }
}
</style>
