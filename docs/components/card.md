# Card 卡片

内容容器，支持标题、副标题、插槽。

## 基础用法

```vue
<template>
  <NeoCard title="卡片标题" sub-title="副标题">
    卡片内容
  </NeoCard>
</template>
```

## 变体 (variant)

`default`、`flat`、`elevated`、`gradient`、`colored`。

## 插槽

- `header`：自定义头部
- `title`：标题
- `sub-title`：副标题
- `footer`：底部
- 默认：正文内容

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| subTitle | 副标题 | `string` |
| shadow | 是否阴影 | `boolean \| 'hover' \| 'never'` |
| bordered | 是否边框 | `boolean` |
| variant | 样式变体 | `CardVariant` |
