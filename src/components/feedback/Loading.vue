<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    loading?: boolean
    size?: 'small' | 'default' | 'large'
    text?: string
    fullscreen?: boolean
  }>(),
  { loading: true },
)

const spinnerClass = computed(() => {
  const classes = ['neo-spinner']
  if (props.size) classes.push(`neo-spinner--${props.size}`)
  if (props.fullscreen) classes.push('neo-spinner--fullscreen')
  return classes
})
</script>

<template>
  <div v-if="loading" :class="spinnerClass">
    <div class="neo-spinner__rotate">
      <div class="neo-spinner__blade" />
    </div>
    <span v-if="text" class="neo-spinner__text">{{ text }}</span>
  </div>
  <slot v-else />
</template>

<style scoped>
.neo-spinner {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: var(--neo-spacing-sm);
}

.neo-spinner__rotate {
  width: 32px;
  height: 32px;
  animation: neo-spinner-rotate 0.8s steps(8) infinite;
}

.neo-spinner__blade {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
}

.neo-spinner__blade::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background: var(--neo-primary);
  border-radius: 2px;
}

.neo-spinner__text {
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
}

@keyframes neo-spinner-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.neo-spinner--small .neo-spinner__rotate {
  width: 20px;
  height: 20px;
}

.neo-spinner--large .neo-spinner__rotate {
  width: 48px;
  height: 48px;
}

.neo-spinner--fullscreen {
  position: absolute;
  inset: 0;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: var(--neo-z-loading, 2000);
}
</style>
