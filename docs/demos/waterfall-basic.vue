<script setup lang="ts">
import { NeoWaterfall } from '../../src'

const items = [
  { title: '卡片 1', content: '这是一段较短的内容。' },
  { title: '卡片 2', content: '这是一段非常非常长长长长长长长长长长长长长长长长长长长长长长长长长的内容，用来测试瀑布流布局。' },
  { title: '卡片 3', content: '中等长度的内容展示。' },
  { title: '卡片 4', content: '又是一个短内容。' },
  { title: '卡片 5', content: '持续输出内容中...' },
  { title: '卡片 6', content: '瀑布流布局可以很好地处理高度不一致的元素。' }
]
</script>

<template>
  <NeoWaterfall :items="items" :cols="2" :gap="16">
    <template #default="{ item }">
      <div style="font-weight: 900; margin-bottom: 8px; text-transform: uppercase;">{{ item.title }}</div>
      <div>{{ item.content }}</div>
    </template>
  </NeoWaterfall>
</template>
