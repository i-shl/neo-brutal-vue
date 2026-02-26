<template>
  <div class="neo-demo-vertical">
    <div class="neo-demo-block">
      <NeoSlider
        v-model="range"
        :min="0"
        :max="100"
        range
        show-input
      />
    </div>
    <div class="neo-demo-block">
      <NeoSlider v-model="disabledVal" :min="0" :max="100" show-input disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoSlider } from 'neo-brutal-vue'

const range = ref<[number, number]>([20, 80])
const disabledVal = ref(50)
</script>
