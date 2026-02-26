<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <NeoCard title="Primary" type="primary" style="min-width: 200px;">
      <p>Card content</p>
    </NeoCard>
    <NeoCard title="Success" type="success" style="min-width: 200px;">
      <p>Card content</p>
    </NeoCard>
    <NeoCard title="Warning" type="warning" style="min-width: 200px;">
      <p>Card content</p>
    </NeoCard>
    <NeoCard title="Danger" type="danger" style="min-width: 200px;">
      <p>Card content</p>
    </NeoCard>
    <NeoCard title="Info" type="info" style="min-width: 200px;">
      <p>Card content</p>
    </NeoCard>
    <NeoCard title="Default" type="default" style="min-width: 200px;">
      <p>Card content</p>
    </NeoCard>
  </div>
</template>

<script setup lang="ts">
import { NeoCard } from 'neo-brutal-vue'
</script>
