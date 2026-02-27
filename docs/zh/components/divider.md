# Divider 分割线

分隔内容块或列表。

## 基础用法

<demo vue="../../demos/divider-basic.vue" />

## 实线、虚线及带文字

<demo vue="../../demos/divider-more.vue" />

可配合 `orientation`、`content-position` 等属性实现文字分割线。

## 类型 (type)

<demo vue="../../demos/divider-type.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| dashed | 是否虚线 | `boolean` | `false` |
| orientation | 水平/垂直 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| contentPosition | 文字位置 | `'left' \| 'center' \| 'right'` | `'center'` |
| type | 颜色类型 | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` |
