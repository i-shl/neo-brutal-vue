<template>
  <div class="neo-demo-block">
    <NeoTable :data="tableData" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTable } from 'neo-brutal-vue'

const tableData = ref([
  { name: 'Tom', age: 18, role: 'Admin' },
  { name: 'Jerry', age: 20, role: 'User' },
  { name: 'Spike', age: 25, role: 'Editor' },
  { name: 'Tyke', age: 5, role: 'Guest' },
])
const columns = [
  { prop: 'name', label: 'Name' },
  { prop: 'age', label: 'Age' },
  { prop: 'role', label: 'Role' },
]
</script>
