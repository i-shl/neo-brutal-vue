<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps } from '@/types'

const props = withDefaults(defineProps<TagProps>(), {
  type: 'default',
  size: 'md',
  effect: 'light',
  closable: false,
  disableTransitions: false
})

const emit = defineEmits<{
  (e: 'close', event: MouseEvent): void
  (e: 'click', event: MouseEvent): void
}>()

const tagClass = computed(() => {
  const classes: string[] = [
    'neo-tag',
    `neo-tag--${props.type}`,
    `neo-tag--${props.size}`,
    `neo-tag--${props.effect}`,
  ]
  
  if (props.hit) classes.push('neo-tag--hit')
  if (props.closable) classes.push('neo-tag--closable')
  
  return classes.join(' ')
})

const tagStyle = computed(() => {
  if (props.color) {
    return {
      '--tag-bg': props.color,
      '--tag-text': getContrastColor(props.color),
      '--tag-border': props.color
    }
  }
  return {}
})

function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

const handleClose = (e: MouseEvent) => {
  emit('close', e)
}

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<template>
  <span :class="tagClass" :style="tagStyle" @click="handleClick">
    <span class="neo-tag__content">
      <slot />
    </span>
    <button
      v-if="closable"
      type="button"
      class="neo-tag__close"
      @click="handleClose"
    >
      ✕
    </button>
  </span>
</template>

<style scoped>
/* ==================== Base Tag Styles ==================== */
.neo-tag {
  --tag-bg: var(--neo-gray-100);
  --tag-text: var(--neo-text-primary);
  --tag-border: var(--neo-border-color);
  --tag-shadow: var(--neo-shadow-sm);
  
  display: inline-flex;
  align-items: center;
  gap: var(--neo-spacing-xs);
  height: auto;
  padding: var(--neo-spacing-xs) var(--neo-spacing-sm);
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-xs);
  font-weight: var(--neo-font-weight-medium);
  line-height: 1;
  color: var(--tag-text);
  background-color: var(--tag-bg);
  border: var(--neo-border-width-thin) solid var(--tag-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--tag-shadow);
  cursor: default;
  transition: all var(--neo-transition-base) var(--neo-transition-timing);
}

.neo-tag:hover {
  transform: translate(-1px, -1px);
  box-shadow: var(--neo-shadow);
}

.neo-tag--closable {
  padding-right: var(--neo-spacing-xs);
}

/* ==================== Tag Types ==================== */
.neo-tag--primary {
  --tag-bg: var(--neo-primary-light);
  --tag-text: var(--neo-primary);
  --tag-border: var(--neo-primary);
}

.neo-tag--secondary {
  --tag-bg: var(--neo-secondary-light);
  --tag-text: var(--neo-secondary);
  --tag-border: var(--neo-secondary);
}

.neo-tag--success {
  --tag-bg: var(--neo-success-light);
  --tag-text: var(--neo-success);
  --tag-border: var(--neo-success);
}

.neo-tag--warning {
  --tag-bg: var(--neo-warning-light);
  --tag-text: var(--neo-warning);
  --tag-border: var(--neo-warning);
}

.neo-tag--danger {
  --tag-bg: var(--neo-danger-light);
  --tag-text: var(--neo-danger);
  --tag-border: var(--neo-danger);
}

.neo-tag--info {
  --tag-bg: var(--neo-info-light);
  --tag-text: var(--neo-info);
  --tag-border: var(--neo-info);
}

.neo-tag--default {
  --tag-bg: var(--neo-gray-100);
  --tag-text: var(--neo-text-primary);
  --tag-border: var(--neo-border-color);
}

/* ==================== Tag Effects ==================== */
.neo-tag--dark {
  --tag-text: var(--neo-white);
}

.neo-tag--dark.neo-tag--primary {
  --tag-bg: var(--neo-primary);
}

.neo-tag--dark.neo-tag--secondary {
  --tag-bg: var(--neo-secondary);
}

.neo-tag--dark.neo-tag--success {
  --tag-bg: var(--neo-success);
}

.neo-tag--dark.neo-tag--warning {
  --tag-bg: var(--neo-warning);
}

.neo-tag--dark.neo-tag--danger {
  --tag-bg: var(--neo-danger);
}

.neo-tag--dark.neo-tag--info {
  --tag-bg: var(--neo-info);
}

.neo-tag--plain {
  --tag-bg: transparent;
  --tag-shadow: none;
}

.neo-tag--plain:hover {
  --tag-bg: var(--neo-gray-100);
  transform: none;
  box-shadow: none;
}

/* ==================== Tag Sizes ==================== */
.neo-tag--xs {
  padding: 2px 4px;
  font-size: 10px;
}

.neo-tag--sm {
  padding: 2px 6px;
  font-size: var(--neo-font-size-xs);
}

.neo-tag--md {
  padding: var(--neo-spacing-xs) var(--neo-spacing-sm);
}

.neo-tag--lg {
  padding: var(--neo-spacing-sm) var(--neo-spacing-md);
  font-size: var(--neo-font-size-sm);
}

/* ==================== Tag States ==================== */
.neo-tag--hit {
  border-radius: var(--neo-radius-full);
}

/* ==================== Tag Close Button ==================== */
.neo-tag__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  padding: 0;
  margin-left: 2px;
  font-size: 10px;
  color: inherit;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  transition: all var(--neo-transition-fast);
}

.neo-tag__close:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

.neo-tag__content {
  display: inline-flex;
  align-items: center;
}
</style>
