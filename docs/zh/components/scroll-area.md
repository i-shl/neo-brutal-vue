# ScrollArea 滚动区域

固定高度/最大高度的滚动容器，带自定义滚动条样式。

## 基础用法

```vue
<template>
  <NeoScrollArea height="200px">
    <div>很长很长的内容...</div>
  </NeoScrollArea>
</template>
```

## 最大高度

```vue
<template>
  <NeoScrollArea max-height="300px">内容</NeoScrollArea>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| height | 固定高度 | `string \| number` |
| maxHeight | 最大高度 | `string \| number` |
