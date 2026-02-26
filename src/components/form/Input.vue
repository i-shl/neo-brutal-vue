<script setup lang="ts">
import { computed, ref } from 'vue'
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

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)
const showPassword = ref(false)

const inputValue = computed(() => String(props.modelValue ?? ''))

const inputType = computed(() => {
  if (props.type === 'password' && showPassword.value) return 'text'
  return props.type
})

const inputClass = computed(() => {
  const classes: string[] = ['neo-input', `neo-input--${props.size}`]
  if (props.disabled) classes.push('neo-input--disabled')
  if (isFocused.value) classes.push('neo-input--focused')
  if (props.shape === 'round') classes.push('neo-input--round')
  if (props.shape === 'pill') classes.push('neo-input--pill')
  if (props.prepend || props.append) classes.push('neo-input--with-addons')
  return classes.join(' ')
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', target.value)
}

const handleFocus = (e: FocusEvent) => { isFocused.value = true; emit('focus', e); }
const handleBlur = (e: FocusEvent) => { isFocused.value = false; emit('blur', e); }

const focus = () => inputRef.value?.focus()
const blur = () => inputRef.value?.blur()

defineExpose({ focus, blur, inputRef })
</script>

<template>
  <div :class="inputClass">
    <div v-if="prepend || $slots.prepend" class="neo-input__prepend">
      <slot name="prepend">{{ prepend }}</slot>
    </div>
    
    <div class="neo-input__wrapper">
      <div v-if="prefix || $slots.prefix" class="neo-input__prefix">
        <slot name="prefix">{{ prefix }}</slot>
      </div>
      
      <input
        ref="inputRef"
        :type="inputType"
        class="neo-input__inner"
        :value="inputValue"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <div v-if="type === 'password'" class="neo-input__password-toggle" @click="showPassword = !showPassword">
        {{ showPassword ? '🙈' : '👁️' }}
      </div>

      <div v-if="suffix || $slots.suffix" class="neo-input__suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </div>
    </div>
    
    <div v-if="append || $slots.append" class="neo-input__append">
      <slot name="append">{{ append }}</slot>
    </div>
  </div>
</template>

<style scoped>
.neo-input {
  display: inline-flex;
  width: 100%;
  position: relative;
}

.neo-input__wrapper {
  flex: 1;
  display: inline-flex;
  align-items: center;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  border-radius: var(--neo-radius-sm);
  box-shadow: var(--neo-shadow);
  transition: var(--neo-transition);
  overflow: hidden;
  height: 3rem;
}

.neo-input:hover .neo-input__wrapper {
  transform: translate(-2px, -2px);
  box-shadow: var(--neo-shadow-hover);
}

.neo-input--focused .neo-input__wrapper {
  border-color: var(--neo-main);
  box-shadow: var(--neo-shadow-hover);
}

.neo-input__inner {
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  font-family: var(--neo-font-family);
  font-size: 1rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  background: transparent;
  border: none;
  outline: none;
}

.neo-input__inner::placeholder {
  color: var(--neo-gray-400);
}

.neo-input__prefix, .neo-input__suffix {
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  color: var(--neo-gray-500);
}

.neo-input__password-toggle {
  padding: 0 0.75rem;
  cursor: pointer;
  user-select: none;
}

/* --- Prepend/Append --- */
.neo-input__prepend, .neo-input__append {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: var(--neo-gray-100);
  border: var(--neo-border-thick);
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
}

.neo-input__prepend { border-right: none; border-radius: var(--neo-radius-sm) 0 0 var(--neo-radius-sm); }
.neo-input--prepend .neo-input__wrapper { border-top-left-radius: 0; border-bottom-left-radius: 0; }

.neo-input__append { border-left: none; border-radius: 0 var(--neo-radius-sm) var(--neo-radius-sm) 0; }
.neo-input--append .neo-input__wrapper { border-top-right-radius: 0; border-bottom-right-radius: 0; }

/* --- Sizes --- */
.neo-input--xs .neo-input__wrapper { height: 2rem; font-size: 0.75rem; border-width: 2px; }
.neo-input--sm .neo-input__wrapper { height: 2.25rem; font-size: 0.875rem; }
.neo-input--lg .neo-input__wrapper { height: 3.5rem; font-size: 1.125rem; }
.neo-input--xl .neo-input__wrapper { height: 4rem; font-size: 1.25rem; }

/* --- Shapes --- */
.neo-input--round .neo-input__wrapper { border-radius: var(--neo-radius-lg); }
.neo-input--pill .neo-input__wrapper { border-radius: 999px; }

.neo-input--disabled { opacity: 0.5; cursor: not-allowed; }
.neo-input--disabled .neo-input__inner { cursor: not-allowed; }
</style>
