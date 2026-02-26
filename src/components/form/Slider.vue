<script setup lang="ts">
import { computed, ref, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number | [number, number]
    min?: number
    max?: number
    step?: number
    range?: boolean
    showInput?: boolean
    disabled?: boolean
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { min: 0, max: 100, step: 1, range: false, showInput: false, size: 'md' },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | [number, number]): void
}>()

const rangeVal = computed(() => {
  const v = props.modelValue
  if (Array.isArray(v)) return v as [number, number]
  const m = props.min ?? 0
  return [m, typeof v === 'number' ? v : m] as [number, number]
})

const lowVal = computed(() => rangeVal.value[0])
const highVal = computed(() => rangeVal.value[1])

const sliderClass = computed(() => {
  const classes = ['neo-slider', `neo-slider--${props.size}`]
  if (props.disabled) classes.push('neo-slider--disabled')
  if (props.showInput) classes.push('neo-slider--with-input')
  if (props.range) classes.push('neo-slider--range')
  return classes.join(' ')
})

const rangeTrackRef = ref<HTMLElement | null>(null)
const dragging = ref<'low' | 'high' | null>(null)

const lowPercent = computed(() => {
  const mn = props.min ?? 0
  const mx = props.max ?? 100
  return ((lowVal.value - mn) / (mx - mn)) * 100
})

const highPercent = computed(() => {
  const mn = props.min ?? 0
  const mx = props.max ?? 100
  return ((highVal.value - mn) / (mx - mn)) * 100
})

const barStyle = computed(() => {
  const lp = lowPercent.value
  const hp = highPercent.value
  return {
    left: props.range ? `${lp}%` : '0%',
    width: props.range ? `${hp - lp}%` : `${hp}%`
  }
})

function valueFromPercent(percent: number): number {
  const mn = props.min ?? 0
  const mx = props.max ?? 100
  const s = props.step ?? 1
  let v = mn + (percent / 100) * (mx - mn)
  v = Math.round(v / s) * s
  return Math.min(mx, Math.max(mn, v))
}

function handleTrackMouseDown(e: MouseEvent) {
  if (props.disabled) return
  const el = rangeTrackRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const percent = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100))
  const val = valueFromPercent(percent)
  
  if (props.range) {
    const distLow = Math.abs(val - lowVal.value)
    const distHigh = Math.abs(val - highVal.value)
    if (distLow <= distHigh) {
      emit('update:modelValue', [val, highVal.value])
      startDrag('low')
    } else {
      emit('update:modelValue', [lowVal.value, val])
      startDrag('high')
    }
  } else {
    emit('update:modelValue', val)
    startDrag('high')
  }
}

function startDrag(which: 'low' | 'high') {
  dragging.value = which
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(e: MouseEvent) {
  if (!dragging.value) return
  const el = rangeTrackRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const percent = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100))
  const val = valueFromPercent(percent)
  
  if (props.range) {
    if (dragging.value === 'low') {
      const v = Math.min(val, highVal.value)
      emit('update:modelValue', [v, highVal.value])
    } else {
      const v = Math.max(val, lowVal.value)
      emit('update:modelValue', [lowVal.value, v])
    }
  } else {
    emit('update:modelValue', val)
  }
}

function handleMouseUp() {
  dragging.value = null
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div :class="sliderClass">
    <div class="neo-slider__main">
      <div
        ref="rangeTrackRef"
        class="neo-slider__track-container"
        @mousedown="handleTrackMouseDown"
      >
        <div class="neo-slider__track-bg" />
        <div
          class="neo-slider__track-fill"
          :style="barStyle"
        />
        <div
          v-if="props.range"
          class="neo-slider__thumb"
          :class="{ 'is-dragging': dragging === 'low' }"
          :style="{ left: `${lowPercent}%` }"
        />
        <div
          class="neo-slider__thumb"
          :class="{ 'is-dragging': dragging === 'high' }"
          :style="{ left: `${highPercent}%` }"
        />
      </div>
    </div>
    <div v-if="showInput" class="neo-slider__inputs">
      <input
        v-if="props.range"
        type="number"
        :value="lowVal"
        class="neo-slider__num-input"
        @input="(e) => emit('update:modelValue', [parseFloat((e.target as HTMLInputElement).value), highVal])"
      />
      <span v-if="props.range" class="neo-slider__sep">-</span>
      <input
        type="number"
        :value="highVal"
        class="neo-slider__num-input"
        @input="(e) => {
          const val = parseFloat((e.target as HTMLInputElement).value);
          if (props.range) emit('update:modelValue', [lowVal, val]);
          else emit('update:modelValue', val);
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.neo-slider {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  padding: 1rem 0.75rem; /* Added horizontal padding for thumb */
}

.neo-slider__main {
  flex: 1;
  position: relative;
  height: 2rem;
  display: flex;
  align-items: center;
}

.neo-slider__track-container {
  position: relative;
  width: 100%;
  height: 1rem;
  cursor: pointer;
  user-select: none;
}

.neo-slider__track-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  border-radius: 4px;
}

.neo-slider__track-fill {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--neo-main);
  border-right: var(--neo-border-thick);
}

.neo-slider__thumb {
  position: absolute;
  top: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--neo-main);
  border: var(--neo-border-thick);
  box-shadow: 2px 2px 0 var(--neo-black);
  transform: translate(-50%, -50%) rotate(45deg);
  transition: transform 0.1s, box-shadow 0.1s;
  z-index: 2;
  border-radius: 2px;
}

.neo-slider__thumb:hover {
  transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
  box-shadow: 4px 4px 0 var(--neo-black);
  background-color: var(--neo-main);
}

.neo-slider__thumb.is-dragging {
  transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
  box-shadow: 1px 1px 0 var(--neo-black);
  background-color: var(--neo-black);
  color: var(--neo-main);
  z-index: 10;
  transition: none; /* Disable transition during drag */
}

.neo-slider__inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.neo-slider__num-input {
  width: 4rem;
  padding: 0.25rem 0.5rem;
  font-weight: var(--neo-font-weight-black);
  text-align: center;
  border: var(--neo-border-thick);
  box-shadow: 2px 2px 0 var(--neo-black);
  outline: none;
}

.neo-slider__sep {
  font-weight: var(--neo-font-weight-black);
}

.neo-slider--disabled {
  opacity: 0.5;
  pointer-events: none;
}

.neo-slider--sm .neo-slider__track-container { height: 0.75rem; }
.neo-slider--sm .neo-slider__thumb { width: 1.125rem; height: 1.125rem; }

.neo-slider--lg .neo-slider__track-container { height: 1.25rem; }
.neo-slider--lg .neo-slider__thumb { width: 1.875rem; height: 1.875rem; }
</style>
