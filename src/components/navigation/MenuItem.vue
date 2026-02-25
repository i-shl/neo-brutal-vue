<script setup lang="ts">
const props = defineProps<{
  index?: string
  title?: string
  disabled?: boolean
}>()

const menuItemClass = computed(() => [
  'neo-menu-item',
  props.disabled ? 'neo-menu-item--disabled' : ''
])
</script>

<template>
  <div :class="menuItemClass">
    <slot>{{ title }}</slot>
  </div>
</template>

<style scoped>
.neo-menu-item {
  display: flex;
  align-items: center;
  gap: var(--neo-spacing-sm);
  padding: var(--neo-spacing-sm) var(--neo-spacing-md);
  color: var(--neo-text-primary);
  cursor: pointer;
  transition: all var(--neo-transition-base);
}

.neo-menu-item:hover {
  background: var(--neo-gray-100);
}

.neo-menu-item--active {
  background: var(--neo-primary-light);
  color: var(--neo-primary);
}

.neo-menu-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>