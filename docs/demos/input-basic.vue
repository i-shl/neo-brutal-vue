<template>
  <NeoInput v-model="value" placeholder="Enter text" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInput } from 'neo-brutal-vue'

const value = ref('')
</script>
