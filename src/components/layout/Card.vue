<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from '@/types'

const props = withDefaults(defineProps<CardProps>(), {
  shadow: true,
  bordered: true,
  variant: 'default'
})

const cardClass = computed(() => {
  const classes: string[] = ['neo-card', `neo-card--${props.variant}`]
  
  if (props.shadow === 'hover') classes.push('neo-card--shadow-hover')
  if (props.shadow === false || props.shadow === 'never') classes.push('neo-card--no-shadow')
  if (!props.bordered) classes.push('neo-card--no-border')
  
  return classes.join(' ')
})

const headerStyle = computed(() => props.headerStyle as any)
const bodyStyle = computed(() => props.bodyStyle as any)
</script>

<template>
  <div :class="cardClass">
    <!-- Header -->
    <div v-if="title || $slots.header" class="neo-card__header" :style="headerStyle" :class="headerClass">
      <slot name="header">
        <div class="neo-card__title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="subTitle || $slots['sub-title']" class="neo-card__subtitle">
          <slot name="sub-title">{{ subTitle }}</slot>
        </div>
      </slot>
    </div>
    
    <!-- Body -->
    <div class="neo-card__body" :style="bodyStyle" :class="bodyClass">
      <slot />
    </div>
    
    <!-- Footer -->
    <div v-if="$slots.footer" class="neo-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.neo-card {
  --card-bg: var(--neo-bg-primary);
  --card-border: var(--neo-border-color);
  --card-shadow: var(--neo-shadow);
  --card-shadow-hover: var(--neo-shadow-hover);
  
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg);
  border: var(--neo-border-width) solid var(--card-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--card-shadow);
  overflow: hidden;
  transition: all var(--neo-transition-base) var(--neo-transition-timing);
}

/* NeoBrutalism Card Variants */
.neo-card--default {
  border-radius: var(--neo-radius);
}

.neo-card--flat {
  border-radius: 0;
  box-shadow: none;
}

.neo-card--flat:hover {
  transform: none;
  box-shadow: none;
}

.neo-card--elevated {
  border: var(--neo-border-width-thick) solid var(--card-border);
  box-shadow: var(--neo-shadow-lg);
}

.neo-card--elevated:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--neo-shadow-xl);
}

.neo-card--gradient {
  border: var(--neo-border-width) solid var(--card-border);
  background: linear-gradient(135deg, var(--neo-primary-light) 0%, var(--neo-secondary-light) 100%);
}

.neo-card--gradient:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--neo-shadow-lg);
}

.neo-card--colored {
  border: var(--neo-border-width) solid var(--neo-primary);
  background-color: var(--neo-primary-light);
}

.neo-card--colored:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--neo-shadow-primary);
}

.neo-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--card-shadow-hover);
}

.neo-card--no-shadow {
  box-shadow: none;
}

.neo-card--no-shadow:hover {
  transform: none;
  box-shadow: none;
}

.neo-card--shadow-hover {
  box-shadow: none;
}

.neo-card--shadow-hover:hover {
  box-shadow: var(--card-shadow);
  transform: translate(-2px, -2px);
}

.neo-card--no-border {
  border: none;
}

/* ==================== Card Header ==================== */
.neo-card__header {
  display: flex;
  flex-direction: column;
  gap: var(--neo-spacing-xs);
  padding: var(--neo-spacing-md);
  border-bottom: var(--neo-border-width) solid var(--card-border);
}

.neo-card__title {
  font-size: var(--neo-font-size-lg);
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-text-primary);
}

.neo-card__subtitle {
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
}

/* ==================== Card Body ==================== */
.neo-card__body {
  flex: 1;
  padding: var(--neo-spacing-md);
  color: var(--neo-text-primary);
}

/* ==================== Card Footer ==================== */
.neo-card__footer {
  display: flex;
  align-items: center;
  gap: var(--neo-spacing-sm);
  padding: var(--neo-spacing-md);
  border-top: var(--neo-border-width) solid var(--card-border);
}
</style>
