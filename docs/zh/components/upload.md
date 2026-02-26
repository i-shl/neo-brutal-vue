# Upload 上传

文件上传，支持点击与拖拽。

## 基础用法

<demo vue="../../demos/upload-basic.vue" />

## 拖拽上传

<demo vue="../../demos/upload-drag.vue" />

## 多选与限制

<demo vue="../../demos/upload-multiple.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| action | 上传地址 | `string` |
| drag | 是否拖拽上传 | `boolean` |
| multiple | 是否多选 | `boolean` |
| accept | 接受的文件类型 | `string` |
| limit | 最大上传数量 | `number` |

事件：`success`、`error`、`change` 等。
