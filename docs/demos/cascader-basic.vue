<script setup lang="ts">
import { ref } from 'vue'
import { NeoCascader } from '../../src'

const value = ref([])
const options = [
  {
    value: 'guide',
    label: '指南',
    children: [
      {
        value: 'design',
        label: '设计原则',
        children: [
          { value: 'consistent', label: '一致性' },
          { value: 'feedback', label: '反馈' },
          { value: 'efficiency', label: '效率' }
        ]
      },
      {
        value: 'nav',
        label: '导航',
        children: [
          { value: 'side', label: '侧边栏' },
          { value: 'top', label: '顶栏' }
        ]
      }
    ]
  },
  {
    value: 'component',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: '基础组件',
        children: [
          { value: 'button', label: 'Button 按钮' },
          { value: 'icon', label: 'Icon 图标' }
        ]
      },
      {
        value: 'form',
        label: '表单组件',
        children: [
          { value: 'input', label: 'Input 输入框' },
          { value: 'select', label: 'Select 选择器' }
        ]
      }
    ]
  }
]
</script>

<template>
  <div style="width: 240px">
    <NeoCascader 
      v-model="value" 
      :options="options" 
      placeholder="请选择层级"
    />
  </div>
</template>
