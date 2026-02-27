# Button

Common action button with multiple types, sizes, and shapes.

## Basic Usage

<demo vue="../demos/button-basic.vue" />

## Type

Besides default: `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info`, `neo`, `pink`, `purple`, `blue`, `orange`, `green`.

## Variant

- `solid` (default): Filled
- `outline`: Outlined
- `ghost`: Transparent background

<demo vue="../demos/button-variant.vue" />

## Size

`xs`, `sm`, `md`, `lg`, `xl`.

<demo vue="../demos/button-size.vue" />

## Shape

- `default`: Default radius
- `round`: More rounded
- `circle`: Circular (often with icon)
- `sharp`: Square corners

<demo vue="../demos/button-shape.vue" />

## Disabled & Loading

<demo vue="../demos/button-disabled.vue" />

## Block

<demo vue="../demos/button-block.vue" />

## Link

Set `href` to render the button as a link. Use `target="_blank"` to open in a new tab.

<demo vue="../demos/button-link.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| type | Type | `string` | `'primary'` |
| variant | Variant | `'solid' \| 'outline' \| 'ghost' \| 'soft'` | `'solid'` |
| size | Size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| shape | Shape | `'default' \| 'round' \| 'circle' \| 'sharp'` | `'default'` |
| disabled | Disabled | `boolean` | `false` |
| loading | Loading | `boolean` | `false` |
| block | Block | `boolean` | `false` |
| href | Link URL (when rendered as anchor) | `string` | - |
| target | Link target, e.g. `_blank` | `string` | - |

## Events

| Event | Description |
|-------|-------------|
| click | Emitted on click |
