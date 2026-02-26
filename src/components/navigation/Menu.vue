<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    items?: Array<{
      index: string
      title: string
      disabled?: boolean
      children?: any[]
    }>
    mode?: 'horizontal' | 'vertical'
    collapse?: boolean
    defaultActive?: string
  }>(),
  { mode: 'vertical' }
)

const activeIndex = ref(props.defaultActive ?? '')
provide('menuActiveIndex', activeIndex)
provide('menuSetActive', (index: string) => {
  activeIndex.value = index
})
provide('menuMode', computed(() => props.mode ?? 'vertical'))

const menuClass = computed(() => [
  'neo-menu',
  props.mode ? `neo-menu--${props.mode}` : '',
  props.collapse ? 'neo-menu--collapse' : ''
])

watch(() => props.defaultActive, (val) => {
  if (val) activeIndex.value = val
})
</script>

<template>
  <div :class="menuClass">
    <slot />
  </div>
</template>

<style scoped>
.neo-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: var(--neo-white);
  font-family: var(--neo-font-family);
}

.neo-menu--horizontal {
  flex-direction: row;
  border-bottom: var(--neo-border-thick);
  gap: 0.5rem;
  padding: 0 1rem;
}

.neo-menu--vertical {
  flex-direction: column;
  border-right: var(--neo-border-thick);
  min-width: 240px;
  gap: 0.25rem;
  padding: 0.5rem;
}

.neo-menu--collapse {
  width: 80px;
  min-width: 80px;
}
</style>