<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    loading?: boolean
    size?: 'small' | 'default' | 'large'
    text?: string
    fullscreen?: boolean
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  }>(),
  { loading: true, type: 'primary' },
)

const spinnerClass = computed(() => {
  const classes = ['neo-spinner']
  if (props.size && props.size !== 'default') classes.push(`neo-spinner--${props.size}`)
  if (props.fullscreen) classes.push('neo-spinner--fullscreen')
  if (props.type) classes.push(`neo-spinner--${props.type}`)
  return classes
})
</script>

<template>
  <div v-if="loading" :class="spinnerClass">
    <div class="neo-spinner__dots">
      <span class="neo-spinner__dot" />
      <span class="neo-spinner__dot" />
      <span class="neo-spinner__dot" />
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

.neo-spinner__dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.neo-spinner__dot {
  width: 8px;
  height: 8px;
  background: var(--neo-primary);
  border: 2px solid var(--neo-black);
  border-radius: 2px;
  box-shadow: 2px 2px 0 var(--neo-black);
  animation: neo-spinner-bounce 1.2s ease-in-out infinite both;
}

.neo-spinner__dot:nth-child(1) { animation-delay: 0s; }
.neo-spinner__dot:nth-child(2) { animation-delay: 0.2s; }
.neo-spinner__dot:nth-child(3) { animation-delay: 0.4s; }

.neo-spinner--primary .neo-spinner__dot { background: var(--neo-primary); }
.neo-spinner--success .neo-spinner__dot { background: var(--neo-success); }
.neo-spinner--warning .neo-spinner__dot { background: var(--neo-warning); }
.neo-spinner--danger .neo-spinner__dot { background: var(--neo-danger); }
.neo-spinner--info .neo-spinner__dot { background: var(--neo-info); }
.neo-spinner--default .neo-spinner__dot { background: var(--neo-main); }

.neo-spinner__text {
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
}

@keyframes neo-spinner-bounce {
  0%, 80%, 100% { transform: translateY(0) scale(1); }
  40% { transform: translateY(-10px) scale(1.2); }
}

.neo-spinner--small .neo-spinner__dot {
  width: 6px;
  height: 6px;
  border-width: 1px;
  box-shadow: 1px 1px 0 var(--neo-black);
}

.neo-spinner--large .neo-spinner__dot {
  width: 12px;
  height: 12px;
  border-width: 3px;
  box-shadow: 3px 3px 0 var(--neo-black);
}

.neo-spinner--large .neo-spinner__dots { gap: 8px; }

.neo-spinner--fullscreen {
  position: absolute;
  inset: 0;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: var(--neo-z-loading, 2000);
}
</style>
