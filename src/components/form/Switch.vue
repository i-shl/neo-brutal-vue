<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SwitchProps } from '@/types'

const props = withDefaults(defineProps<SwitchProps>(), {
  size: 'md',
  activeValue: true,
  inactiveValue: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string | number): void
  (e: 'change', value: boolean | string | number): void
}>()

const isChecked = computed(() => props.modelValue === props.activeValue)

const switchClass = computed(() => {
  const classes: string[] = [
    'neo-switch',
    `neo-switch--${props.size}`,
  ]
  
  if (isChecked.value) classes.push('neo-switch--checked')
  if (props.disabled) classes.push('neo-switch--disabled')
  if (props.activeText) classes.push('neo-switch--text')
  if (props.inactiveText) classes.push('neo-switch--text')
  
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
    <input
      type="checkbox"
      :checked="isChecked"
      :disabled="disabled"
      class="neo-switch__input"
    />
    <span class="neo-switch__track">
      <span class="neo-switch__thumb" />
    </span>
    <span v-if="activeText || inactiveText" class="neo-switch__text">
      {{ isChecked ? activeText : inactiveText }}
    </span>
  </div>
</template>

<style scoped>
.neo-switch {
  --switch-color: var(--neo-primary);
  --switch-width: 44px;
  --switch-height: 24px;
  --switch-thumb-size: 18px;
  
  display: inline-flex;
  align-items: center;
  gap: var(--neo-spacing-sm);
  cursor: pointer;
  user-select: none;
}

.neo-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.neo-switch__track {
  position: relative;
  width: var(--switch-width);
  height: var(--switch-height);
  background-color: var(--neo-gray-300);
  border: var(--neo-border-width-thin) solid var(--neo-border-color);
  border-radius: var(--neo-radius-full);
  box-shadow: var(--neo-shadow-sm);
  transition: all var(--neo-transition-base);
}

.neo-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(var(--switch-height) - 6px);
  height: calc(var(--switch-height) - 6px);
  background-color: var(--neo-white);
  border: var(--neo-border-width-thin) solid var(--neo-border-color);
  border-radius: 50%;
  box-shadow: var(--neo-shadow-sm);
  transition: all var(--neo-transition-base);
}

/* Checked State */
.neo-switch--checked .neo-switch__track {
  background-color: var(--switch-color);
  border-color: var(--switch-color);
}

.neo-switch--checked .neo-switch__thumb {
  left: calc(100% - var(--switch-height) + 2px);
  border-color: var(--neo-white);
}

/* Disabled */
.neo-switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.neo-switch--xs {
  --switch-width: 32px;
  --switch-height: 18px;
  --switch-thumb-size: 14px;
}

.neo-switch--sm {
  --switch-width: 38px;
  --switch-height: 20px;
  --switch-thumb-size: 16px;
}

.neo-switch--lg {
  --switch-width: 52px;
  --switch-height: 28px;
  --switch-thumb-size: 22px;
}

.neo-switch--xl {
  --switch-width: 60px;
  --switch-height: 32px;
  --switch-thumb-size: 26px;
}

/* Text */
.neo-switch__text {
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
}
</style>
