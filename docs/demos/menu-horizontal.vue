<template>
  <div class="neo-demo-block">
    <NeoMenu default-active="1" mode="horizontal">
    <NeoMenuItem index="1">Home</NeoMenuItem>
    <NeoMenuItem index="2">About</NeoMenuItem>
    <NeoMenuItem index="3">Contact</NeoMenuItem>
    </NeoMenu>
  </div>
</template>

<script setup lang="ts">
import { NeoMenu, NeoMenuItem } from 'neo-brutal-vue'
</script>
