<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to?: string
  replace?: boolean
}>()

const breadcrumbItemClass = computed(() => ['neo-breadcrumb-item'])
const isLink = computed(() => !!props.to)
</script>

<template>
  <span :class="breadcrumbItemClass" class="neo-breadcrumb-item-wrapper">
    <a v-if="isLink" :href="to" class="neo-breadcrumb-item__link">
      <slot />
    </a>
    <span v-else class="neo-breadcrumb-item__text">
      <slot />
    </span>
    
    <span class="neo-breadcrumb-item__separator" aria-hidden="true">
      <slot name="separator">/</slot>
    </span>
  </span>
</template>

<style scoped>
.neo-breadcrumb-item-wrapper {
  display: inline-flex;
  align-items: center;
}

.neo-breadcrumb-item-wrapper:last-child .neo-breadcrumb-item__separator {
  display: none;
}

.neo-breadcrumb-item__link,
.neo-breadcrumb-item__text {
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  transition: var(--neo-transition);
}

.neo-breadcrumb-item__link {
  color: var(--neo-black);
  text-decoration: none;
  border: 2px solid transparent;
}

.neo-breadcrumb-item__link:hover {
  background-color: var(--neo-main);
  border-color: var(--neo-black);
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0px var(--neo-black);
}

.neo-breadcrumb-item__text {
  color: var(--neo-gray-500);
}

.neo-breadcrumb-item__separator {
  margin: 0 0.5rem;
  color: var(--neo-black);
  font-weight: var(--neo-font-weight-black);
  font-size: 1.125rem;
}
</style>
