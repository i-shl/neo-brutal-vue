<template>
  <div class="neo-demo-block">
  <NeoSpace vertical>
    <div>
      <div class="mb-2 font-bold">Vertical with SubMenu</div>
      <NeoMenu default-active="2-1" mode="vertical">
        <NeoMenuItem index="1">Home</NeoMenuItem>
        <NeoSubMenu index="2" title="Components">
          <NeoMenuItem index="2-1">Button</NeoMenuItem>
          <NeoMenuItem index="2-2">Input</NeoMenuItem>
          <NeoMenuItem index="2-3">Select</NeoMenuItem>
        </NeoSubMenu>
        <NeoMenuItem index="3">Settings</NeoMenuItem>
      </NeoMenu>
    </div>
    <div>
      <div class="mb-2 font-bold">Horizontal with SubMenu</div>
      <NeoMenu default-active="1" mode="horizontal">
        <NeoMenuItem index="1">Home</NeoMenuItem>
        <NeoSubMenu index="2" title="Components">
          <NeoMenuItem index="2-1">Button</NeoMenuItem>
          <NeoMenuItem index="2-2">Input</NeoMenuItem>
        </NeoSubMenu>
        <NeoMenuItem index="3">Settings</NeoMenuItem>
      </NeoMenu>
    </div>
  </NeoSpace>
  </div>
</template>

<script setup lang="ts">
import { NeoMenu, NeoMenuItem, NeoSubMenu, NeoSpace } from 'neo-brutal-vue'
</script>
