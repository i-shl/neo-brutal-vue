<template>
  <div class="neo-demo-block">
    <NeoCollapse v-model="activeNames">
      <NeoCollapseItem name="1" title="Panel 1">
        Content for panel 1. Collapse panels allow users to expand or collapse sections.
      </NeoCollapseItem>
      <NeoCollapseItem name="2" title="Panel 2">
        Content for panel 2. Click the header to toggle visibility.
      </NeoCollapseItem>
      <NeoCollapseItem name="3" title="Panel 3">
        Content for panel 3. Multiple panels can be expanded at once.
      </NeoCollapseItem>
    </NeoCollapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoCollapse, NeoCollapseItem } from 'neo-brutal-vue'

const activeNames = ref(['1'])
</script>
