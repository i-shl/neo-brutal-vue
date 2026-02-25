# Row 行

栅格行，与 Col 搭配实现 12 栏布局。

## 基础用法

```vue
<template>
  <NeoRow>
    <NeoCol :span="12">占 12 栏</NeoCol>
    <NeoCol :span="12">占 12 栏</NeoCol>
  </NeoRow>
  <NeoRow>
    <NeoCol :span="8">8</NeoCol>
    <NeoCol :span="8">8</NeoCol>
    <NeoCol :span="8">8</NeoCol>
  </NeoRow>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| gutter | 栅格间隔（像素） | `number \| string` |
| justify | 水平对齐 | `string` |
| align | 垂直对齐 | `string` |
