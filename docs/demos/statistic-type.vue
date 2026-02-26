<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <NeoStatistic title="Primary" :value="1234" type="primary" />
    <NeoStatistic title="Success" :value="5678" type="success" />
    <NeoStatistic title="Warning" :value="9012" type="warning" />
    <NeoStatistic title="Danger" :value="3456" type="danger" />
    <NeoStatistic title="Info" :value="7890" type="info" />
    <NeoStatistic title="Default" :value="1111" type="default" />
  </div>
</template>

<script setup lang="ts">
import { NeoStatistic } from 'neo-brutal-vue'
</script>
