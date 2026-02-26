<script setup lang="ts">
import { computed } from 'vue'
import type { TableProps } from '@/types'

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  stripe: false,
  border: true,
  rowKey: 'id',
  showHeader: true,
})

const tableClass = computed(() => {
  const classes = ['neo-table']
  if (props.stripe) classes.push('neo-table--stripe')
  if (props.border) classes.push('neo-table--border')
  return classes.join(' ')
})

const getRowKey = (row: any, index: number) => {
  if (typeof props.rowKey === 'function') return props.rowKey(row)
  return row[props.rowKey as string] ?? index
}

const getCellValue = (row: any, prop: string | undefined) => {
  if (!prop) return ''
  return prop.split('.').reduce((obj, key) => obj?.[key], row)
}
</script>

<template>
  <div class="neo-table-wrapper" :class="{ 'is-borderless': !border }">
    <div class="neo-table-container">
      <table :class="tableClass">
        <thead v-if="showHeader">
          <tr>
            <th
              v-for="col in columns"
              :key="col.prop || col.label"
              :style="{ width: col.width }"
              :class="[`align-${col.align || 'left'}`]"
            >
              <slot :name="`header-${col.prop}`" :column="col">
                {{ col.label }}
              </slot>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in data" :key="getRowKey(row, index)">
            <td
              v-for="col in columns"
              :key="col.prop || col.label"
              :class="[`align-${col.align || 'left'}`]"
            >
              <slot :name="col.prop" :row="row" :index="index">
                {{ getCellValue(row, col.prop) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div v-if="!data.length" class="neo-table__empty">
        <slot name="empty">
          <div class="neo-table__empty-content">
            <span class="neo-table__empty-icon">📂</span>
            <p>NO DATA FOUND</p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-table-wrapper {
  width: 100%;
  border: var(--neo-border-thick);
  box-shadow: 8px 8px 0px var(--neo-black);
  background-color: var(--neo-black);
  overflow: hidden;
}

.neo-table-wrapper.is-borderless {
  border: none;
  box-shadow: none;
}

.neo-table-container {
  width: 100%;
  overflow-x: auto;
  background-color: var(--neo-white);
}

.neo-table {
  display: table !important;
  width: 100% !important;
  margin: 0 !important;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: left;
  font-family: var(--neo-font-family);
  background-color: var(--neo-white);
}

th {
  background-color: var(--neo-main);
  color: var(--neo-black);
  padding: 1.25rem 1rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: var(--neo-border-thick);
  border-right: var(--neo-border);
}

th:last-child {
  border-right: none;
}

td {
  padding: 1rem;
  border-bottom: var(--neo-border);
  border-right: var(--neo-border);
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-black);
  transition: var(--neo-transition);
}

td:last-child {
  border-right: none;
}

tr:last-child td {
  border-bottom: none;
}

.neo-table--stripe tr:nth-child(even) td {
  background-color: var(--neo-gray-50);
}

/* --- Alignment --- */
.align-center { text-align: center; }
.align-right { text-align: right; }

/* --- Hover --- */
tr:hover td {
  background-color: var(--neo-gray-100);
  color: var(--neo-black);
}

.neo-table__empty {
  padding: 4rem 2rem;
  text-align: center;
}

.neo-table__empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.neo-table__empty-icon {
  font-size: 3rem;
  filter: drop-shadow(4px 4px 0 var(--neo-black));
}

.neo-table__empty-content p {
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--neo-gray-500);
}
</style>
