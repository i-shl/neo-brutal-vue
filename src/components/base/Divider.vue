<script setup lang="ts">
import { computed } from 'vue'

export type DividerType =
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
    dashed?: boolean
    orientation?: 'horizontal' | 'vertical'
    contentPosition?: 'left' | 'center' | 'right'
    type?: DividerType
  }>(),
  { orientation: 'horizontal', contentPosition: 'center', type: 'default' },
)

const dividerClass = computed(() => {
  const classes = [
    'neo-divider',
    `neo-divider--${props.orientation}`,
    `neo-divider--${props.type}`,
  ]
  if (props.dashed) classes.push('neo-divider--dashed')
  if (
    props.contentPosition &&
    (props.contentPosition !== 'center' || props.orientation === 'horizontal')
  ) {
    classes.push(`neo-divider--${props.contentPosition}`)
  }
  return classes.join(' ')
})
</script>

<template>
  <div :class="dividerClass" role="separator">
    <span v-if="$slots.default" class="neo-divider__text">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.neo-divider {
  --neo-divider-color: var(--neo-black);
  --neo-divider-text-bg: var(--neo-accent);
  --neo-divider-text-color: var(--neo-black);

  display: flex;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
  border: none;
  border-top: var(--neo-border-width-thick) solid var(--neo-divider-color);
  position: relative;
}

.neo-divider--dashed {
  border-top-style: dashed;
}

.neo-divider--vertical {
  display: inline-flex;
  flex-direction: column;
  width: auto;
  margin: 0 1rem;
  border-top: none;
  border-left: var(--neo-border-width-thick) solid var(--neo-divider-color);
  min-height: 1.5rem;
}

.neo-divider--vertical.neo-divider--dashed {
  border-left-style: dashed;
}

/* --- Type variants --- */
.neo-divider--default { --neo-divider-color: var(--neo-black); --neo-divider-text-bg: var(--neo-accent); --neo-divider-text-color: var(--neo-black); }
.neo-divider--primary { --neo-divider-color: var(--neo-main-dark); --neo-divider-text-bg: var(--neo-main); --neo-divider-text-color: var(--neo-black); }
.neo-divider--secondary { --neo-divider-color: var(--neo-secondary); --neo-divider-text-bg: var(--neo-secondary); --neo-divider-text-color: var(--neo-white); }
.neo-divider--accent { --neo-divider-color: var(--neo-orange); --neo-divider-text-bg: var(--neo-accent); --neo-divider-text-color: var(--neo-black); }
.neo-divider--success { --neo-divider-color: var(--neo-success); --neo-divider-text-bg: var(--neo-success); --neo-divider-text-color: var(--neo-black); }
.neo-divider--warning { --neo-divider-color: var(--neo-warning); --neo-divider-text-bg: var(--neo-warning); --neo-divider-text-color: var(--neo-black); }
.neo-divider--danger { --neo-divider-color: var(--neo-danger); --neo-divider-text-bg: var(--neo-danger); --neo-divider-text-color: var(--neo-white); }
.neo-divider--info { --neo-divider-color: var(--neo-info); --neo-divider-text-bg: var(--neo-info); --neo-divider-text-color: var(--neo-white); }

.neo-divider__text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-divider-text-color);
  text-transform: uppercase;
  white-space: nowrap;
  background-color: var(--neo-divider-text-bg);
  border: var(--neo-border-width) solid var(--neo-divider-color);
  box-shadow: 2px 2px 0 var(--neo-divider-color);
}

.neo-divider--left .neo-divider__text {
  left: 1rem;
  transform: none;
}

.neo-divider--right .neo-divider__text {
  left: auto;
  right: 1rem;
  transform: none;
}

.neo-divider--vertical .neo-divider__text {
  position: static;
  transform: none;
  margin: 0.5rem 0;
}
</style>
