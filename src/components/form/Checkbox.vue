<script setup lang="ts">
import { computed } from 'vue'
import type { CheckboxProps } from '@/types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'md',
  border: false,
  trueValue: true,
  falseValue: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | any[]): void
  (e: 'change', value: boolean | any[]): void
}>()

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.label as any)
  }
  return props.modelValue === props.trueValue
})

const checkboxClass = computed(() => {
  const classes: string[] = [
    'neo-checkbox',
    `neo-checkbox--${props.size}`,
  ]
  
  if (isChecked.value) classes.push('neo-checkbox--checked')
  if (props.disabled) classes.push('neo-checkbox--disabled')
  if (props.indeterminate) classes.push('neo-checkbox--indeterminate')
  if (props.border) classes.push('neo-checkbox--border')
  
  return classes.join(' ')
})

const handleChange = () => {
  if (props.disabled) return
  
  let newValue: boolean | any[]
  
  if (Array.isArray(props.modelValue)) {
    const current = [...props.modelValue]
    const index = current.indexOf(props.label as any)
    if (index === -1) {
      current.push(props.label as any)
    } else {
      current.splice(index, 1)
    }
    newValue = current
  } else {
    newValue = isChecked.value ? props.falseValue : props.trueValue
  }
  
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<template>
  <label :class="checkboxClass">
    <input
      type="checkbox"
      :checked="isChecked"
      :disabled="disabled"
      :indeterminate="indeterminate"
      class="neo-checkbox__input"
      @change="handleChange"
    />
    <span class="neo-checkbox__box">
      <span v-if="indeterminate" class="neo-checkbox__indeterminate">−</span>
      <span v-else-if="isChecked" class="neo-checkbox__check">✓</span>
    </span>
    <span v-if="label || $slots.default" class="neo-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
/* ==================== Base Checkbox Styles ==================== */
.neo-checkbox {
  --checkbox-color: var(--neo-primary);
  --checkbox-bg: var(--neo-bg-primary);
  --checkbox-border: var(--neo-border-color);
  --checkbox-size: 18px;
  
  display: inline-flex;
  align-items: center;
  gap: var(--neo-spacing-sm);
  cursor: pointer;
  user-select: none;
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-primary);
}

.neo-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.neo-checkbox__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  background-color: var(--checkbox-bg);
  border: var(--neo-border-width) solid var(--checkbox-border);
  border-radius: var(--neo-radius-sm);
  box-shadow: var(--neo-shadow-sm);
  transition: all var(--neo-transition-fast);
  flex-shrink: 0;
}

.neo-checkbox__check,
.neo-checkbox__indeterminate {
  font-size: calc(var(--checkbox-size) * 0.7);
  font-weight: var(--neo-font-weight-bold);
  color: var(--checkbox-color);
}

.neo-checkbox__label {
  line-height: var(--checkbox-size);
}

/* ==================== Checkbox States ==================== */
.neo-checkbox:hover .neo-checkbox__box {
  box-shadow: var(--neo-shadow);
}

.neo-checkbox--checked .neo-checkbox__box {
  background-color: var(--checkbox-color);
  border-color: var(--checkbox-color);
}

.neo-checkbox--checked .neo-checkbox__check,
.neo-checkbox--checked .neo-checkbox__indeterminate {
  color: var(--neo-white);
}

.neo-checkbox--indeterminate .neo-checkbox__box {
  border-color: var(--checkbox-color);
}

.neo-checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-checkbox--disabled:hover .neo-checkbox__box {
  box-shadow: var(--neo-shadow-sm);
}

/* ==================== Checkbox Sizes ==================== */
.neo-checkbox--xs {
  --checkbox-size: 14px;
  font-size: var(--neo-font-size-xs);
}

.neo-checkbox--sm {
  --checkbox-size: 16px;
  font-size: var(--neo-font-size-xs);
}

.neo-checkbox--md {
  --checkbox-size: 18px;
}

.neo-checkbox--lg {
  --checkbox-size: 20px;
  font-size: var(--neo-font-size-base);
}

.neo-checkbox--xl {
  --checkbox-size: 24px;
  font-size: var(--neo-font-size-lg);
}

/* ==================== Checkbox Border ==================== */
.neo-checkbox--border {
  padding: var(--neo-spacing-xs) var(--neo-spacing-sm);
  border: var(--neo-border-width) solid var(--checkbox-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-sm);
  transition: all var(--neo-transition-base);
}

.neo-checkbox--border:hover {
  box-shadow: var(--neo-shadow);
}

.neo-checkbox--border.neo-checkbox--checked {
  border-color: var(--checkbox-color);
}
</style>
