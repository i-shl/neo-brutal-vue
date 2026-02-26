<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}>(), {
  modelValue: 0,
  step: 1,
  size: 'md'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const inputNumberClass = computed(() => {
  const classes = ['neo-input-number', `neo-input-number--${props.size}`]
  if (props.disabled) classes.push('neo-input-number--disabled')
  return classes.join(' ')
})

const handleChange = (delta: number) => {
  if (props.disabled) return
  const newValue = (props.modelValue ?? 0) + delta
  if (newValue >= (props.min ?? -Infinity) && newValue <= (props.max ?? Infinity)) {
    emit('update:modelValue', newValue)
  }
}

const handleInput = (e: Event) => {
  const val = parseFloat((e.target as HTMLInputElement).value)
  if (!isNaN(val)) {
    emit('update:modelValue', val)
  }
}
</script>

<template>
  <div :class="inputNumberClass">
    <button 
      type="button" 
      class="neo-input-number__btn neo-input-number__btn--minus" 
      :disabled="disabled || (modelValue ?? 0) <= (min ?? -Infinity)" 
      @click="handleChange(-step)"
    >
      −
    </button>
    <input
      type="number"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      class="neo-input-number__input"
      @input="handleInput"
    />
    <button 
      type="button" 
      class="neo-input-number__btn neo-input-number__btn--plus" 
      :disabled="disabled || (modelValue ?? 0) >= (max ?? Infinity)" 
      @click="handleChange(step)"
    >
      +
    </button>
  </div>
</template>

<style scoped>
.neo-input-number {
  display: inline-flex;
  align-items: center;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0 var(--neo-black);
  transition: var(--neo-transition);
  overflow: hidden;
}

.neo-input-number--disabled {
  opacity: 0.5;
  box-shadow: 2px 2px 0 var(--neo-black);
}

.neo-input-number__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  background-color: var(--neo-main);
  border: none;
  cursor: pointer;
  transition: var(--neo-transition);
}

.neo-input-number__btn--minus {
  border-right: var(--neo-border-thick);
}

.neo-input-number__btn--plus {
  border-left: var(--neo-border-thick);
}

.neo-input-number__btn:hover:not(:disabled) {
  background-color: var(--neo-warning);
}

.neo-input-number__btn:active:not(:disabled) {
  background-color: var(--neo-danger);
  color: var(--neo-white);
}

.neo-input-number__btn:disabled {
  cursor: not-allowed;
  background-color: var(--neo-gray-100);
  color: var(--neo-gray-400);
}

.neo-input-number__input {
  width: 4rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: var(--neo-font-weight-black);
  text-align: center;
  color: var(--neo-black);
  background: var(--neo-white);
  border: none;
  outline: none;
  -moz-appearance: textfield;
  appearance: textfield;
}

.neo-input-number__input::-webkit-inner-spin-button,
.neo-input-number__input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Sizes */
.neo-input-number--sm .neo-input-number__btn,
.neo-input-number--sm .neo-input-number__input { height: 2rem; width: 2rem; }
.neo-input-number--sm .neo-input-number__input { width: 3rem; font-size: 0.875rem; }

.neo-input-number--lg .neo-input-number__btn,
.neo-input-number--lg .neo-input-number__input { height: 3.5rem; width: 3.5rem; }
.neo-input-number--lg .neo-input-number__input { width: 6rem; font-size: 1.25rem; }
</style>
