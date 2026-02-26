<template>
  <NeoInputNumber v-model="num" :min="0" :max="100" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInputNumber } from 'neo-brutal-vue'

const num = ref(0)
</script>
