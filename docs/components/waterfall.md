# Waterfall 瀑布流布局

A layout that places elements in optimal positions based on available vertical space.

## Basic Usage

<demo vue="../demos/waterfall-basic.vue" />

## Five Columns

Use the `cols` prop to set the layout to five columns.

<demo vue="../demos/waterfall-cols.vue" />

## Image Waterfall

Waterfall is perfect for displaying images with different heights.

<demo vue="../demos/waterfall-images.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| items | Array of items to display | `any[]` | `[]` |
| cols | Number of columns | `number` | `3` |
| gap | Gap between items in pixels | `number` | `16` |

## Slots

| Name | Description |
|------|-------------|
| default | Custom content for each item, scoped with `{ item }` |
