<template>
  <div class="neo-demo-block">
    <NeoDescriptions :column="2" border>
    <NeoDescriptionsItem label="A">1</NeoDescriptionsItem>
    <NeoDescriptionsItem label="B">2</NeoDescriptionsItem>
    <NeoDescriptionsItem label="C">3</NeoDescriptionsItem>
    <NeoDescriptionsItem label="D">4</NeoDescriptionsItem>
    </NeoDescriptions>
  </div>
</template>

<script setup lang="ts">
import { NeoDescriptions, NeoDescriptionsItem } from 'neo-brutal-vue'
</script>
