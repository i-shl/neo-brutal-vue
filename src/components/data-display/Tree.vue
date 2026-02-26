<script setup lang="ts">
import { ref, watch } from 'vue'
import NeoTree from './Tree.vue'

interface TreeData {
  id: string | number
  label: string
  children?: TreeData[]
  expanded?: boolean
}

const props = withDefaults(defineProps<{
  data: TreeData[]
  showLine?: boolean
  selectable?: boolean
  // Internal props for recursion
  expandedKeys?: Set<string | number>
  selectedKey?: string | number | null
}>(), {
  showLine: true,
  selectable: true,
  expandedKeys: () => new Set<string | number>(),
  selectedKey: null
})

const emit = defineEmits(['node-click', 'node-expand', 'update:selectedKey'])

// Local reference tracker if not provided (though in recursion it is provided)
const internalExpandedKeys = ref<Set<string | number>>(props.expandedKeys)
const internalSelectedKey = ref<string | number | null>(props.selectedKey)

watch(() => props.selectedKey, (val) => {
  internalSelectedKey.value = val
})

const toggleExpand = (id: string | number) => {
  if (internalExpandedKeys.value.has(id)) {
    internalExpandedKeys.value.delete(id)
  } else {
    internalExpandedKeys.value.add(id)
  }
  emit('node-expand', id)
}

const handleNodeClick = (node: TreeData) => {
  if (props.selectable) {
    internalSelectedKey.value = node.id
    emit('update:selectedKey', node.id)
  }
  emit('node-click', node)
}
</script>

<template>
  <div class="neo-tree" :class="{ 'has-line': showLine }">
    <div v-for="node in data" :key="node.id" class="neo-tree-node">
      <div 
        class="neo-tree-node__content" 
        :class="{ 'is-selected': selectable && internalSelectedKey === node.id }"
        @click="handleNodeClick(node)"
      >
        <!-- Custom Expand Icon -->
        <button 
          v-if="node.children && node.children.length > 0" 
          class="neo-tree-node__expand-btn"
          :class="{ 'is-expanded': internalExpandedKeys.has(node.id) }"
          @click.stop="toggleExpand(node.id)"
        >
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" stroke="currentColor" stroke-width="2" d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
          </svg>
        </button>
        <span v-else class="neo-tree-node__dot"></span>
        
        <span class="neo-tree-node__label">{{ node.label }}</span>
      </div>
      
      <Transition name="neo-tree-slide">
        <div 
          v-if="node.children && node.children.length > 0 && internalExpandedKeys.has(node.id)" 
          class="neo-tree-node__children"
        >
          <NeoTree 
            :data="node.children" 
            :show-line="showLine" 
            :selectable="selectable" 
            :expanded-keys="internalExpandedKeys"
            :selected-key="internalSelectedKey"
            @update:selected-key="val => { internalSelectedKey = val; emit('update:selectedKey', val) }"
            @node-click="emit('node-click', $event)" 
            @node-expand="emit('node-expand', $event)"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.neo-tree {
  font-family: var(--neo-font-family);
  width: 100%;
}

.neo-tree-node {
  position: relative;
}

.neo-tree-node__content {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin: 0.4rem 0;
  cursor: pointer;
  border: var(--neo-border-thick);
  background-color: var(--neo-white);
  transition: var(--neo-transition);
  font-weight: var(--neo-font-weight-black);
  position: relative;
  z-index: 1;
  box-shadow: 2px 2px 0 var(--neo-black);
}

.neo-tree-node__content:hover {
  background-color: var(--neo-gray-50);
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 var(--neo-black);
}

.neo-tree-node__content.is-selected {
  background-color: var(--neo-main);
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--neo-black);
}

.neo-tree-node__expand-btn {
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border: var(--neo-border);
  background-color: var(--neo-white);
  color: var(--neo-black);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  flex-shrink: 0;
  cursor: pointer;
  padding: 0;
  box-shadow: 1px 1px 0 var(--neo-black);
}

.neo-tree-node__expand-btn:hover {
  background-color: var(--neo-black);
  color: var(--neo-white);
}

.neo-tree-node__expand-btn.is-expanded {
  transform: rotate(90deg);
  background-color: var(--neo-black);
  color: var(--neo-main);
}

.neo-tree-node__dot {
  width: 0.75rem;
  height: 0.75rem;
  background-color: var(--neo-black);
  margin-right: 1.75rem;
  margin-left: 0.375rem;
  flex-shrink: 0;
}

.neo-tree-node__label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.neo-tree-node__children {
  padding-left: 1.75rem;
  margin-left: 0.875rem;
  position: relative;
}

.has-line > .neo-tree-node > .neo-tree-node__children {
  border-left: var(--neo-border-thick);
}

/* Slide Transition */
.neo-tree-slide-enter-active,
.neo-tree-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 2000px;
  overflow: hidden;
}

.neo-tree-slide-enter-from,
.neo-tree-slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>
