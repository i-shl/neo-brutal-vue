<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap;">
    <div style="width: 200px;">
      <NeoSkeleton :loading="true" type="primary" />
    </div>
    <div style="width: 200px;">
      <NeoSkeleton :loading="true" type="success" />
    </div>
    <div style="width: 200px;">
      <NeoSkeleton :loading="true" type="warning" />
    </div>
    <div style="width: 200px;">
      <NeoSkeleton :loading="true" type="danger" />
    </div>
    <div style="width: 200px;">
      <NeoSkeleton :loading="true" type="info" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NeoSkeleton } from 'neo-brutal-vue'
</script>
