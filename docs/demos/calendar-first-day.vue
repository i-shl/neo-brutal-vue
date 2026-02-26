<template>
  <div class="neo-demo-block">
  <NeoSpace vertical>
    <div>
      <div class="mb-2 font-bold">Sunday first (default)</div>
      <NeoCalendar v-model="date" />
    </div>
    <div>
      <div class="mb-2 font-bold">Monday first</div>
      <NeoCalendar v-model="date" :first-day-of-week="1" />
    </div>
  </NeoSpace>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCalendar, NeoSpace } from 'neo-brutal-vue'

const date = ref(new Date())
</script>
