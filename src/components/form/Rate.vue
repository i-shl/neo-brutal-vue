<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: number
  max?: number
  allowHalf?: boolean
  disabled?: boolean
  color?: string
  voidColor?: string
}>(), {
  modelValue: 0,
  max: 5,
  allowHalf: false,
  disabled: false,
  color: 'var(--neo-yellow)',
  voidColor: 'var(--neo-white)'
})

const emit = defineEmits(['update:modelValue', 'change'])

const hoverValue = ref<number | null>(null)

const stars = computed(() => Array.from({ length: props.max }, (_, i) => i + 1))

const displayValue = computed(() => hoverValue.value ?? props.modelValue ?? 0)

function getStarFillWidth(star: number): string {
  const v = displayValue.value
  if (v >= star) return '100%'
  if (props.allowHalf && v >= star - 0.5) return '50%'
  return '0%'
}

function handleSelect(star: number, e: MouseEvent) {
  if (props.disabled) return
  let value: number
  if (props.allowHalf) {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const isLeftHalf = e.clientX - rect.left < rect.width / 2
    value = isLeftHalf ? star - 0.5 : star
  } else {
    value = star
  }
  emit('update:modelValue', value)
  emit('change', value)
}

function handleMouseMove(star: number, e: MouseEvent) {
  if (props.disabled) return
  if (props.allowHalf) {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const isLeftHalf = e.clientX - rect.left < rect.width / 2
    hoverValue.value = isLeftHalf ? star - 0.5 : star
  } else {
    hoverValue.value = star
  }
}

function handleMouseLeave() {
  hoverValue.value = null
}
</script>

<template>
  <div class="neo-rate" :class="{ 'is-disabled': disabled }" @mouseleave="handleMouseLeave">
    <div
      v-for="star in stars"
      :key="star"
      class="neo-rate__item"
      @click="handleSelect(star, $event)"
      @mousemove="handleMouseMove(star, $event)"
    >
      <span class="neo-rate__star neo-rate__star--bg" :style="{ color: voidColor }">★</span>
      <span
        class="neo-rate__star neo-rate__star--fill"
        :style="{
          color: color,
          width: getStarFillWidth(star),
        }"
      >
        ★
      </span>
    </div>
    <span v-if="modelValue > 0" class="neo-rate__text">{{ modelValue }}</span>
  </div>
</template>

<style scoped>
.neo-rate {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
}

.neo-rate__item {
  position: relative;
  cursor: pointer;
  transition: transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.neo-rate:not(.is-disabled) .neo-rate__item:hover {
  transform: scale(1.3) rotate(8deg);
  z-index: 2;
}

.neo-rate__star {
  font-size: 2rem;
  line-height: 1;
  display: inline-block;
  -webkit-text-stroke: 2px var(--neo-black);
  filter: drop-shadow(2px 2px 0px var(--neo-black));
}

.neo-rate__star--fill {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: width 0.1s ease;
}

.neo-rate__text {
  margin-left: 0.5rem;
  font-weight: var(--neo-font-weight-black);
  background-color: var(--neo-black);
  color: var(--neo-white);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 1rem;
}

.is-disabled .neo-rate__item {
  cursor: default;
}

.is-disabled {
  opacity: 0.6;
}
</style>
