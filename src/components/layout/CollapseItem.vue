<script setup lang="ts">
import { computed, inject } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string | number
    title?: string
    disabled?: boolean
  }>(),
  { disabled: false }
)

const getModelValue = inject<() => string | string[] | undefined>(
  'collapseModelValue',
  () => undefined
)
const getAccordion = inject<() => boolean | undefined>(
  'collapseAccordion',
  () => false
)
const collapseEmit = inject<(value: string | string[]) => void>(
  'collapseEmit',
  () => {}
)

const modelValue = computed(() => getModelValue())
const accordion = computed(() => getAccordion())

const isActive = computed(() => {
  const val = modelValue.value
  if (accordion.value) {
    return val === props.name
  }
  return Array.isArray(val) && val.includes(props.name as any)
})

const collapseClass = computed(() => [
  'neo-collapse-item',
  isActive.value ? 'neo-collapse-item--active' : '',
  props.disabled ? 'neo-collapse-item--disabled' : ''
])

const handleTitleClick = () => {
  if (props.disabled) return

  if (accordion.value) {
    if (isActive.value) {
      collapseEmit('')
    } else {
      collapseEmit(props.name as string)
    }
  } else {
    const current = Array.isArray(modelValue.value)
      ? [...modelValue.value]
      : []
    const index = current.indexOf(props.name as string)
    if (index === -1) {
      current.push(props.name as string)
    } else {
      current.splice(index, 1)
    }
    collapseEmit(current)
  }
}
</script>

<template>
  <div :class="collapseClass">
    <div class="neo-collapse-item__header" @click="handleTitleClick">
      <div class="neo-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="neo-collapse-item__arrow" :class="{ 'is-active': isActive }">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
    
    <Transition name="neo-collapse-slide">
      <div v-if="isActive" class="neo-collapse-item__content">
        <div class="neo-collapse-item__body">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-collapse-item {
  background-color: var(--neo-white);
  transition: var(--neo-transition);
}

.neo-collapse-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  background-color: var(--neo-white);
  font-family: var(--neo-font-family);
  transition: var(--neo-transition);
}

.neo-collapse-item__header:hover:not(.neo-collapse-item--disabled .neo-collapse-item__header) {
  background-color: var(--neo-gray-50);
}

.neo-collapse-item--active .neo-collapse-item__header {
  background-color: var(--neo-main);
}

.neo-collapse-item__title {
  font-size: 0.9375rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  color: var(--neo-black);
  letter-spacing: 0.04em;
}

.neo-collapse-item__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.neo-collapse-item__arrow.is-active {
  transform: rotate(180deg);
}

.neo-collapse-item__content {
  background-color: var(--neo-white);
  border-top: 2px solid var(--neo-black);
}

.neo-collapse-item__body {
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-normal);
  color: var(--neo-black);
  line-height: 1.7;
}

.neo-collapse-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

/* Slide Animation */
.neo-collapse-slide-enter-active,
.neo-collapse-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 1000px;
  overflow: hidden;
}

.neo-collapse-slide-enter-from,
.neo-collapse-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
