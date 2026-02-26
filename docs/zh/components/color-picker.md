# ColorPicker 颜色选择器

用于颜色选择。

## 基础用法

<demo vue="../../demos/color-picker-basic.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|-------------|------|---------|
| modelValue | 选中的颜色值 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 选择器尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |

## 事件

| 事件名 | 说明 |
|-------|-------------|
| update:modelValue | 颜色改变时触发 |
| change | 颜色改变时触发 |
