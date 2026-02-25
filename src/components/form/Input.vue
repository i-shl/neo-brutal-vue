<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import type { InputProps, InputEmits } from '@/types'

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  readonly: false,
  clearable: false,
  placeholder: '',
  shape: 'default'
})

const emit = defineEmits<InputEmits>()
const slots = useSlots()

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)
const showPassword = ref(false)

const inputValue = computed(() =>
  String(props.modelValue ?? ''),
)

const inputType = computed(() => {
  if (props.type === 'password' && showPassword.value) {
    return 'text'
  }
  return props.type
})

const inputClass = computed(() => {
  const classes: string[] = [
    'neo-input',
    `neo-input--${props.size}`,
  ]
  
  if (props.disabled) classes.push('neo-input--disabled')
  if (isFocused.value) classes.push('neo-input--focused')
  if (props.shape === 'round') classes.push('neo-input--round')
  if (props.shape === 'pill') classes.push('neo-input--pill')
  if (props.prefix || slots.prefix) classes.push('neo-input--prefix')
  if (props.suffix || slots.suffix || props.clearable) classes.push('neo-input--suffix')
  if (props.prepend || slots.prepend) classes.push('neo-input--prepend')
  if (props.append || slots.append) classes.push('neo-input--append')
  
  return classes.join(' ')
})

const wordCount = computed(() => {
  return String(inputValue.value).length
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', target.value)
}

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('change', target.value)
}

const handleFocus = (e: FocusEvent) => {
  isFocused.value = true
  emit('focus', e)
}

const handleBlur = (e: FocusEvent) => {
  isFocused.value = false
  emit('blur', e)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

defineExpose({
  focus,
  blur,
  inputRef
})
</script>

<template>
  <div :class="inputClass">
    <!-- Prepend -->
    <div v-if="prepend || $slots.prepend" class="neo-input__prepend">
      <slot name="prepend">{{ prepend }}</slot>
    </div>
    
    <!-- Prefix -->
    <div v-if="prefix || $slots.prefix" class="neo-input__prefix">
      <slot name="prefix">{{ prefix }}</slot>
    </div>
    
    <!-- Input -->
    <input
      ref="inputRef"
      :type="inputType"
      :class="['neo-input__inner', { 'neo-input__inner--hidden': type === 'password' && showPassword }]"
      :value="inputValue"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    
    <!-- Password Toggle -->
    <button
      v-if="type === 'password'"
      type="button"
      class="neo-input__password-toggle"
      @click="togglePassword"
    >
      {{ showPassword ? '🙈' : '👁️' }}
    </button>
    
    <!-- Suffix -->
    <div v-if="suffix || $slots.suffix || clearable" class="neo-input__suffix">
      <slot name="suffix">
        <span v-if="suffix">{{ suffix }}</span>
        <button
          v-if="clearable && inputValue"
          type="button"
          class="neo-input__clear"
          @click="handleClear"
        >
          ✕
        </button>
      </slot>
    </div>
    
    <!-- Word Limit -->
    <div v-if="showWordLimit && maxlength" class="neo-input__word-count">
      {{ wordCount }}/{{ maxlength }}
    </div>
    
    <!-- Append -->
    <div v-if="append || $slots.append" class="neo-input__append">
      <slot name="append">{{ append }}</slot>
    </div>
  </div>
</template>

<style scoped>
/* ==================== Base Input Styles ==================== */
.neo-input {
  --input-height: var(--neo-input-height-md);
  --input-color: var(--neo-text-primary);
  --input-bg: var(--neo-bg-primary);
  --input-border: var(--neo-border-color);
  --input-border-width: var(--neo-border-width);
  
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: var(--input-height);
  padding: 0 var(--neo-spacing-sm);
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
  background-color: var(--input-bg);
  border: var(--input-border-width) solid var(--input-border);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-sm);
  color: var(--input-color);
  transition: all var(--neo-transition-base) var(--neo-transition-timing);
  position: relative;
}

.neo-input:hover {
  box-shadow: var(--neo-shadow);
}

.neo-input--focused {
  border-color: var(--neo-border-focus);
  box-shadow: var(--neo-shadow);
}

/* NeoBrutalism - No shadow variant */
.neo-input--flat {
  box-shadow: none;
}

.neo-input--flat:hover {
  box-shadow: none;
}

.neo-input--flat.neo-input--focused {
  box-shadow: none;
  border-width: var(--neo-border-width-thick);
}

/* NeoBrutalism - Sharp corners */
.neo-input--sharp {
  border-radius: 0;
}

/* NeoBrutalism - Colored border on focus */
.neo-input--colored.neo-input--focused {
  border-color: var(--neo-primary);
  box-shadow: var(--neo-shadow-primary);
}

/* ==================== Input Sizes ==================== */
.neo-input--xs {
  --input-height: var(--neo-input-height-xs);
  font-size: var(--neo-font-size-xs);
}

.neo-input--sm {
  --input-height: var(--neo-input-height-sm);
  font-size: var(--neo-font-size-xs);
}

.neo-input--md {
  --input-height: var(--neo-input-height-md);
}

.neo-input--lg {
  --input-height: var(--neo-input-height-lg);
  font-size: var(--neo-font-size-base);
}

.neo-input--xl {
  --input-height: var(--neo-input-height-xl);
  font-size: var(--neo-font-size-lg);
  --neo-border-width: 3px;
}

/* ==================== Input Shapes ==================== */
.neo-input--round {
  border-radius: var(--neo-radius-lg);
}

.neo-input--pill {
  border-radius: var(--neo-radius-full);
}

/* ==================== Input Elements ==================== */
.neo-input__inner {
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.neo-input__inner::placeholder {
  color: var(--neo-text-disabled);
}

.neo-input__inner--hidden {
  -webkit-text-security: disc;
}

/* ==================== Input States ==================== */
.neo-input--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--neo-bg-secondary);
}

.neo-input--disabled .neo-input__inner {
  cursor: not-allowed;
}

/* ==================== Prefix / Suffix ==================== */
.neo-input__prefix,
.neo-input__suffix {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: var(--neo-text-tertiary);
}

.neo-input--prefix .neo-input__inner {
  padding-left: var(--neo-spacing-xs);
}

.neo-input--suffix .neo-input__inner {
  padding-right: var(--neo-spacing-xs);
}

/* ==================== Prepend / Append ==================== */
.neo-input__prepend,
.neo-input__append {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 var(--neo-spacing-sm);
  background-color: var(--neo-bg-secondary);
  border: var(--neo-border-width) solid var(--neo-border-color);
  color: var(--neo-text-secondary);
  font-size: inherit;
}

.neo-input__prepend {
  border-right: none;
  border-radius: var(--neo-radius) 0 0 var(--neo-radius);
}

.neo-input__append {
  border-left: none;
  border-radius: 0 var(--neo-radius) var(--neo-radius) 0;
}

.neo-input--prepend {
  border-radius: 0;
}

.neo-input--prepend .neo-input__inner {
  border-radius: 0 var(--neo-radius) var(--neo-radius) 0;
}

.neo-input--append .neo-input__inner {
  border-radius: var(--neo-radius) 0 0 var(--neo-radius);
}

/* ==================== Clear & Password Toggle ==================== */
.neo-input__clear,
.neo-input__password-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--neo-spacing-xs);
  margin-left: var(--neo-spacing-xs);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-tertiary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color var(--neo-transition-fast);
}

.neo-input__clear:hover,
.neo-input__password-toggle:hover {
  color: var(--neo-text-primary);
}

/* ==================== Word Count ==================== */
.neo-input__word-count {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding-left: var(--neo-spacing-sm);
  font-size: var(--neo-font-size-xs);
  color: var(--neo-text-disabled);
}
</style>
