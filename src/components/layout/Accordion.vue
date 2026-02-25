<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AccordionProps, AccordionEmits } from '@/types'

const props = withDefaults(defineProps<AccordionProps>(), {
  accordion: false,
  shadow: true,
  bordered: true,
  animation: true
})

const emit = defineEmits<AccordionEmits>()

const activeNames = ref<(string | number)[]>([])

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
      activeNames.value.push(name)
    } else {
      activeNames.value.splice(index, 1)
    }
  }
  
  emit('update:modelValue', props.accordion ? activeNames.value[0] : activeNames.value)
}

const isActive = (name: string | number) => {
  if (props.accordion) {
    return activeNames.value[0] === name
  }
  return activeNames.value.includes(name)
}

const accordionClass = computed(() => {
  const classes: string[] = ['neo-accordion']
  if (!props.shadow) classes.push('neo-accordion--no-shadow')
  if (!props.bordered) classes.push('neo-accordion--no-border')
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
  --accordion-bg: var(--neo-bg-primary);
  --accordion-border: var(--neo-border-color);
  --accordion-shadow: var(--neo-shadow);
  --accordion-header-bg: var(--neo-bg-secondary);
  --accordion-header-text: var(--neo-text-primary);
  --accordion-content-text: var(--neo-text-secondary);
  
  display: flex;
  flex-direction: column;
  gap: var(--neo-spacing-sm);
  width: 100%;
}

.neo-accordion--no-shadow {
  --accordion-shadow: none;
}

.neo-accordion--no-border {
  --accordion-border: transparent;
}
</style>
