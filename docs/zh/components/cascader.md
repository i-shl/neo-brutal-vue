# Cascader 级联选择器

从一组相关联的数据集合中进行选择。

## 基础用法

<demo vue="../../demos/cascader-basic.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|-------------|------|---------|
| modelValue | 选中的值 | `(string \| number)[]` | `[]` |
| options | 可选项数据源 | `CascaderOption[]` | `[]` |
| placeholder | 占位文本 | `string` | `'请选择'` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 输入框尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |

### CascaderOption

| 属性 | 说明 | 类型 |
|----------|-------------|------|
| value | 选项的值 | `string \| number` |
| label | 选项的标签 | `string` |
| children | 子选项 | `CascaderOption[]` |
| disabled | 是否禁用该选项 | `boolean` |

## 事件

| 事件名 | 说明 |
|-------|-------------|
| update:modelValue | 选中值改变时触发 |
| change | 选中值改变时触发 |
