# Link

Text link component with Neobrutalism style.

## Basic Usage

<demo vue="../demos/link-basic.vue" />

## Hover Color

Use `type` for predefined hover colors, or `hoverColor` for custom. Optional `hoverTextColor` when using custom.

<demo vue="../demos/link-type.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| href | URL | `string` | - |
| underline | Show underline | `boolean` | `true` |
| disabled | Whether disabled | `boolean` | `false` |
| target | Target, e.g. `_blank` | `string` | - |
| type | Hover color type | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` |
| hoverColor | Custom hover background color | `string` | - |
| hoverTextColor | Custom hover text color (with hoverColor) | `string` | `'#1a1a1a'` |
