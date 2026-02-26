<template>
  <div class="neo-demo-block">
    <NeoResizable min-height="120px" min-width="250px" style="height: 200px; width: 400px; background-color: var(--neo-secondary);">
      <div style="padding: 1rem;">
        <h3 style="margin-top:0;">Resize Me!</h3>
        <p>Grab the custom Neobrutalism handle at the bottom right corner to resize my dimensions.</p>
      </div>
    </NeoResizable>

    <div style="margin-top: 2rem;">
      <NeoResizable direction="vertical" style="height: 100px; width: 100%; background-color: var(--neo-white);">
        <div style="padding: 1rem; color: var(--neo-black);">
          Vertical Only (Scroll Down Layout Component Idea)
        </div>
      </NeoResizable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NeoResizable } from 'neo-brutal-vue'
</script>
