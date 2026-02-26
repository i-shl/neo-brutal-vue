<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  title?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  width?: string | number
}>()

const visible = ref(false)
const popoverRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)

const toggle = () => {
  visible.value = !visible.value
}

const close = (e: MouseEvent) => {
  if (popoverRef.value && !popoverRef.value.contains(e.target as Node) && 
      triggerRef.value && !triggerRef.value.contains(e.target as Node)) {
    visible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', close)
})

onUnmounted(() => {
  document.removeEventListener('click', close)
})
</script>

<template>
  <div class="neo-popover-wrapper">
    <div ref="triggerRef" class="neo-popover-trigger" @click="toggle">
      <slot />
    </div>
    
    <Transition name="neo-popover-bounce">
      <div 
        v-if="visible" 
        ref="popoverRef" 
        :class="['neo-popover', `neo-popover--${placement || 'bottom'}`]" 
        :style="{ width: typeof width === 'number' ? width + 'px' : width }"
      >
        <div v-if="title || $slots.title" class="neo-popover__header">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="neo-popover__content">
          <slot name="content" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-popover-wrapper {
  position: relative;
  display: inline-block;
}

.neo-popover-trigger {
  cursor: pointer;
}

.neo-popover {
  position: absolute;
  z-index: var(--neo-z-popover);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0px var(--neo-black);
  min-width: 180px;
  overflow: hidden;
  transition: var(--neo-transition);
}

.neo-popover__header {
  padding: 0.75rem 1rem;
  background-color: var(--neo-main);
  border-bottom: var(--neo-border-thick);
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  font-size: 0.8125rem;
  color: var(--neo-black);
  letter-spacing: 0.05em;
}

.neo-popover__content {
  padding: 1.25rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  line-height: 1.5;
}

/* Placements */
.neo-popover--bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
}

.neo-popover--top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-12px);
}

.neo-popover--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(-12px);
}

.neo-popover--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(12px);
}

/* Transitions */
.neo-popover-bounce-enter-active,
.neo-popover-bounce-leave-active {
  transition: opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.neo-popover--bottom.neo-popover-bounce-enter-from,
.neo-popover--bottom.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(0) scale(0.9);
}

.neo-popover--top.neo-popover-bounce-enter-from,
.neo-popover--top.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(0) scale(0.9);
}

.neo-popover--left.neo-popover-bounce-enter-from,
.neo-popover--left.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(0) scale(0.9);
}

.neo-popover--right.neo-popover-bounce-enter-from,
.neo-popover--right.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(0) scale(0.9);
}
</style>
