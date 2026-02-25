<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  action?: string
  drag?: boolean
  multiple?: boolean
  accept?: string
  limit?: number
}>()

const emit = defineEmits(['change', 'success', 'error', 'remove'])

const isDragOver = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([])

const handleFileSelect = (e: Event) => {
  const selectedFiles = (e.target as HTMLInputElement).files
  if (selectedFiles) {
    addFiles(Array.from(selectedFiles))
  }
}

const addFiles = (newFiles: File[]) => {
  files.value = [...files.value, ...newFiles]
  emit('change', files.value)
}

const removeFile = (index: number) => {
  files.value.splice(index, 1)
  emit('change', files.value)
  emit('remove', index)
}

const triggerClick = () => {
  fileInput.value?.click()
}
</script>

<template>
  <div class="neo-upload">
    <div 
      class="neo-upload__trigger"
      :class="{ 'is-dragover': isDragOver }"
      @click="triggerClick"
      @dragover.prevent="isDragOver = true"
      @dragleave.prevent="isDragOver = false"
      @drop.prevent="isDragOver = false; handleFileSelect($event)"
    >
      <input 
        ref="fileInput"
        type="file" 
        class="neo-upload__input" 
        :multiple="multiple"
        :accept="accept"
        @change="handleFileSelect"
      >
      <div v-if="drag" class="neo-upload__drag-content">
        <span class="neo-upload__icon">📁</span>
        <p>将文件拖到此处，或 <span>点击上传</span></p>
      </div>
      <slot v-else />
    </div>
    
    <div v-if="files.length > 0" class="neo-upload__list">
      <div v-for="(file, index) in files" :key="index" class="neo-upload__item">
        <span class="neo-upload__item-name">{{ file.name }}</span>
        <span class="neo-upload__item-status">已就绪</span>
        <span class="neo-upload__item-delete" @click="removeFile(index)">✕</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-upload {
  width: 100%;
}

.neo-upload__trigger {
  border: 4px dashed black;
  padding: 2rem;
  background: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.neo-upload__trigger:hover, .neo-upload__trigger.is-dragover {
  background: var(--neo-yellow);
  box-shadow: 8px 8px 0px black;
  transform: translate(-4px, -4px);
}

.neo-upload__input {
  display: none;
}

.neo-upload__drag-content p {
  font-weight: 800;
  margin-top: 1rem;
}

.neo-upload__drag-content p span {
  color: var(--neo-primary);
  text-decoration: underline;
}

.neo-upload__icon {
  font-size: 3rem;
}

.neo-upload__list {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.neo-upload__item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: white;
  border: 3px solid black;
  box-shadow: 4px 4px 0px black;
  font-weight: 700;
}

.neo-upload__item-name {
  flex: 1;
}

.neo-upload__item-status {
  font-size: 0.8rem;
  background: var(--neo-green);
  padding: 2px 8px;
  border: 2px solid black;
  margin-right: 1rem;
}

.neo-upload__item-delete {
  cursor: pointer;
  font-weight: 900;
  color: var(--neo-pink);
}

.neo-upload__item-delete:hover {
  transform: scale(1.2);
}
</style>
