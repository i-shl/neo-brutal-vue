<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  showIcon?: boolean
}>()

const skeletonClass = computed(() => [
  'neo-skeleton',
  props.showIcon ? 'neo-skeleton--with-icon' : ''
])
</script>

<template>
  <div :class="skeletonClass">
    <div class="neo-skeleton__content">
      <div class="neo-skeleton__avatar" />
      <div class="neo-skeleton__text">
        <div class="neo-skeleton__line neo-skeleton__line--short" />
        <div class="neo-skeleton__line" />
        <div class="neo-skeleton__line neo-skeleton__line--short" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-skeleton {
  padding: var(--neo-spacing-md);
}

.neo-skeleton__content {
  display: flex;
  align-items: flex-start;
  gap: var(--neo-spacing-md);
}

.neo-skeleton__avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, var(--neo-gray-200) 25%, var(--neo-gray-100) 50%, var(--neo-gray-200) 75%);
  background-size: 200% 100%;
  border-radius: 50%;
  animation: neo-skeleton-loading 1.5s infinite;
}

.neo-skeleton__text {
  flex: 1;
}

.neo-skeleton__line {
  height: 16px;
  margin-bottom: var(--neo-spacing-xs);
  background: linear-gradient(90deg, var(--neo-gray-200) 25%, var(--neo-gray-100) 50%, var(--neo-gray-200) 75%);
  background-size: 200% 100%;
  border-radius: var(--neo-radius);
  animation: neo-skeleton-loading 1.5s infinite;
}

.neo-skeleton__line--short {
  width: 30%;
}

@keyframes neo-skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>