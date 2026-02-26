<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import type { WaterfallProps } from '@/types'

const props = withDefaults(defineProps<WaterfallProps>(), {
  cols: 3,
  gap: 16
})

const containerRef = ref<HTMLElement | null>(null)
const containerHeight = ref(0)
const positions = ref<{ top: number; left: number; width: number }[]>([])

const calculateLayout = () => {
  if (!containerRef.value || !props.items?.length) return

  const containerWidth = containerRef.value.getBoundingClientRect().width
  if (containerWidth === 0) return

  const colWidth = (containerWidth - (props.cols - 1) * props.gap) / props.cols
  const colHeights = new Array(props.cols).fill(0)
  const newPositions: { top: number; left: number; width: number }[] = []

  const elements = Array.from(containerRef.value.querySelectorAll('.neo-waterfall-item')) as HTMLElement[]
  
  if (elements.length === 0) return

  elements.forEach((el) => {
    // 使用 getBoundingClientRect 获取精确的渲染高度
    const height = el.getBoundingClientRect().height
    
    const minHeight = Math.min(...colHeights)
    const colIndex = colHeights.indexOf(minHeight)
    
    newPositions.push({
      top: minHeight,
      left: colIndex * (colWidth + props.gap),
      width: colWidth
    })
    
    colHeights[colIndex] += height + props.gap
  })

  positions.value = newPositions
  containerHeight.value = Math.max(...colHeights)
}

let resizeObserver: ResizeObserver | null = null
let itemResizeObserver: ResizeObserver | null = null

const observeItems = () => {
  if (!containerRef.value) return
  itemResizeObserver?.disconnect()
  itemResizeObserver = new ResizeObserver(() => {
    calculateLayout()
  })
  const elements = containerRef.value.querySelectorAll('.neo-waterfall-item')
  elements.forEach((el) => itemResizeObserver!.observe(el))
}

watch(() => props.items, () => {
  nextTick(() => {
    setTimeout(() => {
      calculateLayout()
      observeItems()
    }, 50)
  })
}, { deep: true })

onMounted(() => {
  nextTick(() => {
    calculateLayout()
    observeItems()
    if (containerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        calculateLayout()
      })
      resizeObserver.observe(containerRef.value)
    }
  })
  window.addEventListener('resize', calculateLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', calculateLayout)
  resizeObserver?.disconnect()
  itemResizeObserver?.disconnect()
})
</script>

<template>
  <div 
    class="neo-waterfall" 
    ref="containerRef" 
    :style="{ height: `${containerHeight}px`, position: 'relative' }"
  >
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="neo-waterfall-item"
      :style="{
        position: 'absolute',
        top: `${positions[index]?.top || 0}px`,
        left: `${positions[index]?.left || 0}px`,
        width: `${positions[index]?.width || 0}px`,
        opacity: positions[index] ? 1 : 0,
        visibility: positions[index] ? 'visible' : 'hidden',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }"
    >
      <div class="neo-waterfall-content">
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-waterfall {
  width: 100%;
  transition: height 0.3s ease;
}

.neo-waterfall-item {
  background: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: var(--neo-shadow);
  padding: var(--neo-spacing-md);
  box-sizing: border-box;
  will-change: transform, opacity;
}
</style>
