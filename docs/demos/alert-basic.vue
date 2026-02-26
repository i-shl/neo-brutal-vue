<template>
  <div>
    <NeoAlert title="Notice" description="This is a description" />
    <NeoAlert type="success" title="Success" />
    <NeoAlert type="warning" title="Warning" />
    <NeoAlert type="error" title="Error" />
  </div>
</template>

<script setup lang="ts">
import { NeoAlert } from 'neo-brutal-vue'
</script>
