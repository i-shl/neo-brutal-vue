<template>
  <NeoTimeline>
    <NeoTimelineItem timestamp="2025-01-01" color="var(--neo-primary)">Completed</NeoTimelineItem>
    <NeoTimelineItem timestamp="2025-01-02">In progress</NeoTimelineItem>
    <NeoTimelineItem timestamp="2025-01-03">Pending</NeoTimelineItem>
  </NeoTimeline>
</template>

<script setup lang="ts">
import { NeoTimeline, NeoTimelineItem } from 'neo-brutal-vue'
</script>
