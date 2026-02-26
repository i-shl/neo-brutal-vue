<template>
  <div class="neo-demo-block">
    <NeoCollapse v-model="activeName" accordion>
    <NeoCollapseItem name="1" title="Panel 1">Content 1</NeoCollapseItem>
    <NeoCollapseItem name="2" title="Panel 2">Content 2</NeoCollapseItem>
    </NeoCollapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCollapse, NeoCollapseItem } from 'neo-brutal-vue'

const activeName = ref('1')
</script>
