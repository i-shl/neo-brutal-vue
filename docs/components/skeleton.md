# Skeleton 骨架屏

内容加载中的占位骨架。

## 基础用法

```vue
<template>
  <NeoSkeleton />
</template>
```

## 多行与自定义

```vue
<template>
  <NeoSkeleton :rows="4" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| rows | 段落行数 | `number` |

插槽：默认（加载完成后显示的内容）。
