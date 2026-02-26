<template>
  <div class="neo-demo-block">
    <NeoContextMenu :options="menuOptions">
      <div style="border: var(--neo-border-thick); border-style: dashed; padding: 4rem; text-align: center; font-weight: 900; background-color: var(--neo-gray-50); cursor: context-menu;">
        RIGHT CLICK ANYWHERE IN THIS BOX
      </div>
    </NeoContextMenu>
  </div>
</template>

<script setup lang="ts">
import { NeoContextMenu } from 'neo-brutal-vue'

const menuOptions = [
  { label: 'Edit Project', action: () => alert('Editing...') },
  { label: 'Duplicate', action: () => alert('Duplicated!') },
  { label: '', divider: true },
  { label: 'Share', disabled: true },
  { label: '', divider: true },
  { label: 'Delete', action: () => alert('Deleted.') }
]
</script>
