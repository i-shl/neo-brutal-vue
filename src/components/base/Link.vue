<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href?: string
  underline?: boolean
  disabled?: boolean
}>()

const linkClass = computed(() => {
  const classes = ['neo-link']
  if (props.underline) classes.push('neo-link--underline')
  if (props.disabled) classes.push('neo-link--disabled')
  return classes
})
</script>

<template>
  <a :class="linkClass" :href="disabled ? undefined : href">
    <slot />
  </a>
</template>

<style scoped>
.neo-link {
  display: inline-flex;
  align-items: center;
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-medium);
  color: var(--neo-primary);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--neo-transition-base);
}

.neo-link:hover {
  text-decoration: underline;
}

.neo-link--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  text-decoration: none;
}

.neo-link--underline {
  text-decoration: underline;
}
</style>
