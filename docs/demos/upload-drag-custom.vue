<template>
  <div class="space-y-8">
    <section>
      <h3 class="mb-4 font-bold">自定义图片图标</h3>
      <NeoUpload
        drag
        drag-icon="https://api.dicebear.com/7.x/shapes/svg?seed=upload"
        drag-text="拖拽文件到此处，或 "
        drag-text-link="点击上传"
      />
    </section>
    <section>
      <h3 class="mb-4 font-bold">自定义 SVG 图标</h3>
      <NeoUpload
        drag
        :drag-icon="uploadSvg"
        drag-text="Drop files here, or "
        drag-text-link="browse"
      />
    </section>
    <section>
      <h3 class="mb-4 font-bold">使用 Slot 自定义</h3>
      <NeoUpload drag>
        <template #drag-icon>
          <span class="text-5xl">📤</span>
        </template>
        <template #drag-text>
          <span>自定义插槽内容，<em style="color: var(--neo-primary)">任意 HTML</em></span>
        </template>
      </NeoUpload>
    </section>
  </div>
</template>

<script setup lang="ts">
import { NeoUpload } from 'neo-brutal-vue'

const uploadSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="17 8 12 3 7 8"/>
  <line x1="12" y1="3" x2="12" y2="15"/>
</svg>`
</script>
