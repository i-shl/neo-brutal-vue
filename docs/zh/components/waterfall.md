# Waterfall 瀑布流布局

瀑布流布局将元素根据可用垂直空间放置在最佳位置。

## 基础用法

<demo vue="../../demos/waterfall-basic.vue" />

## 五列布局

使用 `cols` 属性设置显示为五列。

<demo vue="../../demos/waterfall-cols.vue" />

## 图片瀑布流

瀑布流非常适合展示高度不一的图片。

<demo vue="../../demos/waterfall-images.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|-------------|------|---------|
| items | 待展示的数据数组 | `any[]` | `[]` |
| cols | 显示的列数 | `number` | `3` |
| gap | 元素之间的间距（像素） | `number` | `16` |

## 插槽

| 插槽名 | 说明 |
|------|-------------|
| default | 自定义每个条目的内容，参数为 `{ item }` |
