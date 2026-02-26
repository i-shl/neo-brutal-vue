<template>
  <div class="neo-demo-block">
    <NeoDescriptions title="User Info" :column="2">
      <NeoDescriptionsItem label="Name">John Doe</NeoDescriptionsItem>
      <NeoDescriptionsItem label="Phone">138****0000</NeoDescriptionsItem>
      <NeoDescriptionsItem label="Address" :span="2">Beijing Chaoyang District</NeoDescriptionsItem>
    </NeoDescriptions>
  </div>
</template>

<script setup lang="ts">
import { NeoDescriptions, NeoDescriptionsItem } from 'neo-brutal-vue'
</script>
