<template>
  <div class="neo-demo-block">
    <NeoMenu default-active="1" mode="vertical">
      <NeoMenuItem index="1">Home</NeoMenuItem>
      <NeoMenuItem index="2">List</NeoMenuItem>
      <NeoMenuItem index="3">Settings</NeoMenuItem>
    </NeoMenu>
  </div>
</template>

<script setup lang="ts">
import { NeoMenu, NeoMenuItem } from 'neo-brutal-vue'
</script>
