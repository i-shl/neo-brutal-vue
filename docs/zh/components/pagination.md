# Pagination 分页

分页器，配合列表/表格使用。

## 基础用法

<demo vue="../../demos/pagination-basic.vue" />

## 每页条数选择与简洁模式

<demo vue="../../demos/pagination-sizes.vue" />

通过 `layout` 可组合：`total`（总数）、`sizes`（条数选择）、`prev`（上一页）、`pager`（页码）、`next`（下一页）、`jumper`（跳转）。默认显示 `total, prev, pager, next`。

<demo vue="../../demos/pagination-full.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| current | 当前页（支持 v-model:current） | `number` |
| pageSize | 每页条数（支持 v-model:pageSize） | `number` |
| total | 总条数 | `number` |
| pageSizes | 每页条数选项 | `number[]` |
| pagerCount | 可见页码数（1–10，默认 5） | `number` |
| layout | 布局子件组合 | `string` |
| background | 按钮是否带背景 | `boolean` |
| small | 小尺寸 | `boolean` |

事件：`current-change`、`size-change`。
