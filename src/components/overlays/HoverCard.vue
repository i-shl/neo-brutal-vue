<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  placement?: 'top' | 'bottom' | 'left' | 'right'
  width?: string | number
  openDelay?: number
  closeDelay?: number
}>(), {
  placement: 'bottom',
  openDelay: 200,
  closeDelay: 300
})

const visible = ref(false)
let openTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null

const handleMouseEnter = () => {
  if (closeTimer) clearTimeout(closeTimer)
  openTimer = setTimeout(() => {
    visible.value = true
  }, props.openDelay)
}

const handleMouseLeave = () => {
  if (openTimer) clearTimeout(openTimer)
  closeTimer = setTimeout(() => {
    visible.value = false
  }, props.closeDelay)
}

onUnmounted(() => {
  if (openTimer) clearTimeout(openTimer)
  if (closeTimer) clearTimeout(closeTimer)
})
</script>

<template>
  <div class="neo-hover-card-wrapper" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="neo-hover-card-trigger">
      <slot />
    </div>
    
    <Transition name="neo-popover-bounce">
      <div 
        v-if="visible" 
        :class="['neo-hover-card', `neo-hover-card--${placement}`]" 
        :style="{ width: typeof width === 'number' ? width + 'px' : width }"
      >
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-hover-card-wrapper {
  position: relative;
  display: inline-block;
}

.neo-hover-card-trigger {
  cursor: pointer;
}

.neo-hover-card {
  position: absolute;
  z-index: var(--neo-z-popover);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0px var(--neo-black);
  min-width: 280px;
  overflow: hidden;
  padding: 1rem;
  transition: var(--neo-transition);
}

/* Placements */
.neo-hover-card--bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
}
.neo-hover-card--top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-12px);
}
.neo-hover-card--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(-12px);
}
.neo-hover-card--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(12px);
}

/* Transitions - reuse popover bounce */
.neo-popover-bounce-enter-active,
.neo-popover-bounce-leave-active {
  transition: opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.neo-hover-card--bottom.neo-popover-bounce-enter-from,
.neo-hover-card--bottom.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(0) scale(0.95);
}
.neo-hover-card--top.neo-popover-bounce-enter-from,
.neo-hover-card--top.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(0) scale(0.95);
}
.neo-hover-card--left.neo-popover-bounce-enter-from,
.neo-hover-card--left.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(0) scale(0.95);
}
.neo-hover-card--right.neo-popover-bounce-enter-from,
.neo-hover-card--right.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(0) scale(0.95);
}
</style>
