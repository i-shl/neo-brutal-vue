<script setup lang="ts">
</script>

<template>
  <div class="neo-button-group">
    <slot />
  </div>
</template>

<style scoped>
.neo-button-group {
  display: inline-flex;
  align-items: stretch;
}

/* Remove side borders and adjust border radius for seamless connection */
.neo-button-group :deep(> .neo-button) {
  border-radius: 0;
}

.neo-button-group :deep(> .neo-button:not(:last-child)) {
  border-right: none;
}

.neo-button-group :deep(> .neo-button:first-child) {
  border-top-left-radius: var(--neo-border-radius, 4px);
  border-bottom-left-radius: var(--neo-border-radius, 4px);
}

.neo-button-group :deep(> .neo-button:last-child) {
  border-top-right-radius: var(--neo-border-radius, 4px);
  border-bottom-right-radius: var(--neo-border-radius, 4px);
}
</style>
