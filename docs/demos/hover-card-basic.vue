<template>
  <div class="neo-demo-block" style="display: flex; gap: 2rem; justify-content: center; padding: 4rem 0;">
    <NeoHoverCard placement="top">
      <NeoButton type="warning">Hover Top</NeoButton>
      <template #content>
        <div style="font-weight: 900; margin-bottom: 8px;">@ekmas/neobrutalism</div>
        <p style="margin: 0; font-size: 0.8rem; color: var(--neo-gray-600);">The library that inspired this component. Check out their awesome React components!</p>
      </template>
    </NeoHoverCard>

    <NeoHoverCard placement="bottom">
      <NeoButton type="success">Hover Bottom</NeoButton>
      <template #content>
        <div style="font-weight: 900; margin-bottom: 8px;">User Profile</div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <NeoAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
          <div style="font-size: 0.875rem;">
            <div><strong>Felix</strong></div>
            <div style="color: var(--neo-gray-500);">Software Engineer</div>
          </div>
        </div>
      </template>
    </NeoHoverCard>
  </div>
</template>

<script setup lang="ts">
import { NeoHoverCard, NeoButton, NeoAvatar } from 'neo-brutal-vue'
</script>
