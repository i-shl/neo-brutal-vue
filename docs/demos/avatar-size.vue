<template>
  <div>
    <NeoAvatar size="lg" src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
    <NeoAvatar size="md" src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" />
    <NeoAvatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" />
    <NeoAvatar shape="square" src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" />
  </div>
</template>

<script setup lang="ts">
import { NeoAvatar } from 'neo-brutal-vue'
</script>
