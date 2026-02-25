# Button 按钮

常用操作按钮，支持多种类型、尺寸和形状。

## 基础用法

```vue
<template>
  <NeoButton>默认</NeoButton>
  <NeoButton type="primary">主要</NeoButton>
  <NeoButton type="success">成功</NeoButton>
  <NeoButton type="warning">警告</NeoButton>
  <NeoButton type="danger">危险</NeoButton>
</template>
```

## 类型 (type)

除默认外，可选：`primary`、`secondary`、`accent`、`success`、`warning`、`danger`、`info`、`neo`、`pink`、`purple`、`blue`、`orange`、`green`。

## 变体 (variant)

- `solid`（默认）：实心
- `outline`：描边
- `ghost`：透明背景

```vue
<template>
  <NeoButton variant="solid" type="primary">Solid</NeoButton>
  <NeoButton variant="outline" type="primary">Outline</NeoButton>
  <NeoButton variant="ghost" type="primary">Ghost</NeoButton>
</template>
```

## 尺寸 (size)

`xs`、`sm`、`md`、`lg`、`xl`。

```vue
<template>
  <NeoButton size="xs">超小</NeoButton>
  <NeoButton size="sm">小</NeoButton>
  <NeoButton size="md">中</NeoButton>
  <NeoButton size="lg">大</NeoButton>
  <NeoButton size="xl">超大</NeoButton>
</template>
```

## 形状 (shape)

- `default`：默认圆角
- `round`：更圆
- `circle`：圆形（常配合图标）
- `sharp`：直角

```vue
<template>
  <NeoButton shape="round">圆角</NeoButton>
  <NeoButton circle>🔥</NeoButton>
  <NeoButton shape="sharp">直角</NeoButton>
</template>
```

## 禁用与加载

```vue
<template>
  <NeoButton disabled>禁用</NeoButton>
  <NeoButton :loading="true">加载中</NeoButton>
</template>
```

## 块级按钮

```vue
<template>
  <NeoButton block>块级按钮</NeoButton>
</template>
```

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

## 事件

| 事件名 | 说明 |
|--------|------|
| click | 点击时触发 |
