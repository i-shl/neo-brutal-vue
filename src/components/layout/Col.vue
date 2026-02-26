<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  span?: number
  offset?: number
}>()

const colClass = computed(() => [
  'neo-col',
  props.span ? `neo-col--span-${props.span}` : '',
  props.offset ? `neo-col--offset-${props.offset}` : ''
])

const colStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.span) style.gridColumn = `span ${props.span}`
  if (props.offset) style.gridColumnStart = `${props.offset + 1}`
  return style
})
</script>

<template>
  <div :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>

<style scoped>
.neo-col {
  display: block;
  min-height: 32px;
  padding: var(--neo-spacing-md);
  background: var(--neo-bg-secondary);
  border: 2px solid var(--neo-border-color);
  font-weight: 600;
}
</style>