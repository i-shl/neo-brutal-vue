# Badge 徽标

在元素角上显示数字或小圆点提示。

## 基础用法

```vue
<template>
  <NeoBadge :value="5">
    <NeoButton>消息</NeoButton>
  </NeoBadge>
</template>
```

## 最大值与圆点

```vue
<template>
  <NeoBadge :value="100" :max="99">评论</NeoBadge>
  <NeoBadge is-dot>状态</NeoBadge>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| value | 显示值（数字或文字） | `string \| number` |
| max | 最大值，超过显示 max+ | `number` |
| isDot | 是否显示为圆点 | `boolean` |
| hidden | 是否隐藏 | `boolean` |
| type | 类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` |
