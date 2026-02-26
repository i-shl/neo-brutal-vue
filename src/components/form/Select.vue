<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { SelectProps, SelectOption } from '@/types'

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
const selectRef = ref<HTMLElement | null>(null)

const selectedOption = computed(() => {
  if (!props.options) return props.multiple ? [] : null
  if (props.multiple) {
    return props.options.filter(opt => 
      Array.isArray(props.modelValue) && (props.modelValue as any[]).includes(opt.value)
    )
  }
  return props.options.find(opt => opt.value === props.modelValue) || null
})

const filteredOptions = computed(() => {
  const options = props.options || []
  if (!props.filterable) return options
  return options.filter(opt => 
    opt.label.toLowerCase().includes(searchValue.value.toLowerCase())
  )
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

const selectOption = (option: SelectOption) => {
  if (option.disabled) return
  if (props.multiple) {
    const newValue = [...(Array.isArray(props.modelValue) ? props.modelValue : [])]
    const index = (newValue as any[]).indexOf(option.value)
    if (index === -1) newValue.push(option.value)
    else newValue.splice(index, 1)
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

const handleClickOutside = (e: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div ref="selectRef" :class="selectClass">
    <div class="neo-select__trigger" @click="toggleDropdown">
      <div class="neo-select__display">
        <slot name="selected">
          <span v-if="multiple" class="neo-select__multiple">
            <template v-if="Array.isArray(selectedOption) && selectedOption.length > 0">
              <span v-for="item in selectedOption" :key="String(item.value)" class="neo-select__tag">
                {{ item.label }}
              </span>
            </template>
            <span v-else class="neo-select__placeholder">
              {{ placeholder }}
            </span>
          </span>
          <span v-else :class="['neo-select__single', { 'neo-select__placeholder': !selectedOption }]">
            {{ selectedOption && !Array.isArray(selectedOption) ? selectedOption.label : placeholder }}
          </span>
        </slot>
      </div>
      
      <button v-if="clearable && selectedOption && (!Array.isArray(selectedOption) || selectedOption.length > 0)" type="button" class="neo-select__clear" @click="handleClear">✕</button>
      <span class="neo-select__arrow">▼</span>
    </div>
    
    <Transition name="neo-select-slide">
      <div v-if="isOpen" class="neo-select__dropdown">
        <div v-if="filterable" class="neo-select__search-wrapper">
          <input v-model="searchValue" type="text" class="neo-select__search" placeholder="Search..." />
        </div>
        
        <div class="neo-select__options">
          <div v-if="filteredOptions.length === 0" class="neo-select__empty">
            {{ searchValue ? noMatchText : noDataText }}
          </div>
          <div
            v-for="option in filteredOptions"
            :key="String(option.value)"
            :class="['neo-select__option', {
              'neo-select__option--selected': multiple
                ? Array.isArray(modelValue) && (modelValue as any[]).includes(option.value)
                : modelValue === option.value,
              'neo-select__option--disabled': option.disabled
            }]"
            @click="selectOption(option)"
          >
            {{ option.label }}
            <span v-if="multiple && Array.isArray(modelValue) && (modelValue as any[]).includes(option.value)" class="neo-select__check">✓</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.neo-select {
  display: inline-flex;
  align-items: center;
  width: 100%;
  position: relative;
  font-family: var(--neo-font-family);
}

.neo-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 3.25rem;
  padding: 0 1.25rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0 var(--neo-black);
  transition: var(--neo-transition);
  cursor: pointer;
}

.neo-select__trigger:hover:not(.neo-select--disabled .neo-select__trigger) {
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0 var(--neo-black);
}

.neo-select--open .neo-select__trigger {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0 var(--neo-black);
  background-color: var(--neo-gray-50);
}

.neo-select__display {
  flex: 1;
  min-width: 0;
}

.neo-select__placeholder {
  color: var(--neo-gray-400);
  font-weight: var(--neo-font-weight-bold);
}

.neo-select__multiple {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.25rem 0;
}

.neo-select__tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  color: var(--neo-black);
  background-color: var(--neo-main);
  border: var(--neo-border);
  box-shadow: 2px 2px 0 var(--neo-black);
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.neo-select__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  color: var(--neo-white);
  background-color: var(--neo-danger);
  border: var(--neo-border);
  box-shadow: 1px 1px 0 var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
}

.neo-select__clear:hover {
  transform: scale(1.1);
  background-color: var(--neo-black);
}

.neo-select__arrow {
  font-size: 0.75rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.neo-select--open .neo-select__arrow {
  transform: rotate(180deg);
}

.neo-select__dropdown {
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 0;
  right: 0;
  z-index: var(--neo-z-dropdown);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 8px 8px 0 var(--neo-black);
  overflow: hidden;
  border-radius: 4px;
}

.neo-select__search-wrapper {
  padding: 1rem;
  border-bottom: var(--neo-border-thick);
  background-color: var(--neo-gray-50);
}

.neo-select__search {
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-bold);
  border: var(--neo-border-thick);
  box-shadow: 3px 3px 0 var(--neo-black);
  outline: none;
  background-color: var(--neo-white);
}

.neo-select__options {
  max-height: 300px;
  overflow-y: auto;
}

.neo-select__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
  border-bottom: var(--neo-border);
}

.neo-select__option:last-child {
  border-bottom: none;
}

.neo-select__option:hover:not(.neo-select__option--disabled) {
  background-color: var(--neo-main);
}

.neo-select__option--selected {
  background-color: var(--neo-info-light);
  color: var(--neo-black);
}

.neo-select__option--disabled {
  opacity: 0.3;
  cursor: not-allowed;
  background-color: var(--neo-gray-50);
}

.neo-select__empty {
  padding: 2rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-gray-400);
  text-align: center;
}

.neo-select--disabled {
  opacity: 0.5;
}

.neo-select--disabled .neo-select__trigger {
  cursor: not-allowed;
  box-shadow: 2px 2px 0 var(--neo-black);
}

/* Transitions */
.neo-select-slide-enter-active, .neo-select-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.neo-select-slide-enter-from, .neo-select-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px) scale(0.98);
}
</style>