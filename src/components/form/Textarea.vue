<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue?: string
  rows?: number
  autosize?: boolean
  placeholder?: string
  disabled?: boolean
}>()

const textareaClass = computed(() => {
  const classes = ['neo-textarea']
  if (props.disabled) classes.push('neo-textarea--disabled')
  return classes
})
</script>

<template>
  <textarea
    :class="textareaClass"
    :value="modelValue"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<style scoped>
.neo-textarea {
  width: 100%;
  min-height: 80px;
  padding: var(--neo-spacing-sm);
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
  line-height: var(--neo-line-height-normal);
  color: var(--neo-text-primary);
  background: var(--neo-bg-primary);
  border: var(--neo-border-width) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-sm);
  resize: vertical;
  transition: all var(--neo-transition-base);
}

.neo-textarea:focus {
  outline: none;
  border-color: var(--neo-border-focus);
  box-shadow: var(--neo-shadow);
}

.neo-textarea::placeholder {
  color: var(--neo-text-disabled);
}

.neo-textarea--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--neo-bg-secondary);
}
</style>
