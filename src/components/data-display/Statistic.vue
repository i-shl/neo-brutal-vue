<script setup lang="ts">
import { computed } from 'vue'

import type { StatisticProps } from '@/types'

const props = withDefaults(defineProps<StatisticProps>(), {
  precision: 0,
  type: 'default'
})

const colorMap: Record<string, string> = {
  primary: 'var(--neo-primary)',
  success: 'var(--neo-success)',
  warning: 'var(--neo-warning)',
  danger: 'var(--neo-danger)',
  info: 'var(--neo-info)',
  default: 'var(--neo-main)'
}

const computedColor = computed(() => {
  if (props.color) return props.color
  return colorMap[props.type || 'default']
})

const formattedValue = computed(() => {
  if (typeof props.value === 'number') {
    return props.value.toFixed(props.precision)
  }
  return props.value
})
</script>

<template>
  <div class="neo-statistic">
    <div v-if="title || $slots.title" class="neo-statistic__header">
      <span class="neo-statistic__title">
        <slot name="title">{{ title }}</slot>
      </span>
    </div>
    <div class="neo-statistic__content" :style="{ ...valueStyle, color: computedColor }">
      <span v-if="prefix || $slots.prefix" class="neo-statistic__prefix">
        <slot name="prefix">{{ prefix }}</slot>
      </span>
      <span class="neo-statistic__value">
        {{ formattedValue }}
      </span>
      <span v-if="suffix || $slots.suffix" class="neo-statistic__suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
.neo-statistic {
  display: inline-flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0px var(--neo-black);
  transition: var(--neo-transition);
  font-family: var(--neo-font-family);
  min-width: 180px;
}

.neo-statistic:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px var(--neo-black);
}

.neo-statistic__header {
  margin-bottom: 0.75rem;
}

.neo-statistic__title {
  font-size: 0.8125rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-gray-600);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: var(--neo-gray-50);
  padding: 2px 6px;
  border: 1px solid var(--neo-black);
}

.neo-statistic__content {
  display: flex;
  align-items: baseline;
  font-size: 2.5rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  line-height: 1;
}

.neo-statistic__prefix, 
.neo-statistic__suffix {
  font-size: 1.25rem;
  font-weight: var(--neo-font-weight-bold);
  margin: 0 4px;
}

.neo-statistic__value {
  text-shadow: 2px 2px 0 rgba(0,0,0,0.1);
}
</style>
