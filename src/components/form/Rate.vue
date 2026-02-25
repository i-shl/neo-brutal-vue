<script setup lang="ts">
import { computed } from 'vue'

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
  voidColor: '#eee'
})

const emit = defineEmits(['update:modelValue', 'change'])

const stars = computed(() => {
  const result = []
  for (let i = 1; i <= props.max; i++) {
    result.push(i)
  }
  return result
})

const handleSelect = (value: number) => {
  if (props.disabled) return
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <div class="neo-rate" :class="{ 'is-disabled': disabled }">
    <div 
      v-for="star in stars" 
      :key="star"
      class="neo-rate__item"
      @click="handleSelect(star)"
    >
      <span 
        class="neo-rate__star"
        :style="{ 
          color: star <= modelValue ? color : voidColor,
          borderColor: 'black'
        }"
      >
        ★
      </span>
    </div>
  </div>
</template>

<style scoped>
.neo-rate {
  display: inline-flex;
  gap: 4px;
  user-select: none;
}

.neo-rate__item {
  cursor: pointer;
  transition: transform 0.1s;
}

.neo-rate__item:hover:not(.is-disabled) {
  transform: scale(1.2) rotate(5deg);
}

.neo-rate__star {
  font-size: 24px;
  -webkit-text-stroke: 2px black;
  filter: drop-shadow(2px 2px 0px black);
  line-height: 1;
}

.is-disabled .neo-rate__item {
  cursor: default;
}
</style>
