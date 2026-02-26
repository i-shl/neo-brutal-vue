<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    index?: string
    title?: string
    disabled?: boolean
  }>(),
  { index: '' },
)

const activeIndex = inject<{ value: string }>('menuActiveIndex', { value: '' })
const menuMode = inject<{ value: 'horizontal' | 'vertical' }>('menuMode', {
  value: 'vertical',
})

const expanded = ref(false)
const hasActiveChild = computed(() =>
  props.index ? activeIndex.value.startsWith(props.index + '-') : false,
)

const subMenuClass = computed(() => [
  'neo-submenu',
  `is-${menuMode.value}`,
  props.disabled ? 'is-disabled' : '',
  expanded.value || hasActiveChild.value ? 'is-open' : '',
  hasActiveChild.value ? 'has-active-child' : ''
])

function toggle() {
  if (props.disabled) return
  expanded.value = !expanded.value
}

watch(activeIndex, () => {
  if (menuMode.value === 'horizontal') {
    expanded.value = false
  }
})
</script>

<template>
  <div :class="subMenuClass">
    <div class="neo-submenu__title" @click="toggle">
      <div class="neo-submenu__title-inner">
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </div>
      <span class="neo-submenu__arrow" :class="{ 'is-active': expanded }">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </div>
    
    <Transition name="neo-submenu-slide">
      <div v-if="expanded || (menuMode.value === 'vertical' && hasActiveChild)" class="neo-submenu__content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-submenu {
  list-style: none;
  font-family: var(--neo-font-family);
}

.neo-submenu__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  color: var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  font-size: 0.875rem;
  user-select: none;
}

.neo-submenu__title:hover:not(.is-disabled .neo-submenu__title) {
  background-color: var(--neo-gray-50);
}

.neo-submenu.has-active-child .neo-submenu__title {
  color: var(--neo-black);
}

.neo-submenu__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.neo-submenu__arrow.is-active {
  transform: rotate(180deg);
}

.neo-submenu__content {
  background-color: var(--neo-white);
  overflow: hidden;
}

/* Vertical Mode */
.is-vertical .neo-submenu__content {
  padding-left: 1.5rem;
  padding-top: 0.5rem; /* Added padding top */
  padding-bottom: 0.5rem;
  border-left: var(--neo-border-thick);
  margin-left: 1.5rem; /* Increased margin */
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}

/* Horizontal Mode */
.is-horizontal {
  position: relative;
}

.is-horizontal .neo-submenu__content {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  padding: 0.5rem;
  margin: 0;
  border: var(--neo-border-thick);
  background-color: var(--neo-white);
  box-shadow: 6px 6px 0 var(--neo-black);
  z-index: 10;
  margin-top: 0.75rem;
}

.is-horizontal .neo-submenu__title {
  border-bottom: var(--neo-border-thick) solid transparent;
  top: 3px;
}

.is-horizontal.is-open .neo-submenu__title {
  background-color: var(--neo-gray-50);
}

.is-horizontal.has-active-child .neo-submenu__title {
  border-bottom-color: var(--neo-black);
  background-color: var(--neo-main);
  transform: translateY(-4px);
  box-shadow: 4px 4px 0px var(--neo-black);
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

/* Slide Animation (vertical) */
.neo-submenu-slide-enter-active,
.neo-submenu-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 1000px;
}

.neo-submenu-slide-enter-from,
.neo-submenu-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
