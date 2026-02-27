<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
    <NeoLink href="#" type="primary">Primary</NeoLink>
    <NeoLink href="#" type="success">Success</NeoLink>
    <NeoLink href="#" type="warning">Warning</NeoLink>
    <NeoLink href="#" type="danger">Danger</NeoLink>
    <NeoLink href="#" type="info">Info</NeoLink>
    <NeoLink href="#" hover-color="#e879f9">自定义颜色</NeoLink>
  </div>
</template>

<script setup lang="ts">
import { NeoLink } from 'neo-brutal-vue'
</script>
