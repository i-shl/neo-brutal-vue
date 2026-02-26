<script setup lang="ts">
import { inject, onMounted, onUnmounted, useSlots, computed } from 'vue'

const props = defineProps<{
  name: string
  label?: string
  disabled?: boolean
  closable?: boolean
}>()

const activeName = inject<any>('tabsActiveName')
const register = inject<(pane: any) => void>('tabsRegister')
const unregister = inject<(name: string) => void>('tabsUnregister')

const slots = useSlots()

const isActive = computed(() => activeName?.value === props.name)

onMounted(() => {
  if (register) {
    register({
      name: props.name,
      label: props.label,
      disabled: props.disabled,
      closable: props.closable,
      slots: slots
    })
  }
})

onUnmounted(() => {
  if (unregister) {
    unregister(props.name)
  }
})
</script>

<template>
  <div v-if="isActive" class="neo-tab-pane">
    <slot />
  </div>
</template>

<style scoped>
.neo-tab-pane {
  width: 100%;
  animation: neo-tabs-fade-in 0.3s ease;
}

@keyframes neo-tabs-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
