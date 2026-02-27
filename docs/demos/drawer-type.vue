<template>
  <div class="neo-demo-vertical">
    <NeoSpace>
      <NeoButton @click="openDrawer('default')">Default</NeoButton>
      <NeoButton @click="openDrawer('primary')">Primary</NeoButton>
      <NeoButton @click="openDrawer('success')">Success</NeoButton>
      <NeoButton @click="openDrawer('warning')">Warning</NeoButton>
      <NeoButton @click="openDrawer('danger')">Danger</NeoButton>
      <NeoButton @click="openDrawer('info')">Info</NeoButton>
    </NeoSpace>
    <NeoDrawer v-model="visible" :title="`${currentType} 类型`" :type="currentType">
      抽屉内容区域，当前类型为 {{ currentType }}。
    </NeoDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoDrawer, NeoSpace } from 'neo-brutal-vue'

type DrawerType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

const visible = ref(false)
const currentType = ref<DrawerType>('default')

function openDrawer(type: DrawerType) {
  currentType.value = type
  visible.value = true
}
</script>
