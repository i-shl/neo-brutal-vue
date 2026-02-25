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

const sliderClass = computed(() => {
  const classes = ['neo-slider']
  if (props.disabled) classes.push('neo-slider--disabled')
  return classes
})
</script>

<template>
  <div :class="sliderClass">
    <input
      type="range"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      class="neo-slider__input"
      @input="(e) => emit('update:modelValue', parseFloat((e.target as HTMLInputElement).value))"
    />
  </div>
</template>

<style scoped>
.neo-slider {
  width: 100%;
  padding: var(--neo-spacing-sm) 0;
}

.neo-slider__input {
  width: 100%;
  height: 8px;
  appearance: none;
  background: var(--neo-gray-200);
  border-radius: var(--neo-radius-full);
  outline: none;
}

.neo-slider__input::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--neo-primary);
  border: var(--neo-border-width-thin) solid var(--neo-border-color);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: var(--neo-shadow-sm);
}

.neo-slider__input::-webkit-slider-thumb:hover {
  box-shadow: var(--neo-shadow);
  transform: scale(1.1);
}

.neo-slider--disabled {
  opacity: 0.5;
}

.neo-slider--disabled .neo-slider__input {
  cursor: not-allowed;
}
</style>
