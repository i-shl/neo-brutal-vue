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
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  transition: var(--neo-transition);
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
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  border-radius: 50%;
  box-shadow: 2px 2px 0 var(--neo-black);
  transition: var(--neo-transition);
  flex-shrink: 0;
}

.neo-radio__dot {
  width: 0.625rem;
  height: 0.625rem;
  background-color: var(--neo-primary);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid var(--neo-black);
}

.neo-radio:hover:not(.neo-radio--disabled) .neo-radio__box {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 var(--neo-black);
}

.neo-radio--checked .neo-radio__box {
  border-color: var(--neo-black);
}

.neo-radio--checked .neo-radio__dot {
  transform: scale(1);
}

.neo-radio--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Sizes */
.neo-radio--xs .neo-radio__box { width: 0.875rem; height: 0.875rem; }
.neo-radio--xs .neo-radio__dot { width: 0.4375rem; height: 0.4375rem; }

.neo-radio--sm .neo-radio__box { width: 1rem; height: 1rem; }
.neo-radio--sm .neo-radio__dot { width: 0.5rem; height: 0.5rem; }

.neo-radio--lg .neo-radio__box { width: 1.5rem; height: 1.5rem; }
.neo-radio--lg .neo-radio__dot { width: 0.75rem; height: 0.75rem; }

.neo-radio--xl .neo-radio__box { width: 1.75rem; height: 1.75rem; }
.neo-radio--xl .neo-radio__dot { width: 0.875rem; height: 0.875rem; }

/* Border Style */
.neo-radio--border {
  padding: 0.5rem 0.75rem;
  border: var(--neo-border-thick);
  background-color: var(--neo-white);
  box-shadow: var(--neo-shadow-sm);
  border-radius: var(--neo-radius-sm);
}

.neo-radio--border:hover:not(.neo-radio--disabled) {
  transform: translate(-2px, -2px);
  box-shadow: var(--neo-shadow);
}

.neo-radio--border.neo-radio--checked {
  background-color: var(--neo-gray-50);
}
</style>
