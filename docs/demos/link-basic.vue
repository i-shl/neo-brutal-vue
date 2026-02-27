<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
    <NeoLink href="https://github.com/i-shl/neo-brutal-vue" :underline="true">
      GitHub（本页跳转）
    </NeoLink>
    <NeoLink
      href="https://www.npmjs.com/package/neo-brutal-vue"
      target="_blank"
      :underline="false"
    >
      npm（新窗口打开）
    </NeoLink>
  </div>
</template>

<script setup lang="ts">
import { NeoLink } from 'neo-brutal-vue'
</script>
