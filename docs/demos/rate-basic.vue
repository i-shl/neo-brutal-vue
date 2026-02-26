<template>
  <NeoRate v-model="score" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoRate } from 'neo-brutal-vue'

const score = ref(3)
</script>
