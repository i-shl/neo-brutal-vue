<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
    <NeoCheckbox v-model="checked" type="primary">Primary</NeoCheckbox>
    <NeoCheckbox v-model="checked" type="success">Success</NeoCheckbox>
    <NeoCheckbox v-model="checked" type="warning">Warning</NeoCheckbox>
    <NeoCheckbox v-model="checked" type="danger">Danger</NeoCheckbox>
    <NeoCheckbox v-model="checked" type="info">Info</NeoCheckbox>
    <NeoCheckbox v-model="checked" type="default">Default</NeoCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCheckbox } from 'neo-brutal-vue'

const checked = ref(true)
</script>
