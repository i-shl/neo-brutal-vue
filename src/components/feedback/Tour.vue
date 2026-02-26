<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import type { TourProps, TourEmits } from '@/types'
import NeoButton from '../base/Button.vue'
import NeoCard from '../layout/Card.vue'

const props = withDefaults(defineProps<TourProps>(), {
  current: 0
})

const emit = defineEmits<TourEmits>()

const activeIndex = ref(props.current)
const pos = ref({ top: 0, left: 0, width: 0, height: 0 })
const show = ref(false)

const updatePos = () => {
  if (!props.modelValue || !props.steps[activeIndex.value]) return

  const step = props.steps[activeIndex.value]
  let targetEl: HTMLElement | null = null

  if (typeof step.target === 'string') {
    targetEl = document.querySelector(step.target)
  } else if (typeof step.target === 'function') {
    targetEl = step.target()
  }

  if (targetEl) {
    const rect = targetEl.getBoundingClientRect()
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    
    pos.value = {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height
    }
    
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

watch(() => props.modelValue, (val) => {
  if (val) {
    nextTick(() => {
      updatePos()
      show.value = true
    })
  } else {
    show.value = false
  }
})

watch(() => activeIndex.value, () => {
  nextTick(updatePos)
})

watch(() => props.current, (val) => {
  activeIndex.value = val
})

const currentStep = computed(() => props.steps[activeIndex.value])

const next = () => {
  if (activeIndex.value < props.steps.length - 1) {
    activeIndex.value++
    emit('update:current', activeIndex.value)
  } else {
    emit('finish')
    emit('update:modelValue', false)
  }
}

const prev = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
    emit('update:current', activeIndex.value)
  }
}

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

onMounted(() => {
  window.addEventListener('resize', updatePos)
  window.addEventListener('scroll', updatePos)
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePos)
  window.removeEventListener('scroll', updatePos)
})

const cardStyle = computed(() => {
  const step = props.steps[activeIndex.value]
  const placement = step?.placement || 'bottom'
  const offset = 12
  
  let top = pos.value.top
  let left = pos.value.left

  if (placement === 'bottom') {
    top += pos.value.height + offset
    left += pos.value.width / 2
    return { top: `${top}px`, left: `${left}px`, transform: 'translateX(-50%)' }
  } else if (placement === 'top') {
    top -= offset
    left += pos.value.width / 2
    return { top: `${top}px`, left: `${left}px`, transform: 'translate(-50%, -100%)' }
  } else if (placement === 'left') {
    top += pos.value.height / 2
    left -= offset
    return { top: `${top}px`, left: `${left}px`, transform: 'translate(-100%, -50%)' }
  } else if (placement === 'right') {
    top += pos.value.height / 2
    left += pos.value.width + offset
    return { top: `${top}px`, left: `${left}px`, transform: 'translate(0, -50%)' }
  }
  
  return { top: `${top}px`, left: `${left}px` }
})

const maskStyle = computed(() => {
  if (!show.value) return { display: 'none' }
  return {
    width: `${pos.value.width + 8}px`,
    height: `${pos.value.height + 8}px`,
    top: `${pos.value.top - 4}px`,
    left: `${pos.value.left - 4}px`,
    boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
    borderRadius: '4px'
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="neo-tour-container">
      <div class="neo-tour-mask" :style="maskStyle"></div>
      
      <div class="neo-tour-content" :style="cardStyle">
        <NeoCard class="neo-tour-card">
          <template #header>
            <div class="neo-tour-header">
              <span class="neo-tour-title">{{ currentStep?.title }}</span>
              <button class="neo-tour-close" @click="close">×</button>
            </div>
          </template>
          
          <div class="neo-tour-description">
            {{ currentStep?.description }}
          </div>

          <template #footer>
            <div class="neo-tour-footer">
              <span class="neo-tour-steps">{{ activeIndex + 1 }} / {{ steps.length }}</span>
              <div class="neo-tour-actions">
                <NeoButton size="xs" variant="outline" v-if="activeIndex > 0" @click="prev">PREV</NeoButton>
                <NeoButton size="xs" type="primary" @click="next">
                  {{ activeIndex === steps.length - 1 ? 'FINISH' : 'NEXT' }}
                </NeoButton>
              </div>
            </div>
          </template>
        </NeoCard>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.neo-tour-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: var(--neo-z-modal);
}

.neo-tour-mask {
  position: absolute;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: var(--neo-z-backdrop);
}

.neo-tour-content {
  position: absolute;
  pointer-events: auto;
  z-index: var(--neo-z-modal);
  transition: all 0.3s ease;
}

.neo-tour-card {
  width: 280px;
  background: var(--neo-white);
}

.neo-tour-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.neo-tour-title {
  font-weight: var(--neo-font-weight-black);
  font-size: 1rem;
}

.neo-tour-close {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: var(--neo-font-weight-black);
}

.neo-tour-description {
  padding: var(--neo-spacing-sm) 0;
  font-size: 0.875rem;
}

.neo-tour-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.neo-tour-steps {
  font-size: 0.75rem;
  font-weight: var(--neo-font-weight-bold);
}

.neo-tour-actions {
  display: flex;
  gap: var(--neo-spacing-sm);
}
</style>
