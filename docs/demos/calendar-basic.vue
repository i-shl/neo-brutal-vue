<template>
  <div class="neo-demo-block">
    <NeoCalendar v-model="date" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCalendar } from 'neo-brutal-vue'

const date = ref(new Date())
</script>
