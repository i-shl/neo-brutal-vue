<script setup lang="ts">
import { computed, inject } from 'vue'

const props = withDefaults(defineProps<{
  name: string | number
  title?: string
  disabled?: boolean
}>(), {
  disabled: false
})

const isActive = inject<() => boolean>('isActive', () => false)
const setActive = inject<(name: string | number) => void>('setActive', () => {})

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
      <span class="neo-accordion-item__arrow">
        <svg 
          :class="{ 'neo-accordion-item__arrow--active': isActive() }"
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none"
        >
          <path 
            d="M4 6L8 10L12 6" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
    <div 
      v-show="isActive()" 
      class="neo-accordion-item__content"
    >
      <div class="neo-accordion-item__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-accordion-item {
  --item-header-bg: var(--neo-bg-secondary);
  --item-header-text: var(--neo-text-primary);
  --item-content-bg: var(--neo-bg-primary);
  --item-content-text: var(--neo-text-secondary);
  --item-border: var(--neo-border-color);
  
  background-color: var(--item-header-bg);
  border: var(--neo-border-width) solid var(--item-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-sm);
  overflow: hidden;
  transition: all var(--neo-transition-base) var(--neo-transition-timing);
}

.neo-accordion-item:hover:not(.neo-accordion-item--disabled) {
  box-shadow: var(--neo-shadow);
}

.neo-accordion-item--active {
  box-shadow: var(--neo-shadow);
}

.neo-accordion-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Header */
.neo-accordion-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--neo-spacing-md);
  cursor: pointer;
  user-select: none;
  transition: background-color var(--neo-transition-fast);
}

.neo-accordion-item:not(.neo-accordion-item--disabled) .neo-accordion-item__header:hover {
  background-color: var(--neo-bg-tertiary);
}

.neo-accordion-item__title {
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-semibold);
  color: var(--item-header-text);
}

.neo-accordion-item__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neo-text-tertiary);
  transition: transform var(--neo-transition-base);
}

.neo-accordion-item__arrow svg {
  transition: transform var(--neo-transition-base);
}

.neo-accordion-item__arrow--active {
  transform: rotate(180deg);
}

/* Content */
.neo-accordion-item__content {
  border-top: var(--neo-border-width-thin) solid var(--item-border);
}

.neo-accordion-item__body {
  padding: var(--neo-spacing-md);
  background-color: var(--item-content-bg);
  color: var(--item-content-text);
  font-size: var(--neo-font-size-sm);
  line-height: var(--neo-line-height-normal);
}
</style>
