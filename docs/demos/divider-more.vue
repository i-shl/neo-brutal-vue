<template>
  <div class="neo-demo-vertical" style="width: 100%;">
    <div>Solid divider</div>
    <NeoDivider />
    <div>Dashed divider</div>
    <NeoDivider dashed />
    <div>Divider with text</div>
    <NeoDivider>OR</NeoDivider>
    <div>Vertical divider</div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <span>Left</span>
      <NeoDivider orientation="vertical" />
      <span>Center</span>
      <NeoDivider orientation="vertical" />
      <span>Right</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NeoDivider } from 'neo-brutal-vue'
</script>
