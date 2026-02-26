<script setup lang="ts">

const props = withDefaults(defineProps<{
  title?: string
  column?: number
  border?: boolean
  direction?: 'horizontal' | 'vertical'
}>(), {
  column: 3,
  border: true,
  direction: 'horizontal'
})
</script>

<template>
  <div class="neo-descriptions" :class="{ 'is-bordered': border, 'is-vertical': direction === 'vertical' }">
    <div v-if="title || $slots.title" class="neo-descriptions__header">
      <div class="neo-descriptions__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="neo-descriptions__body">
      <div 
        class="neo-descriptions__container"
        :style="{ gridTemplateColumns: direction === 'horizontal' ? `repeat(${column}, 1fr)` : `repeat(${column}, minmax(0, 1fr))` }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-descriptions {
  font-family: var(--neo-font-family);
  width: 100%;
}

.neo-descriptions__header {
  margin-bottom: 1.5rem;
}

.neo-descriptions__title {
  font-size: 1.25rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  color: var(--neo-black);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

/* Cleaner title indicator */
.neo-descriptions__title::before {
  content: '';
  display: block;
  width: 6px;
  height: 1.5rem;
  background-color: var(--neo-main);
  border: 2px solid var(--neo-black);
}

.neo-descriptions__container {
  display: grid;
  width: 100%;
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0 var(--neo-black);
  background: var(--neo-black);
  gap: var(--neo-border-width-thick);
  overflow: hidden;
}

:deep(.neo-descriptions-item) {
  display: flex;
  background-color: var(--neo-white);
}

:deep(.neo-descriptions-item__label) {
  background: var(--neo-gray-100);
  padding: 1rem 1.25rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--neo-black);
  border-right: var(--neo-border-thick);
  min-width: 120px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

:deep(.neo-descriptions-item__content) {
  padding: 1rem 1.25rem;
  font-weight: var(--neo-font-weight-bold);
  flex: 1;
  background-color: var(--neo-white);
  color: var(--neo-black);
  display: flex;
  align-items: center;
  font-size: 0.875rem;
}

.is-vertical :deep(.neo-descriptions-item) {
  flex-direction: column;
}

.is-vertical :deep(.neo-descriptions-item__label) {
  border-right: none;
  border-bottom: var(--neo-border-thick);
  background-color: var(--neo-gray-100);
}
</style>
