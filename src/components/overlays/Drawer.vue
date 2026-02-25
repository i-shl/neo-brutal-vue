<script setup lang="ts">
import { computed } from 'vue'
import type { DrawerProps, DrawerEmits } from '@/types'

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
  direction: 'rtl',
  size: '30%',
  modal: true,
  closeOnClickModal: true,
  showClose: true,
  withHeader: true
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
</script>

<template>
  <Teleport to="body">
    <Transition name="neo-drawer-fade">
      <div v-if="modelValue" class="neo-drawer-mask" @click.self="closeOnClickModal && handleClose()">
        <Transition :name="`neo-drawer-slide-${direction}`">
          <div v-if="modelValue" :class="['neo-drawer', `neo-drawer--${direction}`]" :style="drawerStyle">
            <header v-if="withHeader" class="neo-drawer__header">
              <slot name="header">
                <span class="neo-drawer__title">{{ title }}</span>
              </slot>
              <button v-if="showClose" class="neo-drawer__close" @click="handleClose">✕</button>
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
  background: rgba(0, 0, 0, 0.5);
  z-index: var(--neo-z-modal);
  display: flex;
}

.neo-drawer {
  position: absolute;
  background: white;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  box-shadow: none; /* No shadow on drawer usually, or very large one */
}

.neo-drawer--rtl { right: 0; top: 0; bottom: 0; border-left: 4px solid black; }
.neo-drawer--ltr { left: 0; top: 0; bottom: 0; border-right: 4px solid black; }
.neo-drawer--ttb { top: 0; left: 0; right: 0; border-bottom: 4px solid black; }
.neo-drawer--btt { bottom: 0; left: 0; right: 0; border-top: 4px solid black; }

.neo-drawer__header {
  padding: 1.5rem;
  border-bottom: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--neo-yellow);
}

.neo-drawer__title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.25rem;
}

.neo-drawer__close {
  background: black;
  color: white;
  border: 2px solid black;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
}

.neo-drawer__body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.neo-drawer__footer {
  padding: 1.5rem;
  border-top: 3px solid black;
}

/* Transitions */
.neo-drawer-fade-enter-active, .neo-drawer-fade-leave-active { transition: opacity 0.3s; }
.neo-drawer-fade-enter-from, .neo-drawer-fade-leave-to { opacity: 0; }

.neo-drawer-slide-rtl-enter-active, .neo-drawer-slide-rtl-leave-active { transition: transform 0.3s; }
.neo-drawer-slide-rtl-enter-from, .neo-drawer-slide-rtl-leave-to { transform: translateX(100%); }

.neo-drawer-slide-ltr-enter-active, .neo-drawer-slide-ltr-leave-active { transition: transform 0.3s; }
.neo-drawer-slide-ltr-enter-from, .neo-drawer-slide-ltr-leave-to { transform: translateX(-100%); }
</style>
