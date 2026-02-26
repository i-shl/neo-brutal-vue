<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  loading?: boolean
  animated?: boolean
  rows?: number
  avatar?: boolean
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
}>(), {
  loading: true,
  animated: true,
  rows: 3,
  type: 'default'
})

const skeletonClass = computed(() => {
  const classes = ['neo-skeleton']
  if (props.animated !== false) classes.push('neo-skeleton--animated')
  if (props.type && props.type !== 'default') classes.push(`neo-skeleton--${props.type}`)
  return classes.join(' ')
})

const rowCount = computed(() => props.rows ?? 3)
</script>

<template>
  <div :class="skeletonClass">
    <div v-if="loading" class="neo-skeleton__container">
      <div v-if="avatar" class="neo-skeleton__avatar" />
      <div class="neo-skeleton__rows">
        <div 
          v-for="i in rowCount" 
          :key="i" 
          class="neo-skeleton__row"
          :style="{ width: i === rowCount && rowCount > 1 ? '60%' : '100%' }"
        />
      </div>
    </div>
    <slot v-else />
  </div>
</template>

<style scoped>
.neo-skeleton {
  width: 100%;
}

.neo-skeleton__container {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.neo-skeleton__avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 4px;
  background-color: var(--neo-gray-200);
  border: var(--neo-border);
  flex-shrink: 0;
}

.neo-skeleton__rows {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.neo-skeleton__row {
  height: 1rem;
  border-radius: 2px;
  background-color: var(--neo-gray-200);
  border: var(--neo-border);
}

/* Types */
.neo-skeleton--primary .neo-skeleton__avatar,
.neo-skeleton--primary .neo-skeleton__row { background-color: color-mix(in srgb, var(--neo-primary) 30%, var(--neo-gray-200)); }
.neo-skeleton--success .neo-skeleton__avatar,
.neo-skeleton--success .neo-skeleton__row { background-color: color-mix(in srgb, var(--neo-success) 30%, var(--neo-gray-200)); }
.neo-skeleton--warning .neo-skeleton__avatar,
.neo-skeleton--warning .neo-skeleton__row { background-color: color-mix(in srgb, var(--neo-warning) 30%, var(--neo-gray-200)); }
.neo-skeleton--danger .neo-skeleton__avatar,
.neo-skeleton--danger .neo-skeleton__row { background-color: color-mix(in srgb, var(--neo-danger) 30%, var(--neo-gray-200)); }
.neo-skeleton--info .neo-skeleton__avatar,
.neo-skeleton--info .neo-skeleton__row { background-color: color-mix(in srgb, var(--neo-info) 30%, var(--neo-gray-200)); }

.neo-skeleton--animated .neo-skeleton__avatar,
.neo-skeleton--animated .neo-skeleton__row {
  position: relative;
  overflow: hidden;
}

.neo-skeleton--animated .neo-skeleton__avatar::after,
.neo-skeleton--animated .neo-skeleton__row::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 100%
  );
  animation: neo-skeleton-shimmer 1.8s ease-in-out infinite;
}

@keyframes neo-skeleton-shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>