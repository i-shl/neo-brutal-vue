<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
    <NeoSwitch v-model="enabled" type="primary" />
    <NeoSwitch v-model="enabled" type="success" />
    <NeoSwitch v-model="enabled" type="warning" />
    <NeoSwitch v-model="enabled" type="danger" />
    <NeoSwitch v-model="enabled" type="info" />
    <NeoSwitch v-model="enabled" type="default" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSwitch } from 'neo-brutal-vue'

const enabled = ref(true)
</script>
