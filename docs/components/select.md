# Select

Dropdown select with single/multiple selection and search.

## Basic Usage

<demo vue="../demos/select-basic.vue" />

## Multiple

<demo vue="../demos/select-multiple.vue" />

## Filterable

<demo vue="../demos/select-search.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value (single or array) | `string \| number \| boolean \| array` |
| options | Options | `SelectOption[]` |
| multiple | Multiple selection | `boolean` |
| filterable | Searchable | `boolean` |
| placeholder | Placeholder | `string` |
| clearable | Clearable | `boolean` |
| disabled | Disabled | `boolean` |
| size | Size | `ComponentSize` |

Events: `update:modelValue`, `change`, `clear`.
