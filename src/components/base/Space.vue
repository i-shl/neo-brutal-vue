<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  vertical?: boolean
  size?: 'sm' | 'md' | 'lg' | number
  fill?: boolean
}>()

const spaceClass = computed(() => {
  const classes: string[] = ['neo-space']
  
  if (props.vertical) classes.push('neo-space--vertical')
  if (props.fill) classes.push('neo-space--fill')
  
  return classes.join(' ')
})

const gapStyle = computed(() => {
  const sizeMap = { sm: '8px', md: '16px', lg: '24px' }
  const gap = typeof props.size === 'number' ? `${props.size}px` : sizeMap[props.size as 'sm' | 'md' | 'lg'] || '16px'
  return { gap }
})
</script>

<template>
  <div :class="spaceClass" :style="gapStyle">
    <slot />
  </div>
</template>

<style scoped>
.neo-space {
  display: inline-flex;
  flex-wrap: wrap;
}

.neo-space--vertical {
  flex-direction: column;
}

.neo-space--fill {
  width: 100%;
}
</style>
