# Carousel

Carousel for images or content.

## Basic Usage

```vue
<template>
  <NeoCarousel :items="items" />
</template>

<script setup lang="ts">
const items = ref([
  { image: 'https://picsum.photos/800/300?1', title: 'Title 1' },
  { image: 'https://picsum.photos/800/300?2', title: 'Title 2' },
])
</script>
```

## Height & Active Item

```vue
<template>
  <NeoCarousel :items="items" height="400px" :active="1" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| items | Carousel items | `CarouselItem[]` |
| active | Current active index | `number` |
| height | Height | `string \| number` |

CarouselItem: `{ image: string, title?: string }`.
