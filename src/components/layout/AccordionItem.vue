<script setup lang="ts">
import { computed, inject } from 'vue'

const props = withDefaults(defineProps<{
  name: string | number
  title?: string
  disabled?: boolean
}>(), {
  disabled: false
})

const isActiveFn = inject<(name: string | number) => boolean>(
  'accordionIsActive',
  () => false
)
const setActive = inject<(name: string | number) => void>(
  'accordionSetActive',
  () => {}
)
const isActive = () => isActiveFn(props.name)

const itemClass = computed(() => {
  const classes: string[] = ['neo-accordion-item']
  if (isActive()) classes.push('neo-accordion-item--active')
  if (props.disabled) classes.push('neo-accordion-item--disabled')
  return classes.join(' ')
})

const handleClick = () => {
  if (props.disabled) return
  setActive(props.name)
}
</script>

<template>
  <div :class="itemClass">
    <div 
      class="neo-accordion-item__header" 
      @click="handleClick"
    >
      <span class="neo-accordion-item__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <span class="neo-accordion-item__arrow" :class="{ 'is-active': isActive() }">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor" 
          stroke-width="3" 
          stroke-linecap="square" 
          stroke-linejoin="miter"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </div>
    
    <Transition name="neo-accordion-slide">
      <div 
        v-if="isActive()" 
        class="neo-accordion-item__content"
      >
        <div class="neo-accordion-item__body">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-accordion-item {
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0px var(--neo-black);
  transition: var(--neo-transition);
  overflow: hidden;
}

.neo-accordion-item:hover:not(.neo-accordion-item--disabled) {
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0px var(--neo-black);
}

.neo-accordion-item--active {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px var(--neo-black);
}

.neo-accordion-item--active .neo-accordion-item__header {
  background-color: var(--neo-main);
  border-bottom: var(--neo-border-thick);
}

.neo-accordion-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

/* Header */
.neo-accordion-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  user-select: none;
  transition: var(--neo-transition);
}

.neo-accordion-item__title {
  font-size: 1rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.neo-accordion-item__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.neo-accordion-item__arrow.is-active {
  transform: rotate(180deg);
}

/* Content */
.neo-accordion-item__body {
  padding: 1.5rem;
  background-color: var(--neo-white);
  color: var(--neo-black);
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-bold);
  line-height: 1.6;
}

/* Slide Animation */
.neo-accordion-slide-enter-active,
.neo-accordion-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 1000px;
  overflow: hidden;
}

.neo-accordion-slide-enter-from,
.neo-accordion-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
