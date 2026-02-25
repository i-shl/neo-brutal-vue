<script setup lang="ts">
import { computed } from 'vue'
import type { AlertProps } from '@/types'

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  effect: 'light',
  closable: false,
  showIcon: false
})

const emit = defineEmits<{
  (e: 'close', event: MouseEvent): void
}>()

const alertClass = computed(() => {
  const classes: string[] = [
    'neo-alert',
    `neo-alert--${props.type}`,
    `neo-alert--${props.effect}`,
  ]
  
  if (props.closable) classes.push('neo-alert--closable')
  if (props.showIcon) classes.push('neo-alert--icon')
  
  return classes.join(' ')
})

const handleClose = (e: MouseEvent) => {
  emit('close', e)
}
</script>

<template>
  <div :class="alertClass" role="alert">
    <!-- Icon -->
    <div v-if="showIcon" class="neo-alert__icon">
      <slot name="icon">
        <span v-if="type === 'success'">✓</span>
        <span v-else-if="type === 'warning'">⚠</span>
        <span v-else-if="type === 'error'">✕</span>
        <span v-else>ℹ</span>
      </slot>
    </div>
    
    <!-- Content -->
    <div class="neo-alert__content">
      <div v-if="title" class="neo-alert__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description" class="neo-alert__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
    
    <!-- Close -->
    <button
      v-if="closable"
      type="button"
      class="neo-alert__close"
      @click="handleClose"
    >
      {{ closeText || '✕' }}
    </button>
  </div>
</template>

<style scoped>
/* ==================== Base Alert Styles ==================== */
.neo-alert {
  --alert-bg: var(--neo-bg-primary);
  --alert-border: var(--neo-border-color);
  --alert-text: var(--neo-text-primary);
  --alert-icon: var(--neo-text-primary);
  
  display: flex;
  align-items: flex-start;
  gap: var(--neo-spacing-sm);
  padding: var(--neo-spacing-md);
  margin-bottom: var(--neo-spacing-md);
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
  color: var(--alert-text);
  background-color: var(--alert-bg);
  border: var(--neo-border-width) solid var(--alert-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-sm);
  transition: all var(--neo-transition-base) var(--neo-transition-timing);
}

/* ==================== Alert Types ==================== */
.neo-alert--success {
  --alert-bg: var(--neo-success-light);
  --alert-border: var(--neo-success);
  --alert-text: var(--neo-success);
  --alert-icon: var(--neo-success);
}

.neo-alert--warning {
  --alert-bg: var(--neo-warning-light);
  --alert-border: var(--neo-warning);
  --alert-text: var(--neo-warning);
  --alert-icon: var(--neo-warning);
}

.neo-alert--error {
  --alert-bg: var(--neo-danger-light);
  --alert-border: var(--neo-danger);
  --alert-text: var(--neo-danger);
  --alert-icon: var(--neo-danger);
}

.neo-alert--info {
  --alert-bg: var(--neo-info-light);
  --alert-border: var(--neo-info);
  --alert-text: var(--neo-info);
  --alert-icon: var(--neo-info);
}

/* ==================== Alert Effects ==================== */
.neo-alert--dark {
  --alert-text: var(--neo-white);
}

.neo-alert--dark.neo-alert--success {
  --alert-bg: var(--neo-success);
}

.neo-alert--dark.neo-alert--warning {
  --alert-bg: var(--neo-warning);
}

.neo-alert--dark.neo-alert--error {
  --alert-bg: var(--neo-danger);
}

.neo-alert--dark.neo-alert--info {
  --alert-bg: var(--neo-info);
}

/* ==================== Alert Icon ==================== */
.neo-alert__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  font-size: var(--neo-font-size-base);
  font-weight: var(--neo-font-weight-bold);
}

/* ==================== Alert Content ==================== */
.neo-alert__content {
  flex: 1;
  min-width: 0;
}

.neo-alert__title {
  font-weight: var(--neo-font-weight-semibold);
  color: inherit;
}

.neo-alert__description {
  margin-top: var(--neo-spacing-xs);
  line-height: var(--neo-line-height-relaxed);
  opacity: 0.9;
}

/* ==================== Alert Close ==================== */
.neo-alert__close {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: var(--neo-spacing-xs);
  font-size: var(--neo-font-size-xs);
  color: inherit;
  background: transparent;
  border: none;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity var(--neo-transition-fast);
}

.neo-alert__close:hover {
  opacity: 1;
}
</style>
