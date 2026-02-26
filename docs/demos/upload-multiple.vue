<template>
  <NeoUpload action="/api/upload" multiple :limit="5" accept="image/*">
    <NeoButton type="primary">Select Images (max 5)</NeoButton>
  </NeoUpload>
</template>

<script setup lang="ts">
import { NeoUpload, NeoButton } from 'neo-brutal-vue'
</script>
