<script setup lang="ts">
import { computed } from 'vue'
import type { TabsProps } from '@/types'

const props = withDefaults(defineProps<TabsProps>(), {
  type: 'line',
  tabPosition: 'top'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'tab-click', tab: any): void
}>()

const tabsClass = computed(() => {
  const classes: string[] = ['neo-tabs']
  
  classes.push(`neo-tabs--${props.type}`)
  classes.push(`neo-tabs--${props.tabPosition}`)
  
  return classes.join(' ')
})
</script>

<template>
  <div :class="tabsClass">
    <div class="neo-tabs__nav">
      <slot />
    </div>
    <div class="neo-tabs__content">
      <slot name="panel" />
    </div>
  </div>
</template>

<style scoped>
.neo-tabs {
  display: flex;
  flex-direction: column;
}

.neo-tabs--top {
  flex-direction: column;
}

.neo-tabs--bottom {
  flex-direction: column-reverse;
}

.neo-tabs--left,
.neo-tabs--right {
  flex-direction: row;
}

.neo-tabs--left .neo-tabs__nav,
.neo-tabs--right .neo-tabs__nav {
  flex-direction: column;
}

.neo-tabs__nav {
  display: flex;
  border-bottom: var(--neo-border-width) solid var(--neo-border-color);
}

.neo-tabs__content {
  flex: 1;
  padding: var(--neo-spacing-md) 0;
}
</style>
