<template>
  <NeoTextarea v-model="text" placeholder="Enter multiline text" :rows="4" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTextarea } from 'neo-brutal-vue'

const text = ref('')
</script>
