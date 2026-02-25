<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  subTitle?: string
  status?: 'success' | 'warning' | 'error' | 'info' | '404' | '403' | '500'
}>(), {
  status: 'info'
})

const statusConfig = {
  success: { icon: '✅', color: 'var(--neo-green)' },
  warning: { icon: '⚠️', color: 'var(--neo-yellow)' },
  error: { icon: '❌', color: 'var(--neo-pink)' },
  info: { icon: 'ℹ️', color: 'var(--neo-cyan)' },
  '404': { icon: '🔍', color: 'var(--neo-purple)' },
  '403': { icon: '🚫', color: 'var(--neo-orange)' },
  '500': { icon: '🔥', color: 'var(--neo-primary)' }
}
</script>

<template>
  <div class="neo-result">
    <div class="neo-result__icon" :style="{ background: statusConfig[status].color }">
      {{ statusConfig[status].icon }}
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
  padding: 3rem 1rem;
}

.neo-result__icon {
  width: 100px;
  height: 100px;
  border: 4px solid black;
  box-shadow: 8px 8px 0px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  border-radius: 50%;
}

.neo-result__title {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: black;
}

.neo-result__subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
  max-width: 500px;
  margin-bottom: 2.5rem;
}

.neo-result__extra {
  display: flex;
  gap: 1rem;
}
</style>
