# Upload 上传

文件上传，支持点击与拖拽。

## 基础用法

```vue
<template>
  <NeoUpload action="/api/upload" />
</template>
```

## 拖拽上传

```vue
<template>
  <NeoUpload action="/api/upload" drag />
</template>
```

## 多选与限制

```vue
<template>
  <NeoUpload action="/api/upload" multiple :limit="5" accept="image/*" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| action | 上传地址 | `string` |
| drag | 是否拖拽上传 | `boolean` |
| multiple | 是否多选 | `boolean` |
| accept | 接受的文件类型 | `string` |
| limit | 最大上传数量 | `number` |

事件：`success`、`error`、`change` 等。
