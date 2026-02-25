<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string | string[]
  accordion?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
}>()

const collapseClass = computed(() => [
  'neo-collapse',
  props.accordion ? 'neo-collapse--accordion' : ''
])

const handleItemClick = (name: string) => {
  if (props.accordion) {
    emit('update:modelValue', name)
  } else {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = current.indexOf(name)
    if (index === -1) {
      current.push(name)
    } else {
      current.splice(index, 1)
    }
    emit('update:modelValue', current)
  }
}
</script>

<template>
  <div :class="collapseClass">
    <slot />
  </div>
</template>

<style scoped>
.neo-collapse {
  border: var(--neo-border-width) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
  overflow: hidden;
}

.neo-collapse--accordion {
  /* accordion specific styles */
}
</style>