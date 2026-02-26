<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
    <NeoBadge :value="5" type="primary">
      <NeoButton>Primary</NeoButton>
    </NeoBadge>
    <NeoBadge :value="5" type="success">
      <NeoButton>Success</NeoButton>
    </NeoBadge>
    <NeoBadge :value="5" type="warning">
      <NeoButton>Warning</NeoButton>
    </NeoBadge>
    <NeoBadge :value="5" type="danger">
      <NeoButton>Danger</NeoButton>
    </NeoBadge>
    <NeoBadge :value="5" type="info">
      <NeoButton>Info</NeoButton>
    </NeoBadge>
  </div>
</template>

<script setup lang="ts">
import { NeoBadge, NeoButton } from 'neo-brutal-vue'
</script>
