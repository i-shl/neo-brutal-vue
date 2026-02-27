<script setup lang="ts">
import { computed, watch, nextTick } from 'vue'
import type { DialogProps, DialogEmits } from '@/types'

const props = withDefaults(defineProps<DialogProps>(), {
  type: 'default',
  width: '500px',
  top: '15vh',
  modal: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  showClose: true,
  destroyOnClose: false,
  alignCenter: true,
  draggable: false
})

const emit = defineEmits<DialogEmits>()

const dialogStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  marginTop: props.alignCenter ? '0' : props.top
}))

watch(() => props.modelValue, (val) => {
  if (val) {
    emit('open')
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      emit('opened')
    })
  } else {
    document.body.style.overflow = ''
  }
}, { immediate: true })

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnPressEscape) {
    handleClose()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="neo-dialog-bounce">
      <div v-if="modelValue" class="neo-dialog-wrapper" :class="{ 'is-centered': alignCenter }">
        <div v-if="modal" class="neo-dialog-backdrop" @click="handleBackdropClick" />
        
        <div
          :class="['neo-dialog', `neo-dialog--${type}`]"
          :style="dialogStyle"
          role="dialog"
          aria-modal="true"
          @keydown="handleKeydown"
        >
          <!-- Header -->
          <div v-if="title || showClose || $slots.header" class="neo-dialog__header">
            <slot name="header">
              <span class="neo-dialog__title">{{ title }}</span>
            </slot>
            <button
              v-if="showClose"
              type="button"
              class="neo-dialog__close-btn"
              title="Close"
              @click="handleClose"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Body -->
          <div class="neo-dialog__body">
            <slot />
          </div>
          
          <!-- Footer -->
          <div v-if="$slots.footer" class="neo-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.neo-dialog-wrapper {
  position: fixed;
  inset: 0;
  z-index: var(--neo-z-modal);
  display: flex;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
  pointer-events: auto;
}

.neo-dialog-wrapper.is-centered {
  align-items: center;
}

.neo-dialog-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: -1;
}

.neo-dialog {
  position: relative;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 12px 12px 0px var(--neo-black);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  transition: var(--neo-transition);
}

.neo-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background-color: var(--neo-dialog-header-bg);
  border-bottom: var(--neo-border-thick);
  color: var(--neo-dialog-header-color);
}

/* Type variants - header color */
.neo-dialog--default {
  --neo-dialog-header-bg: var(--neo-main);
  --neo-dialog-header-color: var(--neo-black);
}
.neo-dialog--primary {
  --neo-dialog-header-bg: var(--neo-primary);
  --neo-dialog-header-color: var(--neo-white);
}
.neo-dialog--success {
  --neo-dialog-header-bg: var(--neo-success);
  --neo-dialog-header-color: var(--neo-black);
}
.neo-dialog--warning {
  --neo-dialog-header-bg: var(--neo-warning);
  --neo-dialog-header-color: var(--neo-black);
}
.neo-dialog--danger {
  --neo-dialog-header-bg: var(--neo-danger);
  --neo-dialog-header-color: var(--neo-white);
}
.neo-dialog--info {
  --neo-dialog-header-bg: var(--neo-info);
  --neo-dialog-header-color: var(--neo-white);
}

.neo-dialog__title {
  font-size: 1.5rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.2;
}

.neo-dialog__close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 2px 2px 0 var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
  color: var(--neo-black);
}

.neo-dialog__close-btn:hover {
  background-color: var(--neo-danger);
  color: var(--neo-white);
  transform: scale(1.1) rotate(90deg);
}

.neo-dialog__body {
  padding: 2rem;
  font-size: 1rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  line-height: 1.6;
}

.neo-dialog__footer {
  padding: 1.25rem 1.5rem;
  border-top: var(--neo-border-thick);
  background-color: var(--neo-gray-50);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

/* Animations */
.neo-dialog-bounce-enter-active {
  transition: opacity 0.3s ease;
}
.neo-dialog-bounce-enter-active .neo-dialog {
  animation: neo-dialog-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.neo-dialog-bounce-leave-active {
  transition: opacity 0.3s ease;
}
.neo-dialog-bounce-leave-active .neo-dialog {
  animation: neo-dialog-in 0.3s reverse ease-in;
}

@keyframes neo-dialog-in {
  0% { transform: scale(0.6) translateY(40px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

.neo-dialog-bounce-enter-from,
.neo-dialog-bounce-leave-to {
  opacity: 0;
}
</style>
