# Button 按钮

常用操作按钮，支持多种类型、尺寸和形状。

## 基础用法

<demo vue="../../demos/button-basic.vue" />

## 类型 (type)

除默认外，可选：`primary`、`secondary`、`accent`、`success`、`warning`、`danger`、`info`、`neo`、`pink`、`purple`、`blue`、`orange`、`green`。

## 变体 (variant)

- `solid`（默认）：实心
- `outline`：描边
- `ghost`：透明背景

<demo vue="../../demos/button-variant.vue" />

## 尺寸 (size)

`xs`、`sm`、`md`、`lg`、`xl`。

<demo vue="../../demos/button-size.vue" />

## 形状 (shape)

- `default`：默认圆角
- `round`：更圆
- `circle`：圆形（常配合图标）
- `sharp`：直角

<demo vue="../../demos/button-shape.vue" />

## 禁用与加载

<demo vue="../../demos/button-disabled.vue" />

## 块级按钮

<demo vue="../../demos/button-block.vue" />

## 链接形式

设置 `href` 可将按钮渲染为链接。使用 `target="_blank"` 在新窗口打开。

<demo vue="../../demos/button-link.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 类型 | `string` | `'primary'` |
| variant | 变体 | `'solid' \| 'outline' \| 'ghost' \| 'soft'` | `'solid'` |
| size | 尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| shape | 形状 | `'default' \| 'round' \| 'circle' \| 'sharp'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| block | 是否块级 | `boolean` | `false` |
| href | 链接地址（为 a 标签时） | `string` | - |
| target | 链接打开方式，如 `_blank` | `string` | - |

## 事件

| 事件名 | 说明 |
|--------|------|
| click | 点击时触发 |
