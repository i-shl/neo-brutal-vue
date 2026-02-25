<script setup lang="ts">
import { computed } from 'vue'
import type { TableProps } from '@/types'

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  stripe: false,
  border: true,
  showHeader: true
})

const tableClass = computed(() => {
  return [
    'neo-table',
    { 'neo-table--stripe': props.stripe },
    { 'neo-table--border': props.border }
  ]
})
</script>

<template>
  <div class="neo-table-container">
    <table :class="tableClass">
      <thead v-if="showHeader">
        <tr>
          <th v-for="col in columns" :key="col.prop" :style="{ width: typeof col.width === 'number' ? col.width + 'px' : col.width }">
            <slot :name="'header-' + col.prop" :column="col">
              {{ col.label }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="col in columns" :key="col.prop">
            <slot :name="col.prop" :row="row" :index="rowIndex">
              {{ row[col.prop!] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.neo-table-container {
  width: 100%;
  overflow-x: auto;
  border: 4px solid var(--neo-black);
  box-shadow: 8px 8px 0px var(--neo-black);
  background: white;
}

.neo-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.neo-table th, .neo-table td {
  padding: 1rem;
  border: 2px solid var(--neo-black);
}

.neo-table th {
  background: var(--neo-yellow);
  font-weight: 900;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.neo-table tr:hover td {
  background: var(--neo-bg-yellow);
}

.neo-table--stripe tr:nth-child(even) td {
  background: var(--neo-gray-50);
}

.neo-table--border th, .neo-table--border td {
  border-width: 2px;
}
</style>
