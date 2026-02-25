# Col 列

栅格列，需放在 Row 内，span 为 1–12。

## 基础用法

```vue
<template>
  <NeoRow>
    <NeoCol :span="6">6</NeoCol>
    <NeoCol :span="6">6</NeoCol>
    <NeoCol :span="12">12</NeoCol>
  </NeoRow>
</template>
```

## 偏移

```vue
<template>
  <NeoCol :span="6" :offset="6">span=6, offset=6</NeoCol>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| span | 栅格占位 1–12 | `number` |
| offset | 栅格左侧偏移 1–12 | `number` |
