<template>
  <div class="neo-demo-block">
    <NeoTable :data="tableData" :columns="columns" border stripe>
      <!-- Custom Header Slot -->
      <template #header-role="{ column }">
        <span style="color: var(--neo-primary)">🚀 {{ column.label }}</span>
      </template>

      <!-- Custom Cell Slot -->
      <template #name="{ row }">
        <div style="display: flex; align-items: center; gap: 8px">
          <NeoAvatar :size="24" :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`" />
          <span style="font-weight: 900">{{ row.name }}</span>
        </div>
      </template>

      <template #role="{ row }">
        <NeoTag :type="getTagType(row.role)">{{ row.role }}</NeoTag>
      </template>

      <!-- Action Column -->
      <template #actions="{ row }">
        <NeoButton size="xs" type="primary" @click="handleEdit(row)">Edit</NeoButton>
      </template>
    </NeoTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoTable, NeoTag, NeoButton, NeoAvatar } from 'neo-brutal-vue'

const tableData = ref([
  { name: 'Tom', age: 18, role: 'Admin' },
  { name: 'Jerry', age: 20, role: 'User' },
  { name: 'Spike', age: 25, role: 'Editor' },
  { name: 'Tyke', age: 5, role: 'Guest' },
])

const columns = [
  { prop: 'name', label: 'Member' },
  { prop: 'age', label: 'Age', align: 'center' },
  { prop: 'role', label: 'Role', align: 'center' },
  { prop: 'actions', label: 'Actions', align: 'right' }
]

const getTagType = (role: string) => {
  switch (role) {
    case 'Admin': return 'danger'
    case 'Editor': return 'warning'
    case 'User': return 'success'
    default: return 'info'
  }
}

const handleEdit = (row: any) => {
  alert(`Editing ${row.name}`)
}
</script>
