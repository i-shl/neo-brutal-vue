# Carousel 走马灯

轮播展示图片或内容。

## 基础用法

<demo vue="../../demos/carousel-basic.vue" />

## 指定高度与当前项

<demo vue="../../demos/carousel-height.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| items | 轮播项 | `CarouselItem[]` |
| active | 当前激活索引 | `number` |
| height | 高度 | `string \| number` |

CarouselItem：`{ image: string, title?: string }`。
