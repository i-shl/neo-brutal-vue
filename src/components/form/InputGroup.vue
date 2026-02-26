<script setup lang="ts">
</script>

<template>
  <div class="neo-input-group">
    <slot />
  </div>
</template>

<style scoped>
.neo-input-group {
  display: flex;
  align-items: stretch;
  width: 100%;
  border-radius: 4px; /* Default neo radius */
  box-shadow: 4px 4px 0px var(--neo-black);
  transition: transform 0.2s, box-shadow 0.2s;
}

/* Remove internal shadows and adjust borders */
.neo-input-group :deep(> *) {
  box-shadow: none !important;
  border-radius: 0 !important;
  transform: none !important;
}

/* Fix overlapping borders */
.neo-input-group :deep(> *:not(:last-child)) {
  border-right: none !important;
}

/* First child border radius */
.neo-input-group :deep(> *:first-child) {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}

/* Last child border radius */
.neo-input-group :deep(> *:last-child) {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

/* React to focus within */
.neo-input-group:focus-within {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px var(--neo-black);
}
</style>
