<script setup lang="ts">
import { computed, provide } from 'vue'

const props = defineProps<{
  modelValue?: string | string[]
  accordion?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
}>()

provide('collapseModelValue', () => props.modelValue)
provide('collapseAccordion', () => props.accordion)
provide('collapseEmit', (value: string | string[]) => {
  emit('update:modelValue', value)
})

const collapseClass = computed(() => [
  'neo-collapse',
  props.accordion ? 'neo-collapse--accordion' : ''
])
</script>

<template>
  <div :class="collapseClass">
    <slot />
  </div>
</template>

<style scoped>
.neo-collapse {
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0px var(--neo-black);
  background-color: var(--neo-black);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>