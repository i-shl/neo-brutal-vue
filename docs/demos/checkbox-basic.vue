<template>
  <NeoCheckbox v-model="checked">I agree</NeoCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCheckbox } from 'neo-brutal-vue'

const checked = ref(false)
</script>
