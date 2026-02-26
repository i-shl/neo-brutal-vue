<template>
  <NeoDropdown>
    <NeoButton>Dropdown ▼</NeoButton>
    <template #dropdown>
      <div class="neo-dropdown-menu">
        <div class="item">Option 1</div>
        <div class="item">Option 2</div>
        <div class="item">Option 3</div>
      </div>
    </template>
  </NeoDropdown>
</template>

<script setup lang="ts">
import { NeoButton, NeoDropdown } from 'neo-brutal-vue'
</script>

<style scoped>
.neo-dropdown-menu .item {
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 700;
}
.neo-dropdown-menu .item:hover {
  background: var(--neo-yellow);
}
</style>
