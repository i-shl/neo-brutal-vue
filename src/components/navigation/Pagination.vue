<script setup lang="ts">
import { computed } from 'vue'
import type { PaginationProps } from '@/types'

const props = withDefaults(defineProps<PaginationProps>(), {
  current: 1,
  pageSize: 10,
  total: 0,
  pageSizes: () => [10, 20, 50, 100],
  layout: 'total, prev, pager, next',
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

// Windowing logic for 5 pages
const pagerPages = computed(() => {
  const count = 5
  const total = totalPages.value
  const current = props.current
  
  if (total <= count) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  
  let start = current - Math.floor(count / 2)
  if (start < 1) start = 1
  if (start + count - 1 > total) start = total - count + 1
  
  return Array.from({ length: count }, (_, i) => start + i)
})

const handlePrev = () => {
  if (props.current > 1) {
    const newPage = props.current - 1
    handlePageClick(newPage)
  }
}

const handleNext = () => {
  if (props.current < totalPages.value) {
    const newPage = props.current + 1
    handlePageClick(newPage)
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
      TOTAL: {{ total }}
    </span>
    
    <!-- Page Sizes -->
    <div v-if="layout.includes('sizes')" class="neo-pagination__sizes-wrapper">
      <select
        class="neo-pagination__sizes"
        :value="pageSize"
        @change="handlePageSizeChange"
      >
        <option v-for="size in pageSizes" :key="size" :value="size">
          {{ size }} / PAGE
        </option>
      </select>
    </div>
    
    <!-- Prev -->
    <button
      v-if="layout.includes('prev')"
      type="button"
      class="neo-pagination__btn neo-pagination__prev"
      :disabled="current <= 1"
      @click="handlePrev"
    >
      <svg viewBox="0 0 24 24" width="20" height="20"><path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" d="M15 18l-6-6 6-6"/></svg>
    </button>
    
    <!-- Pager -->
    <div v-if="layout.includes('pager')" class="neo-pagination__pagers">
      <button
        v-for="page in pagerPages"
        :key="page"
        type="button"
        :class="['neo-pagination__btn', 'neo-pagination__pager', { 'is-active': page === current }]"
        @click="handlePageClick(page)"
      >
        {{ page }}
      </button>
    </div>
    
    <!-- Next -->
    <button
      v-if="layout.includes('next')"
      type="button"
      class="neo-pagination__btn neo-pagination__next"
      :disabled="current >= totalPages"
      @click="handleNext"
    >
      <svg viewBox="0 0 24 24" width="20" height="20"><path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" d="M9 18l6-6-6-6"/></svg>
    </button>
    
    <!-- Jumper -->
    <div v-if="layout.includes('jumper')" class="neo-pagination__jumper">
      GO TO
      <input
        type="number"
        class="neo-pagination__input"
        :value="current"
        :min="1"
        :max="totalPages"
        @keyup.enter="(e) => handlePageClick(parseInt((e.target as HTMLInputElement).value))"
      />
    </div>
  </div>
</template>

<style scoped>
.neo-pagination {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--neo-font-family);
}

.neo-pagination__total {
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.neo-pagination__sizes-wrapper {
  position: relative;
}

.neo-pagination__sizes {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 3px 3px 0px var(--neo-black);
  cursor: pointer;
  appearance: none;
  text-transform: uppercase;
}

.neo-pagination__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 4px 4px 0px var(--neo-black);
  cursor: pointer;
  transition: var(--neo-transition);
}

.neo-pagination__btn:hover:not(:disabled) {
  background-color: var(--neo-gray-50);
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0px var(--neo-black);
}

.neo-pagination__btn:active:not(:disabled) {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0px var(--neo-black);
}

.neo-pagination__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

.neo-pagination__pagers {
  display: inline-flex;
  gap: 0.75rem;
}

.neo-pagination__pager.is-active {
  background-color: var(--neo-main);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--neo-black);
}

.neo-pagination__jumper {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  text-transform: uppercase;
}

.neo-pagination__input {
  width: 3.5rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: var(--neo-font-weight-black);
  text-align: center;
  color: var(--neo-black);
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 3px 3px 0px var(--neo-black);
  transition: var(--neo-transition);
}

.neo-pagination__input:focus {
  outline: none;
  background-color: var(--neo-main);
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px var(--neo-black);
}

/* Small variant */
.neo-pagination--small .neo-pagination__btn,
.neo-pagination--small .neo-pagination__input,
.neo-pagination--small .neo-pagination__sizes {
  height: 2rem;
  min-width: 2rem;
  font-size: 0.75rem;
}
</style>
