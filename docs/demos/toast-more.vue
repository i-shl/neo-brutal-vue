<template>
  <NeoSpace>
    <NeoButton @click="show('success')">Success</NeoButton>
    <NeoButton @click="show('error')">Error</NeoButton>
    <NeoButton @click="show('warning')">Warning</NeoButton>
    <NeoButton @click="show('info')">Info</NeoButton>
    <NeoToast
      v-if="visible"
      :type="toastType"
      :title="toastTitle"
      :message="toastMessage"
      @close="visible = false"
    />
  </NeoSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoButton, NeoToast, NeoSpace } from 'neo-brutal-vue'

const visible = ref(false)
const toastType = ref<'success' | 'error' | 'warning' | 'info'>('info')
const toastTitle = ref('')
const toastMessage = ref('')

const config: Record<string, { title: string; message: string }> = {
  success: { title: 'Success', message: 'Operation completed successfully.' },
  error: { title: 'Error', message: 'Something went wrong.' },
  warning: { title: 'Warning', message: 'Please check your input.' },
  info: { title: 'Info', message: 'Here is some information.' },
}

function show(type: 'success' | 'error' | 'warning' | 'info') {
  toastType.value = type
  toastTitle.value = config[type].title
  toastMessage.value = config[type].message
  visible.value = true
}
</script>
