<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    subTitle?: string
    status?: 'success' | 'warning' | 'error' | 'info' | '404' | '403' | '500'
  }>(),
  { status: 'info' },
)

const statusConfig = {
  success: {
    color: 'var(--neo-main)',
    svg: 'M6 10l3 3 5-6',
  },
  warning: {
    color: 'var(--neo-warning)',
    svg: 'M10 5v5M10 14h.01',
  },
  error: {
    color: 'var(--neo-danger)',
    svg: 'M7 7l6 6M13 7l-6 6',
  },
  info: {
    color: 'var(--neo-info)',
    svg: 'M10 5v5M10 14h.01',
  },
  '404': {
    color: 'var(--neo-purple)',
    svg: 'M8 4l4 4-4 4m4-8l4 4-4 4',
  },
  '403': {
    color: 'var(--neo-orange)',
    svg: 'M4 4l12 12M16 4L4 16',
  },
  '500': {
    color: 'var(--neo-primary)',
    svg: 'M10 3l2 6 6 1-4 4 1 6-6-3-6 3-1-6 4-4',
  },
}

const currentConfig = computed(() => statusConfig[props.status])
</script>

<template>
  <div class="neo-result">
    <div
      class="neo-result__icon"
      :style="{ backgroundColor: currentConfig.color }"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path :d="currentConfig.svg" />
      </svg>
    </div>
    <div class="neo-result__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="neo-result__subtitle">
      <slot name="subTitle">{{ subTitle }}</slot>
    </div>
    <div v-if="$slots.extra" class="neo-result__extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<style scoped>
.neo-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 1.5rem;
  background-color: var(--neo-white);
}

.neo-result__icon {
  width: 120px;
  height: 120px;
  border: var(--neo-border-thick);
  box-shadow: 8px 8px 0 var(--neo-black);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  background-color: var(--neo-white);
  color: var(--neo-black);
  transform: rotate(-2deg);
}

.neo-result__title {
  font-size: 2.5rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  color: var(--neo-black);
  letter-spacing: -0.02em;
}

.neo-result__subtitle {
  font-size: 1.125rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-gray-600);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.5;
}

.neo-result__extra {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
