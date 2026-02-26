<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  length?: number
  disabled?: boolean
}>(), {
  modelValue: '',
  length: 6,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'complete', value: string): void
}>()

const otp = ref<string[]>(Array(props.length).fill(''))
const otpInputs = ref<HTMLInputElement[]>([])

// Populate initial value
watch(() => props.modelValue, (newVal) => {
  if (newVal === otp.value.join('')) return
  const chars = newVal.slice(0, props.length).split('')
  otp.value = [
    ...chars,
    ...Array(props.length - chars.length).fill('')
  ]
}, { immediate: true })

const updateValue = () => {
  const val = otp.value.join('')
  emit('update:modelValue', val)
  if (val.length === props.length && !otp.value.includes('')) {
    emit('complete', val)
  }
}

const onInput = (e: Event, index: number) => {
  const target = e.target as HTMLInputElement
  let val = target.value

  // Handle pasting multiple chars securely
  if (val.length > 1) {
    const chars = val.slice(0, props.length - index).split('')
    for (let i = 0; i < chars.length; i++) {
      if (index + i < props.length) {
        otp.value[index + i] = chars[i]
      }
    }
    updateValue()
    
    // Focus next appropriate input
    const nextIndex = Math.min(index + chars.length, props.length - 1)
    otpInputs.value[nextIndex]?.focus()
    return
  }

  // Handle single char
  otp.value[index] = val
  updateValue()
  
  if (val !== '' && index < props.length - 1) {
    otpInputs.value[index + 1]?.focus()
  }
}

const onKeydown = (e: KeyboardEvent, index: number) => {
  if (e.key === 'Backspace') {
    if (otp.value[index] === '' && index > 0) {
      otp.value[index - 1] = ''
      otpInputs.value[index - 1]?.focus()
      updateValue()
    } else {
      otp.value[index] = ''
      updateValue()
    }
  } else if (e.key === 'ArrowLeft' && index > 0) {
    otpInputs.value[index - 1]?.focus()
  } else if (e.key === 'ArrowRight' && index < props.length - 1) {
    otpInputs.value[index + 1]?.focus()
  }
}

const setInputRef = (el: any, index: number) => {
  if (el) {
    otpInputs.value[index] = el
  }
}
</script>

<template>
  <div class="neo-input-otp" :class="{ 'is-disabled': disabled }">
    <input
      v-for="(digit, index) in length"
      :key="index"
      :ref="(el) => setInputRef(el, index)"
      type="text"
      inputmode="numeric"
      maxlength="2"
      :value="otp[index]"
      :disabled="disabled"
      class="neo-input-otp__field"
      @input="onInput($event, index)"
      @keydown="onKeydown($event, index)"
    />
  </div>
</template>

<style scoped>
.neo-input-otp {
  display: inline-flex;
  gap: 0.5rem;
}

.neo-input-otp.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-input-otp__field {
  width: 3rem;
  height: 3.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: var(--neo-font-family);
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  border-radius: 4px;
  box-shadow: 4px 4px 0px var(--neo-black);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  outline: none;
}

.neo-input-otp__field:focus {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px var(--neo-black);
  background-color: var(--neo-primary, #fcd34d); /* A yellow highlight state */
}

.neo-input-otp__field:disabled {
  background-color: var(--neo-gray-100);
  cursor: not-allowed;
}
</style>
