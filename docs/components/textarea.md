# Textarea

Multi-line text input.

## Basic Usage

<demo vue="../demos/textarea-basic.vue" />

## Disabled, Readonly & Word Limit

<demo vue="../demos/textarea-states.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value | `string` |
| placeholder | Placeholder | `string` |
| rows | Rows | `number` |
| maxlength | Max length | `number \| string` |
| showWordLimit | Show word count | `boolean` |
| disabled | Disabled | `boolean` |
| readonly | Readonly | `boolean` |
| size | Size | `ComponentSize` |

Events: `update:modelValue`, `input`, `change`, `focus`, `blur`.
