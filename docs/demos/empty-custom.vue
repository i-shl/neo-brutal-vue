<template>
  <NeoEmpty>
    <template #default>
      <p>自定义空状态内容</p>
      <NeoButton type="primary">去添加</NeoButton>
    </template>
  </NeoEmpty>
</template>

<script setup lang="ts">
import { NeoEmpty, NeoButton } from 'neo-brutal-vue'
</script>
