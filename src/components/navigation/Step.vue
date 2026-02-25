<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  description?: string
  icon?: string
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success'
}>()

const stepClass = computed(() => {
  const classes: string[] = ['neo-step']
  
  if (props.status) classes.push(`neo-step--${props.status}`)
  
  return classes.join(' ')
})
</script>

<template>
  <div :class="stepClass">
    <div class="neo-step__icon">
      <slot name="icon">
        <span v-if="icon">{{ icon }}</span>
        <span v-else-if="status === 'finish'">✓</span>
        <span v-else-if="status === 'error'">✕</span>
        <span v-else class="neo-step__circle" />
      </slot>
    </div>
    <div class="neo-step__content">
      <div class="neo-step__title">{{ title }}</div>
      <div v-if="description" class="neo-step__description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.neo-step {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--neo-spacing-sm);
  flex: 1;
}

.neo-step__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-text-secondary);
  background: var(--neo-bg-primary);
  border: var(--neo-border-width) solid var(--neo-border-color);
  border-radius: 50%;
  box-shadow: var(--neo-shadow-sm);
  flex-shrink: 0;
}

.neo-step__circle {
  width: 10px;
  height: 10px;
  background: var(--neo-border-color);
  border-radius: 50%;
}

.neo-step__content {
  flex: 1;
  min-width: 0;
}

.neo-step__title {
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-semibold);
  color: var(--neo-text-primary);
}

.neo-step__description {
  font-size: var(--neo-font-size-xs);
  color: var(--neo-text-secondary);
  margin-top: 2px;
}

/* Status */
.neo-step--finish .neo-step__icon {
  background: var(--neo-success);
  color: var(--neo-white);
  border-color: var(--neo-success);
}

.neo-step--error .neo-step__icon {
  background: var(--neo-danger);
  color: var(--neo-white);
  border-color: var(--neo-danger);
}

.neo-step--process .neo-step__icon {
  background: var(--neo-primary);
  color: var(--neo-white);
  border-color: var(--neo-primary);
}
</style>
