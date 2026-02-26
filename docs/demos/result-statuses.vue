<template>
  <NeoSpace vertical>
    <NeoResult status="success" title="Success" sub-title="Done" />
    <NeoResult status="error" title="Error" sub-title="Failed" />
    <NeoResult status="404" title="Page Not Found" />
  </NeoSpace>
</template>

<script setup lang="ts">
import { NeoResult, NeoSpace } from 'neo-brutal-vue'
</script>
