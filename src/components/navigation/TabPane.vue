<script setup lang="ts">
import { computed, inject, provide } from 'vue'

const props = defineProps<{
  name: string
  label?: string
  disabled?: boolean
  closable?: boolean
}>()

const activeName = inject('activeName', '')
const tabsType = inject('tabsType', 'line')

const isActive = computed(() => activeName.value === props.name)

const tabClass = computed(() => {
  const classes: string[] = ['neo-tab']
  
  if (isActive.value) classes.push('neo-tab--active')
  if (props.disabled) classes.push('neo-tab--disabled')
  
  return classes.join(' ')
})

const handleClick = () => {
  if (props.disabled) return
  provide('activeName', props.name)
}
</script>

<template>
  <div :class="tabClass" @click="handleClick">
    <span class="neo-tab__label">{{ label || name }}</span>
    <button v-if="closable" type="button" class="neo-tab__close">✕</button>
  </div>
</template>

<style scoped>
.neo-tab {
  display: inline-flex;
  align-items: center;
  gap: var(--neo-spacing-xs);
  padding: var(--neo-spacing-sm) var(--neo-spacing-md);
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-medium);
  color: var(--neo-text-secondary);
  background: transparent;
  border: none;
  border-bottom: var(--neo-border-width) solid transparent;
  cursor: pointer;
  transition: all var(--neo-transition-base);
}

.neo-tab:hover {
  color: var(--neo-text-primary);
}

.neo-tab--active {
  color: var(--neo-primary);
  border-bottom-color: var(--neo-primary);
}

.neo-tab--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-tab__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  font-size: 10px;
  color: inherit;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.6;
}

.neo-tab__close:hover {
  opacity: 1;
  background: var(--neo-gray-200);
}
</style>
