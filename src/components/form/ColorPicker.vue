<script setup lang="ts">
import type { ColorPickerProps, ColorPickerEmits } from '@/types'

const props = withDefaults(defineProps<ColorPickerProps>(), {
  disabled: false,
  size: 'md',
  showAlpha: false
})

const emit = defineEmits<ColorPickerEmits>()

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <div class="neo-color-picker" :class="[`neo-color-picker--${size}`, { 'is-disabled': disabled }]">
    <div class="neo-color-picker-trigger neo-interactive">
      <input 
        type="color" 
        :value="modelValue" 
        :disabled="disabled"
        @input="handleInput"
        class="neo-color-picker-input"
      />
      <div class="neo-color-picker-preview" :style="{ backgroundColor: modelValue }"></div>
    </div>
  </div>
</template>

<style scoped>
.neo-color-picker {
  display: inline-block;
}

.neo-color-picker-trigger {
  width: 40px;
  height: 40px;
  padding: 4px;
  background: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: var(--neo-shadow-sm);
  position: relative;
}

.neo-color-picker-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.neo-color-picker-preview {
  width: 100%;
  height: 100%;
  border: var(--neo-border);
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
