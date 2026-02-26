<script setup lang="ts">
import { computed, provide, ref, reactive } from 'vue'
import type { TabsProps } from '@/types'

const props = withDefaults(defineProps<TabsProps>(), {
  type: 'line',
  tabPosition: 'top',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'tab-click', tab: any): void
}>()

const activeName = ref(props.modelValue ?? '')
const panes = reactive<any[]>([])

const setActive = (name: string) => {
  if (activeName.value === name) return
  activeName.value = name
  emit('update:modelValue', name)
  
  const tab = panes.find(p => p.name === name)
  if (tab) emit('tab-click', tab)
}

// Provide to TabPane
provide('tabsActiveName', activeName)
provide('tabsRegister', (pane: any) => {
  panes.push(pane)
})
provide('tabsUnregister', (name: string) => {
  const index = panes.findIndex(p => p.name === name)
  if (index !== -1) panes.splice(index, 1)
})

const tabsClass = computed(() => {
  return [
    'neo-tabs',
    `is-${props.type}`,
    `is-${props.tabPosition}`
  ]
})

const handleTabClick = (name: string) => {
  setActive(name)
}
</script>

<template>
  <div :class="tabsClass">
    <!-- Tab Navigation -->
    <div class="neo-tabs__header">
      <div class="neo-tabs__nav">
        <div 
          v-for="pane in panes" 
          :key="pane.name"
          class="neo-tabs__item"
          :class="{
            'is-active': activeName === pane.name,
            'is-disabled': pane.disabled
          }"
          @click="!pane.disabled && handleTabClick(pane.name)"
        >
          <div class="neo-tabs__item-label">
            <component :is="pane.slots.label" v-if="pane.slots.label" />
            <template v-else>{{ pane.label || pane.name }}</template>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="neo-tabs__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.neo-tabs {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: var(--neo-font-family);
}

.neo-tabs__header {
  margin-bottom: 0.75rem;
  z-index: 2;
}

.neo-tabs__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.neo-tabs__item {
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 3px 3px 0px var(--neo-black);
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  transition: var(--neo-transition);
  user-select: none;
  position: relative;
}

.neo-tabs__item:hover:not(.is-disabled):not(.is-active) {
  background-color: var(--neo-gray-50);
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px var(--neo-black);
}

.neo-tabs__item.is-active {
  background-color: var(--neo-main);
  color: var(--neo-black);
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0px var(--neo-black);
}

.neo-tabs__content {
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  padding: 2rem;
  position: relative;
  box-shadow: 10px 10px 0 var(--neo-black);
  min-height: 100px;
}

/* Position Variants */
.is-bottom {
  flex-direction: column-reverse;
}

.is-bottom .neo-tabs__header {
  margin-bottom: 0;
  margin-top: 1.5rem;
}

.is-bottom .neo-tabs__item.is-active {
  transform: translate(-3px, 3px);
  box-shadow: 8px -8px 0 var(--neo-black);
}

.is-left, .is-right {
  flex-direction: row;
  gap: 1.5rem;
}

.is-left .neo-tabs__nav,
.is-right .neo-tabs__nav {
  flex-direction: column;
}

.is-left .neo-tabs__item.is-active {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--neo-black);
}

.is-right .neo-tabs__item.is-active {
  transform: translate(3px, -3px);
  box-shadow: -8px 8px 0 var(--neo-black);
}

.is-right .neo-tabs__header {
  order: 2;
  margin-bottom: 0;
}

.is-disabled {
  opacity: 0.4;
  cursor: not-allowed;
  filter: grayscale(1);
}

.neo-tabs__item-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
