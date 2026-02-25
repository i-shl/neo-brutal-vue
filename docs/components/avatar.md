# Avatar 头像

用户头像，支持图片、图标或文字。

## 基础用法

```vue
<template>
  <NeoAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
  <NeoAvatar>U</NeoAvatar>
  <NeoAvatar icon="👤" />
</template>
```

## 尺寸与形状

```vue
<template>
  <NeoAvatar size="lg" src="..." />
  <NeoAvatar shape="square" src="..." />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| src | 图片地址 | `string` |
| icon | 图标（emoji 或类名） | `string` |
| size | 尺寸 | `ComponentSize \| number` |
| shape | 形状 | `'circle' \| 'square'` |
| alt | 图片 alt | `string` |

插槽：默认（文字或自定义内容）。
