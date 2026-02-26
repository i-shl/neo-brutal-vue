# Pagination

Pagination for lists/tables.

## Basic Usage

<demo vue="../demos/pagination-basic.vue" />

## Page Size Select & Simple Layout

<demo vue="../demos/pagination-sizes.vue" />

## Full Layout

Use `layout` to combine: `total`, `sizes`, `prev`, `pager`, `next`, `jumper`. All three (total, sizes, jumper) can be hidden; default shows only `total`.

<demo vue="../demos/pagination-full.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| current | Current page (supports v-model:current) | `number` |
| pageSize | Page size (supports v-model:pageSize) | `number` |
| total | Total count | `number` |
| pageSizes | Page size options | `number[]` |
| pagerCount | Visible page buttons (1–10, default 5) | `number` |
| layout | Layout component combination | `string` |
| background | Whether buttons have background | `boolean` |
| small | Small size | `boolean` |

Events: `current-change`, `size-change`.
