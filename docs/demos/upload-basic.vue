<template>
  <NeoUpload action="/api/upload">
    <NeoButton type="primary">Click to Upload</NeoButton>
  </NeoUpload>
</template>

<script setup lang="ts">
import { NeoUpload, NeoButton } from 'neo-brutal-vue'
</script>
