<template>
  <NeoSwitch v-model="enabled" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSwitch } from 'neo-brutal-vue'

const enabled = ref(false)
</script>
