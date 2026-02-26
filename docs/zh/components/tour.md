# Tour 漫游式引导

用于分步引导用户了解应用的功能。

## 基础用法

<demo vue="../../demos/tour-basic.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|-------------|------|---------|
| modelValue | 是否显示引导 | `boolean` | `false` |
| steps | 引导步骤配置 | `TourStep[]` | `[]` |
| current | 当前步骤的索引 | `number` | `0` |

### TourStep

| 属性 | 说明 | 类型 |
|----------|-------------|------|
| target | 目标元素的选择器或返回元素的函数 | `string \| (() => HTMLElement)` |
| title | 步骤标题 | `string` |
| description | 步骤描述内容 | `string` |
| placement | 气泡层的显示位置 | `'top' \| 'bottom' \| 'left' \| 'right'` |

## 事件

| 事件名 | 说明 |
|-------|-------------|
| update:modelValue | 显示状态改变时触发 |
| update:current | 当前步骤改变时触发 |
| close | 引导关闭时触发 |
| finish | 引导完成时触发 |
