<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const inputNumberClass = computed(() => {
  const classes = ['neo-input-number']
  if (props.disabled) classes.push('neo-input-number--disabled')
  return classes
})

const handleChange = (delta: number) => {
  if (props.disabled) return
  const newValue = (props.modelValue || 0) + delta
  if (newValue >= (props.min ?? -Infinity) && newValue <= (props.max ?? Infinity)) {
    emit('update:modelValue', newValue)
  }
}
</script>

<template>
  <div :class="inputNumberClass">
    <button type="button" class="neo-input-number__btn" :disabled="disabled || (modelValue ?? 0) <= (min ?? -Infinity)" @click="handleChange(-(step ?? 1))">−</button>
    <input
      type="number"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      class="neo-input-number__input"
      @input="(e) => emit('update:modelValue', parseFloat((e.target as HTMLInputElement).value))"
    />
    <button type="button" class="neo-input-number__btn" :disabled="disabled || (modelValue ?? 0) >= (max ?? Infinity)" @click="handleChange(step ?? 1)">+</button>
  </div>
</template>

<style scoped>
.neo-input-number {
  display: inline-flex;
  align-items: center;
  border: var(--neo-border-width) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-sm);
  overflow: hidden;
}

.neo-input-number__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 36px;
  font-size: var(--neo-font-size-base);
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-text-primary);
  background: var(--neo-gray-100);
  border: none;
  cursor: pointer;
  transition: all var(--neo-transition-base);
}

.neo-input-number__btn:hover:not(:disabled) {
  background: var(--neo-primary);
  color: var(--neo-white);
}

.neo-input-number__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-input-number__input {
  width: 60px;
  height: 36px;
  padding: 0 var(--neo-spacing-xs);
  font-size: var(--neo-font-size-sm);
  text-align: center;
  color: var(--neo-text-primary);
  background: var(--neo-white);
  border: none;
  outline: none;
}

.neo-input-number__input::-webkit-inner-spin-button,
.neo-input-number__input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.neo-input-number--disabled {
  opacity: 0.5;
}

.neo-input-number--disabled .neo-input-number__input {
  cursor: not-allowed;
}
</style>
