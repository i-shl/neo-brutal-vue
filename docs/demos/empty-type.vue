<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center;">
    <div style="text-align: center;">
      <NeoEmpty description="Primary" type="primary" />
    </div>
    <div style="text-align: center;">
      <NeoEmpty description="Success" type="success" />
    </div>
    <div style="text-align: center;">
      <NeoEmpty description="Warning" type="warning" />
    </div>
    <div style="text-align: center;">
      <NeoEmpty description="Danger" type="danger" />
    </div>
    <div style="text-align: center;">
      <NeoEmpty description="Info" type="info" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NeoEmpty } from 'neo-brutal-vue'
</script>
