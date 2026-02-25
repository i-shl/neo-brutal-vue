<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { ToastProps, ToastEmits } from '@/types'

const props = withDefaults(defineProps<ToastProps>(), {
  type: 'info',
  title: '',
  message: '',
  duration: 3000,
  closable: true,
  position: 'top-right',
  icon: true
})

const emit = defineEmits<ToastEmits>()

const visible = ref(false)

const toastClass = computed(() => {
  const classes: string[] = ['neo-toast', `neo-toast--${props.type}`, `neo-toast--${props.position}`]
  return classes.join(' ')
})

let timer: ReturnType<typeof setTimeout> | null = null

const show = () => {
  visible.value = true
  if (props.duration > 0) {
    timer = setTimeout(() => {
      close()
    }, props.duration)
  }
}

const close = () => {
  visible.value = false
  emit('close')
}

const handleClick = () => {
  if (props.closable) {
    close()
  }
}

onMounted(() => {
  show()
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})

defineExpose({
  show,
  close,
  visible
})
</script>

<template>
  <Teleport to="body">
    <Transition name="neo-toast">
      <div 
        v-if="visible" 
        :class="toastClass"
        @click="handleClick"
      >
        <div v-if="icon" class="neo-toast__icon">
          <svg v-if="type === 'success'" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2.5"/>
          </svg>
          <svg v-else-if="type === 'error'" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 7L13 13M13 7L7 13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2.5"/>
          </svg>
          <svg v-else-if="type === 'warning'" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 6V10M10 14H10.01" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M3 17H17L10 3L3 17Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2.5"/>
            <path d="M10 6V10M10 14H10.01" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="neo-toast__content">
          <div v-if="title || $slots.title" class="neo-toast__title">
            <slot name="title">{{ title }}</slot>
          </div>
          <div class="neo-toast__message">
            <slot>{{ message }}</slot>
          </div>
        </div>
        <button v-if="closable" class="neo-toast__close" @click.stop="close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 4L10 10M10 4L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.neo-toast {
  --toast-bg: var(--neo-bg-primary);
  --toast-border: var(--neo-border-color);
  --toast-text: var(--neo-text-primary);
  --toast-shadow: var(--neo-shadow);
  
  position: fixed;
  display: flex;
  align-items: flex-start;
  gap: var(--neo-spacing-sm);
  min-width: 280px;
  max-width: 400px;
  padding: var(--neo-spacing-md);
  background-color: var(--toast-bg);
  border: var(--neo-border-width) solid var(--toast-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--toast-shadow);
  z-index: var(--neo-z-toast);
  cursor: pointer;
  font-family: var(--neo-font-family);
}

/* Positions */
.neo-toast--top-right {
  top: var(--neo-spacing-lg);
  right: var(--neo-spacing-lg);
}

.neo-toast--top-left {
  top: var(--neo-spacing-lg);
  left: var(--neo-spacing-lg);
}

.neo-toast--bottom-right {
  bottom: var(--neo-spacing-lg);
  right: var(--neo-spacing-lg);
}

.neo-toast--bottom-left {
  bottom: var(--neo-spacing-lg);
  left: var(--neo-spacing-lg);
}

.neo-toast--top-center {
  top: var(--neo-spacing-lg);
  left: 50%;
  transform: translateX(-50%);
}

.neo-toast--bottom-center {
  bottom: var(--neo-spacing-lg);
  left: 50%;
  transform: translateX(-50%);
}

/* Types */
.neo-toast--success {
  --toast-bg: var(--neo-success-light);
  --toast-border: var(--neo-success);
}

.neo-toast--error {
  --toast-bg: var(--neo-danger-light);
  --toast-border: var(--neo-danger);
}

.neo-toast--warning {
  --toast-bg: var(--neo-warning-light);
  --toast-border: var(--neo-warning);
}

.neo-toast--info {
  --toast-bg: var(--neo-info-light);
  --toast-border: var(--neo-info);
}

/* Icon */
.neo-toast__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--toast-border);
}

.neo-toast--success .neo-toast__icon {
  color: var(--neo-success);
}

.neo-toast--error .neo-toast__icon {
  color: var(--neo-danger);
}

.neo-toast--warning .neo-toast__icon {
  color: var(--neo-warning);
}

.neo-toast--info .neo-toast__icon {
  color: var(--neo-info);
}

/* Content */
.neo-toast__content {
  flex: 1;
  min-width: 0;
}

.neo-toast__title {
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-semibold);
  color: var(--toast-text);
  margin-bottom: var(--neo-spacing-xs);
}

.neo-toast__message {
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
  line-height: var(--neo-line-height-normal);
}

/* Close Button */
.neo-toast__close {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--neo-spacing-xs);
  color: var(--neo-text-tertiary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color var(--neo-transition-fast);
}

.neo-toast__close:hover {
  color: var(--neo-text-primary);
}

/* Transitions */
.neo-toast-enter-active,
.neo-toast-leave-active {
  transition: all var(--neo-transition-base) var(--neo-transition-timing);
}

.neo-toast-enter-from,
.neo-toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.neo-toast--top-left.neo-toast-enter-from,
.neo-toast--top-left.neo-toast-leave-to,
.neo-toast--bottom-left.neo-toast-enter-from,
.neo-toast--bottom-left.neo-toast-leave-to {
  transform: translateX(-100%);
}

.neo-toast--top-center.neo-toast-enter-from,
.neo-toast--top-center.neo-toast-leave-to,
.neo-toast--bottom-center.neo-toast-enter-from,
.neo-toast--bottom-center.neo-toast-leave-to {
  transform: translateX(-50%) translateY(-100%);
}
</style>
