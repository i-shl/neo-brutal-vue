<template>
  <div class="neo-demo-block neo-demo-vertical">
    <NeoTabs v-model="active" type="card">
      <NeoTabPane name="a" label="Tab A">卡片式内容 A</NeoTabPane>
      <NeoTabPane name="b" label="Tab B">卡片式内容 B</NeoTabPane>
    </NeoTabs>
    <NeoTabs v-model="active2" type="border-card">
      <NeoTabPane name="x" label="Tab X">边框式内容 X</NeoTabPane>
      <NeoTabPane name="y" label="Tab Y">边框式内容 Y</NeoTabPane>
    </NeoTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTabs, NeoTabPane } from 'neo-brutal-vue'

const active = ref('a')
const active2 = ref('x')
</script>
