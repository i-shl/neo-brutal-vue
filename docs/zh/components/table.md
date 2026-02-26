# Table 表格

数据表格，支持列配置、斑马纹、边框等。

## 基础用法

<demo vue="../../demos/table-basic.vue" />

## 斑马纹与边框

<demo vue="../../demos/table-stripe.vue" />

## 自定义插槽

通过 `#[prop]` 可以自定义列的内容，通过 `#header-[prop]` 可以自定义表头内容。

<demo vue="../../demos/table-slots.vue" />

## API

### Table Attributes

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| data | 表格数据 | `any[]` | `[]` |
| columns | 列配置 | `TableColumn[]` | `[]` |
| stripe | 是否显示斑马纹 | `boolean` | `false` |
| border | 是否显示外边框与投影 | `boolean` | `true` |
| rowKey | 行数据的 Key，用于渲染性能优化或排序 | `string | (row) => string` | `id` |
| showHeader | 是否显示表头 | `boolean` | `true` |

### TableColumn Attributes

| 属性 | 说明 | 类型 |
|------|------|------|
| prop | 字段名称 | `string` |
| label | 显示标题 | `string` |
| width | 列宽 | `string | number` |
| align | 对齐方式 (`left` | `center` | `right`) | `left` |

### Table Slots

| 名称 | 说明 |
|------|------|
| [prop] | 对应的列内容插槽，参数为 `{ row, index }` |
| header-[prop] | 对应的表头内容插槽，参数为 `{ column }` |
| empty | 无数据时的内容插槽 |
