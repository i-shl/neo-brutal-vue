<script setup lang="ts">
import { computed, watch, nextTick } from 'vue'
import type { DialogProps, DialogEmits } from '@/types'

const props = withDefaults(defineProps<DialogProps>(), {
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

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const dialogStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  top: props.top
}))

watch(() => props.modelValue, (val) => {
  if (val) {
    emit('open')
    nextTick(() => {
      emit('opened')
    })
  }
})

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
    <Transition name="neo-dialog">
      <div v-if="modelValue" class="neo-dialog__wrapper" @click="handleBackdropClick" @keydown="handleKeydown">
        <!-- Backdrop -->
        <div v-if="modal" class="neo-dialog__backdrop" />
        
        <!-- Dialog -->
        <div
          :class="['neo-dialog', { 'neo-dialog--center': alignCenter }]"
          :style="dialogStyle"
          role="dialog"
          aria-modal="true"
        >
          <!-- Header -->
          <div v-if="title || showClose || $slots.header" class="neo-dialog__header">
            <slot name="header">
              <span class="neo-dialog__title">{{ title }}</span>
            </slot>
            <button
              v-if="showClose"
              type="button"
              class="neo-dialog__close"
              @click="handleClose"
            >
              ✕
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
/* ==================== Dialog Wrapper ==================== */
.neo-dialog__wrapper {
  position: fixed;
  inset: 0;
  z-index: var(--neo-z-modal);
  display: flex;
  overflow: auto;
}

.neo-dialog__backdrop {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

/* ==================== Dialog ==================== */
.neo-dialog {
  --dialog-bg: var(--neo-bg-primary);
  --dialog-border: var(--neo-border-color);
  
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: var(--dialog-bg);
  border: var(--neo-border-width) solid var(--dialog-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-lg);
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
}

.neo-dialog--center {
  margin: auto;
}

/* ==================== Dialog Header ==================== */
.neo-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--neo-spacing-md);
  border-bottom: var(--neo-border-width) solid var(--dialog-border);
}

.neo-dialog__title {
  font-size: var(--neo-font-size-lg);
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-text-primary);
}

.neo-dialog__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: var(--neo-font-size-base);
  color: var(--neo-text-secondary);
  background: transparent;
  border: none;
  border-radius: var(--neo-radius);
  cursor: pointer;
  transition: all var(--neo-transition-fast);
}

.neo-dialog__close:hover {
  color: var(--neo-text-primary);
  background-color: var(--neo-gray-100);
}

/* ==================== Dialog Body ==================== */
.neo-dialog__body {
  flex: 1;
  padding: var(--neo-spacing-md);
  overflow: auto;
  color: var(--neo-text-primary);
}

/* ==================== Dialog Footer ==================== */
.neo-dialog__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--neo-spacing-sm);
  padding: var(--neo-spacing-md);
  border-top: var(--neo-border-width) solid var(--dialog-border);
}

/* ==================== Dialog Transitions ==================== */
.neo-dialog-enter-active,
.neo-dialog-leave-active {
  transition: opacity var(--neo-transition-base);
}

.neo-dialog-enter-active .neo-dialog,
.neo-dialog-leave-active .neo-dialog {
  transition: transform var(--neo-transition-base), opacity var(--neo-transition-base);
}

.neo-dialog-enter-from,
.neo-dialog-leave-to {
  opacity: 0;
}

.neo-dialog-enter-from .neo-dialog,
.neo-dialog-leave-to .neo-dialog {
  transform: scale(0.95);
  opacity: 0;
}
</style>
