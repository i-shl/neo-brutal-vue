<template>
  <div>
    <NeoBadge :value="100" :max="99">
      <NeoButton>评论</NeoButton>
    </NeoBadge>
    <NeoBadge is-dot>
      <NeoButton>状态</NeoButton>
    </NeoBadge>
  </div>
</template>

<script setup lang="ts">
import { NeoBadge, NeoButton } from 'neo-brutal-vue'
</script>
