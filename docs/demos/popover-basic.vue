<template>
  <NeoPopover title="Title">
    <p class="popover-trigger">
      Neobrutalism 是一种设计风格，强调粗边框、高对比度和大胆的配色。点击这段文字，即可展开气泡卡片查看更多内容。
    </p>
    <template #content>
      <span>Popover content</span>
    </template>
  </NeoPopover>
</template>

<script setup lang="ts">
import { NeoPopover } from 'neo-brutal-vue'
</script>

<style scoped>
.popover-trigger {
  margin: 0;
  line-height: 1.6;
  cursor: pointer;
}
</style>
