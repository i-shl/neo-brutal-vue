<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  status?: 'normal' | 'success' | 'warning' | 'error'
}>()

const timelineClass = computed(() => [
  'neo-timeline',
  props.status ? `neo-timeline--${props.status}` :''
])
</script>

<template>
  <div :class="timelineClass">
    <div class="neo-timeline__items">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.neo-timeline {
  position: relative;
  font-family: var(--neo-font-family);
}

.neo-timeline__items {
  display: flex;
  flex-direction: column;
}
</style>