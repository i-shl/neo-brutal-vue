<template>
  <div class="neo-demo-block">
    <NeoSlider v-model="value" :min="0" :max="100" show-input />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSlider } from 'neo-brutal-vue'

const value = ref(50)
</script>
