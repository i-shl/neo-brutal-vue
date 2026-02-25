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
    
    <Transition name="neo-pop-fade">
      <div v-if="visible" ref="popoverRef" :class="['neo-popover', `neo-popover--${placement || 'bottom'}`]" :style="{ width: typeof width === 'number' ? width + 'px' : width }">
        <div v-if="title || $slots.title" class="neo-popover__title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="neo-popover__content">
          <slot name="content" />
        </div>
        <div class="neo-popover__arrow"></div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-popover-wrapper {
  position: relative;
  display: inline-block;
}

.neo-popover {
  position: absolute;
  z-index: var(--neo-z-popover);
  background: white;
  border: 3px solid black;
  box-shadow: 6px 6px 0px black;
  min-width: 150px;
}

.neo-popover__title {
  padding: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  border-bottom: 3px solid black;
  background: var(--neo-yellow);
}

.neo-popover__content {
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
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

.neo-popover-trigger {
  cursor: pointer;
}

/* Transitions */
.neo-pop-fade-enter-active, .neo-pop-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.neo-pop-fade-enter-from, .neo-pop-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(0) scale(0.95) !important;
}
</style>
