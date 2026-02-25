# Popover 气泡卡片

点击/悬停时弹出的气泡层，可放更多内容。

## 基础用法

```vue
<template>
  <NeoPopover content="气泡内容" title="标题">
    <NeoButton>点击</NeoButton>
  </NeoPopover>
</template>
```

## 触发方式与位置

```vue
<template>
  <NeoPopover trigger="hover" placement="bottom" content="悬停显示" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| content | 正文内容 | `string` |
| title | 标题 | `string` |
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus' \| 'manual'` |
| placement | 位置 | 同 Tooltip |
| width | 宽度 | `string \| number` |
| effect | 主题 | `'light' \| 'dark'` |
| disabled | 禁用 | `boolean` |

插槽：默认（触发元素）、`content`（自定义内容）。
