<template>
  <NeoTooltip content="Hint text">
    <p class="tooltip-trigger">
      Neobrutalism 是一种设计风格，强调粗边框、高对比度和大胆的配色。将鼠标悬停在这段文字上，即可看到提示内容。
    </p>
  </NeoTooltip>
</template>

<script setup lang="ts">
import { NeoTooltip } from 'neo-brutal-vue'
</script>

<style scoped>
.tooltip-trigger {
  margin: 0;
  line-height: 1.6;
  cursor: default;
}
</style>
