<script setup lang="ts">
import { computed } from 'vue'
import type { StepsProps } from '@/types'

const props = withDefaults(defineProps<StepsProps>(), {
  space: 100,
  direction: 'horizontal',
  active: 0,
  processStatus: 'process',
  finishStatus: 'finish',
  alignCenter: false,
  simple: false
})

const stepsClass = computed(() => {
  const classes: string[] = ['neo-steps']
  
  classes.push(`neo-steps--${props.direction}`)
  if (props.alignCenter) classes.push('neo-steps--align-center')
  if (props.simple) classes.push('neo-steps--simple')
  
  return classes.join(' ')
})
</script>

<template>
  <div :class="stepsClass">
    <slot />
  </div>
</template>

<style scoped>
.neo-steps {
  display: flex;
  width: 100%;
}

.neo-steps--horizontal {
  flex-direction: row;
}

.neo-steps--vertical {
  flex-direction: column;
}

.neo-steps--align-center {
  align-items: center;
}

.neo-steps--simple {
  gap: 0;
}
</style>
