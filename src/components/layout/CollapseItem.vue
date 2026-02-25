<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string | string[]
  accordion?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
}>()

const isActive = computed(() => {
  if (props.accordion) {
    return props.modelValue === props.name
  }
  return Array.isArray(props.modelValue) && props.modelValue.includes(props.name)
})

const collapseClass = computed(() => [
  'neo-collapse-item',
  isActive ? 'neo-collapse-item--active' : ''
])

const handleTitleClick = () => {
  if (props.disabled) return
  
  if (props.accordion) {
    emit('update:modelValue', props.name)
  } else {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = current.indexOf(props.name)
    if (index === -1) {
      current.push(props.name)
    } else {
      current.splice(index, 1)
    }
    emit('update:modelValue', current)
  }
}
</script>

<template>
  <div :class="collapseClass">
    <div class="neo-collapse-item__header" @click="handleTitleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="neo-collapse-item__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.neo-collapse-item {
  border-bottom: var(--neo-border-width-thin) solid var(--neo-border-light);
}

.neo-collapse-item:last-child {
  border-bottom: none;
}

.neo-collapse-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--neo-spacing-md);
  font-weight: var(--neo-font-weight-medium);
  cursor: pointer;
  transition: all var(--neo-transition-base);
}

.neo-collapse-item__header:hover {
  background: var(--neo-gray-50);
}

.neo-collapse-item__content {
  padding: var(--neo-spacing-md);
  padding-top: 0;
}
</style>