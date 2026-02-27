<script setup lang="ts">
import { computed, watch } from 'vue'
import type { DrawerProps, DrawerEmits } from '@/types'

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
  type: 'default',
  direction: 'rtl',
  size: '30%',
  modal: true,
  closeOnClickModal: true,
  showClose: true,
  withHeader: true,
})

const emit = defineEmits<DrawerEmits>()

const drawerStyle = computed(() => {
  const size = typeof props.size === 'number' ? props.size + 'px' : props.size
  if (props.direction === 'rtl' || props.direction === 'ltr') {
    return { width: size }
  }
  return { height: size }
})

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

// Lock body scroll when drawer is open
watch(() => props.modelValue, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}, { immediate: true })
</script>

<template>
  <Teleport to="body">
    <Transition name="neo-drawer-fade">
      <div v-if="modelValue" class="neo-drawer-mask" @click.self="closeOnClickModal && handleClose()">
        <Transition :name="`neo-drawer-slide-${direction}`">
          <div
            v-if="modelValue"
            :class="['neo-drawer', `neo-drawer--${direction}`, `neo-drawer--${type}`]"
            :style="drawerStyle"
          >
            <header v-if="withHeader" class="neo-drawer__header">
              <slot name="header">
                <span class="neo-drawer__title">{{ title }}</span>
              </slot>
              <button 
                v-if="showClose" 
                class="neo-drawer__close-btn" 
                title="Close"
                @click="handleClose"
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </header>
            <div class="neo-drawer__body">
              <slot />
            </div>
            <div v-if="$slots.footer" class="neo-drawer__footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.neo-drawer-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: var(--neo-z-backdrop);
}

.neo-drawer {
  position: fixed;
  background-color: var(--neo-white);
  display: flex;
  flex-direction: column;
  z-index: var(--neo-z-modal);
  border: var(--neo-border-thick);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- Directional Anchoring & Shadows --- */
.neo-drawer--rtl { 
  top: 0; right: 0; bottom: 0; 
  box-shadow: -10px 0px 0px 0px var(--neo-black);
}
.neo-drawer--ltr { 
  top: 0; left: 0; bottom: 0; 
  box-shadow: 10px 0px 0px 0px var(--neo-black);
}
.neo-drawer--ttb { 
  top: 0; left: 0; right: 0; 
  box-shadow: 0px 10px 0px 0px var(--neo-black);
}
.neo-drawer--btt { 
  bottom: 0; left: 0; right: 0; 
  box-shadow: 0px -10px 0px 0px var(--neo-black);
}

.neo-drawer__header {
  padding: 1.25rem 1.5rem;
  border-bottom: var(--neo-border-thick);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--neo-drawer-header-bg);
  color: var(--neo-drawer-header-color);
}

/* Type variants - header color */
.neo-drawer--default {
  --neo-drawer-header-bg: var(--neo-main);
  --neo-drawer-header-color: var(--neo-black);
}
.neo-drawer--primary {
  --neo-drawer-header-bg: var(--neo-primary);
  --neo-drawer-header-color: var(--neo-white);
}
.neo-drawer--success {
  --neo-drawer-header-bg: var(--neo-success);
  --neo-drawer-header-color: var(--neo-black);
}
.neo-drawer--warning {
  --neo-drawer-header-bg: var(--neo-warning);
  --neo-drawer-header-color: var(--neo-black);
}
.neo-drawer--danger {
  --neo-drawer-header-bg: var(--neo-danger);
  --neo-drawer-header-color: var(--neo-white);
}
.neo-drawer--info {
  --neo-drawer-header-bg: var(--neo-info);
  --neo-drawer-header-color: var(--neo-white);
}

.neo-drawer__title {
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
}

.neo-drawer__close-btn {
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

.neo-drawer__close-btn:hover {
  background-color: var(--neo-danger);
  color: var(--neo-white);
  transform: scale(1.1) rotate(90deg);
}

.neo-drawer__body {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  color: var(--neo-black);
  font-weight: var(--neo-font-weight-bold);
  line-height: 1.6;
}

.neo-drawer__footer {
  padding: 1.25rem 1.5rem;
  border-top: var(--neo-border-thick);
  background-color: var(--neo-gray-50);
}

/* --- Transitions --- */
.neo-drawer-fade-enter-active, .neo-drawer-fade-leave-active { transition: opacity 0.3s ease; }
.neo-drawer-fade-enter-from, .neo-drawer-fade-leave-to { opacity: 0; }

.neo-drawer-slide-rtl-enter-from, .neo-drawer-slide-rtl-leave-to { transform: translateX(100%); }
.neo-drawer-slide-ltr-enter-from, .neo-drawer-slide-ltr-leave-to { transform: translateX(-100%); }
.neo-drawer-slide-ttb-enter-from, .neo-drawer-slide-ttb-leave-to { transform: translateY(-100%); }
.neo-drawer-slide-btt-enter-from, .neo-drawer-slide-btt-leave-to { transform: translateY(100%); }

.neo-drawer-slide-rtl-enter-active, .neo-drawer-slide-rtl-leave-active,
.neo-drawer-slide-ltr-enter-active, .neo-drawer-slide-ltr-leave-active,
.neo-drawer-slide-ttb-enter-active, .neo-drawer-slide-ttb-leave-active,
.neo-drawer-slide-btt-enter-active, .neo-drawer-slide-btt-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
