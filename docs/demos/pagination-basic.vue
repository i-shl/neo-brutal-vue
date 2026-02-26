<template>
  <NeoPagination
    v-model:current="current"
    :total="200"
    :page-size="10"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoPagination } from 'neo-brutal-vue'

const current = ref(1)
</script>
