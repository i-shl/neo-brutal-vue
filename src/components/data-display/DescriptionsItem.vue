<script setup lang="ts">
const props = defineProps<{
  label?: string
  span?: number
}>()
</script>

<template>
  <div class="neo-descriptions-item">
    <div class="neo-descriptions-item__label">
      <slot name="label">{{ label }}</slot>
    </div>
    <div class="neo-descriptions-item__content">
      <slot />
    </div>
  </div>
</template>
