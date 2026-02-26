<template>
  <NeoPagination
    v-model:current="current"
    v-model:page-size="pageSize"
    :total="200"
    :page-sizes="[10, 20, 50]"
    :pager-count="5"
    layout="total, sizes, prev, pager, next, jumper"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoPagination } from 'neo-brutal-vue'

const current = ref(1)
const pageSize = ref(10)
</script>
