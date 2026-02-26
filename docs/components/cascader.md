# Cascader 级联选择器

Used to select from a multi-level data set.

## Basic Usage

<demo vue="../demos/cascader-basic.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Selected value | `(string \| number)[]` | `[]` |
| options | Data options | `CascaderOption[]` | `[]` |
| placeholder | Placeholder text | `string` | `'请选择'` |
| disabled | Whether disabled | `boolean` | `false` |
| size | Size of the input | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |

### CascaderOption

| Property | Description | Type |
|----------|-------------|------|
| value | Value of the option | `string \| number` |
| label | Label of the option | `string` |
| children | Sub-options | `CascaderOption[]` |
| disabled | Whether disabled | `boolean` |

## Events

| Event | Description |
|-------|-------------|
| update:modelValue | Emitted when value changes |
| change | Emitted when value changes |
