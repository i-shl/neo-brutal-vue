<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoTour } from '../../src'

const showTour = ref(false)
const steps = [
  {
    target: '#step1',
    title: '开始使用',
    description: '欢迎使用 NeoBrutal Vue 组件库！'
  },
  {
    target: '#step2',
    title: '核心特性',
    description: '这里展示了组件库的核心功能。'
  },
  {
    target: '#step3',
    title: '完成',
    description: '恭喜你完成了新手引导。'
  }
]
</script>

<template>
  <div class="tour-demo">
    <div style="display: flex; gap: 20px; align-items: center;">
      <NeoButton id="step1">第一步</NeoButton>
      <NeoButton id="step2">第二步</NeoButton>
      <NeoButton id="step3">第三步</NeoButton>
      <NeoButton type="primary" @click="showTour = true">开启引导</NeoButton>
    </div>
    
    <NeoTour 
      v-model="showTour" 
      :steps="steps" 
    />
  </div>
</template>
