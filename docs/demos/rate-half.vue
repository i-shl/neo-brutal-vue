<template>
  <NeoRate v-model="score" allow-half :max="10" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoRate } from 'neo-brutal-vue'

const score = ref(5.5)
</script>
