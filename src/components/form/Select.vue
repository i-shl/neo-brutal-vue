<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SelectProps } from '@/types'

const props = withDefaults(defineProps<SelectProps>(), {
  size: 'md',
  disabled: false,
  clearable: false,
  noDataText: '暂无数据',
  noMatchText: '无匹配数据'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
  (e: 'clear'): void
}>()

const isOpen = ref(false)
const searchValue = ref('')
const selectedOption = computed(() => {
  if (props.multiple) {
    return props.options?.filter(opt => 
      Array.isArray(props.modelValue) && props.modelValue.includes(opt.value)
    ) || []
  }
  return props.options?.find(opt => opt.value === props.modelValue)
})

const filteredOptions = computed(() => {
  if (!props.filterable) return props.options
  return props.options?.filter(opt => 
    opt.label.toLowerCase().includes(searchValue.value.toLowerCase())
  ) || []
})

const selectClass = computed(() => {
  const classes = [
    'neo-select',
    `neo-select--${props.size}`,
  ]
  
  if (isOpen.value) classes.push('neo-select--open')
  if (props.disabled) classes.push('neo-select--disabled')
  
  return classes.join(' ')
})

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const selectOption = (option: any) => {
  if (option.disabled) return
  
  if (props.multiple) {
    const newValue = [...(Array.isArray(props.modelValue) ? props.modelValue : [])]
    const index = newValue.indexOf(option.value)
    if (index === -1) {
      newValue.push(option.value)
    } else {
      newValue.splice(index, 1)
    }
    emit('update:modelValue', newValue)
    emit('change', newValue)
  } else {
    emit('update:modelValue', option.value)
    emit('change', option.value)
    isOpen.value = false
  }
}

const handleClear = (e: Event) => {
  e.stopPropagation()
  emit('update:modelValue', props.multiple ? [] : '')
  emit('clear')
  isOpen.value = false
}
</script>

<template>
  <div :class="selectClass">
    <div class="neo-select__trigger" @click="toggleDropdown">
      <!-- Selected display -->
      <div class="neo-select__display">
        <slot name="selected">
          <span v-if="multiple" class="neo-select__multiple">
            <span v-for="item in selectedOption" :key="item.value" class="neo-select__tag">
              {{ item.label }}
            </span>
          </span>
          <span v-else class="neo-select__single">
            {{ selectedOption?.label || placeholder }}
          </span>
        </slot>
      </div>
      
      <!-- Clear button -->
      <button
        v-if="clearable && selectedOption"
        type="button"
        class="neo-select__clear"
        @click="handleClear"
      >
        ✕
      </button>
      
      <!-- Arrow -->
      <span class="neo-select__arrow">▼</span>
    </div>
    
    <!-- Dropdown -->
    <div v-if="isOpen" class="neo-select__dropdown">
      <!-- Search -->
      <input
        v-if="filterable"
        v-model="searchValue"
        type="text"
        class="neo-select__search"
        :placeholder="$t('请搜索')"
      />
      
      <!-- Options -->
      <div class="neo-select__options">
        <div v-if="filteredOptions.length === 0" class="neo-select__empty">
          {{ searchValue ? noMatchText : noDataText }}
        </div>
        <div
          v-for="option in filteredOptions"
          :key="option.value"
          :class="['neo-select__option', {
            'neo-select__option--selected': multiple
              ? Array.isArray(modelValue) && modelValue.includes(option.value)
              : modelValue === option.value,
            'neo-select__option--disabled': option.disabled
          }]"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-select {
  display: inline-flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.neo-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: var(--neo-input-height-md);
  padding: 0 var(--neo-spacing-sm);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-primary);
  background-color: var(--neo-input-bg);
  border: var(--neo-input-border-width) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
  box-shadow: var(-- neo-shadow-sm);
  transition: all var(--neo-transition-base);
  cursor: default;
}

.neo-select__trigger:hover {
  box-shadow: var(--nio-shadow);
}

.neo-select--open .neo-select__trigger {
  border-color: var(--neo-border-focus);
}

.neo-select__display {
  flex: 1;
  min-width: 0;
}

.neo-select__multiple {
  display: flex;
  flex-wrap: wrap;
  gap: var(--neo-spacing-xs);
}

.neo-select__tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  font-size: var(--neo-font-size-xs);
  color: var(--neo-primary);
  background-color: var(--neo-primary-light);
  border-radius: var(--neo-radius);
}

.neo-select__single {
  color: var(--neo-text-primary);
}

.neo-select__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: var(--neo-spacing-xs);
  font-size: 10px;
  color: var(--neo-text-tertiary);
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.neo-select__clear:hover {
  color: var(--neo-text-primary);
}

.neo-select__arrow {
  margin-left: var(--neo-spacing-xs);
  font-size: 12px;
  color: var(--neo-text-tertiary);
  transition: transform var(--neo-transition-base);
}

.neo-select--open .neo-select__arrow {
  transform: rotate(180deg);
}

.neo-select__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: var(--neo-z-dropdown);
  margin-top: 2px;
  background-color: var(--neo-bg-primary);
  border: var(--neo-border-width) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow);
  overflow: hidden;
}

.neo-select__search {
  width: 100%;
  padding: var(--neo-spacing-sm);
  font-size: var(--neo-font-size-sm);
  border: none;
  border-bottom: var(--neo-border-width-thin) solid var(--neo-border-light);
  outline: none;
}

.neo-select__options {
  max-height: 200px;
  overflow-y: auto;
}

.neo-select__option {
  padding: var(--neo-spacing-sm);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-primary);
  cursor: pointer;
  transition: all var(--neo-transition-base);
}

.neo-select__option:hover {
  background-color: var(--neo-gray-100);
}

.neo-select__option--selected {
  background-color: var(--neo-primary-light);
  color: var(--neo-primary);
}

.neo-select__option--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-select__empty {
  padding: var(--neo-spacing-md);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-tertiary);
  text-align: center;
}

.neo-select__disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>