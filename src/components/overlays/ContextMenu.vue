<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export interface ContextMenuOption {
  label?: string
  action?: () => void
  disabled?: boolean
  divider?: boolean
}

const props = withDefaults(defineProps<{
  options?: ContextMenuOption[]
}>(), {
  options: () => []
})

const visible = ref(false)
const position = ref({ x: 0, y: 0 })
const menuRef = ref<HTMLElement | null>(null)

const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
  
  let x = e.clientX
  let y = e.clientY
  
  if (window.innerWidth - x < 240) x = window.innerWidth - 240
  if (window.innerHeight - y < 300) y = window.innerHeight - 300

  position.value = { x, y }
  visible.value = true
}

const handleClickOutside = (e: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(e.target as Node)) {
    visible.value = false
  }
}

const handleAction = (option: ContextMenuOption) => {
  if (option.disabled || option.divider) return
  if (option.action) option.action()
  visible.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="neo-context-menu-wrapper" @contextmenu="handleContextMenu">
    <slot />
    
    <Teleport to="body">
      <Transition name="neo-popover-bounce">
        <div 
          v-if="visible" 
          ref="menuRef"
          class="neo-context-menu" 
          :style="{ top: `${position.y}px`, left: `${position.x}px` }"
        >
          <template v-for="(opt, idx) in options" :key="idx">
            <div v-if="opt.divider" class="neo-context-menu__divider" />
            <div 
              v-else 
              class="neo-context-menu__item" 
              :class="{ 'is-disabled': opt.disabled }"
              @click="handleAction(opt)"
            >
              {{ opt.label }}
            </div>
          </template>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.neo-context-menu-wrapper {
  display: inline-block;
  width: 100%;
}

.neo-context-menu {
  position: fixed;
  z-index: 9999;
  min-width: 200px;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0px var(--neo-black);
  padding: 0.5rem 0;
}

.neo-context-menu__item {
  padding: 0.75rem 1rem;
  font-family: var(--neo-font-family);
  font-weight: var(--neo-font-weight-bold);
  font-size: 0.875rem;
  color: var(--neo-black);
  cursor: pointer;
  transition: background-color 0.2s;
}

.neo-context-menu__item:hover:not(.is-disabled) {
  background-color: var(--neo-main);
}

.neo-context-menu__item.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-context-menu__divider {
  height: 2px;
  background-color: var(--neo-black);
  margin: 0.5rem 0;
}

/* Transitions */
.neo-popover-bounce-enter-active,
.neo-popover-bounce-leave-active {
  transition: opacity 0.2s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.neo-popover-bounce-enter-from,
.neo-popover-bounce-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
