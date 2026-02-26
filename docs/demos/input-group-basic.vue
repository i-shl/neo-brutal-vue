<template>
  <div class="neo-demo-vertical" style="width: 100%;">
    <!-- Search Bar Example -->
    <NeoInputGroup>
      <NeoInput v-model="search" placeholder="Type anything to search..." style="flex: 1;" />
      <NeoButton type="primary">Search</NeoButton>
    </NeoInputGroup>

    <!-- Email Subscription Example -->
    <NeoInputGroup>
      <NeoInput v-model="email" placeholder="Your Email Address" style="flex: 1;" />
      <NeoButton type="success">Subscribe</NeoButton>
    </NeoInputGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInput, NeoButton, NeoInputGroup } from 'neo-brutal-vue'

const search = ref('')
const email = ref('')
</script>
