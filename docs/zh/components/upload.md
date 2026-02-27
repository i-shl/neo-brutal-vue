# Upload 上传

文件上传，支持点击与拖拽。

## 基础用法

<demo vue="../../demos/upload-basic.vue" />

## 拖拽上传

<demo vue="../../demos/upload-drag.vue" />

## 自定义图标与文字（拖拽）

拖拽区域支持自定义图标（图片 URL 或 SVG 字符串）和文字。

<demo vue="../../demos/upload-drag-custom.vue" />

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
| dragIcon | 拖拽区域图标：图片 URL 或 SVG 字符串 | `string` |
| dragText | 拖拽区域主文案 | `string` |
| dragTextLink | 拖拽区域链接文案（如「点击上传」） | `string` |

### 插槽

| 插槽 | 说明 |
|------|------|
| drag-icon | 自定义图标内容（覆盖 `dragIcon` 属性） |
| drag-text | 自定义文字内容（覆盖 `dragText` / `dragTextLink` 属性） |

事件：`success`、`error`、`change` 等。
