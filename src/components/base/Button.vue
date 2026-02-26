<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps, ButtonEmits } from '@/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  variant: 'solid',
  size: 'md',
  shape: 'default',
  disabled: false,
  loading: false,
  block: false,
  nativeType: 'button',
  iconPosition: 'left'
})

const emit = defineEmits<ButtonEmits>()

const buttonClass = computed(() => {
  const classes: string[] = [
    'neo-button',
    `neo-button--${props.type}`,
    `neo-button--${props.variant}`,
    `neo-button--${props.size}`,
  ]
  
  if (props.shape === 'round') classes.push('neo-button--round')
  if (props.shape === 'circle') classes.push('neo-button--circle')
  if (props.shape === 'sharp') classes.push('neo-button--sharp')
  if (props.disabled) classes.push('neo-button--disabled')
  if (props.loading) classes.push('neo-button--loading')
  if (props.block) classes.push('neo-button--block')
  
  return classes.join(' ')
})

const handleClick = (e: MouseEvent) => {
  if (props.disabled || props.loading) {
    e.preventDefault()
    return
  }
  emit('click', e)
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="buttonClass"
    :disabled="disabled"
    :type="href ? undefined : nativeType"
    :href="href"
    :target="href ? target : undefined"
    @click="handleClick"
  >
    <span v-if="loading" class="neo-button__spinner-wrapper">
      <svg class="neo-button__spinner" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" stroke-dasharray="60" stroke-linecap="round" />
      </svg>
    </span>
    
    <span v-if="icon && !loading && iconPosition === 'left'" class="neo-button__icon">
      <slot name="icon">{{ icon }}</slot>
    </span>
    
    <span v-if="$slots.default" class="neo-button__content">
      <slot />
    </span>
    
    <span v-if="icon && !loading && iconPosition === 'right'" class="neo-button__icon">
      <slot name="icon">{{ icon }}</slot>
    </span>
  </component>
</template>

<style scoped>
.neo-button {
  --btn-bg: var(--neo-white);
  --btn-color: var(--neo-black);
  --btn-shadow: var(--neo-shadow);
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1.25rem;
  height: 2.75rem;
  
  font-family: var(--neo-font-family);
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  
  background-color: var(--btn-bg);
  color: var(--btn-color);
  border: var(--neo-border-thick);
  border-radius: var(--neo-radius-sm);
  box-shadow: var(--btn-shadow);
  
  cursor: pointer;
  transition: var(--neo-transition);
  user-select: none;
  position: relative;
  white-space: nowrap;
  outline: none;
}

/* Hover: Lift Up */
.neo-button:hover:not(:disabled) {
  transform: translate(-3px, -3px);
  box-shadow: var(--neo-shadow-hover);
}

/* Active: Press Down */
.neo-button:active:not(:disabled) {
  transform: translate(var(--neo-shadow-offset), var(--neo-shadow-offset));
  box-shadow: var(--neo-shadow-active);
}

/* --- Type Variants --- */
.neo-button--primary { --btn-bg: var(--neo-main); }
.neo-button--secondary { --btn-bg: var(--neo-secondary); --btn-color: var(--neo-white); }
.neo-button--accent { --btn-bg: var(--neo-accent); }
.neo-button--success { --btn-bg: var(--neo-success); }
.neo-button--warning { --btn-bg: var(--neo-warning); }
.neo-button--danger { --btn-bg: var(--neo-danger); --btn-color: var(--neo-white); }
.neo-button--info { --btn-bg: var(--neo-info); --btn-color: var(--neo-white); }

/* --- Size Variants --- */
.neo-button--xs { height: 2rem; padding: 0 0.75rem; font-size: 0.75rem; border-width: 2px; --neo-shadow-offset: 2px; }
.neo-button--sm { height: 2.25rem; padding: 0 1rem; font-size: 0.75rem; }
.neo-button--lg { height: 3.5rem; padding: 0 1.75rem; font-size: 1.125rem; }
.neo-button--xl { height: 4rem; padding: 0 2rem; font-size: 1.25rem; }

/* --- Shape Variants --- */
.neo-button--round { border-radius: var(--neo-radius-lg); }
.neo-button--circle { border-radius: 999px; aspect-ratio: 1; padding: 0; }
.neo-button--sharp { border-radius: 0; }

/* --- Other States --- */
.neo-button--disabled, .neo-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
  background-color: var(--neo-gray-200);
}

.neo-button--block { width: 100%; display: flex; }

.neo-button__spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
}

.neo-button__spinner {
  width: 1.25rem;
  height: 1.25rem;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.neo-button__icon {
  font-size: 1.2em;
  display: flex;
}
</style>
