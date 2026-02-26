<template>
  <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: center;">
    <NeoLoading :loading="true" type="primary" />
    <NeoLoading :loading="true" type="success" />
    <NeoLoading :loading="true" type="warning" />
    <NeoLoading :loading="true" type="danger" />
    <NeoLoading :loading="true" type="info" />
    <NeoLoading :loading="true" type="default" />
  </div>
</template>

<script setup lang="ts">
import { NeoLoading } from 'neo-brutal-vue'
</script>
