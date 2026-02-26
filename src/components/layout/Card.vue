<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from '@/types'

const props = withDefaults(defineProps<CardProps>(), {
  shadow: true,
  bordered: true,
  variant: 'default',
  showHeader: true,
  showFooter: true,
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
    <div v-if="showHeader && (title || $slots.header)" class="neo-card__header" :style="headerStyle" :class="headerClass">
      <slot name="header">
        <div class="neo-card__title-group">
          <div class="neo-card__title">
            <slot name="title">{{ title }}</slot>
          </div>
          <div v-if="subTitle || $slots['sub-title']" class="neo-card__subtitle">
            <slot name="sub-title">{{ subTitle }}</slot>
          </div>
        </div>
      </slot>
    </div>
    
    <!-- Body -->
    <div class="neo-card__body" :style="bodyStyle" :class="bodyClass">
      <slot />
    </div>
    
    <!-- Footer -->
    <div v-if="showFooter && $slots.footer" class="neo-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.neo-card {
  display: flex;
  flex-direction: column;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 10px 10px 0px var(--neo-black);
  overflow: hidden;
  transition: var(--neo-transition);
  font-family: var(--neo-font-family);
}

/* --- Variants --- */
.neo-card--elevated:hover {
  transform: translate(-4px, -4px);
  box-shadow: 16px 16px 0px var(--neo-black);
}

.neo-card--gradient {
  background: linear-gradient(135deg, var(--neo-main) 0%, var(--neo-yellow) 100%);
}

.neo-card--colored {
  background-color: var(--neo-main);
}

.neo-card--no-shadow { box-shadow: none; }
.neo-card--no-border { border: none; }

.neo-card--shadow-hover {
  box-shadow: none;
}
.neo-card--shadow-hover:hover {
  transform: translate(-4px, -4px);
  box-shadow: 10px 10px 0px var(--neo-black);
}

/* --- Components --- */
.neo-card__header {
  padding: 1.5rem;
  background-color: var(--neo-main);
  border-bottom: var(--neo-border-thick);
}

.neo-card__title {
  font-size: 1.5rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  color: var(--neo-black);
  letter-spacing: 0.05em;
  line-height: 1.2;
}

.neo-card__subtitle {
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  opacity: 0.8;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.neo-card__body {
  padding: 2rem;
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--neo-black);
}

.neo-card__footer {
  padding: 1.25rem 1.5rem;
  background-color: var(--neo-gray-50);
  border-top: var(--neo-border-thick);
}
</style>
