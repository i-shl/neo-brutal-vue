# Carousel 走马灯

轮播展示图片或内容。

## 基础用法

```vue
<template>
  <NeoCarousel :items="items" />
</template>

<script setup lang="ts">
const items = ref([
  { image: 'https://picsum.photos/800/300?1', title: '标题 1' },
  { image: 'https://picsum.photos/800/300?2', title: '标题 2' },
])
</script>
```

## 指定高度与当前项

```vue
<template>
  <NeoCarousel :items="items" height="400px" :active="1" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| items | 轮播项 | `CarouselItem[]` |
| active | 当前激活索引 | `number` |
| height | 高度 | `string \| number` |

CarouselItem：`{ image: string, title?: string }`。
