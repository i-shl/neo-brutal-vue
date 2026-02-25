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
    <!-- Loading Spinner -->
    <span v-if="loading" class="neo-button__loading">
      <svg class="neo-button__spinner" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="60" stroke-linecap="round" />
      </svg>
    </span>
    
    <!-- Icon (left) -->
    <span v-if="icon && !loading && iconPosition === 'left'" class="neo-button__icon">
      <slot name="icon">{{ icon }}</slot>
    </span>
    
    <!-- Default Slot -->
    <span v-if="$slots.default" class="neo-button__content">
      <slot />
    </span>
    
    <!-- Icon (right) -->
    <span v-if="icon && !loading && iconPosition === 'right'" class="neo-button__icon">
      <slot name="icon">{{ icon }}</slot>
    </span>
  </component>
</template>

<style scoped>
/* ==================== Base Button Styles ==================== */
.neo-button {
  --btn-color: var(--neo-text-primary);
  --btn-bg: var(--neo-gray-100);
  --btn-border: var(--neo-border-color);
  --btn-shadow: var(--neo-shadow);
  --btn-shadow-hover: var(--neo-shadow-hover);
  --btn-shadow-active: var(--neo-shadow-active);
  --btn-border-width: var(--neo-border-width);
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--neo-spacing-sm);
  padding: 0 var(--neo-spacing-md);
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-semibold);
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: var(--btn-border-width) solid var(--btn-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--btn-shadow);
  background-color: var(--btn-bg);
  color: var(--btn-color);
  transition: all var(--neo-transition-base) var(--neo-transition-timing);
  user-select: none;
  position: relative;
  overflow: hidden;
}

.neo-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--neo-white);
  opacity: 0;
  transition: opacity var(--neo-transition-fast);
}

.neo-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--btn-shadow-hover);
}

.neo-button:active {
  transform: translate(2px, 2px);
  box-shadow: var(--btn-shadow-active);
}

/* ==================== Button Variants ==================== */
/* Solid (default) */
.neo-button--solid.neo-button--primary {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-primary);
  --btn-border: var(--neo-primary);
  --btn-shadow: var(--neo-shadow-primary);
}

.neo-button--solid.neo-button--secondary {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-secondary);
  --btn-border: var(--neo-secondary);
}

.neo-button--solid.neo-button--accent {
  --btn-color: var(--neo-gray-900);
  --btn-bg: var(--neo-accent);
  --btn-border: var(--neo-accent);
}

.neo-button--solid.neo-button--success {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-success);
  --btn-border: var(--neo-success);
  --btn-shadow: var(--neo-shadow-success);
}

.neo-button--solid.neo-button--warning {
  --btn-color: var(--neo-gray-900);
  --btn-bg: var(--neo-warning);
  --btn-border: var(--neo-warning);
  --btn-shadow: var(--neo-shadow-warning);
}

.neo-button--solid.neo-button--danger {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-danger);
  --btn-border: var(--neo-danger);
  --btn-shadow: var(--neo-shadow-danger);
}

.neo-button--solid.neo-button--info {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-info);
  --btn-border: var(--neo-info);
  --btn-shadow: var(--neo-shadow-primary);
}

.neo-button--solid.neo-button--default {
  --btn-color: var(--neo-black);
  --btn-bg: var(--neo-white);
  --btn-border: var(--neo-black);
}

/* Neo Variant - Classic NeoBrutalism */
.neo-button--solid.neo-button--neo {
  --btn-color: var(--neo-black);
  --btn-bg: var(--neo-yellow);
  --btn-border: var(--neo-black);
  --btn-shadow: var(--neo-shadow);
}

.neo-button--solid.neo-button--pink {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-pink);
  --btn-border: var(--neo-pink);
  --btn-shadow: 4px 4px 0 var(--neo-black);
}

.neo-button--solid.neo-button--purple {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-purple);
  --btn-border: var(--neo-purple);
  --btn-shadow: var(--neo-shadow-primary);
}

.neo-button--solid.neo-button--blue {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-blue);
  --btn-border: var(--neo-blue);
  --btn-shadow: 4px 4px 0 var(--neo-black);
}

.neo-button--solid.neo-button--orange {
  --btn-color: var(--neo-white);
  --btn-bg: var(--neo-orange);
  --btn-border: var(--neo-orange);
  --btn-shadow: 4px 4px 0 var(--neo-black);
}

.neo-button--solid.neo-button--green {
  --btn-color: var(--neo-black);
  --btn-bg: var(--neo-green);
  --btn-border: var(--neo-black);
  --btn-shadow: var(--neo-shadow);
}

/* Outline */
.neo-button--outline.neo-button--primary {
  --btn-color: var(--neo-primary);
  --btn-bg: transparent;
  --btn-border: var(--neo-primary);
}

.neo-button--outline.neo-button--secondary {
  --btn-color: var(--neo-secondary);
  --btn-bg: transparent;
  --btn-border: var(--neo-secondary);
}

.neo-button--outline.neo-button--accent {
  --btn-color: var(--neo-accent);
  --btn-bg: transparent;
  --btn-border: var(--neo-accent);
}

.neo-button--outline.neo-button--success {
  --btn-color: var(--neo-success);
  --btn-bg: transparent;
  --btn-border: var(--neo-success);
}

.neo-button--outline.neo-button--warning {
  --btn-color: var(--neo-warning);
  --btn-bg: transparent;
  --btn-border: var(--neo-warning);
}

.neo-button--outline.neo-button--danger {
  --btn-color: var(--neo-danger);
  --btn-bg: transparent;
  --btn-border: var(--neo-danger);
}

.neo-button--outline.neo-button--info {
  --btn-color: var(--neo-info);
  --btn-bg: transparent;
  --btn-border: var(--neo-info);
}

.neo-button--outline.neo-button--default {
  --btn-color: var(--neo-black);
  --btn-bg: transparent;
  --btn-border: var(--neo-black);
}

/* Neo Variant - Classic NeoBrutalism Outline */
.neo-button--outline.neo-button--neo {
  --btn-color: var(--neo-black);
  --btn-bg: transparent;
  --btn-border: var(--neo-black);
}

.neo-button--outline.neo-button--pink {
  --btn-color: var(--neo-pink);
  --btn-bg: transparent;
  --btn-border: var(--neo-pink);
}

.neo-button--outline.neo-button--purple {
  --btn-color: var(--neo-purple);
  --btn-bg: transparent;
  --btn-border: var(--neo-purple);
}

.neo-button--outline.neo-button--blue {
  --btn-color: var(--neo-blue);
  --btn-bg: transparent;
  --btn-border: var(--neo-blue);
}

.neo-button--outline.neo-button--orange {
  --btn-color: var(--neo-orange);
  --btn-bg: transparent;
  --btn-border: var(--neo-orange);
}

.neo-button--outline.neo-button--green {
  --btn-color: var(--neo-green);
  --btn-bg: transparent;
  --btn-border: var(--neo-green);
}

/* Ghost */
.neo-button--ghost.neo-button--primary {
  --btn-color: var(--neo-primary);
  --btn-bg: var(--neo-primary-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--secondary {
  --btn-color: var(--neo-secondary);
  --btn-bg: var(--neo-secondary-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--accent {
  --btn-color: var(--neo-accent);
  --btn-bg: var(--neo-accent-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--success {
  --btn-color: var(--neo-success);
  --btn-bg: var(--neo-success-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--warning {
  --btn-color: var(--neo-warning);
  --btn-bg: var(--neo-warning-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--danger {
  --btn-color: var(--neo-danger);
  --btn-bg: var(--neo-danger-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--info {
  --btn-color: var(--neo-info);
  --btn-bg: var(--neo-info-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--default {
  --btn-color: var(--neo-black);
  --btn-bg: transparent;
  --btn-border: transparent;
}

/* Neo Variants Ghost */
.neo-button--ghost.neo-button--neo {
  --btn-color: var(--neo-black);
  --btn-bg: var(--neo-accent-light);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--pink {
  --btn-color: var(--neo-pink);
  --btn-bg: rgba(255, 0, 110, 0.1);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--purple {
  --btn-color: var(--neo-purple);
  --btn-bg: rgba(131, 56, 236, 0.1);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--blue {
  --btn-color: var(--neo-blue);
  --btn-bg: rgba(58, 134, 255, 0.1);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--orange {
  --btn-color: var(--neo-orange);
  --btn-bg: rgba(251, 86, 7, 0.1);
  --btn-border: transparent;
}

.neo-button--ghost.neo-button--green {
  --btn-color: var(--neo-green);
  --btn-bg: rgba(6, 214, 160, 0.1);
  --btn-border: transparent;
}

/* ==================== Button Sizes ==================== */
.neo-button--xs {
  height: var(--neo-button-height-xs);
  padding: 0 var(--neo-spacing-sm);
  font-size: var(--neo-font-size-xs);
  --neo-border-width: 2px;
}

.neo-button--sm {
  height: var(--neo-button-height-sm);
  padding: 0 var(--neo-spacing-sm);
  font-size: var(--neo-font-size-xs);
}

.neo-button--md {
  height: var(--neo-button-height-md);
  padding: 0 var(--neo-spacing-md);
  font-size: var(--neo-font-size-sm);
}

.neo-button--lg {
  height: var(--neo-button-height-lg);
  padding: 0 var(--neo-spacing-lg);
  font-size: var(--neo-font-size-base);
}

.neo-button--xl {
  height: var(--neo-button-height-xl);
  padding: 0 var(--neo-spacing-xl);
  font-size: var(--neo-font-size-lg);
  --neo-border-width: 4px;
}

/* ==================== Button Shapes ==================== */
.neo-button--round {
  border-radius: var(--neo-radius-lg);
}

.neo-button--circle {
  border-radius: 50%;
  padding: 0;
  aspect-ratio: 1;
}

.neo-button--sharp {
  border-radius: 0;
}

/* NeoBrutalism - Sharp corners for certain variants */
.neo-button--sharp.neo-button--neo,
.neo-button--sharp.neo-button--green {
  border-radius: 0;
  border-bottom-right-radius: 8px;
}

.neo-button--circle.neo-button--xs {
  width: var(--neo-button-height-xs);
}

.neo-button--circle.neo-button--sm {
  width: var(--neo-button-height-sm);
}

.neo-button--circle.neo-button--md {
  width: var(--neo-button-height-md);
}

.neo-button--circle.neo-button--lg {
  width: var(--neo-button-height-lg);
}

.neo-button--circle.neo-button--xl {
  width: var(--neo-button-height-xl);
}

/* ==================== Button States ==================== */
.neo-button--disabled,
.neo-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.neo-button--disabled:hover,
.neo-button:disabled:hover {
  transform: none;
  box-shadow: var(--neo-shadow);
}

.neo-button--loading {
  cursor: wait;
}

/* ==================== Button Block ==================== */
.neo-button--block {
  width: 100%;
  display: flex;
}

/* ==================== Button Icon ==================== */
.neo-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
}

.neo-button__loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.neo-button__spinner {
  width: 1em;
  height: 1em;
  animation: neo-spin 1s linear infinite;
}

@keyframes neo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.neo-button__content {
  display: inline-flex;
  align-items: center;
}
</style>
