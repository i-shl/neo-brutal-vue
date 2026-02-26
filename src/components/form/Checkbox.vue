<script setup lang="ts">
import { computed } from 'vue'
import type { CheckboxProps } from '@/types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'md',
  border: false,
  type: 'primary',
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
  if (props.type && props.type !== 'default') classes.push(`neo-checkbox--${props.type}`)
  return classes.join(' ')
})

const handleChange = () => {
  if (props.disabled) return
  let newValue: boolean | any[]
  if (Array.isArray(props.modelValue)) {
    const current = [...props.modelValue]
    const index = current.indexOf(props.label as any)
    if (index === -1) current.push(props.label as any)
    else current.splice(index, 1)
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
      <svg v-if="isChecked && !indeterminate" viewBox="0 0 24 24" class="neo-checkbox__svg">
        <path d="M4 12l4 4L20 6" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span v-else-if="indeterminate" class="neo-checkbox__indeterminate" />
    </span>
    <span v-if="label || $slots.default" class="neo-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.neo-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  transition: var(--neo-transition);
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
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 2px 2px 0 var(--neo-black);
  transition: var(--neo-transition);
  flex-shrink: 0;
  border-radius: 2px;
}

.neo-checkbox__svg {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--neo-white);
}

.neo-checkbox__indeterminate {
  width: 0.75rem;
  height: 4px;
  background-color: var(--neo-white);
  border-radius: 1px;
}

.neo-checkbox:hover:not(.neo-checkbox--disabled) .neo-checkbox__box {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 var(--neo-black);
}

.neo-checkbox--checked .neo-checkbox__box,
.neo-checkbox--indeterminate .neo-checkbox__box {
  background-color: var(--neo-primary);
}

/* Types */
.neo-checkbox--primary.neo-checkbox--checked .neo-checkbox__box,
.neo-checkbox--primary.neo-checkbox--indeterminate .neo-checkbox__box {
  background-color: var(--neo-primary);
}
.neo-checkbox--success.neo-checkbox--checked .neo-checkbox__box,
.neo-checkbox--success.neo-checkbox--indeterminate .neo-checkbox__box {
  background-color: var(--neo-success);
}
.neo-checkbox--warning.neo-checkbox--checked .neo-checkbox__box,
.neo-checkbox--warning.neo-checkbox--indeterminate .neo-checkbox__box {
  background-color: var(--neo-warning);
}
.neo-checkbox--danger.neo-checkbox--checked .neo-checkbox__box,
.neo-checkbox--danger.neo-checkbox--indeterminate .neo-checkbox__box {
  background-color: var(--neo-danger);
}
.neo-checkbox--info.neo-checkbox--checked .neo-checkbox__box,
.neo-checkbox--info.neo-checkbox--indeterminate .neo-checkbox__box {
  background-color: var(--neo-info);
}
.neo-checkbox--default.neo-checkbox--checked .neo-checkbox__box,
.neo-checkbox--default.neo-checkbox--indeterminate .neo-checkbox__box {
  background-color: var(--neo-main);
}

.neo-checkbox--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Sizes */
.neo-checkbox--xs .neo-checkbox__box { width: 0.875rem; height: 0.875rem; }
.neo-checkbox--sm .neo-checkbox__box { width: 1rem; height: 1rem; }
.neo-checkbox--lg .neo-checkbox__box { width: 1.5rem; height: 1.5rem; }
.neo-checkbox--xl .neo-checkbox__box { width: 1.75rem; height: 1.75rem; }

/* Border Style */
.neo-checkbox--border {
  padding: 0.5rem 0.75rem;
  border: var(--neo-border-thick);
  background-color: var(--neo-white);
  box-shadow: var(--neo-shadow-sm);
}

.neo-checkbox--border:hover:not(.neo-checkbox--disabled) {
  transform: translate(-2px, -2px);
  box-shadow: var(--neo-shadow);
}

.neo-checkbox--border.neo-checkbox--checked {
  background-color: var(--neo-gray-50);
}
</style>
