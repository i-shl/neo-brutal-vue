<script setup lang="ts">
import { ref } from 'vue'
import type { TooltipProps } from '@/types'

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  trigger: 'hover',
  effect: 'dark'
})

const visible = ref(false)

const show = () => {
  if (props.disabled) return
  visible.value = true
}

const hide = () => {
  visible.value = false
}
</script>

<template>
  <div class="neo-tooltip-wrapper" @mouseenter="trigger === 'hover' && show()" @mouseleave="trigger === 'hover' && hide()">
    <slot />
    <Transition name="neo-fade">
      <div v-if="visible" :class="['neo-tooltip', `neo-tooltip--${placement}`, `neo-tooltip--${effect}`]">
        <div class="neo-tooltip__content">
          <slot name="content">{{ content }}</slot>
        </div>
        <div class="neo-tooltip__arrow"></div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.neo-tooltip {
  position: absolute;
  z-index: var(--neo-z-tooltip);
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  border: 2px solid black;
  box-shadow: 4px 4px 0px black;
  white-space: nowrap;
  pointer-events: none;
}

.neo-tooltip--dark {
  background: black;
  color: white;
}

.neo-tooltip--light {
  background: white;
  color: black;
}

/* Placements */
.neo-tooltip--top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
}

.neo-tooltip--bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
}

.neo-tooltip--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(-10px);
}

.neo-tooltip--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(10px);
}

.neo-tooltip__arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.neo-tooltip--top .neo-tooltip__arrow {
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px 6px 0 6px;
  border-color: black transparent transparent transparent;
}

.neo-fade-enter-active, .neo-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.neo-fade-enter-from, .neo-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 0) scale(0.9) !important;
}
</style>
