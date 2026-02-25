# Tooltip 文字提示

鼠标悬停或聚焦时显示提示文字。

## 基础用法

```vue
<template>
  <NeoTooltip content="提示文字">
    <NeoButton>悬停我</NeoButton>
  </NeoTooltip>
</template>
```

## 位置与触发方式

```vue
<template>
  <NeoTooltip content="顶部" placement="top">Top</NeoTooltip>
  <NeoTooltip content="点击显示" trigger="click">Click</NeoTooltip>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| content | 提示内容 | `string` |
| placement | 出现位置 | `'top' \| 'bottom' \| 'left' \| 'right'` 等 |
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus' \| 'manual'` |
| effect | 主题 | `'light' \| 'dark'` |
| disabled | 是否禁用 | `boolean` |

插槽：默认（触发元素）。
