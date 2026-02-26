# Select 选择器

下拉选择，支持单选、多选、可搜索。

## 基础用法

<demo vue="../../demos/select-basic.vue" />

## 多选

<demo vue="../../demos/select-multiple.vue" />

## 可搜索

<demo vue="../../demos/select-search.vue" />

## 类型 (Type)

<demo vue="../../demos/select-type.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值（单选为值，多选为数组） | `string \| number \| boolean \| array` |
| options | 选项列表 | `SelectOption[]` |
| multiple | 是否多选 | `boolean` |
| filterable | 是否可搜索 | `boolean` |
| placeholder | 占位符 | `string` |
| clearable | 是否可清空 | `boolean` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |
| type | 聚焦/选中状态的颜色类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |

事件：`update:modelValue`、`change`、`clear`。
