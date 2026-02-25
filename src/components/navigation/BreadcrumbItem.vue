<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  to?: string
  replace?: boolean
}>()

const breadcrumbItemClass = computed(() => ['neo-breadcrumb__item'])
</script>

<template>
  <span :class="breadcrumbItemClass">
    <slot />
  </span>
</template>

<style scoped>
.neo-breadcrumb__item {
  display: inline-flex;
  align-items: center;
}
</style>
