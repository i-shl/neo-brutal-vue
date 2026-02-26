<script setup lang="ts">
import { computed } from 'vue'
import type { SwitchProps } from '@/types'

const props = withDefaults(defineProps<SwitchProps>(), {
  size: 'md',
  type: 'default',
  activeValue: true,
  inactiveValue: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string | number): void
  (e: 'change', value: boolean | string | number): void
}>()

const isChecked = computed(() => props.modelValue === props.activeValue)

const switchClass = computed(() => {
  const classes: string[] = ['neo-switch', `neo-switch--${props.size}`]
  if (isChecked.value) classes.push('neo-switch--checked')
  if (props.disabled) classes.push('neo-switch--disabled')
  if (props.type && props.type !== 'default') classes.push(`neo-switch--${props.type}`)
  return classes.join(' ')
})

const handleClick = () => {
  if (props.disabled) return
  const newValue = isChecked.value ? props.inactiveValue : props.activeValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<template>
  <div :class="switchClass" @click="handleClick">
    <div class="neo-switch__track">
      <div class="neo-switch__thumb">
        <span v-if="isChecked" class="neo-switch__icon">✓</span>
        <span v-else class="neo-switch__icon">✕</span>
      </div>
    </div>
    <span v-if="activeText || inactiveText || $slots.default" class="neo-switch__label">
      <slot>{{ isChecked ? activeText : inactiveText }}</slot>
    </span>
  </div>
</template>

<style scoped>
.neo-switch {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  transition: var(--neo-transition);
}

.neo-switch__track {
  position: relative;
  width: 3.5rem;
  height: 1.75rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 3px 3px 0 var(--neo-black);
  transition: var(--neo-transition);
  border-radius: 4px;
  overflow: visible;
}

.neo-switch--checked .neo-switch__track {
  background-color: var(--neo-main);
  box-shadow: 2px 2px 0 var(--neo-black);
  transform: translate(1px, 1px);
}

/* Types */
.neo-switch--primary.neo-switch--checked .neo-switch__track {
  background-color: var(--neo-primary);
}
.neo-switch--success.neo-switch--checked .neo-switch__track {
  background-color: var(--neo-success);
}
.neo-switch--warning.neo-switch--checked .neo-switch__track {
  background-color: var(--neo-warning);
}
.neo-switch--danger.neo-switch--checked .neo-switch__track {
  background-color: var(--neo-danger);
}
.neo-switch--info.neo-switch--checked .neo-switch__track {
  background-color: var(--neo-info);
}
.neo-switch--default.neo-switch--checked .neo-switch__track {
  background-color: var(--neo-main);
}

.neo-switch__thumb {
  position: absolute;
  top: 50%;
  left: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--neo-white);
  border: var(--neo-border);
  box-shadow: 2px 2px 0 var(--neo-black);
  transform: translateY(-50%);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}

.neo-switch--checked .neo-switch__thumb {
  left: calc(100% - 1.5rem);
  background-color: var(--neo-black);
  color: var(--neo-white);
  box-shadow: -2px 2px 0 rgba(0,0,0,0.3);
}

.neo-switch__icon {
  font-size: 0.625rem;
  font-weight: var(--neo-font-weight-black);
}

.neo-switch__label {
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  color: var(--neo-black);
}

.neo-switch:hover:not(.neo-switch--disabled) .neo-switch__track {
  box-shadow: 4px 4px 0 var(--neo-black);
  transform: translate(-1px, -1px);
}

.neo-switch--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Sizes */
.neo-switch--sm .neo-switch__track { width: 2.75rem; height: 1.25rem; }
.neo-switch--sm .neo-switch__thumb { width: 0.875rem; height: 0.875rem; }
.neo-switch--sm .neo-switch--checked .neo-switch__thumb { left: calc(100% - 1.125rem); }

.neo-switch--lg .neo-switch__track { width: 4.5rem; height: 2.25rem; }
.neo-switch--lg .neo-switch__thumb { width: 1.75rem; height: 1.75rem; }
.neo-switch--lg .neo-switch--checked .neo-switch__thumb { left: calc(100% - 2rem); }
</style>
