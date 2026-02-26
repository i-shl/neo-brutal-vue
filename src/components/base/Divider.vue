<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    dashed?: boolean
    orientation?: 'horizontal' | 'vertical'
    contentPosition?: 'left' | 'center' | 'right'
  }>(),
  { orientation: 'horizontal', contentPosition: 'center' },
)

const dividerClass = computed(() => {
  const classes = ['neo-divider', `neo-divider--${props.orientation}`]
  if (props.dashed) classes.push('neo-divider--dashed')
  if (props.contentPosition && (props.contentPosition !== 'center' || props.orientation === 'horizontal')) {
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
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
  border: none;
  border-top: var(--neo-border-thick);
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
  border-left: var(--neo-border-thick);
  min-height: 1.5rem;
}

.neo-divider--vertical.neo-divider--dashed {
  border-left-style: dashed;
}

.neo-divider__text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  text-transform: uppercase;
  white-space: nowrap;
  background-color: var(--neo-accent);
  border: var(--neo-border);
  box-shadow: 2px 2px 0 var(--neo-black);
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
