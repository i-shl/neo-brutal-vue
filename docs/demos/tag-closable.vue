<template>
  <div>
    <NeoTag
      v-for="tag in tags"
      :key="tag"
      closable
      @close="handleClose(tag)"
    >
      {{ tag }}
    </NeoTag>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTag } from 'neo-brutal-vue'

const tags = ref(['可关闭', '标签一', '标签二'])

function handleClose(tag: string) {
  tags.value = tags.value.filter((t) => t !== tag)
}
</script>
