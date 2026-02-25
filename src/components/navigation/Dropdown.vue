<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  visible?: boolean
  title?: string
  trigger?: 'hover' | 'click' | 'focus'
  placement?: string
}>()

const isOpen = ref(props.visible || false)
</script>

<template>
  <div>
    <button @click="isOpen = !isOpen">
      显示
    </button>
  </div>
</template>