<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { CascaderProps, CascaderEmits, CascaderOption } from '@/types'

const props = withDefaults(defineProps<CascaderProps>(), {
  placeholder: '请选择',
  disabled: false,
  clearable: true,
  size: 'md'
})

const emit = defineEmits<CascaderEmits>()

const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const activePaths = ref<CascaderOption[][]>([])

const displayValue = computed(() => {
  if (props.modelValue.length === 0) return ''
  
  const labels: string[] = []
  let currentOptions = props.options
  
  for (const val of props.modelValue) {
    const opt = currentOptions.find(o => o.value === val)
    if (opt) {
      labels.push(opt.label)
      currentOptions = opt.children || []
    }
  }
  
  return labels.join(' / ')
})

const panels = computed(() => {
  const result: CascaderOption[][] = [props.options]
  activePaths.value.forEach(pathItem => {
    const lastItem = pathItem[pathItem.length - 1]
    if (lastItem && lastItem.children) {
      result.push(lastItem.children)
    }
  })
  
  // 动态构建显示面板
  const currentPanels: CascaderOption[][] = [props.options]
  let currentLevelOptions = props.options
  
  for (let i = 0; i < props.modelValue.length; i++) {
    const selectedVal = props.modelValue[i]
    const selectedOpt = currentLevelOptions.find(o => o.value === selectedVal)
    if (selectedOpt && selectedOpt.children) {
      currentPanels.push(selectedOpt.children)
      currentLevelOptions = selectedOpt.children
    } else {
      break
    }
  }
  return currentPanels
})

const toggleDropdown = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

const selectOption = (option: CascaderOption, level: number) => {
  if (option.disabled) return
  
  const newValue = props.modelValue.slice(0, level)
  newValue.push(option.value)
  
  emit('update:modelValue', newValue)
  emit('change', newValue)
  
  if (!option.children) {
    isOpen.value = false
  }
}

const handleClickOutside = (e: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="neo-cascader" ref="containerRef" :class="[`neo-cascader--${size}`, { 'is-disabled': disabled }]">
    <div class="neo-cascader-input neo-interactive" @click="toggleDropdown">
      <span v-if="!displayValue" class="neo-cascader-placeholder">{{ placeholder }}</span>
      <span v-else class="neo-cascader-value">{{ displayValue }}</span>
    </div>

    <div v-if="isOpen" class="neo-cascader-dropdown">
      <div class="neo-cascader-menus">
        <div v-for="(panelOptions, level) in panels" :key="level" class="neo-cascader-menu">
          <div v-for="option in panelOptions" 
               :key="option.value"
               class="neo-cascader-item"
               :class="{ 
                 'is-active': modelValue[level] === option.value,
                 'is-disabled': option.disabled 
               }"
               @click="selectOption(option, level)">
            <span class="neo-cascader-label">{{ option.label }}</span>
            <span v-if="option.children" class="neo-cascader-arrow">→</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-cascader {
  position: relative;
  width: 100%;
}

.neo-cascader-input {
  height: 2.75rem;
  padding: 0 var(--neo-spacing-md);
  display: flex;
  align-items: center;
  background: var(--neo-white);
  border: var(--neo-border-thick);
  border-radius: var(--neo-radius-sm);
  box-shadow: var(--neo-shadow);
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.neo-cascader-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: var(--neo-z-dropdown);
  display: flex;
  align-items: flex-start;
  gap: 0;
}

.neo-cascader-menus {
  display: flex;
  align-items: flex-start;
}

.neo-cascader-menu {
  min-width: 160px;
  background: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: var(--neo-shadow);
  margin-right: 4px;
  display: block; /* 确保使用标准块级布局，避免 flex 导致的微小高度差异 */
}

.neo-cascader-menu:last-child {
  margin-right: 0;
}

.neo-cascader-item {
  padding: 0 var(--neo-spacing-md);
  height: 40px;
  line-height: 40px;
  min-height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--neo-font-weight-bold);
  transition: all 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.neo-cascader-item:hover:not(.is-disabled) {
  background: var(--neo-gray-100);
}

.neo-cascader-item.is-active {
  background: var(--neo-main);
  color: var(--neo-black);
}

.neo-cascader-item.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-cascader-arrow {
  margin-left: auto;
  font-size: 1.2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.is-disabled .neo-cascader-input {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
