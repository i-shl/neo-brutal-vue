<template>
  <div class="neo-demo-block neo-demo-vertical">
    <NeoProgress :percentage="80" status="success" />
    <NeoProgress :percentage="50" :show-text="true" text-inside />
  </div>
</template>

<script setup lang="ts">
import { NeoProgress } from 'neo-brutal-vue'
</script>
