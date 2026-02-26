<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps } from '@/types'

const props = withDefaults(defineProps<TagProps>(), {
  type: 'default',
  size: 'md',
  effect: 'light',
  closable: false,
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
  ]
  if (props.closable) classes.push('neo-tag--closable')
  return classes.join(' ')
})

const handleClose = (e: MouseEvent) => {
  e.stopPropagation()
  emit('close', e)
}

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<template>
  <span :class="tagClass" @click="handleClick">
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
.neo-tag {
  --tag-bg: var(--neo-white);
  --tag-color: var(--neo-black);
  
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.875rem;
  height: 2rem;
  
  font-family: var(--neo-font-family);
  font-size: 0.75rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  background-color: var(--tag-bg);
  color: var(--tag-color);
  border: var(--neo-border-thick);
  box-shadow: 3px 3px 0 var(--neo-black);
  
  transition: var(--neo-transition);
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
}

.neo-tag:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 var(--neo-black);
  background-color: var(--neo-gray-50);
}

.neo-tag:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0 var(--neo-black);
}

/* --- Types --- */
.neo-tag--primary { --tag-bg: var(--neo-main); }
.neo-tag--success { --tag-bg: var(--neo-success); }
.neo-tag--warning { --tag-bg: var(--neo-warning); }
.neo-tag--danger { --tag-bg: var(--neo-danger); --tag-color: var(--neo-white); }
.neo-tag--info { --tag-bg: var(--neo-info); --tag-color: var(--neo-white); }
.neo-tag--default { --tag-bg: var(--neo-white); }

/* --- Sizes --- */
.neo-tag--sm { height: 1.5rem; padding: 0 0.5rem; font-size: 0.625rem; }
.neo-tag--lg { height: 2.75rem; padding: 0 1.25rem; font-size: 1rem; border-width: 4px; box-shadow: 5px 5px 0 var(--neo-black); }
.neo-tag--lg:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 var(--neo-black); }

.neo-tag__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  font-size: 0.625rem;
  padding: 0;
  border: var(--neo-border);
  background-color: var(--neo-white);
  color: var(--neo-black);
  box-shadow: 1px 1px 0 var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
  font-weight: var(--neo-font-weight-black);
}

.neo-tag__close:hover {
  background-color: var(--neo-danger);
  color: var(--neo-white);
  transform: scale(1.1);
}

.neo-tag__content {
  display: flex;
  align-items: center;
}
</style>
