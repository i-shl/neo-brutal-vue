<script setup lang="ts">
const props = withDefaults(defineProps<{
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  direction?: 'both' | 'horizontal' | 'vertical' | 'none'
}>(), {
  minWidth: '200px',
  minHeight: '100px',
  direction: 'both'
})
</script>

<template>
  <div 
    class="neo-resizable" 
    :style="{ 
      minWidth, 
      minHeight, 
      maxWidth, 
      maxHeight,
      resize: direction
    }"
  >
    <slot />
    <div v-if="direction !== 'none'" class="neo-resizable__handle" />
  </div>
</template>

<style scoped>
.neo-resizable {
  position: relative;
  overflow: hidden;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 6px 6px 0px var(--neo-black);
  padding: 1rem;
}

/* Force showing a custom handle graphic */
.neo-resizable__handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  pointer-events: none; /* Let native resize underneath respond */
  background: 
    linear-gradient(135deg, transparent 50%, var(--neo-black) 50%) -4px -4px no-repeat,
    linear-gradient(135deg, transparent 50%, var(--neo-black) 50%) -8px -8px no-repeat;
  background-size: 16px 16px;
  opacity: 0.5;
}

/* Fallback for WebKit browsers to hide the native resizer */
::-webkit-resizer {
  background-color: transparent;
}
</style>
