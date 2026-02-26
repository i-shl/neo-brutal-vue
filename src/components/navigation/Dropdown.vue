<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    visible?: boolean
    trigger?: 'hover' | 'click'
    placement?: 'bottom' | 'top' | 'left' | 'right'
    disabled?: boolean
  }>(),
  { trigger: 'click', placement: 'bottom' },
)

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'visible-change', value: boolean): void
}>()

const isOpen = ref(props.visible ?? false)
const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)

const toggle = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  emit('update:visible', isOpen.value)
  emit('visible-change', isOpen.value)
}

const close = (e: MouseEvent) => {
  if (
    menuRef.value &&
    !menuRef.value.contains(e.target as Node) &&
    triggerRef.value &&
    !triggerRef.value.contains(e.target as Node)
  ) {
    isOpen.value = false
    emit('update:visible', false)
    emit('visible-change', false)
  }
}

const handleClick = () => {
  if (props.trigger === 'click') toggle()
}

const handleMouseEnter = () => {
  if (props.trigger === 'hover' && !props.disabled) {
    isOpen.value = true
    emit('update:visible', true)
    emit('visible-change', true)
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    isOpen.value = false
    emit('update:visible', false)
    emit('visible-change', false)
  }
}

onMounted(() => {
  if (props.trigger === 'click') {
    document.addEventListener('click', close)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', close)
})
</script>

<template>
  <div
    class="neo-dropdown"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="triggerRef"
      class="neo-dropdown__trigger"
      :class="{ 'is-disabled': disabled }"
      @click="handleClick"
    >
      <slot />
    </div>
    
    <Transition name="neo-dropdown-bounce">
      <div
        v-if="isOpen"
        ref="menuRef"
        :class="['neo-dropdown__menu', `neo-dropdown__menu--${placement}`]"
        @click="isOpen = false; emit('update:visible', false); emit('visible-change', false)"
      >
        <slot name="dropdown" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-dropdown {
  position: relative;
  display: inline-block;
  font-family: var(--neo-font-family);
}

.neo-dropdown__trigger {
  cursor: pointer;
}

.neo-dropdown__trigger.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

.neo-dropdown__menu {
  position: absolute;
  z-index: var(--neo-z-dropdown, 1000);
  padding: 0.5rem;
  min-width: 160px;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0px var(--neo-black);
  transition: var(--neo-transition);
}

.neo-dropdown__menu--bottom {
  top: 100%;
  left: 0;
  margin-top: 0.75rem;
}

.neo-dropdown__menu--top {
  bottom: 100%;
  left: 0;
  margin-bottom: 0.75rem;
}

.neo-dropdown__menu--left {
  right: 100%;
  top: 0;
  margin-right: 0.75rem;
}

.neo-dropdown__menu--right {
  left: 100%;
  top: 0;
  margin-left: 0.75rem;
}

/* Transitions */
.neo-dropdown-bounce-enter-active,
.neo-dropdown-bounce-leave-active {
  transition: opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.neo-dropdown-bounce-enter-from,
.neo-dropdown-bounce-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.neo-dropdown__menu--top.neo-dropdown-bounce-enter-from,
.neo-dropdown__menu--top.neo-dropdown-bounce-leave-to {
  transform: translateY(8px) scale(0.95);
}

.neo-dropdown__menu--left.neo-dropdown-bounce-enter-from,
.neo-dropdown__menu--left.neo-dropdown-bounce-leave-to {
  transform: translateX(8px) scale(0.95);
}

.neo-dropdown__menu--right.neo-dropdown-bounce-enter-from,
.neo-dropdown__menu--right.neo-dropdown-bounce-leave-to {
  transform: translateX(-8px) scale(0.95);
}
</style>
