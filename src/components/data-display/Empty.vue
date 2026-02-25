<script setup lang="ts">
const props = defineProps<{
  description?: string
  image?: string
}>()
</script>

<template>
  <div class="neo-empty">
    <div v-if="image || $slots.image" class="neo-empty__image">
      <slot name="image">
        <div class="neo-empty__placeholder">📭</div>
      </slot>
    </div>
    <div v-if="description || $slots.default" class="neo-empty__description">
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>

<style scoped>
.neo-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--neo-spacing-xl);
}

.neo-empty__image {
  margin-bottom: var(--neo-spacing-md);
}

.neo-empty__placeholder {
  font-size: 64px;
  opacity: 0.5;
}

.neo-empty__description {
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
  text-align: center;
}
</style>
