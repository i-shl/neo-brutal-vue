# Input

Single-line text input with prefix, suffix, clear, password toggle, etc.

## Basic Usage

<demo vue="../demos/input-basic.vue" />

## Disabled, Readonly & Clearable

<demo vue="../demos/input-states.vue" />

## Size & Shape

<demo vue="../demos/input-size.vue" />

`size`: `xs` / `sm` / `md` / `lg` / `xl`.  
`shape`: `default` / `round` / `pill`.

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Bound value | `string \| number` | - |
| type | Input type | `string` | `'text'` |
| size | Size | `ComponentSize` | `'md'` |
| shape | Shape | `'default' \| 'round' \| 'pill'` | `'default'` |
| disabled | Disabled | `boolean` | `false` |
| readonly | Readonly | `boolean` | `false` |
| clearable | Clearable | `boolean` | `false` |
| placeholder | Placeholder | `string` | `''` |

Events: `update:modelValue`, `input`, `change`, `focus`, `blur`, `clear`.
