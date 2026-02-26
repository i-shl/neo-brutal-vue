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
  <div 
    class="neo-tooltip-wrapper" 
    @mouseenter="trigger === 'hover' && show()" 
    @mouseleave="trigger === 'hover' && hide()"
    @click="trigger === 'click' && (visible ? hide() : show())"
  >
    <slot />
    <Transition name="neo-tooltip-bounce">
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
  padding: 0.625rem 1rem;
  font-size: 0.8125rem;
  font-weight: var(--neo-font-weight-black);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0px var(--neo-black);
  white-space: nowrap;
  pointer-events: none;
  transition: var(--neo-transition);
}

.neo-tooltip--dark {
  background-color: var(--neo-black);
  color: var(--neo-white);
  border-color: var(--neo-black);
}

.neo-tooltip--light {
  background-color: var(--neo-white);
  color: var(--neo-black);
  border-color: var(--neo-black);
}

/* Placements */
.neo-tooltip--top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-12px);
}

.neo-tooltip--bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
}

.neo-tooltip--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(-12px);
}

.neo-tooltip--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(12px);
}

.neo-tooltip__arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.neo-tooltip--top .neo-tooltip__arrow {
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px 10px 0 10px;
  border-color: var(--neo-black) transparent transparent transparent;
}

.neo-tooltip--bottom .neo-tooltip__arrow {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent var(--neo-black) transparent;
}

.neo-tooltip--left .neo-tooltip__arrow {
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent var(--neo-black);
}

.neo-tooltip--right .neo-tooltip__arrow {
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 10px 10px 10px 0;
  border-color: transparent var(--neo-black) transparent transparent;
}

.neo-tooltip-bounce-enter-active,
.neo-tooltip-bounce-leave-active {
  transition: opacity 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.neo-tooltip-bounce-enter-from,
.neo-tooltip-bounce-leave-to {
  opacity: 0;
  transform: translate(-50%, 0) scale(0.8) !important;
}

.neo-tooltip--left.neo-tooltip-bounce-enter-from,
.neo-tooltip--left.neo-tooltip-bounce-leave-to,
.neo-tooltip--right.neo-tooltip-bounce-enter-from,
.neo-tooltip--right.neo-tooltip-bounce-leave-to {
  transform: translateY(-50%) scale(0.8) !important;
}
</style>
