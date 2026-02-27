<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    action?: string
    drag?: boolean
    multiple?: boolean
    accept?: string
    limit?: number
    /** 拖拽区域图标：图片 URL 或 SVG 字符串 */
    dragIcon?: string
    /** 拖拽区域主文案 */
    dragText?: string
    /** 拖拽区域链接文案（如 "click to upload"） */
    dragTextLink?: string
  }>(),
  {
    dragText: 'Drop files here, or ',
    dragTextLink: 'click to upload',
  },
)

/** 判断图标是否为图片 URL（非 SVG 字符串） */
const isImageUrl = (val: string) =>
  /^(https?:|\/|\.\/|data:image)/i.test(val) && !val.trim().startsWith('<')

const emit = defineEmits(['change', 'success', 'error', 'remove'])

const isDragOver = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([])

const handleFileSelect = (e: Event) => {
  const target = e.target as HTMLInputElement
  const selectedFiles = target?.files
  if (selectedFiles && selectedFiles.length > 0) {
    addFiles(Array.from(selectedFiles))
    target.value = ''
  }
}

const handleDrop = (e: DragEvent) => {
  isDragOver.value = false
  const droppedFiles = e.dataTransfer?.files
  if (droppedFiles && droppedFiles.length > 0) {
    addFiles(Array.from(droppedFiles))
  }
  e.preventDefault()
}

const addFiles = (newFiles: File[]) => {
  let toAdd = newFiles
  if (props.limit !== undefined && props.limit > 0) {
    const remaining = props.limit - files.value.length
    if (remaining <= 0) return
    toAdd = newFiles.slice(0, remaining)
  }
  files.value = [...files.value, ...toAdd]
  emit('change', files.value)
  if (toAdd.length > 0) emit('success', toAdd)
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
      :class="{ 
        'is-dragover': isDragOver, 
        'is-limit-reached': limit && files.length >= limit,
        'has-drag': drag
      }"
      @click="!limit || files.length < limit ? triggerClick() : null"
      @dragover.prevent="(!limit || files.length < limit) && (isDragOver = true)"
      @dragleave.prevent="isDragOver = false"
      @drop.prevent="handleDrop"
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
        <div class="neo-upload__icon-box">
          <slot name="drag-icon">
            <img
              v-if="dragIcon && isImageUrl(dragIcon)"
              :src="dragIcon"
              alt=""
              class="neo-upload__icon-img"
            >
            <span
              v-else-if="dragIcon && !isImageUrl(dragIcon)"
              class="neo-upload__icon-svg"
              v-html="dragIcon"
            />
            <span v-else>📁</span>
          </slot>
        </div>
        <p class="neo-upload__main-text">
          <slot name="drag-text">
            {{ dragText }}<span class="neo-upload__link">{{ dragTextLink }}</span>
          </slot>
        </p>
        <p v-if="limit" class="neo-upload__limit">Maximum {{ limit }} file(s) allowed</p>
      </div>
      <slot v-else />
    </div>
    
    <TransitionGroup name="neo-upload-list" tag="div" class="neo-upload__list">
      <div v-for="(file, index) in files" :key="file.name + index" class="neo-upload__item">
        <div class="neo-upload__item-icon">📄</div>
        <span class="neo-upload__item-name">{{ file.name }}</span>
        <span class="neo-upload__item-status">Ready</span>
        <button type="button" class="neo-upload__item-delete" @click="removeFile(index)">✕</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.neo-upload {
  width: 100%;
  font-family: var(--neo-font-family);
}

.neo-upload__trigger {
  border: 4px dashed var(--neo-black);
  padding: 3rem 2rem;
  background-color: var(--neo-white);
  text-align: center;
  cursor: pointer;
  transition: var(--neo-transition);
  position: relative;
  border-radius: 4px;
}

.neo-upload__trigger:hover {
  background-color: var(--neo-gray-50);
  border-style: solid;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--neo-black);
}

.neo-upload__trigger.is-dragover {
  background-color: var(--neo-main);
  border-style: solid;
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--neo-black);
}

.neo-upload__trigger.is-limit-reached {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--neo-gray-100);
}

.neo-upload__input {
  display: none;
}

.neo-upload__drag-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.neo-upload__icon-box {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(4px 4px 0 var(--neo-black));
  display: flex;
  align-items: center;
  justify-content: center;
}

.neo-upload__icon-img {
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
}

.neo-upload__icon-svg {
  display: inline-flex;
  width: 3.5rem;
  height: 3.5rem;
}

.neo-upload__icon-svg :deep(svg) {
  width: 100%;
  height: 100%;
}

.neo-upload__main-text {
  font-size: 1.125rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  color: var(--neo-black);
}

.neo-upload__link {
  color: var(--neo-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.neo-upload__limit {
  font-size: 0.8125rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-gray-500);
}

.neo-upload__list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.neo-upload__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0 var(--neo-black);
  font-weight: var(--neo-font-weight-bold);
  transition: var(--neo-transition);
}

.neo-upload__item:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 var(--neo-black);
}

.neo-upload__item-icon {
  font-size: 1.25rem;
}

.neo-upload__item-name {
  flex: 1;
  color: var(--neo-black);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.neo-upload__item-status {
  font-size: 0.75rem;
  font-weight: var(--neo-font-weight-black);
  background-color: var(--neo-main);
  color: var(--neo-black);
  padding: 0.25rem 0.625rem;
  border: var(--neo-border);
  text-transform: uppercase;
  box-shadow: 2px 2px 0 var(--neo-black);
}

.neo-upload__item-delete {
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--neo-danger);
  color: var(--neo-white);
  border: var(--neo-border);
  font-weight: var(--neo-font-weight-black);
  box-shadow: 2px 2px 0 var(--neo-black);
  transition: var(--neo-transition);
}

.neo-upload__item-delete:hover {
  transform: scale(1.1) rotate(90deg);
  background-color: var(--neo-black);
}

/* List Transitions */
.neo-upload-list-enter-active,
.neo-upload-list-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.neo-upload-list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.neo-upload-list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
