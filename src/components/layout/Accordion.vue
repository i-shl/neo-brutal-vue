<script setup lang="ts">
import { ref, computed, provide, watch } from 'vue'
import type { AccordionProps, AccordionEmits } from '@/types'

const props = withDefaults(defineProps<AccordionProps>(), {
  accordion: true,
  shadow: true,
  bordered: true,
  animation: true
})

const emit = defineEmits<AccordionEmits>()

const activeNames = ref<(string | number)[]>([])

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined) {
      activeNames.value = Array.isArray(val) ? [...val] : [val]
    }
  },
  { immediate: true }
)

const setActive = (name: string | number) => {
  const index = activeNames.value.indexOf(name)

  if (props.accordion) {
    if (index === -1) {
      activeNames.value = [name]
    } else {
      activeNames.value = []
    }
  } else {
    if (index === -1) {
      activeNames.value = [...activeNames.value, name]
    } else {
      activeNames.value = activeNames.value.filter((n) => n !== name)
    }
  }

  emit(
    'update:modelValue',
    props.accordion ? activeNames.value[0] : activeNames.value
  )
}

const isActive = (name: string | number) => {
  if (props.accordion) {
    return activeNames.value[0] === name
  }
  return activeNames.value.includes(name)
}

provide('accordionIsActive', isActive)
provide('accordionSetActive', setActive)

const accordionClass = computed(() => {
  const classes: string[] = ['neo-accordion']
  if (props.shadow) classes.push('neo-accordion--shadow')
  if (props.bordered) classes.push('neo-accordion--bordered')
  return classes.join(' ')
})

defineExpose({
  activeNames,
  setActive,
  isActive
})
</script>

<template>
  <div :class="accordionClass">
    <slot />
  </div>
</template>

<style scoped>
.neo-accordion {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  font-family: var(--neo-font-family);
}
</style>
