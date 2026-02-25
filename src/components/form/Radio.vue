<script setup lang="ts">
import { computed } from 'vue'
import type { RadioProps } from '@/types'

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'md',
  border: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void
  (e: 'change', value: string | number | boolean): void
}>()

const isChecked = computed(() => props.modelValue === props.label)

const radioClass = computed(() => {
  const classes: string[] = [
    'neo-radio',
    `neo-radio--${props.size}`,
  ]
  
  if (isChecked.value) classes.push('neo-radio--checked')
  if (props.disabled) classes.push('neo-radio--disabled')
  if (props.border) classes.push('neo-radio--border')
  
  return classes.join(' ')
})

const handleChange = () => {
  if (props.disabled) return
  emit('update:modelValue', props.label!)
  emit('change', props.label!)
}
</script>

<template>
  <label :class="radioClass">
    <input
      type="radio"
      :checked="isChecked"
      :disabled="disabled"
      class="neo-radio__input"
      @change="handleChange"
    />
    <span class="neo-radio__box">
      <span class="neo-radio__dot" />
    </span>
    <span v-if="label || $slots.default" class="neo-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.neo-radio {
  --radio-color: var(--neo-primary);
  --radio-size: 18px;
  
  display: inline-flex;
  align-items: center;
  gap: var(--neo-spacing-sm);
  cursor: pointer;
  user-select: none;
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-primary);
}

.neo-radio__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.neo-radio__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--radio-size);
  height: var(--radio-size);
  background-color: var(--neo-bg-primary);
  border: var(--neo-border-width) solid var(--neo-border-color);
  border-radius: 50%;
  box-shadow: var(--neo-shadow-sm);
  transition: all var(--neo-transition-fast);
  flex-shrink: 0;
}

.neo-radio__dot {
  width: calc(var(--radio-size) * 0.5);
  height: calc(var(--radio-size) * 0.5);
  background-color: var(--radio-color);
  border-radius: 50%;
  transform: scale(0);
  transition: transform var(--neo-transition-fast);
}

.neo-radio:hover .neo-radio__box {
  box-shadow: var(--neo-shadow);
}

.neo-radio--checked .neo-radio__box {
  border-color: var(--radio-color);
}

.neo-radio--checked .neo-radio__dot {
  transform: scale(1);
}

.neo-radio--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.neo-radio--xs { --radio-size: 14px; font-size: var(--neo-font-size-xs); }
.neo-radio--sm { --radio-size: 16px; font-size: var(--neo-font-size-xs); }
.neo-radio--lg { --radio-size: 20px; font-size: var(--neo-font-size-base); }
.neo-radio--xl { --radio-size: 24px; font-size: var(--neo-font-size-lg); }

/* Border */
.neo-radio--border {
  padding: var(--neo-spacing-xs) var(--neo-spacing-sm);
  border: var(--neo-border-width) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
}
</style>
