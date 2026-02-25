<script setup lang="ts">
import { computed } from 'vue'
import type { PaginationProps } from '@/types'

const props = withDefaults(defineProps<PaginationProps>(), {
  current: 1,
  pageSize: 10,
  total: 0,
  pageSizes: () => [10, 20, 50, 100],
  layout: 'total, sizes, prev, pager, next, jumper',
  background: false,
  small: false
})

const emit = defineEmits<{
  (e: 'update:current', value: number): void
  (e: 'update:pageSize', value: number): void
  (e: 'change', current: number, pageSize: number): void
}>()

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

const paginationClass = computed(() => {
  const classes: string[] = ['neo-pagination']
  
  if (props.background) classes.push('neo-pagination--background')
  if (props.small) classes.push('neo-pagination--small')
  
  return classes.join(' ')
})

const handlePrev = () => {
  if (props.current > 1) {
    const newPage = props.current - 1
    emit('update:current', newPage)
    emit('change', newPage, props.pageSize)
  }
}

const handleNext = () => {
  if (props.current < totalPages.value) {
    const newPage = props.current + 1
    emit('update:current', newPage)
    emit('change', newPage, props.pageSize)
  }
}

const handlePageClick = (page: number) => {
  if (page !== props.current && page >= 1 && page <= totalPages.value) {
    emit('update:current', page)
    emit('change', page, props.pageSize)
  }
}

const handlePageSizeChange = (e: Event) => {
  const value = parseInt((e.target as HTMLSelectElement).value)
  emit('update:pageSize', value)
  emit('change', 1, value)
}
</script>

<template>
  <div :class="paginationClass">
    <!-- Total -->
    <span v-if="layout.includes('total')" class="neo-pagination__total">
      共 {{ total }} 条
    </span>
    
    <!-- Page Sizes -->
    <select
      v-if="layout.includes('sizes')"
      class="neo-pagination__sizes"
      :value="pageSize"
      @change="handlePageSizeChange"
    >
      <option v-for="size in pageSizes" :key="size" :value="size">
        {{ size }} 条/页
      </option>
    </select>
    
    <!-- Prev -->
    <button
      v-if="layout.includes('prev')"
      type="button"
      class="neo-pagination__btn neo-pagination__prev"
      :disabled="current <= 1"
      @click="handlePrev"
    >
      ‹
    </button>
    
    <!-- Pager -->
    <span v-if="layout.includes('pager')" class="neo-pagination__pagers">
      <button
        v-for="page in totalPages"
        :key="page"
        type="button"
        :class="['neo-pagination__btn', 'neo-pagination__pager', { 'neo-pagination__pager--active': page === current }]"
        @click="handlePageClick(page)"
      >
        {{ page }}
      </button>
    </span>
    
    <!-- Next -->
    <button
      v-if="layout.includes('next')"
      type="button"
      class="neo-pagination__btn neo-pagination__next"
      :disabled="current >= totalPages"
      @click="handleNext"
    >
      ›
    </button>
    
    <!-- Jumper -->
    <span v-if="layout.includes('jumper')" class="neo-pagination__jumper">
      前往
      <input
        type="number"
        class="neo-pagination__input"
        :min="1"
        :max="totalPages"
        @keyup.enter="(e) => handlePageClick(parseInt((e.target as HTMLInputElement).value))"
      />
      页
    </span>
  </div>
</template>

<style scoped>
.neo-pagination {
  display: inline-flex;
  align-items: center;
  gap: var(--neo-spacing-sm);
  font-family: var(--neo-font-family);
}

.neo-pagination__total {
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
}

.neo-pagination__sizes {
  padding: var(--neo-spacing-xs) var(--neo-spacing-sm);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-primary);
  background: var(--neo-bg-primary);
  border: var(--neo-border-width-thin) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
  cursor: pointer;
}

.neo-pagination__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 var(--neo-spacing-sm);
  font-size: var(--neo-font-size-sm);
  font-weight: var(--neo-font-weight-medium);
  color: var(--neo-text-primary);
  background: var(--neo-bg-primary);
  border: var(--neo-border-width-thin) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
  box-shadow: var(--neo-shadow-sm);
  cursor: pointer;
  transition: all var(--neo-transition-base);
}

.neo-pagination__btn:hover:not(:disabled) {
  transform: translate(-1px, -1px);
  box-shadow: var(--neo-shadow);
}

.neo-pagination__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neo-pagination__pager {
  margin: 0 2px;
}

.neo-pagination__pager--active {
  background: var(--neo-primary);
  color: var(--neo-white);
  border-color: var(--neo-primary);
}

.neo-pagination__jumper {
  display: inline-flex;
  align-items: center;
  gap: var(--neo-spacing-xs);
  font-size: var(--neo-font-size-sm);
  color: var(--neo-text-secondary);
}

.neo-pagination__input {
  width: 48px;
  height: 28px;
  padding: 0 var(--neo-spacing-xs);
  font-size: var(--neo-font-size-sm);
  text-align: center;
  color: var(--neo-text-primary);
  background: var(--neo-bg-primary);
  border: var(--neo-border-width-thin) solid var(--neo-border-color);
  border-radius: var(--neo-radius);
}

/* Background variant */
.neo-pagination--background .neo-pagination__btn {
  background: var(--neo-gray-100);
}

.neo-pagination--background .neo-pagination__pager--active {
  background: var(--neo-primary);
  color: var(--neo-white);
}

/* Small variant */
.neo-pagination--small .neo-pagination__btn {
  height: 28px;
  min-width: 28px;
  font-size: var(--neo-font-size-xs);
}
</style>
