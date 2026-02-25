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
  <div class="neo-descriptions" :class="{ 'is-bordered': border }">
    <div v-if="title || $slots.title" class="neo-descriptions__header">
      <div class="neo-descriptions__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="neo-descriptions__body">
      <div 
        class="neo-descriptions__container"
        :style="{ gridTemplateColumns: `repeat(${column}, 1fr)` }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-descriptions {
  font-family: var(--neo-font-family);
}

.neo-descriptions__header {
  margin-bottom: 1rem;
}

.neo-descriptions__title {
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
  border-left: 8px solid var(--neo-primary);
  padding-left: 1rem;
}

.neo-descriptions__container {
  display: grid;
  border: 3px solid black;
  box-shadow: 6px 6px 0px black;
  background: white;
}

.is-bordered .neo-descriptions__container {
  border-collapse: collapse;
}

:deep(.neo-descriptions-item) {
  border: 1.5px solid black;
  display: flex;
  flex-direction: column;
}

:deep(.neo-descriptions-item__label) {
  background: var(--neo-yellow);
  padding: 0.75rem 1rem;
  font-weight: 800;
  border-bottom: 2px solid black;
  text-transform: uppercase;
  font-size: 0.75rem;
}

:deep(.neo-descriptions-item__content) {
  padding: 0.75rem 1rem;
  font-weight: 600;
  flex: 1;
}

.neo-descriptions[direction="vertical"] :deep(.neo-descriptions-item) {
  flex-direction: column;
}
</style>
