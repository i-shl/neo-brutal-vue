# Tag 标签

用于标记和分类的标签。

## 基础用法

```vue
<template>
  <NeoTag>默认</NeoTag>
  <NeoTag type="primary">主要</NeoTag>
  <NeoTag type="success">成功</NeoTag>
  <NeoTag type="warning">警告</NeoTag>
  <NeoTag type="danger">危险</NeoTag>
</template>
```

## 可关闭

```vue
<template>
  <NeoTag closable @close="handleClose">可关闭</NeoTag>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| type | 类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |
| size | 尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg'` |
| effect | 效果 | `'light' \| 'dark' \| 'plain'` |
| closable | 是否可关闭 | `boolean` |
