# Timeline

Display event list in chronological order.

## Basic Usage

```vue
<template>
  <NeoTimeline>
    <NeoTimelineItem>Step 1</NeoTimelineItem>
    <NeoTimelineItem>Step 2</NeoTimelineItem>
    <NeoTimelineItem>Step 3</NeoTimelineItem>
  </NeoTimeline>
</template>
```

## With Timestamp & Status

```vue
<template>
  <NeoTimeline>
    <NeoTimelineItem timestamp="2025-01-01" type="primary">Completed</NeoTimelineItem>
    <NeoTimelineItem timestamp="2025-01-02">In progress</NeoTimelineItem>
  </NeoTimeline>
</template>
```

## API

**NeoTimeline**: Container. Can configure line style.

**NeoTimelineItem**

| Prop | Description | Type |
|------|-------------|------|
| timestamp | Timestamp text | `string` |
| type | Node type/color | `string` |

Slots: default (content).
