# Slider 滑块

在范围内拖拽选择数值，支持范围（双滑块）。

## 基础用法

<demo vue="../../demos/slider-basic.vue" />

使用 `show-input` 在滑块旁显示数值输入框。

## 范围选择

<demo vue="../../demos/slider-range.vue" />

使用 `range` 配合 `show-input` 可显示双滑块及数值。下方为禁用状态示例。

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值（单值为 number，范围为 [number, number]） | `number \| [number, number]` |
| min | 最小值 | `number` |
| max | 最大值 | `number` |
| step | 步长 | `number` |
| range | 范围模式（双滑块） | `boolean` |
| showInput | 是否显示输入框 | `boolean` |
| showTooltip | 是否显示悬浮提示 | `boolean` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |

事件：`update:modelValue`、`change`。
