<template>
  <div class="neo-demo-vertical" style="width: 100%;">
    <div style="font-weight: bold;">Size</div>
    <NeoInput v-model="value" size="xs" placeholder="XS" />
    <NeoInput v-model="value" size="sm" placeholder="SM" />
    <NeoInput v-model="value" size="md" placeholder="MD" />
    <NeoInput v-model="value" size="lg" placeholder="LG" />
    <NeoInput v-model="value" size="xl" placeholder="XL" />
    <div style="font-weight: bold; margin-top: 1rem;">Shape</div>
    <NeoInput v-model="value2" shape="default" placeholder="Default" />
    <NeoInput v-model="value2" shape="round" placeholder="Round" />
    <NeoInput v-model="value2" shape="pill" placeholder="Pill" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInput } from 'neo-brutal-vue'

const value = ref('')
const value2 = ref('')
</script>
