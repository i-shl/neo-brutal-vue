<template>
  <div class="neo-demo-vertical">
    <NeoTextarea v-model="text1" disabled placeholder="Disabled" :rows="3" />
    <NeoTextarea v-model="text2" placeholder="Normal" :rows="4" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTextarea } from 'neo-brutal-vue'

const text1 = ref('Disabled content')
const text2 = ref('')
</script>
