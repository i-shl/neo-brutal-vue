<template>
  <div>
    <NeoInput v-model="value" size="xs" placeholder="XS" />
    <NeoInput v-model="value" size="sm" placeholder="SM" />
    <NeoInput v-model="value" size="md" placeholder="MD" />
    <NeoInput v-model="value" size="lg" placeholder="LG" />
    <NeoInput v-model="value" size="xl" placeholder="XL" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInput } from 'neo-brutal-vue'

const value = ref('')
</script>
