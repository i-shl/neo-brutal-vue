<script setup lang="ts">
import { computed } from 'vue'

export type LinkType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

const props = withDefaults(
  defineProps<{
    href?: string
    underline?: boolean
    disabled?: boolean
    target?: string
    type?: LinkType
    hoverColor?: string
    hoverTextColor?: string
  }>(),
  { underline: true, type: 'default' },
)

const linkClass = computed(() => {
  const classes = ['neo-link', `neo-link--${props.type}`]
  if (props.underline) classes.push('neo-link--underline')
  if (props.disabled) classes.push('neo-link--disabled')
  return classes.join(' ')
})

const linkStyle = computed(() => {
  if (props.hoverColor) {
    return {
      '--neo-link-hover-bg': props.hoverColor,
      '--neo-link-hover-color':
        props.hoverTextColor ?? '#1a1a1a',
    } as Record<string, string>
  }
  return undefined
})
</script>

<template>
  <a
    :class="linkClass"
    :style="linkStyle"
    :href="disabled ? undefined : href"
    :target="disabled ? undefined : target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<style scoped>
.neo-link {
  --neo-link-hover-bg: var(--neo-main);
  --neo-link-hover-color: #1a1a1a;

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
  background-color: var(--neo-link-hover-bg);
  border-bottom-color: var(--neo-link-hover-bg);
  color: var(--neo-link-hover-color) !important;
}

/* --- Type variants (hover colors) --- */
.neo-link--default { --neo-link-hover-bg: var(--neo-main); --neo-link-hover-color: #1a1a1a; }
.neo-link--primary { --neo-link-hover-bg: var(--neo-main); --neo-link-hover-color: #1a1a1a; }
.neo-link--secondary { --neo-link-hover-bg: var(--neo-secondary); --neo-link-hover-color: #1a1a1a; }
.neo-link--accent { --neo-link-hover-bg: var(--neo-accent); --neo-link-hover-color: #1a1a1a; }
.neo-link--success { --neo-link-hover-bg: var(--neo-success); --neo-link-hover-color: #1a1a1a; }
.neo-link--warning { --neo-link-hover-bg: var(--neo-warning); --neo-link-hover-color: #1a1a1a; }
.neo-link--danger { --neo-link-hover-bg: var(--neo-danger); --neo-link-hover-color: var(--neo-white); }
.neo-link--info { --neo-link-hover-bg: var(--neo-info); --neo-link-hover-color: var(--neo-white); }

.neo-link--disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
