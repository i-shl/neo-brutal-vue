<template>
  <div class="neo-demo-block neo-demo-vertical">
    <NeoTabs v-model="active" active-type="primary">
      <NeoTabPane name="a" label="Tab A">Primary 选中样式</NeoTabPane>
      <NeoTabPane name="b" label="Tab B">内容 B</NeoTabPane>
      <NeoTabPane name="c" label="Tab C">内容 C</NeoTabPane>
    </NeoTabs>
    <NeoTabs v-model="active2" active-type="success">
      <NeoTabPane name="x" label="Tab X">Success 选中样式</NeoTabPane>
      <NeoTabPane name="y" label="Tab Y">内容 Y</NeoTabPane>
    </NeoTabs>
    <NeoTabs v-model="active3" active-type="danger">
      <NeoTabPane name="1" label="Tab 1">Danger 选中样式</NeoTabPane>
      <NeoTabPane name="2" label="Tab 2">内容 2</NeoTabPane>
    </NeoTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTabs, NeoTabPane } from 'neo-brutal-vue'

const active = ref('a')
const active2 = ref('x')
const active3 = ref('1')
</script>
