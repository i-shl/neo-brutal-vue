# Table

Data table. Supports column config, stripe, border, etc.

## Basic Usage

<demo vue="../demos/table-basic.vue" />

## Stripe & Border

<demo vue="../demos/table-stripe.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| data | Table data | `any[]` |
| columns | Column config | `TableColumn[]` |
| stripe | Stripe rows | `boolean` |
| border | Border | `boolean` |
| height | Fixed height | `string \| number` |
| maxHeight | Maximum height | `string \| number` |
| showHeader | Whether to show header | `boolean` |

TableColumn: `prop`, `label`, `width`, `minWidth`, `fixed`, `sortable`, `formatter`, etc.
