<script setup lang="ts">
import { ref } from 'vue'

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
}>(), {
  showLine: true,
  selectable: true
})

const emit = defineEmits(['node-click', 'node-expand'])

const expandedKeys = ref<Set<string | number>>(new Set())

const toggleExpand = (id: string | number) => {
  if (expandedKeys.value.has(id)) {
    expandedKeys.value.delete(id)
  } else {
    expandedKeys.value.add(id)
  }
}

const handleNodeClick = (node: TreeData) => {
  emit('node-click', node)
}
</script>

<template>
  <div class="neo-tree">
    <div v-for="node in data" :key="node.id" class="neo-tree-node">
      <div 
        class="neo-tree-node__content" 
        @click="handleNodeClick(node)"
      >
        <span 
          v-if="node.children && node.children.length > 0" 
          class="neo-tree-node__expand-icon"
          :class="{ 'is-expanded': expandedKeys.has(node.id) }"
          @click.stop="toggleExpand(node.id)"
        >
          ▶
        </span>
        <span v-else class="neo-tree-node__empty-icon"></span>
        <span class="neo-tree-node__label">{{ node.label }}</span>
      </div>
      
      <Transition name="neo-tree-fade">
        <div 
          v-if="node.children && node.children.length > 0 && expandedKeys.has(node.id)" 
          class="neo-tree-node__children"
        >
          <NeoTree :data="node.children" :show-line="showLine" :selectable="selectable" @node-click="emit('node-click', $event)" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.neo-tree {
  font-family: var(--neo-font-family);
}

.neo-tree-node__content {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.1s;
  font-weight: 700;
}

.neo-tree-node__content:hover {
  background: var(--neo-yellow);
  border-color: black;
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0px black;
}

.neo-tree-node__expand-icon {
  margin-right: 0.5rem;
  font-size: 0.8rem;
  transition: transform 0.2s;
  display: inline-block;
}

.neo-tree-node__expand-icon.is-expanded {
  transform: rotate(90deg);
}

.neo-tree-node__empty-icon {
  width: 1.3rem;
}

.neo-tree-node__children {
  padding-left: 1.5rem;
  border-left: 2px dashed black;
  margin-left: 0.75rem;
}

.neo-tree-fade-enter-active, .neo-tree-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.neo-tree-fade-enter-from, .neo-tree-fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
