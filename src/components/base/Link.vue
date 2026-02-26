<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    href?: string
    underline?: boolean
    disabled?: boolean
  }>(),
  { underline: true },
)

const linkClass = computed(() => {
  const classes = ['neo-link']
  if (props.underline) classes.push('neo-link--underline')
  if (props.disabled) classes.push('neo-link--disabled')
  return classes.join(' ')
})
</script>

<template>
  <a :class="linkClass" :href="disabled ? undefined : href">
    <slot />
  </a>
</template>

<style scoped>
.neo-link {
  display: inline;
  font-size: inherit;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black) !important; /* Override VitePress a tag color */
  cursor: pointer;
  text-decoration: none !important;
  transition: color 0.15s, background-color 0.2s, border-color 0.2s;
  padding: 1px 3px;
  border-bottom: 3px solid transparent;
}

/* Show a thick underline */
.neo-link--underline {
  border-bottom-color: var(--neo-black);
}

/* Hover: highlight background, keep text visible */
.neo-link:hover {
  background-color: var(--neo-main);
  border-bottom-color: var(--neo-main);
  color: #1a1a1a !important; /* Always use true black on lime background for contrast */
}

.neo-link--disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
