<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  items?: string[]
}>()

const breadcrumbClass = computed(() => ['neo-breadcrumb'])
</script>

<template>
  <nav :class="breadcrumbClass" aria-label="Breadcrumb">
    <div class="neo-breadcrumb__inner">
      <slot />
    </div>
  </nav>
</template>

<style scoped>
.neo-breadcrumb {
  font-family: var(--neo-font-family);
  display: inline-block;
}

.neo-breadcrumb__inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
