<template>
  <div class="neo-demo-vertical">
    <NeoSpace>
      <NeoButton @click="openDialog('default')">Default</NeoButton>
      <NeoButton @click="openDialog('primary')">Primary</NeoButton>
      <NeoButton @click="openDialog('success')">Success</NeoButton>
      <NeoButton @click="openDialog('warning')">Warning</NeoButton>
      <NeoButton @click="openDialog('danger')">Danger</NeoButton>
      <NeoButton @click="openDialog('info')">Info</NeoButton>
    </NeoSpace>
    <NeoDialog v-model="visible" :title="`${currentType} 类型`" :type="currentType">
      对话框内容区域，当前头部类型为 {{ currentType }}。
    </NeoDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoDialog, NeoSpace } from 'neo-brutal-vue'

type DialogType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

const visible = ref(false)
const currentType = ref<DialogType>('default')

function openDialog(type: DialogType) {
  currentType.value = type
  visible.value = true
}
</script>
