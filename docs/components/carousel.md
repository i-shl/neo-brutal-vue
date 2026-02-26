# Carousel

Carousel for images or content.

## Basic Usage

<demo vue="../demos/carousel-basic.vue" />

## Height & Active Item

<demo vue="../demos/carousel-height.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| items | Carousel items | `CarouselItem[]` |
| active | Current active index | `number` |
| height | Height | `string \| number` |

CarouselItem: `{ image: string, title?: string }`.
