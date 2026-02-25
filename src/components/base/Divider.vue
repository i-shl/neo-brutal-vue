<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  dashed?: boolean
  contentPosition?: 'left' | 'center' | 'right'
}>()

const dividerClass = computed(() => ['neo-divider'])
</script>

<template>
  <div :class="dividerClass">
    <span v-if="$slots.default" class="neo-divider__text">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.neo-divider {
  display: flex;
  align-items: center;
  margin: var(--neo-spacing-md) 0;
  border-top: var(--neo-border-width-thin) solid var(--neo-border-color);
}

.neo-divider--dashed {
  border-top-style: dashed;
}

.neo-divider__text {
  padding: 0 var(--neo-spacing-md);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-tertiary);
  white-space: nowrap;
}
</style>
