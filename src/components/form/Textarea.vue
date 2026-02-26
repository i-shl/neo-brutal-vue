<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
  rows?: number
  placeholder?: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const textareaClass = computed(() => {
  const classes = ['neo-textarea']
  if (props.disabled) classes.push('neo-textarea--disabled')
  return classes.join(' ')
})

const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <textarea
    :class="textareaClass"
    :value="modelValue"
    :rows="rows || 4"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
  />
</template>

<style scoped>
.neo-textarea {
  width: 100%;
  min-height: 5rem;
  padding: 1rem;
  font-family: var(--neo-font-family);
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-bold);
  line-height: 1.5;
  color: var(--neo-black);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0 var(--neo-black);
  resize: vertical;
  transition: var(--neo-transition);
  outline: none;
}

.neo-textarea:focus {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--neo-black);
  background-color: var(--neo-gray-50);
}

.neo-textarea::placeholder {
  color: var(--neo-gray-400);
}

.neo-textarea--disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: 2px 2px 0 var(--neo-black);
}
</style>
