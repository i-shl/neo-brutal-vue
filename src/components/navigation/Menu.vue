<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  items?: Array<{
    index: string
    title: string
    disabled?: boolean
    children?: any[]
  }>
  mode?: 'horizontal' | 'vertical'
  collapse?: boolean
}>()

const menuClass = computed(() => [
  'neo-menu',
  props.mode ? `neo-menu--${props.mode}` : '',
  props.collapse ? 'neo-menu--collapse' : ''
])
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
}

.neo-menu--horizontal {
  flex-direction: row;
  border-bottom: var(--neo-border-width) solid var(--neo-border-color);
}

.neo-menu--vertical {
  flex-direction: column;
  border-right: var(--neo-border-width) solid var(--neo-border-color);
}

.neo-menu--collapse {
  width: 64px;
}
</style>