<template>
  <div class="neo-demo-block">
    <NeoTabs v-model="activeName">
      <NeoTabPane name="tab1" label="Tab 1">
        Content for tab 1. Tabs organize content into switchable panels.
      </NeoTabPane>
      <NeoTabPane name="tab2" label="Tab 2">
        Content for tab 2. Click the tab header to switch.
      </NeoTabPane>
      <NeoTabPane name="tab3" label="Tab 3">
        Content for tab 3. Clean and intuitive navigation.
      </NeoTabPane>
    </NeoTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTabs, NeoTabPane } from 'neo-brutal-vue'

const activeName = ref('tab1')
</script>
