<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'NeoRow' })

const props = withDefaults(
  defineProps<{
    /** 列数 (number) 或自定义 grid-template-columns (string) */
    columns?: number | string
    /** 间距，支持数字(px)或字符串 */
    gap?: number | string
    /** 垂直对齐 */
    align?: 'start' | 'center' | 'end' | 'stretch'
    /** 水平对齐 */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  }>(),
  { columns: 12 },
)

const gridStyle = computed(() => {
  const style: Record<string, string> = {
    gridTemplateColumns:
      typeof props.columns === 'number'
        ? `repeat(${props.columns}, 1fr)`
        : typeof props.columns === 'string'
          ? props.columns
          : 'repeat(12, 1fr)',
  }
  if (props.gap !== undefined) {
    style.gap =
      typeof props.gap === 'number' ? `${props.gap}px` : String(props.gap)
  }
  if (props.align) style.alignItems = props.align
  if (props.justify) {
    style.justifyContent =
      props.justify === 'between'
        ? 'space-between'
        : props.justify === 'around'
          ? 'space-around'
          : props.justify === 'evenly'
            ? 'space-evenly'
            : props.justify
  }
  return style
})
</script>

<template>
  <div class="neo-row" :style="gridStyle">
    <slot />
  </div>
</template>

<style scoped>
.neo-row {
  display: grid;
  width: 100%;
  gap: var(--neo-spacing-md);
}
</style>