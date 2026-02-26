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
    <div v-if="showIcon" class="neo-alert__icon">
      <slot name="icon">
        <span v-if="type === 'success'">✓</span>
        <span v-else-if="type === 'warning'">⚠</span>
        <span v-else-if="type === 'error'">✕</span>
        <span v-else>ℹ</span>
      </slot>
    </div>
    
    <div class="neo-alert__content">
      <div v-if="title" class="neo-alert__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description" class="neo-alert__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
    
    <button v-if="closable" type="button" class="neo-alert__close" @click="handleClose">
      {{ closeText || '✕' }}
    </button>
  </div>
</template>

<style scoped>
.neo-alert {
  --alert-bg: var(--neo-white);
  --alert-color: var(--neo-black);
  
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  background-color: var(--alert-bg);
  color: var(--alert-color);
  border: var(--neo-border-thick);
  border-radius: var(--neo-radius-sm);
  box-shadow: var(--neo-shadow);
  transition: var(--neo-transition);
}

.neo-alert--success { --alert-bg: var(--neo-main); }
.neo-alert--warning { --alert-bg: var(--neo-warning); }
.neo-alert--error { --alert-bg: var(--neo-danger); --alert-color: var(--neo-white); }
.neo-alert--info { --alert-bg: var(--neo-info); --alert-color: var(--neo-white); }

.neo-alert__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.25rem;
  font-weight: var(--neo-font-weight-black);
  border: var(--neo-border);
  background-color: var(--neo-white);
  color: var(--neo-black);
  border-radius: 4px;
}

.neo-alert__content {
  flex: 1;
  min-width: 0;
}

.neo-alert__title {
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  font-size: 0.9375rem;
  line-height: 1.5rem;
}

.neo-alert__description {
  margin-top: 0.25rem;
  font-size: 0.8125rem;
  font-weight: var(--neo-font-weight-normal);
  line-height: 1.4;
}

.neo-alert__close {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: inherit;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid currentColor;
  cursor: pointer;
  border-radius: 2px;
  transition: var(--neo-transition);
}

.neo-alert__close:hover {
  background-color: var(--neo-black);
  color: var(--neo-white);
}
</style>
