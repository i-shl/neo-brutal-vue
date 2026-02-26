<template>
  <div class="neo-demo-vertical">
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <NeoSwitch v-model="s1" />
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoSwitch v-model="s2" disabled />
        <span>禁用</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoSwitch v-model="s3" disabled />
        <span>禁用已选</span>
      </div>
    </div>
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoSwitch v-model="s4" size="sm" />
        <span>SM</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoSwitch v-model="s5" size="md" />
        <span>MD</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoSwitch v-model="s6" size="lg" />
        <span>LG</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSwitch } from 'neo-brutal-vue'

const s1 = ref(true)
const s2 = ref(false)
const s3 = ref(true)
const s4 = ref(false)
const s5 = ref(true)
const s6 = ref(false)
</script>
