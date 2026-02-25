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
  if (!props.span && !props.offset) return {}
  const style: any = {}
  if (props.span) style.gridColumn = props.span
  if (props.offset) style.gridColumnStart = props.offset
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
}

.neo-col--span-1 { flex: 0 0 calc(100% * 1 / 12); }
.neo-col--span-2 { flex: 0 0 calc(100% * 2 / 12); }
.neo-col--span-3 { flex: 0 0 calc(100% * 3 / 12); }
.neo-col--span-4 { flex: 0 0 calc(100% * 4 / 12); }
.neo-col--span-5 { flex: 0 0 calc(100% * 5 / 12); }
.neo-col--span-6 { flex: 0 0 calc(100% * 6 / 12); }
.neo-col--span-7 { flex: 0 0 calc(100% * 7 / 12); }
.neo-col--span-8 { flex: 0 0 calc(100% * 8 / 12); }
.neo-col--span-9 { flex: 0 0 calc(100% * 9 / 12); }
.neo-col--span-10 { flex: 0 0 calc(100% * 10 / 12); }
.neo-col--span-11 { flex: 0 0 calc(100% * 11 / 12); }
.neo-col--span-12 { flex: 0 0 100%; }

.neo-col--offset-1 { margin-left: calc(100% * 1 / 12); }
.neo-col--offset-2 { margin-left: calc(100% * 2 / 12); }
.neo-col--offset-3 { margin-left: calc(100% * 3 / 12); }
.neo-col--offset-4 { margin-left: calc(100% * 4 / 12); }
.neo-col--offset-5 { margin-left: calc(100% * 5 / 12); }
.neo-col--offset-6 { margin-left: calc(100% * 6 / 12); }
.neo-col--offset-7 { margin-left: calc(100% * 7 / 12); }
.neo-col--offset-8 { margin-left: calc(100% * 8 / 12); }
.neo-col--offset-9 { margin-left: calc(100% * 9 / 12); }
.neo-col--offset-10 { margin-left: calc(100% * 10 / 12); }
.neo-col--offset-11 { margin-left: calc(100% * 11 / 12); }
</style>