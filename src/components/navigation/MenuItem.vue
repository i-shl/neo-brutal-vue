<script setup lang="ts">
import { computed, inject } from 'vue'

const props = withDefaults(
  defineProps<{
    index?: string
    title?: string
    disabled?: boolean
  }>(),
  { index: '' }
)

const activeIndex = inject<{ value: string }>('menuActiveIndex', { value: '' })
const setActive = inject<(index: string) => void>('menuSetActive', () => {})
const menuMode = inject<{ value: 'horizontal' | 'vertical' }>('menuMode', { value: 'vertical' })

const isActive = computed(() => activeIndex.value === props.index)

const menuItemClass = computed(() => [
  'neo-menu-item',
  `is-${menuMode.value}`,
  isActive.value ? 'is-active' : '',
  props.disabled ? 'is-disabled' : ''
])

const handleClick = () => {
  if (props.disabled) return
  setActive(props.index ?? '')
}
</script>

<template>
  <div :class="menuItemClass" @click="handleClick">
    <div class="neo-menu-item__inner">
      <slot>{{ title }}</slot>
    </div>
  </div>
</template>

<style scoped>
.neo-menu-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  font-size: 0.875rem;
  user-select: none;
  position: relative;
}

.neo-menu-item:hover:not(.is-disabled) {
  background-color: var(--neo-gray-50);
  color: var(--neo-black);
}

.neo-menu-item.is-active:not(.is-disabled) {
  background-color: var(--neo-main);
  color: var(--neo-black);
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0px var(--neo-black);
  border: var(--neo-border);
  z-index: 1;
}

/* Horizontal specific */
.is-horizontal {
  border-bottom: var(--neo-border-thick) solid transparent;
  top: 3px; /* Align with menu border */
}

.is-horizontal.is-active {
  border-bottom-color: var(--neo-black);
  transform: translateY(-4px);
  box-shadow: 4px 4px 0px var(--neo-black);
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

.neo-menu-item__inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}
</style>