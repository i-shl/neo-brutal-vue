<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
  placeholder?: string
  groups: { name: string, items: { id: string, label: string, icon?: string, shortcut?: string }[] }[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'select', item: any): void
}>()

const searchQuery = ref('')
const selectedIndex = ref(0)

const toggleVisible = () => {
  emit('update:modelValue', !props.modelValue)
}

const handleSelect = (item: any) => {
  emit('select', item)
  emit('update:modelValue', false)
}

// Flatten items for keyboard navigation
const allItems = props.groups.flatMap(g => g.items)

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') toggleVisible()
  // Add arrow key navigation, etc.
}
</script>

<template>
  <Teleport to="body">
    <Transition name="neo-cmd-fade">
      <div v-if="modelValue" class="neo-cmd-mask" @click.self="toggleVisible">
        <div class="neo-cmd-panel">
          <div class="neo-cmd-search">
            <span class="neo-cmd-search-icon">🔍</span>
            <input 
              v-model="searchQuery" 
              type="text" 
              :placeholder="placeholder || 'Type a command or search...'"
              autofocus
              @keydown="handleKeydown"
            >
            <span class="neo-cmd-esc">ESC</span>
          </div>
          
          <div class="neo-cmd-body">
            <div v-for="group in groups" :key="group.name" class="neo-cmd-group">
              <div class="neo-cmd-group-title">{{ group.name }}</div>
              <div 
                v-for="item in group.items" 
                :key="item.id" 
                class="neo-cmd-item"
                @click="handleSelect(item)"
              >
                <span v-if="item.icon" class="neo-cmd-item-icon">{{ item.icon }}</span>
                <span class="neo-cmd-item-label">{{ item.label }}</span>
                <span v-if="item.shortcut" class="neo-cmd-item-shortcut">{{ item.shortcut }}</span>
              </div>
            </div>
          </div>
          
          <div class="neo-cmd-footer">
            <div class="neo-cmd-footer-item"><span>↵</span> Select</div>
            <div class="neo-cmd-footer-item"><span>↑↓</span> Navigate</div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.neo-cmd-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: var(--neo-z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.neo-cmd-panel {
  width: 100%;
  max-width: 600px;
  background: white;
  border: 4px solid black;
  box-shadow: 12px 12px 0px black;
  display: flex;
  flex-direction: column;
  max-height: 450px;
}

.neo-cmd-search {
  padding: 1.25rem;
  border-bottom: 3px solid black;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--neo-cyan);
}

.neo-cmd-search input {
  flex: 1;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  outline: none;
  font-family: inherit;
  color: black;
}

.neo-cmd-search input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.neo-cmd-esc {
  font-size: 0.7rem;
  font-weight: 900;
  background: black;
  color: white;
  padding: 2px 6px;
  border-radius: 2px;
}

.neo-cmd-body {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.neo-cmd-group-title {
  font-size: 0.7rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
}

.neo-cmd-item {
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border: 2px solid transparent;
  font-weight: 700;
  transition: all 0.1s;
}

.neo-cmd-item:hover {
  background: var(--neo-yellow);
  border-color: black;
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px 0px black;
}

.neo-cmd-item-label {
  flex: 1;
}

.neo-cmd-item-shortcut {
  font-size: 0.7rem;
  background: #eee;
  padding: 2px 4px;
  border: 1px solid black;
}

.neo-cmd-footer {
  padding: 0.75rem;
  border-top: 3px solid black;
  background: #f9f9f9;
  display: flex;
  gap: 1.5rem;
  font-size: 0.75rem;
  font-weight: 800;
}

.neo-cmd-footer-item span {
  background: #eee;
  padding: 1px 4px;
  border: 1px solid black;
  margin-right: 4px;
}

/* Transition */
.neo-cmd-fade-enter-active, .neo-cmd-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.neo-cmd-fade-enter-from, .neo-cmd-fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
}
</style>
