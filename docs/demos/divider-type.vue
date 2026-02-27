<template>
  <div class="neo-demo-vertical" style="width: 100%;">
    <NeoDivider type="default">Default</NeoDivider>
    <NeoDivider type="primary">Primary</NeoDivider>
    <NeoDivider type="success">Success</NeoDivider>
    <NeoDivider type="warning">Warning</NeoDivider>
    <NeoDivider type="danger">Danger</NeoDivider>
    <NeoDivider type="info">Info</NeoDivider>
    <div style="margin-top: 1rem; font-weight: bold;">contentPosition</div>
    <NeoDivider type="primary" content-position="left">Left</NeoDivider>
    <NeoDivider type="primary" content-position="center">Center</NeoDivider>
    <NeoDivider type="primary" content-position="right">Right</NeoDivider>
  </div>
</template>

<script setup lang="ts">
import { NeoDivider } from 'neo-brutal-vue'
</script>
