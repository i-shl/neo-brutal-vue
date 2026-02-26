<template>
  <div class="neo-demo-block">
    <NeoTree :data="treeData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTree } from 'neo-brutal-vue'

const treeData = ref([
  {
    id: '1',
    label: 'Level 1',
    children: [
      { id: '1-1', label: 'Level 2-1' },
      { id: '1-2', label: 'Level 2-2' },
    ],
  },
  { id: '2', label: 'Level 2' },
])
</script>
