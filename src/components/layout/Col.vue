<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'NeoCol' })

const props = defineProps<{
  /** 占据列数 1–12 */
  span?: number
  /** 左侧偏移列数 0–11 */
  offset?: number
}>()

const colStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.span) style.gridColumn = `span ${props.span}`
  if (props.offset !== undefined && props.offset > 0) {
    style.gridColumnStart = `${props.offset + 1}`
  }
  return style
})
</script>

<template>
  <div class="neo-col" :style="colStyle">
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