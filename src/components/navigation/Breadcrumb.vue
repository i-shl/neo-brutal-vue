<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  items?: string[]
}>()

const breadcrumbClass = computed(() => ['neo-breadcrumb'])
</script>

<template>
  <nav :class="breadcrumbClass">
    <slot />
  </nav>
</template>

<style scoped>
.neo-breadcrumb {
  display: inline-flex;
  align-items: center;
  font-family: var(--neo-font-family);
  font-size: var(--neo-font-size-sm);
}
</style>
